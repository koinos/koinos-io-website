# KoinFlow ecosystem listing

Reviewed on 2026-11-08.

## Scope and evidence

- Requested application: <https://koinflow.netlify.app/>.
- The public homepage returned HTTP 200. Its title and interface describe
  Koinos token markets, charts, KoinDX liquidity pools, and Kondor integration.
- The homepage credits “Powered By RL-ENERGY”. No distinct author profile was
  supplied, so the listing does not attribute it to a named person.
- The requester states that the code is not public and has not been available
  for an audit by us. This does not establish whether another party audited it.
- Inspection was limited to the public page. No wallet was connected and no
  transactions were signed. No source-code audit or custody assessment occurred.

## Implementation

- Add one card beside KoinDX using the existing directory structure and styling.
- Include the same source-availability and audit limitation in English and Spanish.
- Link to the supplied application URL without implying an endorsement or audit.
- Version the homepage's inline brand mark as a local SVG, preserving its
  geometry and converting its primary color `oklch(58% .11 192)` to `#008e8b`.

## Validation

- The initial local production build, `git diff --check`, and SVG parsing passed.
- Initial native Chrome checks covered Spanish desktop and both languages at
  390px mobile width; the card fitted the existing layout without visible clipping.
- The pull-request branch is isolated from unrelated local work and based on
  current `master`. Clean `npm ci`, `npm run build`, and `git diff --check` passed
  on this branch before submission. The application URL was rechecked: HTTP 200.

Listing the app does not establish that swaps work or that it is safe to use.
