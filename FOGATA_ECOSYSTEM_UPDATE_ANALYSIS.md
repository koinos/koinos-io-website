# Ecosystem GitHub links, Fogata 2 update, and BurnKoin removal

Reviewed on 2026-11-11.

## Evidence

- Requested URL: <https://www.koinscan.com/fogata>, HTTP 200, title
  “Fogata | KoinScan”. The site identifies its interface as an early beta.
- <https://www.koinscan.com/fogata/help> explicitly covers Fogata 2. It describes
  joining pools with KOIN or VHP, reward preferences, and KOIN/VHP order-book
  trading. KOIN deposits permanently burn the original KOIN into VHP; a VHP sale
  needs a buyer and does not guarantee an immediate exit.
- The guide distinguishes Fogata 2 from Fogata 1 and directs older pools to
  <https://fogata.io/>, which also returned HTTP 200.
- The interface source is public at <https://github.com/Armana-group/koinscan>.
  Checked head: `6ef27ffb7fc19d51fc37729362c7103b942c479c`. Relevant paths include
  `src/app/fogata`, `src/components/fogata`, and `src/lib/fogata.ts`.
- The guide links <https://github.com/Armana-group/fogata2> and pinned contract
  source there. The repository returned HTTP 404 both through GitHub's public
  page and API. A public search did not establish another v2 contract repository.
  Public interface code is not evidence that the complete v2 source is available.
- The official current mark is served at
  <https://www.koinscan.com/fogata-mark.svg> and is versioned in the interface repo.

## Implementation decision

- Update the existing Fogata card rather than add a duplicate pool-protocol entry.
- Describe Fogata 2 and retain the interface's beta qualification in both languages.
- Use the supplied v2 destination as the primary website link; retain Fogata 1
  as a separately labelled link for older pools, alongside the guide and interface
  source. Do not link the unavailable v2 contract repository as usable source.
- Version the current SVG mark locally and reuse the existing card layout.
- Set `sourceCodeStatus` to `partial`, using the shared translated risk notice.
- Remove BurnKoin from the directory and its unused Spanish description at the
  user's request. This editorial removal makes no claim about project status.
- Add visible GitHub repository links wherever public source was located. Label
  component-only repositories explicitly and retain the existing disclaimers for
  unavailable, unverified, and partial source. Every card must expose a repository
  link or a source-availability disclaimer.
- Do not claim an audit, guaranteed returns, immediate KOIN redemption, or a
  verified deployment/source match. No wallet connection, deposit, trade, or node
  configuration is part of this change.

## Validation

- Clean dependency installation, `npm run build`, `git diff --check`, and SVG
  parsing passed. The build reported existing browser-data and History warnings.
- Generated English and Spanish HTML contains one Fogata card, the v2/beta
  description, burn/market caveats, the partial-source notice, and all four links.
  After the requested BurnKoin removal, the directory has 20 cards and no
  BurnKoin entry; Fogata remains a single card.
- Native Chrome checks passed at desktop and 390px mobile width in Spanish,
  including the new logo and wrapped link row, without visible clipping.
- PR #149 for KoinosProof was still open when this work began. This change uses
  an independent branch from current `master` and does not modify that PR or the
  user's unrelated working-tree changes.
- The source-link follow-up verified all 14 distinct linked repositories as
  public through GitHub's API. Generated HTML in both languages has 17 cards
  with visible GitHub links; the remaining three have source-availability
  disclaimers. Component labels are translated and partial-source notices remain.
