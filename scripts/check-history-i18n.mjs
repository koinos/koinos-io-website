import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

async function readDataset(filename) {
  const contents = await readFile(path.join(root, "data", filename));
  return { contents, data: JSON.parse(contents.toString("utf8")) };
}

function sha256(contents) {
  return createHash("sha256").update(contents).digest("hex");
}

function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

function inlineCode(value) {
  return value.match(/`[^`]+`/g) || [];
}

function linkTargets(value) {
  return [...value.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((match) => match[1]);
}

function checkProtectedText(source, localized, label) {
  invariant(
    JSON.stringify(inlineCode(source)) === JSON.stringify(inlineCode(localized)),
    `${label}: inline code changed`
  );
  invariant(
    JSON.stringify(linkTargets(source)) === JSON.stringify(linkTargets(localized)),
    `${label}: Markdown link target changed`
  );
}

function checkContent(source, localized) {
  invariant(source.events.length === localized.events.length, "History event count changed");
  invariant(source.introduction.length === localized.introduction.length, "Introduction count changed");
  source.introduction.forEach((value, index) =>
    checkProtectedText(value, localized.introduction[index], `introduction ${index}`)
  );

  source.events.forEach((event, index) => {
    const translated = localized.events[index];
    for (const field of ["id", "year", "era", "sourceUrl"]) {
      invariant(event[field] === translated[field], `${event.id}: ${field} changed`);
    }
    invariant(event.content.length === translated.content.length, `${event.id}: content count changed`);
    checkProtectedText(event.summary, translated.summary, `${event.id} summary`);
    event.content.forEach((block, blockIndex) => {
      const translatedBlock = translated.content[blockIndex];
      invariant(block.type === translatedBlock.type, `${event.id}/${blockIndex}: type changed`);
      if (block.src) invariant(block.src === translatedBlock.src, `${event.id}/${blockIndex}: image source changed`);
      for (const field of ["text", "caption"]) {
        if (block[field]) checkProtectedText(block[field], translatedBlock[field], `${event.id}/${blockIndex}/${field}`);
      }
      (block.items || []).forEach((item, itemIndex) =>
        checkProtectedText(item, translatedBlock.items[itemIndex], `${event.id}/${blockIndex}/item-${itemIndex}`)
      );
    });
  });
}

function checkPeople(source, localized) {
  invariant(source.people.length === localized.people.length, "History person count changed");
  source.people.forEach((person, index) => {
    const translated = localized.people[index];
    for (const field of ["rank", "name", "total"]) {
      invariant(person[field] === translated[field], `${person.name}: ${field} changed`);
    }
    for (const group of ["topTopics", "topProducts", "topGroups"]) {
      invariant(person[group].length === translated[group].length, `${person.name}: ${group} count changed`);
      person[group].forEach((metric, metricIndex) => {
        invariant(metric.count === translated[group][metricIndex].count, `${person.name}: ${group} metric changed`);
        if (group !== "topTopics") {
          invariant(metric.label === translated[group][metricIndex].label, `${person.name}: ${group} name changed`);
        }
      });
    }
  });
}

async function main() {
  const contentSource = await readDataset("history-content.json");
  const contentEs = await readDataset("history-content.es.json");
  const peopleSource = await readDataset("history-people.json");
  const peopleEs = await readDataset("history-people.es.json");
  const titlesEs = await readDataset("history-titles.es.json");

  invariant(contentEs.data._translation?.sourceSha256 === sha256(contentSource.contents), "Spanish history content is stale; regenerate it");
  invariant(peopleEs.data._translation?.sourceSha256 === sha256(peopleSource.contents), "Spanish history people are stale; regenerate them");
  checkContent(contentSource.data, contentEs.data);
  checkPeople(peopleSource.data, peopleEs.data);
  invariant(titlesEs.data.length === contentSource.data.events.length, "Spanish history title count changed");
  titlesEs.data.forEach((title, index) =>
    invariant(title === contentEs.data.events[index].title, `${contentSource.data.events[index].id}: curated title is stale`)
  );
  console.log("Spanish History datasets match the canonical English structure and protected references.");
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
