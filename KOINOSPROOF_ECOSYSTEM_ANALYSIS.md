# KoinosProof ecosystem listing

Reviewed on 2026-11-10.

## Public evidence

- <https://koinosproof.com/> returned HTTP 200 and identifies KoinosProof as an
  independent evidence-capture and timestamping application made by RawByte.
- Its homepage and <https://koinosproof.com/koinos.html> describe creating local
  file fingerprints, anchoring batched records on Koinos, and issuing certificates
  for later verification. The site also describes RFC 3161 and Bitcoin records.
- The site explicitly distinguishes the time a fingerprint is recorded from the
  time a photo or other file was originally captured. Preserve that limitation.
- The homepage links <https://github.com/Justyoureverydaynormalguybob/koinos-pq>.
  Its public root contains a post-quantum account contract, CLI, and supporting
  tooling, not the KoinosProof application. A public GitHub search for
  `koinosproof` found no application repository. This is not proof of closed source.
- The official SVG seal is available at
  <https://koinosproof.com/assets/brand/kp-seal-worn.svg>. Version it locally as
  `public/images/pages/ecosystem/koinosproof.svg`, adding a rounded white backing
  for contrast on the directory's dark background. Preserve the seal's geometry.

## Listing decision

- Add one card near the directory's other utilities using the existing layout.
- Include English and Spanish descriptions and the existing `unverified`
  source-code notice. Do not link the related koinos-pq project as application code.
- Link the homepage and its technical explanation. Do not promise legal
  admissibility, independently verified privacy, post-quantum security, pricing,
  or successful certification flows.
- This is a public-page inspection, not an audit or an endorsement. No account
  was created, no personal files uploaded, and no transaction was signed.

## Validation

- Clean `npm ci` and `npm run build` passed, with existing browser-data and large
  History page warnings. `git diff --check` passed.
- The locally versioned SVG parsed successfully. Its white backing improves
  contrast on the directory's dark background without changing the seal.
- Generated English and Spanish HTML each contains 22 cards, exactly one
  KoinosProof entry, and seven source-availability notices. Both new links and the
  certification-versus-capture distinction were checked in the generated output.
- Native Chrome checks confirmed the Spanish card at desktop and 390px mobile
  width, including the logo, notice, and links, without visible clipping.
- The addition is isolated from the user's unrelated local changes and based on
  `master` after PR #148 was merged.
