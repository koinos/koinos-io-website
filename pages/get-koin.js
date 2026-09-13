import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "@/styles/GetKoin.module.css";
import * as englishContent from "@/data/getKoin";
import * as spanishContent from "@/data/getKoin.es";

const DEFAULT_WALLET = "metamask";
const DEFAULT_ROUTE = "ethereum";

function normaliseWallet(value, wallets) {
  return wallets.some((wallet) => wallet.id === value)
    ? value
    : DEFAULT_WALLET;
}

function normaliseRoute(value, routes) {
  return routes.some((route) => route.id === value) ? value : DEFAULT_ROUTE;
}

function CopyButton({ value, label, subject, ui }) {
  const [state, setState] = useState("idle");

  async function handleCopy() {
    try {
      if (!navigator.clipboard) throw new Error("no clipboard");
      await navigator.clipboard.writeText(value);
      setState("copied");
    } catch {
      // Clipboard access is blocked in some browsers and in insecure contexts.
      // Say so, rather than looking like nothing happened.
      setState("failed");
    }
    window.setTimeout(() => setState("idle"), 4000);
  }

  return (
    <>
      <button
        type="button"
        className={styles.copyButton}
        onClick={handleCopy}
        aria-label={state === "idle" ? label : undefined}
      >
        {state === "copied"
          ? ui.copied
          : state === "failed"
          ? ui.copyFailed
          : ui.copy}
      </button>
      {/* The button's own label is static, so the outcome is announced here. */}
      <span role="status" className={styles.srOnly}>
        {state === "copied"
          ? ui.copySuccess(subject)
          : state === "failed"
          ? ui.copyFailure(subject)
          : ""}
      </span>
    </>
  );
}

function Callout({ type, text, labels }) {
  return (
    <div className={`${styles.callout} ${styles[`callout_${type}`]}`}>
      <span className={styles.calloutLabel}>{labels[type]}</span>
      <p>{text}</p>
    </div>
  );
}

function Shot({ image }) {
  if (!image) return null;
  return (
    <figure
      className={`${styles.shot} ${image.frame === "phone" ? styles.shotNarrow : ""}`}
    >
      <img src={image.src} alt={image.alt} loading="lazy" />
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}

// The wallet and the route are each a single choice out of a small set, so they
// are radio groups. Buttons with aria-pressed would announce them as
// independent toggles and would not give arrow-key navigation.
function ChoiceGroup({ legend, options, value, onChange, describe }) {
  const refs = useRef({});

  function move(direction) {
    const index = options.findIndex((option) => option.id === value);
    const next = options[(index + direction + options.length) % options.length];
    onChange(next.id);
    const node = refs.current[next.id];
    if (node) node.focus();
  }

  function handleKeyDown(event) {
    if (["ArrowDown", "ArrowRight"].includes(event.key)) {
      event.preventDefault();
      move(1);
    } else if (["ArrowUp", "ArrowLeft"].includes(event.key)) {
      event.preventDefault();
      move(-1);
    }
  }

  return (
    <div className={styles.fieldset}>
      <span className={styles.legend} id={`${legend.id}-label`}>
        {legend.text}
      </span>
      <div
        className={styles.options}
        role="radiogroup"
        aria-labelledby={`${legend.id}-label`}
        onKeyDown={handleKeyDown}
      >
        {options.map((option) => {
          const selected = option.id === value;
          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={selected}
              tabIndex={selected ? 0 : -1}
              ref={(node) => {
                refs.current[option.id] = node;
              }}
              className={`${styles.option} ${selected ? styles.optionActive : ""}`}
              onClick={() => onChange(option.id)}
            >
              <span className={styles.optionName}>{option.name}</span>
              <span className={styles.optionMeta}>{describe(option)}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepCard({ step, index, total, onFollowRoute, ui }) {
  return (
    <article className={styles.step} id={`step-${step.id}`}>
      <div className={styles.stepHead}>
        <span className={styles.stepCount}>
          {ui.stepCount(index + 1, total)}
        </span>
        <h3 className={styles.stepTitle}>{step.title}</h3>
        <p className={styles.stepContext}>{step.context}</p>
      </div>

      <div className={styles.stepBody}>
        {(step.body || []).map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}

        {step.link && (
          <Link
            href={step.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.stepLink}
          >
            {step.link.label}
          </Link>
        )}

        {step.routeLink && (
          <button
            type="button"
            className={styles.stepLink}
            onClick={() =>
              onFollowRoute(step.routeLink.wallet, step.routeLink.route)
            }
          >
            {step.routeLink.label}
          </button>
        )}

        <ol className={styles.micro}>
          {step.micro.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>

        <Shot image={step.image} />
        {(step.extraImages || []).map((image) => (
          <Shot key={image.src} image={image} />
        ))}

        {step.callouts.map((callout, i) => (
          <Callout
            key={i}
            type={callout.type}
            text={callout.text}
            labels={ui.calloutLabels}
          />
        ))}

        {step.check && (
          <p className={styles.check}>
            <span>{ui.beforeContinue}</span>
            {step.check}
          </p>
        )}
      </div>
    </article>
  );
}

export default function GetKoinPage() {
  const router = useRouter();
  const locale = router.locale === "es" ? "es" : "en";
  const content = locale === "es" ? spanishContent : englishContent;
  const {
    CONTRACTS,
    DISCLAIMER,
    FAQS,
    GLOSSARY,
    INTRO,
    LAST_VERIFIED,
    MANA,
    NATIVE_VS_WRAPPED,
    OFFICIAL_LINKS,
    RISK_NOTE,
    ROUTES,
    SAFETY,
    UI,
    WALLETS,
    buildSteps,
    isSupported,
    suggestionFor,
  } = content;
  const [openFaq, setOpenFaq] = useState(null);
  const [showSticky, setShowSticky] = useState(false);
  const chooserRef = useRef(null);

  // The URL is the source of truth, so a shared link always wins and the
  // browser's back and forward buttons restore both choices. Going through
  // next/router (rather than history.pushState directly) keeps the router's own
  // history entries intact.
  const wallet = normaliseWallet(router.query.wallet, WALLETS);
  const route = normaliseRoute(router.query.route, ROUTES);

  useEffect(() => {
    if (!router.isReady) return;
    if (router.query.wallet === wallet && router.query.route === route) return;
    // Missing or unknown parameters are corrected in place, without adding a
    // history entry and without inventing a fragment the reader did not ask for.
    router.replace(
      { pathname: "/get-koin", query: { wallet, route }, hash: router.asPath.split("#")[1] },
      undefined,
      { shallow: true, scroll: false }
    );
  }, [router, router.isReady, router.query.wallet, router.query.route, wallet, route]);

  useEffect(() => {
    const node = chooserRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      ([entry]) =>
        setShowSticky(
          !entry.isIntersecting && entry.boundingClientRect.top < 0
        ),
      { threshold: 0 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const select = useCallback(
    (nextWallet, nextRoute) => {
      if (nextWallet === wallet && nextRoute === route) return;
      router.push(
        {
          pathname: "/get-koin",
          query: { wallet: nextWallet, route: nextRoute },
          // Keep whatever section the reader arrived at or scrolled to, so
          // changing a choice does not quietly rewrite a shared link.
          hash: router.asPath.split("#")[1],
        },
        undefined,
        { shallow: true, scroll: false }
      );
    },
    [router, wallet, route]
  );

  const followRoute = useCallback(
    (nextWallet, nextRoute) => {
      select(nextWallet, nextRoute);
      window.requestAnimationFrame(() => {
        document.getElementById("guide")?.scrollIntoView({ block: "start" });
      });
    },
    [select]
  );

  const activeWallet = WALLETS.find((w) => w.id === wallet);
  const activeRoute = ROUTES.find((r) => r.id === route);
  const supported = isSupported(wallet, route);
  const steps = buildSteps(wallet, route);
  const mismatch = supported ? null : suggestionFor(wallet, route);

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      headerCls="navbar-dark inner-page-header"
      headTitle={UI.headTitle}
    >
      <Head>
        <meta
          name="description"
          content={UI.metaDescription}
        />
        <meta property="language" content={locale} key="language" />
        <meta
          property="og:locale"
          content={locale === "es" ? "es_ES" : "en_US"}
          key="oglocale"
        />
        <meta property="og:title" content={UI.headTitle} key="ogtitle" />
        <meta
          property="og:description"
          content={UI.metaDescription}
          key="ogdesc"
        />
        <meta
          property="og:url"
          content={`https://koinos.io${locale === "es" ? "/es" : ""}/get-koin`}
          key="ogurl"
        />
        <link
          rel="canonical"
          href={`https://koinos.io${locale === "es" ? "/es" : ""}/get-koin`}
        />
        <link rel="alternate" hrefLang="en" href="https://koinos.io/get-koin" />
        <link
          rel="alternate"
          hrefLang="es"
          href="https://koinos.io/es/get-koin"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://koinos.io/get-koin"
        />
      </Head>

      <div className={styles.page}>
        {/* ---------------------------------------------------------- hero */}
        <section className={styles.hero}>
          <div className={styles.wrap}>
            <p className={styles.eyebrow}>{UI.eyebrow}</p>
            <h1 className={styles.h1}>{INTRO.title}</h1>
            <p className={styles.lead}>{INTRO.lead}</p>
            {INTRO.paragraphs.map((paragraph, i) => (
              <p key={i} className={styles.heroText}>
                {paragraph}
              </p>
            ))}
            <a href="#choose" className={styles.cta}>
              {UI.startGuide}
            </a>
          </div>
        </section>

        {/* ---------------------------------------------------- risk first */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.riskNote}>
              <h2 className={styles.riskTitle}>{RISK_NOTE.title}</h2>
              <ul>
                {RISK_NOTE.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ------------------------------------------- native vs wrapped */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <h2 className={styles.h2}>{NATIVE_VS_WRAPPED.title}</h2>
            {NATIVE_VS_WRAPPED.intro && (
              <p className={styles.sectionLead}>{NATIVE_VS_WRAPPED.intro}</p>
            )}

            <div className={styles.compare}>
              {NATIVE_VS_WRAPPED.columns.map((column) => (
                <div key={column.name} className={styles.compareCard}>
                  <h3>{column.name}</h3>
                  <p className={styles.compareWhere}>{column.where}</p>
                  <ul>
                    {column.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {NATIVE_VS_WRAPPED.outro.map((paragraph, i) => (
              <p key={i} className={styles.bodyText}>
                {paragraph}
              </p>
            ))}

            <div className={styles.contracts}>
              <h3 className={styles.h3}>{UI.contractsTitle}</h3>
              <p className={styles.bodyText}>{UI.contractsIntro}</p>
              <div className={styles.tableScroll}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th scope="col">{UI.network}</th>
                      <th scope="col">{UI.contractAddress}</th>
                      <th scope="col">{UI.decimals}</th>
                      <th scope="col">
                        <span className={styles.srOnly}>{UI.copyAddress}</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {CONTRACTS.map((contract) => (
                      <tr key={contract.chain}>
                        <th scope="row">{contract.chain}</th>
                        <td>
                          <Link
                            href={contract.explorer}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.address}
                          >
                            {contract.address}
                          </Link>
                        </td>
                        <td>{contract.decimals}</td>
                        <td>
                          <CopyButton
                            value={contract.address}
                            label={UI.copyLabel(contract.chain)}
                            subject={UI.copySubject(contract.chain)}
                            ui={UI}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className={styles.fineprint}>
                {UI.contractsFineprint}
              </p>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------- the chooser */}
        <section className={styles.section} id="choose" ref={chooserRef}>
          <div className={styles.wrap}>
            <h2 className={styles.h2}>{UI.chooseTitle}</h2>
            <p className={styles.sectionLead}>{UI.chooseLead}</p>

            <div className={styles.chooser}>
              <ChoiceGroup
                legend={{ id: "wallet", text: UI.walletLegend }}
                options={WALLETS}
                value={wallet}
                onChange={(id) => select(id, route)}
                describe={(option) => option.family}
              />
              <ChoiceGroup
                legend={{ id: "route", text: UI.routeLegend }}
                options={ROUTES}
                value={route}
                onChange={(id) => select(wallet, id)}
                describe={(option) => option.outcomeShort}
              />
            </div>

            <div aria-live="polite">
              {mismatch ? (
                <div className={styles.mismatch}>
                  <p className={styles.mismatchTitle}>{mismatch.message}</p>
                  <p>{mismatch.walletFix}</p>
                  {mismatch.routeFix && <p>{mismatch.routeFix}</p>}
                  <button
                    type="button"
                    className={styles.mismatchAction}
                    onClick={() => select(wallet, mismatch.suggestedRoute)}
                  >
                    {UI.showCombination(
                      activeWallet.name,
                      ROUTES.find((r) => r.id === mismatch.suggestedRoute).name
                    )}
                  </button>
                </div>
              ) : (
                <div className={styles.plan}>
                  <p className={styles.planTitle}>
                    {activeWallet.name} · {activeRoute.name}
                  </p>
                  <p className={styles.planText}>{activeRoute.plan}</p>
                  <dl className={styles.planFacts}>
                    <div>
                      <dt>{UI.buyFirst}</dt>
                      <dd>
                        {activeRoute.buyAsset || UI.nothingFirst}
                      </dd>
                    </div>
                    <div>
                      <dt>{UI.network}</dt>
                      <dd>{activeRoute.network}</dd>
                    </div>
                    <div>
                      <dt>{UI.whereSwap}</dt>
                      <dd>{activeRoute.dex}</dd>
                    </div>
                    <div>
                      <dt>{UI.endWith}</dt>
                      <dd>{activeRoute.outcome}</dd>
                    </div>
                  </dl>
                  <p className={styles.planNote}>{activeRoute.note}</p>
                  {!activeRoute.reachesNativeKoin && (
                    <button
                      type="button"
                      className={styles.mismatchAction}
                      onClick={() => followRoute("metamask", "ethereum")}
                    >
                      {UI.nativeRoute}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- the steps */}
        <section className={styles.section} id="guide">
          <div className={styles.wrap}>
            <h2 className={styles.h2}>
              {supported
                ? UI.guideHeading(activeRoute.name, activeWallet.name)
                : UI.chooseSupported}
            </h2>

            {supported ? (
              <>
                <p className={styles.sectionLead}>{activeRoute.tagline}</p>
                <div className={styles.steps}>
                  {steps.map((step, index) => (
                    <StepCard
                      key={step.id}
                      step={step}
                      index={index}
                      total={steps.length}
                      onFollowRoute={followRoute}
                      ui={UI}
                    />
                  ))}
                </div>

                <div className={styles.walletNotes}>
                  <h3 className={styles.h3}>
                    {UI.specificTo(activeWallet.name)}
                  </h3>
                  <ul className={styles.notesList}>
                    {activeWallet.quirks.map((quirk, i) => (
                      <li key={i}>{quirk}</li>
                    ))}
                  </ul>
                  <Link
                    href={activeWallet.install}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.stepLink}
                  >
                    {UI.installWallet(
                      activeWallet.name,
                      activeWallet.installLabel
                    )}
                  </Link>
                </div>
              </>
            ) : (
              <p className={styles.sectionLead}>{UI.unsupportedLead}</p>
            )}
          </div>
        </section>

        {/* ----------------------------------------------------- the mana */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <h2 className={styles.h2}>{MANA.title}</h2>
            {MANA.paragraphs.map((paragraph, i) => (
              <p key={i} className={styles.bodyText}>
                {paragraph}
              </p>
            ))}
            <Link
              href={MANA.linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.stepLink}
            >
              {MANA.linkLabel}
            </Link>
          </div>
        </section>

        {/* --------------------------------------------------- the safety */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <h2 className={styles.h2}>{SAFETY.title}</h2>
            <ul className={styles.safety}>
              {SAFETY.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ------------------------------------------------------ the faq */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <h2 className={styles.h2}>{UI.questions}</h2>
            <ul className={styles.faqs}>
              {FAQS.map((faq, index) => (
                <li key={index} className={styles.faq}>
                  <button
                    type="button"
                    className={styles.faqButton}
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span>{faq.q}</span>
                    <span aria-hidden="true" className={styles.faqSign}>
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    hidden={openFaq !== index}
                  >
                    <p className={styles.faqAnswer}>{faq.a}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ------------------------------------------------- the glossary */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <h2 className={styles.h2}>{UI.glossary}</h2>
            <dl className={styles.glossary}>
              {GLOSSARY.map(([term, definition]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{definition}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ----------------------------------------------- the small print */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <h2 className={styles.h2}>{UI.importantInformation}</h2>
            {DISCLAIMER.map((paragraph, i) => (
              <p key={i} className={styles.fineprint}>
                {paragraph}
              </p>
            ))}
            <p className={styles.fineprint}>
              {UI.verificationPrefix(LAST_VERIFIED)}
              <Link
                href={OFFICIAL_LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
              >
                {UI.communityLinkText}
              </Link>
              {UI.verificationSuffix}
            </p>
          </div>
        </section>

        {showSticky && (
          <div className={styles.sticky}>
            <span className={styles.stickyText}>
              {activeWallet.name} · {activeRoute.name}
            </span>
            <a href="#choose" className={styles.stickyAction}>
              {UI.change}
            </a>
          </div>
        )}
      </div>
    </Layout>
  );
}
