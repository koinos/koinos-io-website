import Layout from "@/components/layout/Layout";
import LocalizedHead from "@/components/i18n/LocalizedHead";
import { normaliseLocale } from "@/i18n";
import { useRouter } from "next/router";
import { useEffect, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import styles from "@/styles/History.module.css";

const MARKETING_REPOSITORY =
  "https://github.com/pgarciagon/marketing/blob/main/";
const PEOPLE_SOURCE_ID = "2020-koinos-group-llc-is-registered-5";

function parsePerson(item) {
  const match = item.match(/^\*\*(.+?)\*\*:\s*(.*)$/s);
  return match
    ? { name: match[1], description: match[2] }
    : { name: item, description: "" };
}

function plainPersonName(name) {
  return name.replace(/[`*_]/g, "").trim();
}

function personSortKey(person) {
  return plainPersonName(person.name).replace(/^@/, "");
}

function personIdentityKey(person) {
  return personSortKey(person)
    .split("/")[0]
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function historySlug(value) {
  return plainPersonName(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildHistoryItemHref(item, isPeople, locale) {
  const parameter = isPeople ? "person" : "milestone";
  const basePath = locale === "es" ? "/es/history" : "/history";
  return `${basePath}?${parameter}=${encodeURIComponent(item.id)}#chronicle`;
}

const HISTORY_COPY = {
  en: {
    description: "Explore the lived history of Koinos—from its Steem roots and fair launch to mainnet and community continuity.",
    pageTitleSuffix: "An Interactive Chronicle",
    ogDescription: "A decade of people, software, conflict, experiments, and continuity—made explorable.",
    eyebrow: "An interactive chronicle · 2016—2026",
    heroLead: "Code can be copied. Architecture can be reproduced. But a lived blockchain—its people, choices, failures, and continuity—cannot be recreated.",
    milestones: "Milestones",
    people: "People",
    livedHistory: ["LIVED", "HISTORY"],
    historicalChronology: "Historical chronology",
    quickHistoryIndex: "Quick history index",
    quickPeopleIndex: "Quick people index ordered by verified contributions",
    quickMilestoneIndex: "Quick complete milestone index",
    previousPerson: "Previous person",
    previousDate: "Previous date",
    nextPerson: "Next person",
    nextDate: "Next date",
    mainCharacters: "Main characters ordered by verified contributions",
    completeChronology: "Complete milestone chronology",
    mainCharacter: "Main character",
    contributions: "contributions",
    documentaryProfile: "documentary profile",
    statistics: "statistics",
    verifiedMinimum: "Verified minimum",
    documentedContributions: "documented contributions",
    topTopics: "Top topics",
    productsMentioned: "Products mentioned",
    mostActiveGroups: "Most-active public groups",
    statsNote: "Activity volume documents continuity; it does not imply authorship, leadership, or ownership.",
    heroHints: {
      milestones: {
        label: "Follow the chronology",
        text: "Each milestone was extracted from a dated section of the sourced chronicle. Its title, complete text, images, and source links were preserved, then all 154 entries were arranged chronologically. Choose any milestone, then keep scrolling as the full story unfolds.",
      },
      people: {
        label: "Meet the main characters",
        text: "Characters are ordered from highest to lowest by documented public contributions across Telegram, individually inventoried Discord, X, articles, and videos; profiles without a measured count appear last. Choose a name, then keep scrolling through the human story behind the chain.",
      },
    },
  },
  es: {
    description: "Explora la historia vivida de Koinos: desde sus raíces en Steem y su lanzamiento justo hasta mainnet y la continuidad de su comunidad.",
    pageTitleSuffix: "Una crónica interactiva",
    ogDescription: "Una década de personas, software, conflictos, experimentos y continuidad, presentada para poder explorarla.",
    eyebrow: "Una crónica interactiva · 2016—2026",
    heroLead: "El código se puede copiar. La arquitectura se puede reproducir. Pero una cadena de bloques vivida —sus personas, decisiones, fracasos y continuidad— no se puede recrear.",
    milestones: "Hitos",
    people: "Personas",
    livedHistory: ["HISTORIA", "VIVIDA"],
    historicalChronology: "Cronología histórica",
    quickHistoryIndex: "Índice rápido de la historia",
    quickPeopleIndex: "Índice rápido de personas ordenado por contribuciones verificadas",
    quickMilestoneIndex: "Índice rápido de todos los hitos",
    previousPerson: "Persona anterior",
    previousDate: "Fecha anterior",
    nextPerson: "Persona siguiente",
    nextDate: "Fecha siguiente",
    mainCharacters: "Personajes principales ordenados por contribuciones verificadas",
    completeChronology: "Cronología completa de hitos",
    mainCharacter: "Personaje principal",
    contributions: "contribuciones",
    documentaryProfile: "perfil documental",
    statistics: "estadísticas",
    verifiedMinimum: "Mínimo verificado",
    documentedContributions: "contribuciones documentadas",
    topTopics: "Temas principales",
    productsMentioned: "Productos mencionados",
    mostActiveGroups: "Grupos públicos con más actividad",
    statsNote: "El volumen de actividad documenta la continuidad; no implica autoría, liderazgo ni propiedad.",
    heroHints: {
      milestones: {
        label: "Sigue la cronología",
        text: "Cada hito procede de una sección fechada de la crónica documentada. Se conservaron su título, texto completo, imágenes y enlaces a las fuentes, y los 154 registros se ordenaron cronológicamente. Elige un hito y sigue desplazándote para descubrir toda la historia.",
      },
      people: {
        label: "Conoce a sus protagonistas",
        text: "Los personajes se ordenan de mayor a menor según sus contribuciones públicas documentadas en Telegram, perfiles de Discord inventariados individualmente, X, artículos y vídeos; los perfiles sin recuento aparecen al final. Elige un nombre y sigue recorriendo la historia humana que hay detrás de la cadena.",
      },
    },
  },
};

function createHistoryModel(content, peopleData, locale) {
  const events = content.events;
  const firstMilestone = events.find((event) => event.era === "origins");
  const titleParts = content.title.split(/,\s*/);
  const titleLead = titleParts.length > 1 ? `${titleParts.shift()},` : titleParts.shift();
  const titleTail = titleParts.join(", ");
  const numberFormat = new Intl.NumberFormat(locale === "es" ? "es-ES" : "en-US");
  const listFormat = new Intl.ListFormat(locale === "es" ? "es-ES" : "en-US", {
    style: "long",
    type: "conjunction",
  });
  const copy = HISTORY_COPY[locale];
  const peopleSource = events.find((event) => event.id === PEOPLE_SOURCE_ID);
  const peopleContributions = content.peopleContributionAnalysis?.people || {};
  const historicalPeople = peopleSource.content
    .filter((block) => block.type === "unordered-list")
    .flatMap((block) => block.items.map(parsePerson))
    .map((person, sourceIndex) => ({
      ...person,
      contribution: peopleContributions[personIdentityKey(person)] || null,
      sourceIndex,
    }));
  const contributorIdentities = new Set(
    peopleData.people.map((person) => personIdentityKey({ name: person.name }))
  );
  const people = [
    ...peopleData.people.map((contributor, sourceIndex) => ({
      name: contributor.name,
      description: contributor.summary,
      contribution: contributor,
      stats: contributor,
      sourceIndex,
    })),
    ...historicalPeople
      .filter((person) => !contributorIdentities.has(personIdentityKey(person)))
      .map((person, sourceIndex) => ({
        ...person,
        sourceIndex: peopleData.people.length + sourceIndex,
      })),
  ].sort((personA, personB) => {
    const totalA = personA.contribution?.total ?? -1;
    const totalB = personB.contribution?.total ?? -1;
    return totalB - totalA || personA.sourceIndex - personB.sourceIndex;
  });
  const slugCounts = new Map();
  const peopleWheelItems = people.map((person, index) => {
    const baseSlug = historySlug(person.name) || `profile-${index + 1}`;
    const occurrence = (slugCounts.get(baseSlug) || 0) + 1;
    slugCounts.set(baseSlug, occurrence);
    return {
      id: `person-${baseSlug}${occurrence > 1 ? `-${occurrence}` : ""}`,
      title: plainPersonName(person.name),
      date: person.contribution
        ? `#${index + 1} · ${numberFormat.format(person.contribution.total)} ${copy.contributions}`
        : `#${index + 1} · ${copy.documentaryProfile}`,
      person,
    };
  });
  const basePath = locale === "es" ? "/es/history" : "/history";

  return {
    locale,
    content,
    events,
    firstMilestone,
    titleLead,
    titleTail,
    numberFormat,
    listFormat,
    peopleWheelItems,
    peopleSourceId: PEOPLE_SOURCE_ID,
    chronologyHref: `${basePath}?view=chronology#chronicle`,
    peopleHref: `${basePath}?view=people#chronicle`,
    copy,
  };
}

function formatStatisticalList(metrics, numberFormat, listFormat, limit = 3) {
  return listFormat.format(
    metrics
      .slice(0, limit)
      .map((metric) => `${metric.label} (${numberFormat.format(metric.count)})`)
  );
}

function buildStatisticalNarrative(stats, model) {
  if (!stats) return "";
  const { numberFormat, listFormat } = model;

  if (model.locale === "es") {
    const sentences = [
      `De las ${numberFormat.format(stats.total)} contribuciones verificadas, los temas con mayor presencia fueron ${formatStatisticalList(stats.topTopics, numberFormat, listFormat)}.`,
    ];
    if (stats.topProducts.length) {
      sentences.push(`Los productos mencionados con más frecuencia fueron ${formatStatisticalList(stats.topProducts, numberFormat, listFormat)}; estas cifras documentan la atención y la actividad de apoyo, no la propiedad ni la autoría.`);
    }
    if (stats.topGroups.length) {
      sentences.push(`La mayor actividad en grupos públicos se registró en ${formatStatisticalList(stats.topGroups, numberFormat, listFormat)}, lo que muestra dónde se mantuvo más esa participación.`);
    }
    return sentences.join(" ");
  }

  const sentences = [
    `Across ${numberFormat.format(
      stats.total
    )} verified contributions, the strongest topical concentrations were ${formatStatisticalList(
      stats.topTopics, numberFormat, listFormat
    )}.`,
  ];

  if (stats.topProducts.length) {
    sentences.push(
      `The products mentioned most often were ${formatStatisticalList(
        stats.topProducts, numberFormat, listFormat
      )}; these figures document attention and support activity rather than ownership or authorship.`
    );
  }

  if (stats.topGroups.length) {
    sentences.push(
      `The largest public-group footprints were recorded in ${formatStatisticalList(
        stats.topGroups, numberFormat, listFormat
      )}, showing where that participation was most sustained.`
    );
  }

  return sentences.join(" ");
}

function PersonStats({ person, model }) {
  const stats = person.stats;
  if (!stats) return null;
  const { copy, numberFormat } = model;

  const groups = [
    [copy.topTopics, stats.topTopics],
    [copy.productsMentioned, stats.topProducts],
    [copy.mostActiveGroups, stats.topGroups],
  ];

  return (
    <aside className={styles.personStats} aria-label={`${person.name}: ${copy.statistics}`}>
      <div className={styles.personStatsTotal}>
        <span>{copy.verifiedMinimum}</span>
        <strong>{numberFormat.format(stats.total)}</strong>
        <small>{copy.documentedContributions}</small>
      </div>

      {groups.map(([label, metrics]) =>
        metrics.length ? (
          <section className={styles.personStatsGroup} key={label}>
            <h3>{label}</h3>
            <ol>
              {metrics.map((metric) => (
                <li key={`${label}-${metric.label}`}>
                  <span>{metric.label}</span>
                  <strong>{numberFormat.format(metric.count)}</strong>
                </li>
              ))}
            </ol>
          </section>
        ) : null
      )}

      <p className={styles.personStatsNote}>
        {copy.statsNote}
      </p>
    </aside>
  );
}

function resolveArticleHref(href) {
  if (/^(https?:\/\/|mailto:|#)/.test(href)) return href;
  return `${MARKETING_REPOSITORY}${href.replace(/^\.\//, "")}`;
}

function renderInline(text, keyPrefix = "inline") {
  const nodes = [];
  const pattern = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`|\*([^*]+)\*)/g;
  let cursor = 0;
  let match;
  let tokenIndex = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > cursor) {
      nodes.push(text.slice(cursor, match.index));
    }

    const key = `${keyPrefix}-${tokenIndex}`;
    if (match[2] !== undefined) {
      nodes.push(
        <a
          key={key}
          href={resolveArticleHref(match[3])}
          target="_blank"
          rel="noreferrer"
        >
          {renderInline(match[2], `${key}-label`)}
        </a>
      );
    } else if (match[4] !== undefined) {
      nodes.push(
        <strong key={key}>{renderInline(match[4], `${key}-strong`)}</strong>
      );
    } else if (match[5] !== undefined) {
      nodes.push(<code key={key}>{match[5]}</code>);
    } else if (match[6] !== undefined) {
      nodes.push(<em key={key}>{renderInline(match[6], `${key}-em`)}</em>);
    }

    cursor = pattern.lastIndex;
    tokenIndex += 1;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

function ArticleBody({ event, peopleSourceId }) {
  const visibleContent =
    event.id === peopleSourceId
      ? event.content.slice(0, 2)
      : event.content;

  return (
    <div className={styles.articleBody}>
      {visibleContent.map((block, blockIndex) => {
        const key = `${event.id}-${blockIndex}`;

        if (block.type === "image") {
          return (
            <figure key={key} className={styles.articleFigure}>
              <img src={block.src} alt={block.alt || event.title} loading="lazy" />
              {block.caption ? (
                <figcaption>{renderInline(block.caption, `${key}-caption`)}</figcaption>
              ) : null}
            </figure>
          );
        }

        if (block.type === "unordered-list" || block.type === "ordered-list") {
          const ListTag = block.type === "ordered-list" ? "ol" : "ul";
          return (
            <ListTag key={key}>
              {block.items.map((item, itemIndex) => (
                <li key={`${key}-${itemIndex}`}>
                  {renderInline(item, `${key}-${itemIndex}`)}
                </li>
              ))}
            </ListTag>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote key={key}>{renderInline(block.text, key)}</blockquote>
          );
        }

        return <p key={key}>{renderInline(block.text, key)}</p>;
      })}
    </div>
  );
}

function ReaderEntry({ itemId, children, priority = false }) {
  const entryRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (priority) {
      const animationFrame = window.requestAnimationFrame(() => {
        setIsVisible(true);
      });
      return () => window.cancelAnimationFrame(animationFrame);
    }

    const entry = entryRef.current;
    if (!entry) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([intersection]) => {
        if (!intersection.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      {
        rootMargin: "0px 0px 12% 0px",
        threshold: 0.01,
      }
    );

    observer.observe(entry);
    return () => observer.disconnect();
  }, [priority]);

  return (
    <section
      ref={entryRef}
      className={`${styles.reader} ${styles.readerEntry} ${
        priority ? styles.readerEntryPriority : ""
      } ${
        isVisible ? styles.readerEntryVisible : ""
      }`}
      aria-labelledby={`reader-${itemId}`}
      data-reader-id={itemId}
    >
      {children}
    </section>
  );
}

export default function HistoryPage({ historyContentData, historyPeopleData }) {
  const router = useRouter();
  const locale = normaliseLocale(router.locale);
  const model = useMemo(
    () => createHistoryModel(historyContentData, historyPeopleData, locale),
    [historyContentData, historyPeopleData, locale]
  );
  const {
    content,
    events: EVENTS,
    firstMilestone: FIRST_MILESTONE,
    titleLead: HISTORY_TITLE_LEAD,
    titleTail: HISTORY_TITLE_TAIL,
    peopleWheelItems: PEOPLE_WHEEL_ITEMS,
    peopleSourceId: PEOPLE_SOURCE_ID_LOCALIZED,
    chronologyHref: CHRONOLOGY_HREF,
    peopleHref: PEOPLE_HREF,
    copy,
  } = model;
  const HERO_ACTION_HINTS = copy.heroHints;
  const [focusedId, setFocusedId] = useState(FIRST_MILESTONE.id);
  const [openedId, setOpenedId] = useState(null);
  const [visibleReaderCount, setVisibleReaderCount] = useState(1);
  const [peopleSelected, setPeopleSelected] = useState(false);
  const [compactNavigatorVisible, setCompactNavigatorVisible] = useState(false);
  const [heroActionHint, setHeroActionHint] = useState(null);
  const wheelRef = useRef(null);
  const wheelNodes = useRef({});
  const wheelStageRef = useRef(null);
  const compactWheelRef = useRef(null);
  const compactWheelNodes = useRef({});
  const wheelScrollTimer = useRef(null);
  const wheelProgrammaticScroll = useRef(false);
  const wheelProgrammaticScrollTimer = useRef(null);
  const wheelDrag = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const didWheelDrag = useRef(false);
  const historyInteracted = useRef(false);
  const readerRef = useRef(null);
  const readerLoadMoreRef = useRef(null);
  const readerScrollRequest = useRef(0);
  const readerScrollCleanup = useRef(null);
  const focusedIdRef = useRef(FIRST_MILESTONE.id);
  const historyLocationRestoreRequest = useRef(0);
  const historyLocationRestoreFrame = useRef(null);
  const historyLocationAlignmentTimer = useRef(null);
  const historyLocationRestoreTimer = useRef(null);
  const historyLocationRestoring = useRef(false);

  const wheelItems = peopleSelected ? PEOPLE_WHEEL_ITEMS : EVENTS;
  const focusedIndex = Math.max(
    0,
    wheelItems.findIndex((item) => item.id === focusedId)
  );
  const focusedItem = wheelItems[focusedIndex];
  const openedEvent = !peopleSelected && openedId
    ? EVENTS.find((event) => event.id === openedId)
    : null;
  const openedPerson = peopleSelected && openedId
    ? PEOPLE_WHEEL_ITEMS.find((item) => item.id === openedId)
    : null;
  const openedItem = openedPerson || openedEvent;
  const readerSequence = peopleSelected ? PEOPLE_WHEEL_ITEMS : EVENTS;
  const readerTargetIndex = openedItem
    ? readerSequence.findIndex((item) => item.id === openedItem.id)
    : -1;
  const visibleReaderItems =
    readerTargetIndex >= 0
      ? readerSequence.slice(0, visibleReaderCount)
      : [];
  const hasMoreReaderItems =
    readerTargetIndex >= 0 && visibleReaderItems.length < readerSequence.length;

  useEffect(() => {
    focusedIdRef.current = focusedId;
  }, [focusedId]);

  useEffect(() => {
    function restoreHistoryLocation({ scroll = true } = {}) {
      const parameters = new URLSearchParams(window.location.search);
      const personId = parameters.get("person");
      const milestoneId =
        parameters.get("milestone") || parameters.get("chapter");
      const requestedView = parameters.get("view");

      let isPeople = false;
      let targetItem = null;

      if (personId) {
        isPeople = true;
        targetItem = PEOPLE_WHEEL_ITEMS.find((item) => item.id === personId);
      } else if (milestoneId) {
        targetItem = EVENTS.find((item) => item.id === milestoneId);
      } else if (requestedView === "people") {
        isPeople = true;
        targetItem = PEOPLE_WHEEL_ITEMS[0];
      } else if (
        requestedView === "chronology" ||
        window.location.hash === "#chronicle"
      ) {
        targetItem = FIRST_MILESTONE;
      } else {
        return;
      }

      if (!targetItem) return;

      historyInteracted.current = true;
      const restoreRequest = historyLocationRestoreRequest.current + 1;
      historyLocationRestoreRequest.current = restoreRequest;
      historyLocationRestoring.current = true;
      focusedIdRef.current = targetItem.id;
      setPeopleSelected(isPeople);
      setFocusedId(targetItem.id);
      setVisibleReaderCount(getReaderItemCountThrough(targetItem.id, isPeople));
      setOpenedId(targetItem.id);

      if (!scroll) {
        historyLocationRestoring.current = false;
        return;
      }

      let attempts = 0;
      const alignTarget = () => {
        if (historyLocationRestoreRequest.current !== restoreRequest) return;
        attempts += 1;

        if (!getReaderEntry(targetItem.id) && attempts < 90) {
          historyLocationRestoreFrame.current =
            window.requestAnimationFrame(alignTarget);
          return;
        }

        scrollWheelTo(targetItem.id, "auto");
        scrollReaderTo(targetItem.id, "auto");
        window.clearTimeout(historyLocationAlignmentTimer.current);
        historyLocationAlignmentTimer.current = window.setTimeout(() => {
          if (historyLocationRestoreRequest.current !== restoreRequest) return;
          scrollWheelTo(targetItem.id, "auto");
          getReaderEntry(targetItem.id)?.scrollIntoView({
            behavior: "auto",
            block: "start",
          });
        }, 500);
        window.clearTimeout(historyLocationRestoreTimer.current);
        historyLocationRestoreTimer.current = window.setTimeout(() => {
          if (historyLocationRestoreRequest.current === restoreRequest) {
            historyLocationRestoring.current = false;
          }
        }, 900);
      };

      historyLocationRestoreFrame.current =
        window.requestAnimationFrame(alignTarget);
    }

    restoreHistoryLocation();
    const handlePopState = () => restoreHistoryLocation();
    window.addEventListener("popstate", handlePopState);
    return () => {
      historyLocationRestoreRequest.current += 1;
      historyLocationRestoring.current = false;
      window.cancelAnimationFrame(historyLocationRestoreFrame.current);
      window.clearTimeout(historyLocationAlignmentTimer.current);
      window.clearTimeout(historyLocationRestoreTimer.current);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    if (openedItem || historyInteracted.current) return undefined;

    const wheelStage = wheelStageRef.current;
    if (!wheelStage) return undefined;

    const openFirstMilestone = () => {
      if (historyInteracted.current) return;
      historyInteracted.current = true;
      flushSync(() => {
        setPeopleSelected(false);
        setFocusedId(FIRST_MILESTONE.id);
        setVisibleReaderCount(1);
        setOpenedId(FIRST_MILESTONE.id);
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        openFirstMilestone();
      },
      {
        rootMargin: "0px 0px 12% 0px",
        threshold: 0.01,
      }
    );

    observer.observe(wheelStage);
    return () => observer.disconnect();
  }, [openedItem]);

  useEffect(() => {
    const wheelStage = wheelStageRef.current;
    if (!wheelStage || !openedItem) {
      setCompactNavigatorVisible(false);
      return undefined;
    }

    let animationFrame = null;
    const syncCompactNavigator = () => {
      animationFrame = null;
      setCompactNavigatorVisible(
        wheelStage.getBoundingClientRect().bottom <= 70
      );
    };
    const requestSync = () => {
      if (animationFrame !== null) return;
      animationFrame = window.requestAnimationFrame(syncCompactNavigator);
    };

    requestSync();
    window.addEventListener("scroll", requestSync, { passive: true });
    window.addEventListener("resize", requestSync);
    return () => {
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
      window.removeEventListener("scroll", requestSync);
      window.removeEventListener("resize", requestSync);
    };
  }, [openedId, openedItem]);

  useEffect(
    () => () => {
      readerScrollCleanup.current?.();
    },
    []
  );

  useEffect(() => {
    if (!compactNavigatorVisible) return;

    window.requestAnimationFrame(() => {
      const track = compactWheelRef.current;
      const node = compactWheelNodes.current[focusedId];
      if (!track || !node) return;

      const centeredLeft =
        node.offsetLeft + node.offsetWidth / 2 - track.clientWidth / 2;
      track.scrollTo({ left: centeredLeft, behavior: "smooth" });
    });
  }, [compactNavigatorVisible, focusedId, peopleSelected]);

  useEffect(() => {
    if (!openedItem) return undefined;

    let animationFrame = null;

    const syncReaderPosition = () => {
      animationFrame = null;
      if (historyLocationRestoring.current) return;
      const reader = readerRef.current;
      if (!reader) return;

      const entries = Array.from(reader.querySelectorAll("[data-reader-id]"));
      if (!entries.length) return;

      const compactNavigator = document.querySelector(
        `.${styles.compactNavigator}`
      );
      const readingLine =
        (compactNavigator?.getBoundingClientRect().bottom || 86) + 18;
      let activeEntry = entries[0];

      entries.forEach((entry) => {
        if (entry.getBoundingClientRect().top <= readingLine) {
          activeEntry = entry;
        }
      });

      const activeId = activeEntry.dataset.readerId;
      if (!activeId) return;

      if (focusedIdRef.current !== activeId) {
        focusedIdRef.current = activeId;
        setFocusedId(activeId);
        const activeItem = readerSequence.find((item) => item.id === activeId);
        if (activeItem) {
          replaceHistoryLocation(buildHistoryItemHref(activeItem, peopleSelected, locale));
        }
      }

    };

    const requestSync = () => {
      if (animationFrame !== null) return;
      animationFrame = window.requestAnimationFrame(syncReaderPosition);
    };

    requestSync();
    window.addEventListener("scroll", requestSync, { passive: true });
    window.addEventListener("resize", requestSync);

    return () => {
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
      window.removeEventListener("scroll", requestSync);
      window.removeEventListener("resize", requestSync);
    };
  }, [openedId, openedItem, peopleSelected, visibleReaderCount]);

  useEffect(() => {
    const sentinel = readerLoadMoreRef.current;
    if (!sentinel || !hasMoreReaderItems) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setVisibleReaderCount((currentCount) =>
          Math.min(currentCount + 1, readerSequence.length)
        );
      },
      {
        rootMargin: "0px 0px 420px 0px",
        threshold: 0.01,
      }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [
    hasMoreReaderItems,
    openedId,
    peopleSelected,
    readerSequence.length,
    visibleReaderCount,
  ]);

  function scrollWheelTo(id, behavior = "smooth") {
    wheelProgrammaticScroll.current = true;
    window.clearTimeout(wheelProgrammaticScrollTimer.current);
    window.requestAnimationFrame(() => {
      const track = wheelRef.current;
      const node = wheelNodes.current[id];
      if (!track || !node) {
        wheelProgrammaticScroll.current = false;
        return;
      }

      const centeredLeft =
        node.offsetLeft + node.offsetWidth / 2 - track.clientWidth / 2;
      track.scrollTo({ left: centeredLeft, behavior });
      wheelProgrammaticScrollTimer.current = window.setTimeout(() => {
        wheelProgrammaticScroll.current = false;
      }, behavior === "smooth" ? 720 : 260);
    });
  }

  function pushHistoryLocation(href) {
    if (`${window.location.pathname}${window.location.search}${window.location.hash}` === href) {
      return;
    }
    window.history.pushState({}, "", href);
    window.dispatchEvent(new Event("koinos:locationchange"));
  }

  function replaceHistoryLocation(href) {
    if (`${window.location.pathname}${window.location.search}${window.location.hash}` === href) {
      return;
    }
    window.history.replaceState({}, "", href);
    window.dispatchEvent(new Event("koinos:locationchange"));
  }

  function focusWheelItem(id, behavior = "smooth") {
    flushSync(() => {
      setFocusedId(id);
      setOpenedId(null);
    });
    scrollWheelTo(id, behavior);
  }

  function focusAndRevealItem(id) {
    focusWheelItem(id, "auto");
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        revealItem(
          id,
          wheelNodes.current[id]?.querySelector(`.${styles.wheelDateTitle}`)
        );
      });
    });
  }

  function getReaderItemCountThrough(id, isPeople = peopleSelected) {
    const sequence = isPeople ? PEOPLE_WHEEL_ITEMS : EVENTS;
    const targetIndex = sequence.findIndex((item) => item.id === id);
    return targetIndex >= 0 ? targetIndex + 1 : 1;
  }

  function getReaderEntry(id) {
    if (!readerRef.current) return null;
    return Array.from(
      readerRef.current.querySelectorAll("[data-reader-id]")
    ).find((entry) => entry.dataset.readerId === id) || null;
  }

  function scrollReaderTo(id, behavior = "smooth") {
    readerScrollCleanup.current?.();
    readerScrollCleanup.current = null;

    const requestId = readerScrollRequest.current + 1;
    readerScrollRequest.current = requestId;
    setCompactNavigatorVisible(true);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const targetEntry = getReaderEntry(id);
        if (!targetEntry) return;

        const targetDistance = Math.abs(
          targetEntry.getBoundingClientRect().top
        );
        const resolvedBehavior =
          behavior === "smooth" && targetDistance > window.innerHeight * 2
            ? "auto"
            : behavior;

        if (resolvedBehavior === "auto") {
          let resizeAnimationFrame = null;
          let resizeObserver = null;
          let stopTimer = null;

          const stopAlignment = () => {
            if (resizeAnimationFrame !== null) {
              window.cancelAnimationFrame(resizeAnimationFrame);
              resizeAnimationFrame = null;
            }
            resizeObserver?.disconnect();
            if (stopTimer !== null) window.clearTimeout(stopTimer);
            if (readerScrollCleanup.current === stopAlignment) {
              readerScrollCleanup.current = null;
            }
          };

          const alignTarget = () => {
            if (readerScrollRequest.current !== requestId) {
              stopAlignment();
              return;
            }
            const currentTarget = getReaderEntry(id);
            if (!currentTarget) return;

            const scrollMargin =
              Number.parseFloat(
                window.getComputedStyle(currentTarget).scrollMarginTop
              ) || 0;
            const distanceFromMargin =
              currentTarget.getBoundingClientRect().top - scrollMargin;

            if (Math.abs(distanceFromMargin) < 2) return;
            window.scrollTo(
              window.scrollX,
              Math.max(0, window.scrollY + distanceFromMargin)
            );
          };

          if (typeof ResizeObserver !== "undefined" && readerRef.current) {
            resizeObserver = new ResizeObserver(() => {
              if (resizeAnimationFrame !== null) return;
              resizeAnimationFrame = window.requestAnimationFrame(() => {
                resizeAnimationFrame = null;
                alignTarget();
              });
            });
            resizeObserver.observe(readerRef.current);
          }

          readerScrollCleanup.current = stopAlignment;
          alignTarget();
          stopTimer = window.setTimeout(() => {
            alignTarget();
            stopAlignment();
          }, 3600);
          return;
        }

        targetEntry.scrollIntoView({
          behavior: resolvedBehavior,
          block: "start",
        });
      });
    });
  }

  function revealItem(id, sourceTitle, isPeople = peopleSelected) {
    const selectedItem = (isPeople ? PEOPLE_WHEEL_ITEMS : EVENTS).find(
      (item) => item.id === id
    );
    if (selectedItem) {
      pushHistoryLocation(buildHistoryItemHref(selectedItem, isPeople, locale));
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const sourceRect = sourceTitle?.getBoundingClientRect();
    const sourceStyle = sourceTitle ? window.getComputedStyle(sourceTitle) : null;

    flushSync(() => {
      setVisibleReaderCount(getReaderItemCountThrough(id, isPeople));
      setOpenedId(id);
    });

    const targetEntry = getReaderEntry(id);
    const targetTitle = targetEntry?.querySelector("h2");
    const targetIsFar =
      !targetEntry ||
      Math.abs(targetEntry.getBoundingClientRect().top) >
        window.innerHeight * 1.25;
    if (
      prefersReducedMotion ||
      !sourceTitle ||
      !sourceRect ||
      !sourceStyle ||
      !targetTitle ||
      targetIsFar
    ) {
      scrollReaderTo(id);
      return;
    }

    const targetRect = targetTitle.getBoundingClientRect();
    const targetStyle = window.getComputedStyle(targetTitle);
    const flyingTitle = document.createElement("div");
    flyingTitle.textContent = sourceTitle.textContent;
    flyingTitle.setAttribute("aria-hidden", "true");
    Object.assign(flyingTitle.style, {
      position: "fixed",
      zIndex: "2147483000",
      top: `${sourceRect.top}px`,
      left: `${sourceRect.left}px`,
      width: `${sourceRect.width}px`,
      margin: "0",
      color: targetStyle.color,
      fontFamily: targetStyle.fontFamily,
      fontSize: sourceStyle.fontSize,
      fontWeight: targetStyle.fontWeight,
      letterSpacing: sourceStyle.letterSpacing,
      lineHeight: sourceStyle.lineHeight,
      textAlign: "center",
      pointerEvents: "none",
      transformOrigin: "top left",
      transition:
        "top 760ms cubic-bezier(0.18, 0.82, 0.2, 1), left 760ms cubic-bezier(0.18, 0.82, 0.2, 1), width 760ms cubic-bezier(0.18, 0.82, 0.2, 1), font-size 760ms cubic-bezier(0.18, 0.82, 0.2, 1), letter-spacing 760ms cubic-bezier(0.18, 0.82, 0.2, 1), line-height 760ms cubic-bezier(0.18, 0.82, 0.2, 1)",
    });

    targetTitle.style.visibility = "hidden";
    document.body.appendChild(flyingTitle);

    const finishAnimation = () => {
      targetTitle.style.visibility = "";
      flyingTitle.remove();
      scrollReaderTo(id);
    };

    flyingTitle.getBoundingClientRect();
    window.requestAnimationFrame(() => {
      Object.assign(flyingTitle.style, {
        top: `${targetRect.top}px`,
        left: `${targetRect.left}px`,
        width: `${targetRect.width}px`,
        fontSize: targetStyle.fontSize,
        letterSpacing: targetStyle.letterSpacing,
        lineHeight: targetStyle.lineHeight,
      });
    });
    window.setTimeout(finishAnimation, 820);
  }

  function scrollMainNavigatorIntoView() {
    readerScrollCleanup.current?.();
    readerScrollCleanup.current = null;
    readerScrollRequest.current += 1;
    setCompactNavigatorVisible(false);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        wheelStageRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  }

  function openMilestones(event) {
    event?.preventDefault();
    historyInteracted.current = true;
    window.clearTimeout(wheelScrollTimer.current);
    pushHistoryLocation(CHRONOLOGY_HREF);
    flushSync(() => {
      setPeopleSelected(false);
      setFocusedId(FIRST_MILESTONE.id);
      setVisibleReaderCount(1);
      setOpenedId(FIRST_MILESTONE.id);
    });
    scrollWheelTo(FIRST_MILESTONE.id, "auto");
    scrollMainNavigatorIntoView();
  }

  function openPeople(event) {
    event?.preventDefault();
    historyInteracted.current = true;
    window.clearTimeout(wheelScrollTimer.current);
    pushHistoryLocation(PEOPLE_HREF);
    flushSync(() => {
      setPeopleSelected(true);
      setFocusedId(PEOPLE_WHEEL_ITEMS[0].id);
      setVisibleReaderCount(1);
      setOpenedId(PEOPLE_WHEEL_ITEMS[0].id);
    });
    scrollWheelTo(PEOPLE_WHEEL_ITEMS[0].id, "auto");
    scrollMainNavigatorIntoView();
  }

  function handleCompactWheelItemClick(event, item) {
    event.preventDefault();
    historyInteracted.current = true;
    if (item.id === openedId) {
      pushHistoryLocation(buildHistoryItemHref(item, peopleSelected, locale));
      scrollReaderTo(item.id);
      return;
    }

    const sourceTitle = event.currentTarget.querySelector(
      `.${styles.compactWheelTitle}`
    );
    flushSync(() => {
      setFocusedId(item.id);
    });
    scrollWheelTo(item.id, "auto");
    revealItem(item.id, sourceTitle);
  }

  function stepWheel(direction) {
    historyInteracted.current = true;
    const nextIndex =
      (focusedIndex + direction + wheelItems.length) % wheelItems.length;
    focusWheelItem(wheelItems[nextIndex].id);
  }

  function handleWheelScroll() {
    if (wheelProgrammaticScroll.current) return;
    historyInteracted.current = true;
    window.clearTimeout(wheelScrollTimer.current);
    wheelScrollTimer.current = window.setTimeout(() => {
      const track = wheelRef.current;
      if (!track) return;

      const trackCenter = track.scrollLeft + track.clientWidth / 2;
      let nearestItem = null;
      let nearestDistance = Number.POSITIVE_INFINITY;

      wheelItems.forEach((item) => {
        const node = wheelNodes.current[item.id];
        if (!node) return;
        const nodeCenter = node.offsetLeft + node.offsetWidth / 2;
        const distance = Math.abs(nodeCenter - trackCenter);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestItem = item;
        }
      });

      if (nearestItem && nearestItem.id !== focusedId) {
        setFocusedId(nearestItem.id);
      }
    }, 100);
  }

  function handleWheelPointerDown(event) {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    historyInteracted.current = true;
    const track = wheelRef.current;
    wheelDrag.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: track.scrollLeft,
    };
    didWheelDrag.current = false;
  }

  function handleWheelPointerMove(event) {
    if (!wheelDrag.current.active) return;
    const track = wheelRef.current;
    const distance = event.clientX - wheelDrag.current.startX;
    if (Math.abs(distance) > 12 && !didWheelDrag.current) {
      didWheelDrag.current = true;
      track.setPointerCapture(event.pointerId);
    }
    if (didWheelDrag.current) {
      track.scrollLeft = wheelDrag.current.scrollLeft - distance;
    }
  }

  function handleWheelPointerEnd(event) {
    if (!wheelDrag.current.active) return;
    wheelDrag.current.active = false;
    if (wheelRef.current.hasPointerCapture(event.pointerId)) {
      wheelRef.current.releasePointerCapture(event.pointerId);
    }
  }

  function handleWheelItemClick(event, item, isFocused) {
    event.preventDefault();
    historyInteracted.current = true;
    if (didWheelDrag.current) {
      didWheelDrag.current = false;
      return;
    }
    if (isFocused) {
      revealItem(
        item.id,
        event.currentTarget.querySelector(`.${styles.wheelDateTitle}`)
      );
    } else {
      focusAndRevealItem(item.id);
    }
  }

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      headerCls="navbar-dark light-hero-header"
      headTitle={content.title}
    >
      <LocalizedHead
        pathname="/history"
        title={`${content.title} | ${copy.pageTitleSuffix}`}
        description={copy.description}
      />

      <div className={styles.page}>
        <section className={styles.hero} aria-labelledby="history-title">
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{copy.eyebrow}</p>
              <h1 id="history-title" className={styles.heroTitle}>
                {HISTORY_TITLE_LEAD}
                {HISTORY_TITLE_TAIL ? <span>{HISTORY_TITLE_TAIL}</span> : null}
              </h1>
              <p className={styles.heroLead}>
                {copy.heroLead}
              </p>
              <div className={styles.heroActionArea}>
                <div className={styles.heroActions}>
                  <a
                    className={styles.primaryAction}
                    href={CHRONOLOGY_HREF}
                    onClick={openMilestones}
                    onMouseEnter={() => setHeroActionHint("milestones")}
                    onMouseLeave={() => setHeroActionHint(null)}
                    onFocus={() => setHeroActionHint("milestones")}
                    onBlur={() => setHeroActionHint(null)}
                  >
                    {copy.milestones}
                    <span aria-hidden="true">↓</span>
                  </a>
                  <a
                    className={styles.primaryAction}
                    href={PEOPLE_HREF}
                    onClick={openPeople}
                    onMouseEnter={() => setHeroActionHint("people")}
                    onMouseLeave={() => setHeroActionHint(null)}
                    onFocus={() => setHeroActionHint("people")}
                    onBlur={() => setHeroActionHint(null)}
                  >
                    {copy.people}
                    <span aria-hidden="true">↓</span>
                  </a>
                </div>
                <div
                  className={`${styles.heroActionHint} ${
                    heroActionHint ? styles.heroActionHintVisible : ""
                  }`}
                  aria-live="polite"
                >
                  {heroActionHint ? (
                    <>
                      <span>{HERO_ACTION_HINTS[heroActionHint].label}</span>
                      <p>{HERO_ACTION_HINTS[heroActionHint].text}</p>
                    </>
                  ) : null}
                </div>
              </div>
            </div>

            <div className={styles.heroArtifact} aria-hidden="true">
              <div className={`${styles.orbit} ${styles.orbitOuter}`} />
              <div className={`${styles.orbit} ${styles.orbitMiddle}`} />
              <div className={`${styles.orbit} ${styles.orbitInner}`} />
              <span className={`${styles.orbitNode} ${styles.nodeOne}`} />
              <span className={`${styles.orbitNode} ${styles.nodeTwo}`} />
              <span className={`${styles.orbitNode} ${styles.nodeThree}`} />
              <span className={`${styles.orbitYear} ${styles.yearStart}`}>2016</span>
              <span className={`${styles.orbitYear} ${styles.yearMiddle}`}>2022</span>
              <span className={`${styles.orbitYear} ${styles.yearEnd}`}>2026</span>
              <div className={styles.artifactCore}>
                <img src="/images/logo/svg/koinos-logomark-black.svg" alt="" />
                <span>{copy.livedHistory[0]}<br />{copy.livedHistory[1]}</span>
              </div>
            </div>
          </div>

        </section>

        <section
          id="chronicle"
          className={`${styles.chronicle} ${
            openedItem ? "" : styles.chronicleCompact
          }`}
          aria-label={copy.historicalChronology}
        >
          {compactNavigatorVisible && openedItem ? (
            <aside
              className={styles.compactNavigator}
              aria-label={copy.quickHistoryIndex}
            >
              <div className={styles.compactNavigatorInner}>
                <div className={styles.compactWheelBar}>
                  <div className={styles.compactWheelCounter}>
                    <span>{peopleSelected ? copy.people : copy.milestones}</span>
                    <strong>
                      {String(focusedIndex + 1).padStart(2, "0")} / {wheelItems.length}
                    </strong>
                  </div>
                  <ol
                    ref={compactWheelRef}
                    className={styles.compactWheelTrack}
                    aria-label={
                      peopleSelected
                        ? copy.quickPeopleIndex
                        : copy.quickMilestoneIndex
                    }
                  >
                    {wheelItems.map((item) => {
                      const isFocused = item.id === focusedItem.id;
                      return (
                        <li key={`compact-item-${item.id}`}>
                          <a
                            ref={(node) => {
                              compactWheelNodes.current[item.id] = node;
                            }}
                            href={buildHistoryItemHref(item, peopleSelected, locale)}
                            aria-current={isFocused ? "true" : undefined}
                            className={`${styles.compactWheelButton} ${
                              isFocused ? styles.compactWheelButtonActive : ""
                            }`}
                            onClick={(clickEvent) =>
                              handleCompactWheelItemClick(clickEvent, item)
                            }
                          >
                            <strong className={styles.compactWheelTitle}>
                              {item.title}
                            </strong>
                            <span>{item.date}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>
            </aside>
          ) : null}

          <div
            key={peopleSelected ? "people" : "milestones"}
            ref={wheelStageRef}
            className={styles.wheelStage}
          >
            <div className={styles.wheelHeader}>
              <div className={styles.wheelControls}>
                <button
                  type="button"
                  onClick={() => stepWheel(-1)}
                  aria-label={peopleSelected ? copy.previousPerson : copy.previousDate}
                >
                  ←
                </button>
                <span>
                  {String(focusedIndex + 1).padStart(2, "0")} / {wheelItems.length}
                </span>
                <button
                  type="button"
                  onClick={() => stepWheel(1)}
                  aria-label={peopleSelected ? copy.nextPerson : copy.nextDate}
                >
                  →
                </button>
              </div>
            </div>

            <div
              className={`${styles.wheelViewport} ${
                focusedIndex === 0 ? styles.wheelViewportAtStart : ""
              }`}
            >
              <ol
                ref={wheelRef}
                className={`${styles.wheelTrack} ${
                  focusedIndex === 0 ? styles.wheelTrackAtStart : ""
                }`}
                aria-label={
                  peopleSelected
                    ? copy.mainCharacters
                    : copy.completeChronology
                }
                onScroll={handleWheelScroll}
                onPointerDown={handleWheelPointerDown}
                onPointerMove={handleWheelPointerMove}
                onPointerUp={handleWheelPointerEnd}
                onPointerCancel={handleWheelPointerEnd}
              >
                {wheelItems.map((item) => {
                  const isFocused = item.id === focusedItem.id;

                  return (
                    <li key={item.id}>
                      <a
                        ref={(node) => {
                          wheelNodes.current[item.id] = node;
                        }}
                        href={buildHistoryItemHref(item, peopleSelected, locale)}
                        aria-current={isFocused ? "true" : undefined}
                        aria-label={
                          peopleSelected
                            ? `${copy.mainCharacter}: ${item.title}`
                            : `${item.date}: ${item.title}`
                        }
                        className={`${styles.wheelDate} ${
                          isFocused ? styles.wheelDateActive : ""
                        }`}
                        onClick={(clickEvent) =>
                          handleWheelItemClick(clickEvent, item, isFocused)
                        }
                      >
                        <strong className={styles.wheelDateTitle}>
                          {item.title}
                        </strong>
                        <span>{item.date}</span>
                        <i aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </ol>
            </div>

          </div>

          {openedItem ? (
            <div
              key={`${peopleSelected ? "people" : "milestones"}-${openedItem.id}`}
              ref={readerRef}
              className={styles.readerStream}
            >
              {visibleReaderItems.map((readerItem, readerIndex) => {
                const readerEvent = peopleSelected ? null : readerItem;
                const readerPerson = peopleSelected ? readerItem : null;

                return (
                  <ReaderEntry
                    key={readerItem.id}
                    itemId={readerItem.id}
                    priority={readerIndex === 0}
                  >
                    <header className={styles.readerHeader}>
                      <h2
                        id={`reader-${readerItem.id}`}
                        className={
                          readerPerson ? styles.personReaderTitle : undefined
                        }
                      >
                        {readerItem.title}
                      </h2>
                      <div className={styles.readerMeta}>
                        <span>{readerItem.date}</span>
                      </div>
                    </header>

                    {readerPerson ? (
                      <div
                        className={`${styles.articleBody} ${styles.personProfile}`}
                      >
                        <div className={styles.personNarrative}>
                          {readerPerson.person.description ? (
                            <p>
                              {renderInline(
                                readerPerson.person.description,
                                `${readerPerson.id}-description`
                              )}
                            </p>
                          ) : null}
                          {readerPerson.person.stats ? (
                            <p className={styles.personStatisticalNarrative}>
                              {buildStatisticalNarrative(readerPerson.person.stats, model)}
                            </p>
                          ) : null}
                        </div>
                        <PersonStats person={readerPerson.person} model={model} />
                      </div>
                    ) : (
                      <ArticleBody
                        event={readerEvent}
                        peopleSourceId={PEOPLE_SOURCE_ID_LOCALIZED}
                      />
                    )}
                  </ReaderEntry>
                );
              })}

              {hasMoreReaderItems ? (
                <div
                  ref={readerLoadMoreRef}
                  className={styles.readerLoadMore}
                  aria-hidden="true"
                >
                  <i />
                  <i />
                  <i />
                </div>
              ) : null}
            </div>
          ) : null}
        </section>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  if (normaliseLocale(locale) === "es") {
    const [{ default: historyContentData }, { default: historyPeopleData }] =
      await Promise.all([
        import("@/data/history-content.es.json"),
        import("@/data/history-people.es.json"),
      ]);
    return { props: { historyContentData, historyPeopleData } };
  }

  const [{ default: historyContentData }, { default: historyPeopleData }] =
    await Promise.all([
      import("@/data/history-content.json"),
      import("@/data/history-people.json"),
    ]);
  return { props: { historyContentData, historyPeopleData } };
}
