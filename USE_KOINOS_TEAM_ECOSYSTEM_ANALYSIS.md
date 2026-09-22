# Rex and Use Koinos catalog update

Research and implementation notes verified on **September 13, 2026**.

## Request interpreted

- Add **Rex** to the team page using the public avatar and handle from
  `https://t.me/KoinosRex`.
- Credit Rex as the creator of **Use Koinos**.
- Add the three Use Koinos tools with dedicated public routes to the existing
  ecosystem directory: **Wallet**, **NFT Studio**, and **Token Lab**.
- Do not duplicate the other applications visible in the supplied screenshot.

The supplied handle was described as Instagram, but its URL is a Telegram
profile, so the implementation uses a Telegram link and icon.

## Live source checks

The live navigation and page metadata at `https://usekoinos.com/` identify:

| Tool | Public route | Current reader-facing function |
| --- | --- | --- |
| Use Koinos Wallet | `https://usekoinos.com/wallet` | Create or import a browser account, inspect balances and mana, and export a local key backup. |
| NFT Studio | `https://usekoinos.com/nft` | Draw or upload artwork, mint it through the sponsored flow, and send it to another account. |
| Token Lab | `https://usekoinos.com/token` | Deploy a token with configurable identity, supply, logo, and minting policy, then transfer, mint, or burn tokens. |

All three routes, the Telegram profile, and Rex's public GitHub profile returned
HTTP 200 during the check. The current Use Koinos repository is
`https://github.com/therexdev/discover-koinos`; it contains the Wallet, NFT
Studio, and Token Lab pages in one shared application rather than three separate
repositories.

The remaining applications in the supplied screenshot were already present in
the ecosystem directory: Aurvania, OURO, Trade Koinos, Koinos AI, and KoinosKit.

## Presentation decisions

- Preserve the existing team grid and ecosystem card layout.
- Use Rex's current 320 x 320 public Telegram avatar as a local, versioned team
  image.
- Place the three tools next to the existing Discover Koinos entry and link each
  card to its exact route plus the shared source repository.
- The live application does not publish separate brand marks for these tools.
  Use local functional SVG marks based on the wallet, pixel-art, and token
  concepts already used by the interface, instead of repeating the generic
  Koinos logo three times.
- Provide both English copy and explicit Spanish translations.

## Validation plan

- Validate each new SVG as XML.
- Run `npm run history:i18n:check`, `npm run build`, and `git diff --check`.
- Inspect Team and Ecosystem at desktop and 390 x 844 mobile widths, including
  Spanish copy and horizontal overflow.
