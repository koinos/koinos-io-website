import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "@/styles/GetKoin.module.css";
import {
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
  WALLETS,
  buildSteps,
  isSupported,
  suggestionFor,
} from "@/data/getKoin";

const DEFAULT_WALLET = "metamask";
const DEFAULT_ROUTE = "ethereum";

function normaliseWallet(value) {
  return WALLETS.some((w) => w.id === value) ? value : DEFAULT_WALLET;
}

function normaliseRoute(value) {
  return ROUTES.some((r) => r.id === value) ? value : DEFAULT_ROUTE;
}

function CopyButton({ value, label, subject }) {
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
          ? "Copied"
          : state === "failed"
          ? "Copy failed"
          : "Copy"}
      </button>
      {/* The button's own label is static, so the outcome is announced here. */}
      <span role="status" className={styles.srOnly}>
        {state === "copied"
          ? `${subject} copied to the clipboard.`
          : state === "failed"
          ? `Could not copy the ${subject}. Select the address in the table and copy it manually.`
          : ""}
      </span>
    </>
  );
}

function Callout({ type, text }) {
  const labels = { tip: "Tip", warning: "Warning", cost: "Cost" };
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

function StepCard({ step, index, total, onFollowRoute }) {
  return (
    <article className={styles.step} id={`step-${step.id}`}>
      <div className={styles.stepHead}>
        <span className={styles.stepCount}>
          Step {index + 1} of {total}
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
          <Callout key={i} type={callout.type} text={callout.text} />
        ))}

        {step.check && (
          <p className={styles.check}>
            <span>Before you continue</span>
            {step.check}
          </p>
        )}
      </div>
    </article>
  );
}

export default function GetKoinPage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);
  const [showSticky, setShowSticky] = useState(false);
  const chooserRef = useRef(null);

  // The URL is the source of truth, so a shared link always wins and the
  // browser's back and forward buttons restore both choices. Going through
  // next/router (rather than history.pushState directly) keeps the router's own
  // history entries intact.
  const wallet = normaliseWallet(router.query.wallet);
  const route = normaliseRoute(router.query.route);

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
      headTitle="How to buy KOIN | Koinos"
    >
      <Head>
        <meta
          name="description"
          content="A beginner's guide to buying KOIN: choose a wallet and a route, buy on a decentralised exchange, and bridge to native KOIN on Koinos with Vortex."
        />
      </Head>

      <div className={styles.page}>
        {/* ---------------------------------------------------------- hero */}
        <section className={styles.hero}>
          <div className={styles.wrap}>
            <p className={styles.eyebrow}>Guide</p>
            <h1 className={styles.h1}>{INTRO.title}</h1>
            <p className={styles.lead}>{INTRO.lead}</p>
            {INTRO.paragraphs.map((paragraph, i) => (
              <p key={i} className={styles.heroText}>
                {paragraph}
              </p>
            ))}
            <a href="#choose" className={styles.cta}>
              Start the guide
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
              <h3 className={styles.h3}>The official vKOIN addresses</h3>
              <p className={styles.bodyText}>
                The address identifies a token; its name and logo prove nothing.
              </p>
              <div className={styles.tableScroll}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th scope="col">Network</th>
                      <th scope="col">Contract address</th>
                      <th scope="col">Decimals</th>
                      <th scope="col">
                        <span className={styles.srOnly}>Copy address</span>
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
                            label={`Copy the ${contract.chain} vKOIN contract address`}
                            subject={`${contract.chain} vKOIN contract address`}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className={styles.fineprint}>
                Each address opens the network&apos;s block explorer (symbol vKOIN, name Vortex Koin).
              </p>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------- the chooser */}
        <section className={styles.section} id="choose" ref={chooserRef}>
          <div className={styles.wrap}>
            <h2 className={styles.h2}>Choose your path</h2>
            <p className={styles.sectionLead}>
              Pick the wallet you will use and where you will buy.
            </p>

            <div className={styles.chooser}>
              <ChoiceGroup
                legend={{ id: "wallet", text: "Your wallet" }}
                options={WALLETS}
                value={wallet}
                onChange={(id) => select(id, route)}
                describe={(option) => option.family}
              />
              <ChoiceGroup
                legend={{ id: "route", text: "Where you buy" }}
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
                    Show {activeWallet.name} with the{" "}
                    {ROUTES.find((r) => r.id === mismatch.suggestedRoute).name}{" "}
                    route
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
                      <dt>You buy first</dt>
                      <dd>
                        {activeRoute.buyAsset ||
                          "Nothing — you need KOIN already"}
                      </dd>
                    </div>
                    <div>
                      <dt>Network</dt>
                      <dd>{activeRoute.network}</dd>
                    </div>
                    <div>
                      <dt>Where you swap</dt>
                      <dd>{activeRoute.dex}</dd>
                    </div>
                    <div>
                      <dt>You end with</dt>
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
                      Show me the route that ends with native KOIN
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
                ? `${activeRoute.name} with ${activeWallet.name}`
                : "Choose a supported combination"}
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
                    />
                  ))}
                </div>

                <div className={styles.walletNotes}>
                  <h3 className={styles.h3}>Specific to {activeWallet.name}</h3>
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
                    Install {activeWallet.name} from {activeWallet.installLabel}
                  </Link>
                </div>
              </>
            ) : (
              <p className={styles.sectionLead}>
                Pick a wallet and route that work together above, and the steps
                will appear here.
              </p>
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
            <h2 className={styles.h2}>Questions</h2>
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
            <h2 className={styles.h2}>Glossary</h2>
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
            <h2 className={styles.h2}>Important information</h2>
            {DISCLAIMER.map((paragraph, i) => (
              <p key={i} className={styles.fineprint}>
                {paragraph}
              </p>
            ))}
            <p className={styles.fineprint}>
              Steps last verified {LAST_VERIFIED}. Interfaces change. If a screen
              differs from a screenshot here, stop, check the network, token
              address, destination and amount before signing, and ask in the{" "}
              <Link
                href={OFFICIAL_LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Koinos community
              </Link>{" "}
              before signing anything you do not understand.
            </p>
          </div>
        </section>

        {showSticky && (
          <div className={styles.sticky}>
            <span className={styles.stickyText}>
              {activeWallet.name} · {activeRoute.name}
            </span>
            <a href="#choose" className={styles.stickyAction}>
              Change
            </a>
          </div>
        )}
      </div>
    </Layout>
  );
}
