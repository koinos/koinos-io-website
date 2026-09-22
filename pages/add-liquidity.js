import Layout from "@/components/layout/Layout";
import LocalizedHead from "@/components/i18n/LocalizedHead";
import { LIQUIDITY_ROUTES, routeFor } from "@/data/addLiquidity.constants";
import * as englishContent from "@/data/addLiquidity";
import * as spanishContent from "@/data/addLiquidity.es";
import styles from "@/styles/AddLiquidity.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";

const DEFAULT_ROUTE = "ethereum";

function normaliseRoute(value) {
  return LIQUIDITY_ROUTES.some((route) => route.id === value)
    ? value
    : DEFAULT_ROUTE;
}

function CopyButton({ value, subject, ui }) {
  const [state, setState] = useState("idle");

  async function copy() {
    try {
      if (!navigator.clipboard) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(value);
      setState("copied");
    } catch {
      setState("failed");
    }
    window.setTimeout(() => setState("idle"), 4000);
  }

  return (
    <>
      <button
        type="button"
        className={styles.copyButton}
        onClick={copy}
        aria-label={ui.copyLabel(subject)}
      >
        {state === "copied"
          ? ui.copied
          : state === "failed"
          ? ui.copyFailed
          : ui.copy}
      </button>
      <span className={styles.srOnly} role="status">
        {state === "copied"
          ? ui.copySuccess(subject)
          : state === "failed"
          ? ui.copyFailure(subject)
          : ""}
      </span>
    </>
  );
}

function RouteChooser({ activeId, onChange, ui }) {
  const refs = useRef({});

  function move(direction) {
    const current = LIQUIDITY_ROUTES.findIndex(
      (route) => route.id === activeId
    );
    const next =
      LIQUIDITY_ROUTES[
        (current + direction + LIQUIDITY_ROUTES.length) %
          LIQUIDITY_ROUTES.length
      ];
    onChange(next.id);
    refs.current[next.id]?.focus();
  }

  function handleKeyDown(event) {
    if (["ArrowRight", "ArrowDown"].includes(event.key)) {
      event.preventDefault();
      move(1);
    }
    if (["ArrowLeft", "ArrowUp"].includes(event.key)) {
      event.preventDefault();
      move(-1);
    }
  }

  return (
    <div
      className={styles.routeChooser}
      role="radiogroup"
      aria-label={ui.chooseTitle}
      onKeyDown={handleKeyDown}
    >
      {LIQUIDITY_ROUTES.map((route) => {
        const selected = activeId === route.id;
        return (
          <button
            key={route.id}
            type="button"
            role="radio"
            aria-checked={selected}
            tabIndex={selected ? 0 : -1}
            ref={(node) => {
              refs.current[route.id] = node;
            }}
            className={`${styles.routeButton} ${
              selected ? styles.routeButtonActive : ""
            }`}
            onClick={() => onChange(route.id)}
          >
            <span className={styles.routeChain}>{route.chain}</span>
            <span className={styles.routeVenue}>{route.venue}</span>
            <span className={styles.routePair}>{route.pair}</span>
          </button>
        );
      })}
    </div>
  );
}

function Identifier({ label, value, href, subject, ui }) {
  return (
    <div className={styles.identifier}>
      <dt>{label}</dt>
      <dd>
        {href ? (
          <Link href={href} target="_blank" rel="noopener noreferrer">
            {value}
          </Link>
        ) : (
          <span>{value}</span>
        )}
        <CopyButton value={value} subject={subject} ui={ui} />
      </dd>
    </div>
  );
}

function Screenshot({ image, route, ui }) {
  if (!image) return null;
  const alt = ui.screenshots[image.altKey](route);
  const caption = ui.screenshots[image.captionKey](route);

  return (
    <figure className={styles.screenshot}>
      <img src={image.src} alt={alt} loading="lazy" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function Step({ step, index, total, route, ui }) {
  const image = Number.isInteger(step.imageIndex)
    ? route.screenshots[step.imageIndex]
    : null;

  return (
    <article className={styles.step}>
      <div className={styles.stepNumber} aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className={styles.stepContent}>
        <p className={styles.stepCount}>{ui.stepCount(index + 1, total)}</p>
        <h3>{step.title}</h3>
        <p>{step.text}</p>
        <Screenshot image={image} route={route} ui={ui} />
      </div>
    </article>
  );
}

export default function AddLiquidityPage() {
  const router = useRouter();
  const locale = router.locale === "es" ? "es" : "en";
  const content = locale === "es" ? spanishContent : englishContent;
  const { UI, STEPS } = content;
  const routeId = normaliseRoute(router.query.network);
  const route = routeFor(routeId);

  useEffect(() => {
    if (!router.isReady || router.query.network === routeId) return;
    router.replace(
      {
        pathname: "/add-liquidity",
        query: { network: routeId },
        hash: router.asPath.split("#")[1],
      },
      undefined,
      { shallow: true, scroll: false }
    );
  }, [router, router.isReady, router.query.network, routeId]);

  const chooseRoute = useCallback(
    (nextRoute) => {
      if (nextRoute === routeId) return;
      router.push(
        {
          pathname: "/add-liquidity",
          query: { network: nextRoute },
          hash: router.asPath.split("#")[1],
        },
        undefined,
        { shallow: true, scroll: false }
      );
    },
    [router, routeId]
  );

  const facts = [
    [UI.facts.network, route.chain],
    [UI.facts.venue, route.venue],
    [UI.facts.pair, route.pair],
    [UI.facts.model, UI.modelValue],
    [UI.facts.poolFee, route.poolFee],
    [UI.facts.feeAsset, UI.feeAssets[route.id]],
  ];
  const steps = STEPS[route.id];

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      headerCls="navbar-dark inner-page-header"
      headTitle={UI.headTitle}
    >
      <LocalizedHead
        pathname="/add-liquidity"
        title={UI.headTitle}
        description={UI.metaDescription}
      />

      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.wrap}>
            <p className={styles.eyebrow}>{UI.eyebrow}</p>
            <h1>{UI.title}</h1>
            <p className={styles.lead}>{UI.lead}</p>
            <p className={styles.heroText}>{UI.intro}</p>
            <a href="#choose" className={styles.primaryAction}>
              {UI.start}
            </a>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}>
            <aside className={styles.warning} aria-labelledby="risk-title">
              <h2 id="risk-title">{UI.riskTitle}</h2>
              <ul>
                {UI.riskPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}>
            <p className={styles.sectionLabel}>{UI.eyebrow}</p>
            <h2>{UI.networksTitle}</h2>
            <p className={styles.sectionLead}>{UI.networksLead}</p>
            <div className={styles.networkGrid}>
              {LIQUIDITY_ROUTES.map((item) => (
                <article className={styles.networkCard} key={item.id}>
                  <p className={styles.networkVenue}>{item.venue}</p>
                  <h3>{item.chain}</h3>
                  <p>{UI.routeSummaries[item.id]}</p>
                  <span>{item.pair}</span>
                </article>
              ))}
            </div>
            <div className={styles.preflight}>
              <h3>{UI.prerequisitesTitle}</h3>
              <ul className={styles.checkList}>
                {UI.prerequisites.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section} id="choose">
          <div className={styles.wrap}>
            <h2>{UI.chooseTitle}</h2>
            <p className={styles.sectionLead}>{UI.chooseLead}</p>
            <RouteChooser activeId={route.id} onChange={chooseRoute} ui={UI} />

            <div className={styles.plan} aria-live="polite">
              <div className={styles.planIntro}>
                <div>
                  <p className={styles.sectionLabel}>{UI.planTitle}</p>
                  <h3>
                    {route.chain} · {route.pair}
                  </h3>
                </div>
                <Link
                  href={route.poolUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryAction}
                >
                  {UI.openPool}
                </Link>
              </div>
              <dl className={styles.factGrid}>
                {facts.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className={styles.section} id="identifiers">
          <div className={styles.wrap}>
            <h2>{UI.identifiersTitle}</h2>
            <p className={styles.sectionLead}>{UI.identifiersLead}</p>
            <dl className={styles.identifiers}>
              <Identifier
                label={`${UI.identifierLabels.tokenA} · ${route.tokenA.symbol}`}
                value={route.tokenA.address}
                href={route.tokenA.explorer}
                subject={`${route.chain} vKOIN`}
                ui={UI}
              />
              <Identifier
                label={`${UI.identifierLabels.tokenB} · ${route.tokenB.symbol}`}
                value={route.tokenB.address}
                href={route.tokenB.explorer}
                subject={`${route.chain} ${route.tokenB.symbol}`}
                ui={UI}
              />
              <Identifier
                label={UI.identifierLabels.pool}
                value={route.poolId}
                href={route.poolUrl}
                subject={`${route.chain} ${UI.identifierLabels.pool}`}
                ui={UI}
              />
            </dl>
          </div>
        </section>

        <section className={styles.section} id="guide">
          <div className={styles.wrap}>
            <p className={styles.sectionLabel}>{route.venue}</p>
            <h2>{UI.guideTitle(route)}</h2>
            <div className={styles.steps}>
              {steps.map((step, index) => (
                <Step
                  key={`${route.id}-${step.title}`}
                  step={step}
                  index={index}
                  total={steps.length}
                  route={route}
                  ui={UI}
                />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.explainer}>
              <div>
                <p className={styles.sectionLabel}>{route.model}</p>
                <h2>{UI.rangeTitle}</h2>
              </div>
              <div>
                {UI.rangeParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p className={styles.rangeAdvice}>{UI.rangeAdvice}</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}>
            <h2>{UI.risksTitle}</h2>
            <div className={styles.cardGrid}>
              {UI.risks.map((risk) => (
                <article className={styles.infoCard} key={risk.title}>
                  <h3>{risk.title}</h3>
                  <p>{risk.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={`${styles.wrap} ${styles.twoColumns}`}>
            <div>
              <h2>{UI.afterTitle}</h2>
              <ul className={styles.checkList}>
                {UI.afterPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <div className={styles.finalChecklist}>
              <h2>{UI.checklistTitle}</h2>
              <ul className={styles.checkList}>
                {UI.checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}>
            <h2>{UI.problemsTitle}</h2>
            <div className={styles.cardGrid}>
              {UI.problems.map((problem) => (
                <article className={styles.infoCard} key={problem.title}>
                  <h3>{problem.title}</h3>
                  <p>{problem.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}>
            <h2>{UI.sourcesTitle}</h2>
            <p className={styles.sectionLead}>{UI.sourcesLead}</p>
            <ul className={styles.sources}>
              {UI.sources.map((source) => (
                <li key={source.href}>
                  <Link
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.disclaimer}>
              <p>{UI.disclaimer}</p>
              <p>{UI.verified}</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
