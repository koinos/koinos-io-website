#!/usr/bin/env python3
"""Generate the Spanish History datasets from their canonical English files.

This is an editorial maintenance tool, not a runtime dependency. It expects an
installed Argos Translate English-to-Spanish package. URLs, inline code, person
names, dates, identifiers, counts, and product/group names are kept verbatim.
Run `npm run history:i18n:check` after generation.
"""

from __future__ import annotations

import copy
import hashlib
import json
import re
from pathlib import Path

import ctranslate2
from argostranslate.package import Package, get_installed_packages


ROOT = Path(__file__).resolve().parents[1]
CONTENT_SOURCE = ROOT / "data/history-content.json"
PEOPLE_SOURCE = ROOT / "data/history-people.json"
CONTENT_OUTPUT = ROOT / "data/history-content.es.json"
PEOPLE_OUTPUT = ROOT / "data/history-people.es.json"
TITLE_TRANSLATIONS = json.loads(
    (ROOT / "data/history-titles.es.json").read_text(encoding="utf-8")
)
DATE_TRANSLATIONS = {
    "Late 2020": "Finales de 2020",
    "May-July 2023": "Mayo–julio de 2023",
    "August 2023": "Agosto de 2023",
    "Late September 2023": "Finales de septiembre de 2023",
    "November 2023": "Noviembre de 2023",
    "January 2024-June 2025": "Enero de 2024–junio de 2025",
    "March 2024-April 2025": "Marzo de 2024–abril de 2025",
    "July-December 2024": "Julio–diciembre de 2024",
    "July-November 2024": "Julio–noviembre de 2024",
    "July-October 2024": "Julio–octubre de 2024",
    "August-November 2024": "Agosto–noviembre de 2024",
    "December 2024-Early 2025": "Diciembre de 2024–principios de 2025",
    "February 2025-June 2026": "Febrero de 2025–junio de 2026",
    "March-May 2025": "Marzo–mayo de 2025",
    "May-June 2025": "Mayo–junio de 2025",
    "January-April 2026": "Enero–abril de 2026",
    "February-April 2026": "Febrero–abril de 2026",
    "May-June 2026": "Mayo–junio de 2026",
}
MAX_SOURCE_TOKENS = 80
PROTECTED_PATTERN = re.compile(
    r"(`[^`]+`|\]\([^)]+\)|\[|https?://[^\s)]+|"
    r"\b(?:AssemblyScript|TypeScript|JavaScript|GitHub|LinkedIn|YouTube|Discord|Telegram)\b)"
)
PERSON_ENTRY_PATTERN = re.compile(r"^(\*\*.+?\*\*:\s*)(.*)$", re.S)


def source_hash(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def installed_package() -> Package:
    for package in get_installed_packages():
        if package.from_code == "en" and package.to_code == "es":
            return package
    raise SystemExit(
        "Install the Argos Translate English-to-Spanish package before running this script."
    )


def split_long_segment(text: str, tokenizer) -> list[str]:
    if not text.strip():
        return [text]

    # The translation model is materially more reliable sentence by sentence.
    # Keep the whitespace attached so protected Markdown can be reassembled
    # without words running together.
    sentences = re.findall(r".+?(?:[.!?](?=\s|$)|$)\s*", text, re.S)
    chunks: list[str] = []
    current = ""
    for sentence in sentences:
        if len(tokenizer.encode(sentence)) <= MAX_SOURCE_TOKENS:
            if current:
                chunks.append(current)
                current = ""
            chunks.append(sentence)
        else:
            current = sentence
    if current:
        chunks.append(current)

    resolved: list[str] = []
    for chunk in chunks:
        if len(tokenizer.encode(chunk)) <= MAX_SOURCE_TOKENS:
            resolved.append(chunk)
            continue
        clauses = re.findall(r".+?(?:[;:,](?=\s|$)|$)\s*", chunk, re.S)
        current = ""
        for clause in clauses:
            candidate = f"{current}{clause}" if current else clause
            if current and len(tokenizer.encode(candidate)) > MAX_SOURCE_TOKENS:
                resolved.append(current)
                current = clause
            else:
                current = candidate
        if current:
            resolved.append(current)
    return resolved


def prepare_parts(text: str, tokenizer) -> list[tuple[str, bool]]:
    person_match = PERSON_ENTRY_PATTERN.match(text)
    prefix = person_match.group(1) if person_match else ""
    body = person_match.group(2) if person_match else text
    parts: list[tuple[str, bool]] = []
    if prefix:
        parts.append((prefix, False))

    cursor = 0
    for match in PROTECTED_PATTERN.finditer(body):
        if match.start() > cursor:
            parts.extend(
                (chunk, bool(re.search(r"[A-Za-z]{2,}", chunk)))
                for chunk in split_long_segment(body[cursor:match.start()], tokenizer)
            )
        parts.append((match.group(0), False))
        cursor = match.end()
    if cursor < len(body):
        parts.extend(
            (chunk, bool(re.search(r"[A-Za-z]{2,}", chunk)))
            for chunk in split_long_segment(body[cursor:], tokenizer)
        )
    return parts


def normalize_terminology(text: str) -> str:
    replacements = {
        "cadena de bloqueo": "cadena de bloques",
        "cadenas de bloqueo": "cadenas de bloques",
        "desarrolladores básicos": "desarrolladores principales",
        "cadenas sociales sin cargo": "cadenas sociales sin comisiones",
        "cadena social sin cargo": "cadena social sin comisiones",
        "cadenas sociales sin honorarios": "cadenas sociales sin comisiones",
        "cadena social sin honorarios": "cadena social sin comisiones",
        "transacciones libres": "transacciones sin comisiones",
        "usuarios comunes podrían": "los usuarios comunes podían",
        "los los usuarios": "los usuarios",
        "no les pidió": "no les pedía",
        "Fueron probados en": "Se pusieron a prueba en",
        "tecnología de blockchain": "tecnología de cadena de bloques",
        "desarrolladores de aplicaciones descentralizados": "desarrolladores de aplicaciones descentralizadas",
        "debilidades de gobierno": "debilidades de gobernanza",
        "blockchain Koinos": "cadena de bloques Koinos",
        "Koinos blockchain": "cadena de bloques Koinos",
        "Grupo Koinos": "Koinos Group",
        "grupo Koinos": "Koinos Group",
        "Red Koinos": "Koinos Network",
        "Fundación de la Comunidad Koinos": "Koinos Community Foundation",
        "Fundación Comunitaria Koinos": "Koinos Community Foundation",
        "Ejército de Koinos": "Koinos Army",
        "Ejército Koinos": "Koinos Army",
        "El Koin Press": "The Koin Press",
        "Planeta Koinos": "Planet Koinos",
        "TipoScript": "TypeScript",
        "tipoScript": "TypeScript",
        "poder de hah": "poder de hash",
        "fichas no fungibles": "tokens no fungibles",
        "prueba de quemadura": "prueba de quema",
        "mensajes de telegrama": "mensajes de Telegram",
        "mensaje de telegrama": "mensaje de Telegram",
        "mensajes de disco": "mensajes de Discord",
        "mensaje de disco": "mensaje de Discord",
        "Telegram mensajes": "mensajes de Telegram",
        "Discord mensajes": "mensajes de Discord",
        "piscinas mineras": "pools de minería",
        "piscina minera": "pool de minería",
        "solicitud de tirada": "pull request",
        "solicitudes de tirada": "pull requests",
        '"estamos lanzando otra señal"': '"estamos lanzando otro token"',
        "Producción Básica": "Producción de Bloques",
        "producción básica": "producción de bloques",
        "El puesto ": "La publicación ",
        "el puesto ": "la publicación ",
        "piscinas adicionales de minería": "pools de minería adicionales",
        "competencia de la piscina": "competencia entre pools",
        "primera piscina": "primer pool",
        "operar piscinas": "operar pools",
        "una frontend": "un frontend",
        "la primer pool": "el primer pool",
        "en lugar de el primer pool": "en lugar de ser el primer pool",
        "lo que hace que Fogata históricamente importante": "lo que hace que Fogata sea históricamente importante",
        "principal principal": "principal",
        "OpenOrchard está anunciado": "Se anuncia OpenOrchard",
        "CTO of Koinos Group": "CTO de Koinos Group",
        "Discord Moderator": "moderador de Discord",
        "**Developer**": "**Desarrollador**",
        "backend services, AWS / deployment, indexing, standards, and user support": "servicios backend, despliegues en AWS, indexación, estándares y soporte a usuarios",
        "Koinos Army organizer, administrador, NFT product initiator, AMA host, and bridge between the Koinos-specific group and the broader DeGems Lounge / Gem Chase community": "organizador de Koinos Army, administrador, impulsor del producto NFT, anfitrión de AMA y enlace entre el grupo de Koinos y la comunidad más amplia de DeGems Lounge / Gem Chase",
        "The Koinos Community se asocia": "La comunidad de Koinos se asocia",
        "Roadmap Update Q4 2024": "Actualización de la hoja de ruta del cuarto trimestre de 2024",
        "Koinos Group Update: 2025 es nuestro año": "Actualización de Koinos Group: 2025 es nuestro año",
        "Telegram las discusiones": "Las conversaciones de Telegram",
        "GitHub La propiedad": "la propiedad de GitHub",
        "seguía siendo un acosador en Koinos": "seguía entusiasmado con Koinos",
        "compañía que había corredo": "empresa que había dirigido",
        "nodos de semillas": "nodos semilla",
        "Esto es central porque causa descentralización en el trabajo operativo": "Esto es esencial porque convierte la descentralización en trabajo operativo",
        "la primera pull request amplia": "la primera pull request de amplio alcance",
        "la AssemblyScript ayudante de autoridad": "el helper de autoridad de AssemblyScript",
        "validación de la producción de mainnet publicado": "validación publicada de la producción en mainnet",
        "ficha KOIN": "token KOIN",
        "fichas KOIN": "tokens KOIN",
    }
    for source, replacement in replacements.items():
        text = text.replace(source, replacement)
    return text


class BatchTranslator:
    def __init__(self, package: Package):
        self.package = package
        self.translator = ctranslate2.Translator(str(package.package_path / "model"), device="cpu")

    def translate_all(self, values: list[str]) -> dict[str, str]:
        unique_values = list(dict.fromkeys(values))
        prepared = {value: prepare_parts(value, self.package.tokenizer) for value in unique_values}
        translatable_parts = [
            part
            for value in unique_values
            for part, should_translate in prepared[value]
            if should_translate and part.strip()
        ]
        unique_parts = list(dict.fromkeys(translatable_parts))
        tokenized = [self.package.tokenizer.encode(part) for part in unique_parts]
        results = self.translator.translate_batch(
            tokenized,
            max_batch_size=32,
            beam_size=2,
            num_hypotheses=1,
            replace_unknowns=True,
            length_penalty=0.2,
        )
        translations = {}
        for source, result in zip(unique_parts, results):
            leading = re.match(r"^\s*", source).group(0)
            trailing = re.search(r"\s*$", source).group(0)
            rendered = self.package.tokenizer.decode(result.hypotheses[0]).strip()
            rendered = normalize_terminology(rendered)
            rendered = re.sub(r'([.!?]["”’]?)(?=[A-ZÁÉÍÓÚÑ])', r"\1 ", rendered)
            translations[source] = f"{leading}{rendered}{trailing}"

        unchanged = [
            source
            for source in unique_parts
            if translations[source].strip() == source.strip()
            and len(re.findall(r"[A-Za-z]{2,}", source)) >= 4
        ]
        if unchanged:
            fallback_results = self.translator.translate_batch(
                [self.package.tokenizer.encode(source) for source in unchanged],
                max_batch_size=32,
                beam_size=1,
                num_hypotheses=1,
                replace_unknowns=True,
                length_penalty=0.2,
            )
            for source, result in zip(unchanged, fallback_results):
                leading = re.match(r"^\s*", source).group(0)
                trailing = re.search(r"\s*$", source).group(0)
                rendered = self.package.tokenizer.decode(result.hypotheses[0]).strip()
                rendered = normalize_terminology(rendered)
                rendered = re.sub(r'([.!?]["”’]?)(?=[A-ZÁÉÍÓÚÑ])', r"\1 ", rendered)
                translations[source] = f"{leading}{rendered}{trailing}"

        resolved: dict[str, str] = {}
        for source in unique_values:
            rendered = "".join(
                translations.get(part, part) if should_translate and part.strip() else part
                for part, should_translate in prepared[source]
            )
            resolved[source] = normalize_terminology(rendered)
        return resolved


def collect_content_strings(data: dict) -> list[str]:
    values = [data["title"], data["peopleContributionAnalysis"]["metric"]]
    values.extend(data["introduction"])
    for event in data["events"]:
        values.extend([event["date"], event["summary"]])
        for block in event["content"]:
            for key in ("text", "alt", "caption"):
                if block.get(key):
                    values.append(block[key])
            values.extend(block.get("items", []))
    return values


def apply_content_translations(data: dict, translations: dict[str, str]) -> None:
    data["title"] = translations[data["title"]]
    data["introduction"] = [translations[value] for value in data["introduction"]]
    analysis = data["peopleContributionAnalysis"]
    analysis["metric"] = translations[analysis["metric"]]
    if len(data["events"]) != len(TITLE_TRANSLATIONS):
        raise ValueError("The curated Spanish title table is out of sync")
    for index, event in enumerate(data["events"]):
        event["date"] = DATE_TRANSLATIONS.get(event["date"], translations[event["date"]])
        event["title"] = TITLE_TRANSLATIONS[index]
        event["summary"] = translations[event["summary"]]
        for block in event["content"]:
            for key in ("text", "alt", "caption"):
                if block.get(key):
                    block[key] = translations[block[key]]
            if "items" in block:
                block["items"] = [translations[value] for value in block["items"]]


def collect_people_strings(data: dict) -> list[str]:
    values = [data["methodology"]["ordering"], data["methodology"]["note"]]
    for person in data["people"]:
        values.append(person["summary"])
        values.extend(topic["label"] for topic in person["topTopics"])
    return values


def apply_people_translations(data: dict, translations: dict[str, str]) -> None:
    methodology = data["methodology"]
    methodology["ordering"] = translations[methodology["ordering"]]
    methodology["note"] = translations[methodology["note"]]
    for person in data["people"]:
        person["summary"] = translations[person["summary"]]
        for topic in person["topTopics"]:
            topic["label"] = translations[topic["label"]]


def write_dataset(output: Path, source: Path, data: dict) -> None:
    data["_translation"] = {
        "locale": "es",
        "sourceFile": source.name,
        "sourceSha256": source_hash(source),
        "engine": "Argos Translate en_es 1.0 with protected Koinos terminology",
    }
    output.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def main() -> None:
    content = json.loads(CONTENT_SOURCE.read_text(encoding="utf-8"))
    people = json.loads(PEOPLE_SOURCE.read_text(encoding="utf-8"))
    translated_content = copy.deepcopy(content)
    translated_people = copy.deepcopy(people)
    translator = BatchTranslator(installed_package())

    content_translations = translator.translate_all(collect_content_strings(content))
    people_translations = translator.translate_all(collect_people_strings(people))
    apply_content_translations(translated_content, content_translations)
    apply_people_translations(translated_people, people_translations)
    write_dataset(CONTENT_OUTPUT, CONTENT_SOURCE, translated_content)
    write_dataset(PEOPLE_OUTPUT, PEOPLE_SOURCE, translated_people)
    print(f"Wrote {CONTENT_OUTPUT.relative_to(ROOT)} and {PEOPLE_OUTPUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
