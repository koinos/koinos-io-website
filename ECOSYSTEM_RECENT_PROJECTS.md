# Inventory of Recent Koinos Ecosystem Projects

> Preparatory research for a future update to `koinos.io/ecosystem`.
> Information current as of **August 26, 2026**. This document does not yet modify the ecosystem page.

## Scope and conclusion

Two Telegram conversations were reviewed:

- **Koinos** (`@koinos_community`), focusing on Rex's activity between July 31 and August 26, 2026.
- **Project Phoenix (The Rebirth of Koinos)**, the private group shared by Rex for technical discussions and early testing.

The clearest evidence is [Rex's own August 26 summary](https://t.me/koinos_community/367427): **KAI/Koinos AI, OURO, Trade Koinos, Aurvania, and Use Koinos**. **KoinosKit**, which was developed and released during the same period, should be added to that list. **Free Koinos Node** should also be documented as a related experimental variant.

The name **Project Phoenix** does not represent another application that needs its own card. The group began around a proposal for the “rebirth” of Koinos, but on August 13 it became the technical discussion space for **Koinos AI**. It was later also used to test other Rex applications. It should therefore be treated as a working group or umbrella, not as a standalone product.

## Candidate summary

| Application | Category | Observed status | Website | Source code | Recommendation for `ecosystem` |
| --- | --- | --- | --- | --- | --- |
| Koinos AI | Local AI / compute network | Alpha; network and KAI on Harbinger/testnet | [koinosai.com](https://koinosai.com/) | [App](https://github.com/therexdev/kaiapp) · [Website](https://github.com/therexdev/kai) | Include only with an **Alpha / Testnet** label |
| Discover Koinos (Use Koinos) | Interactive onboarding | Live preview; real on-chain actions | [usekoinos.com](https://usekoinos.com/) | [discover-koinos](https://github.com/therexdev/discover-koinos) | Include as **Preview** after settling the name and creating a distinct icon |
| Trade Koinos | Order-book DEX | Live on mainnet | [Landing page](https://tradekoinos.com/) · [App](https://app.tradekoinos.com/) | [Token-Trading](https://github.com/therexdev/Token-Trading) | Include |
| OURO | NFT marketplace | Live on mainnet | [ouro.lifestyle](https://ouro.lifestyle/) | [marketplace](https://github.com/therexdev/marketplace) | Include |
| Aurvania | Game / NFTs | Live and playable on mainnet | [aurvania.quest](https://aurvania.quest/) | No public repository found | Include and identify it as an independent community project |
| KoinosKit | Node operation | Public release for Windows, macOS, and Linux | [koinoskit.site](https://koinoskit.site/) | [Koinos-Node](https://github.com/therexdev/Koinos-Node) | Include with a warning that this is experimental software handling keys and funds |
| Free Koinos Node | Node operation / distribution | Experimental release; no dedicated website | [Latest release](https://github.com/therexdev/free-koinos-node/releases/latest) | [free-koinos-node](https://github.com/therexdev/free-koinos-node) | Hold until its branding, landing page, and distinct icon are clarified |

## 1. Koinos AI (KAI)

<img src="https://raw.githubusercontent.com/therexdev/kaiapp/595610e7555883933768879a07d29bc491bc1e2f/build/icon.png" alt="Koinos AI icon" width="96">

- **Application:** Koinos AI.
- **Category:** Local AI, OpenAI-compatible API, and experimental distributed-compute network.
- **Observed owner/maintainer:** Rex / `therexdev`.
- **Status:** Downloadable alpha. The KAI economy and network are on Harbinger/testnet, and KAI has no monetary value at this stage. The public release verified at the cutoff is [v0.49.0](https://github.com/therexdev/kaiapp/releases/tag/v0.49.0), with Windows installers and AppImages for Linux x64/arm64.
- **Description:** A local-first desktop application for running private models on the user's computer, exposing a local OpenAI-compatible API, and optionally contributing idle capacity to the network in exchange for testnet KAI.
- **Suggested website copy:** “Koinos AI is a local-first desktop AI app and experimental compute network. Run private models on your own hardware, expose an OpenAI-compatible API, and optionally contribute idle compute for testnet KAI rewards.”
- **Icon:** [PNG pinned to the verified commit](https://raw.githubusercontent.com/therexdev/kaiapp/595610e7555883933768879a07d29bc491bc1e2f/build/icon.png).
- **Links:** [website](https://koinosai.com/) · [alpha download](https://koinosai.com/testers) · [documentation](https://koinosai.com/docs/) · [app/core on GitHub](https://github.com/therexdev/kaiapp) · [website on GitHub](https://github.com/therexdev/kai) · [X](https://x.com/KoinosAIApp).
- **Telegram evidence:** [Alpha announcement](https://t.me/koinos_community/367147), [application features](https://t.me/koinos_community/367166), [Koinos Code testing](https://t.me/koinos_community/367297), and Project Phoenix messages #51 (alpha), #106 (documentation), and #196 (GPU load management).
- **Cautions:** The request scheduler was still described as centralized in Project Phoenix #154, with decentralization planned for a later phase. Do not present Koinos Code as a separate product or describe the network as fully decentralized or running on mainnet.

## 2. Discover Koinos (name used by Rex: Use Koinos)

<img src="https://raw.githubusercontent.com/therexdev/discover-koinos/7e05f3b97272126e11e1ea5bb3c83db7c27d4c9a/public/assets/brand/Koinos-Icon.svg" alt="Provisional Discover Koinos icon" width="96">

- **Application:** Discover Koinos / Use Koinos.
- **Category:** Interactive onboarding and on-chain playground.
- **Observed owner/maintainer:** Rex / `therexdev`, based on a community proposal for a new-user onboarding flow.
- **Status:** Live preview. The site lets visitors create a local account, mint an NFT, and deploy a real token with sponsored mana. On August 26, group members successfully tested both NFT minting and token launching.
- **Description:** A guided experience that lets newcomers discover Koinos by using it: create an account without a wallet extension, mint an NFT, and launch a token for free before being directed to ecosystem tools and documentation.
- **Suggested website copy:** “Discover Koinos is an interactive onboarding gateway where newcomers can create a Koinos account, mint an NFT, and launch a token in minutes, with sponsored mana and no wallet extension required.”
- **Icon:** The application currently uses the generic Koinos icon; [SVG source](https://raw.githubusercontent.com/therexdev/discover-koinos/7e05f3b97272126e11e1ea5bb3c83db7c27d4c9a/public/assets/brand/Koinos-Icon.svg). A distinct identity should be created or requested before integration.
- **Links:** [website](https://usekoinos.com/) · [GitHub](https://github.com/therexdev/discover-koinos).
- **Telegram evidence:** [Rex refers to it as Use Koinos](https://t.me/koinos_community/367420), [planned integration with the rest of the suite](https://t.me/koinos_community/367394), Project Phoenix #169–170 (testing and integrations), and #200–202 (a token launched by a tester).
- **Cautions:** The branding is inconsistent: **Use Koinos** is used on Telegram and in the domain, while **Discover Koinos** appears in the site title and README. A canonical name should be chosen before creating the card. Sponsored mana has budgets and limits and should not be presented as unlimited capacity.

## 3. Trade Koinos

<img src="https://raw.githubusercontent.com/therexdev/Token-Trading/f74c9d6c4043af47f83a078b854cea0a0a0f0dfb/frontend/public/favicon.svg" alt="Trade Koinos icon" width="96">

- **Application:** Trade Koinos.
- **Category:** Decentralized exchange with an on-chain order book.
- **Observed owner/maintainer:** Rex / `therexdev`.
- **Status:** Live on Koinos mainnet. The app and contract are operational, and new pairs can be added permissionlessly.
- **Description:** A non-custodial DEX based on a fully on-chain limit order book. It supports trading KOIN, VHP, and Vortex assets through orders signed with Kondor and sponsored mana.
- **Suggested website copy:** “Trade Koinos is a non-custodial, fully on-chain orderbook DEX for Koinos. Place limit or market orders, inspect live depth and trade history, and list new pairs directly from the app.”
- **Icon:** [Official SVG favicon](https://raw.githubusercontent.com/therexdev/Token-Trading/f74c9d6c4043af47f83a078b854cea0a0a0f0dfb/frontend/public/favicon.svg).
- **Links:** [website](https://tradekoinos.com/) · [app](https://app.tradekoinos.com/) · [GitHub](https://github.com/therexdev/Token-Trading).
- **Telegram evidence:** [Initial public promotion](https://t.me/koinos_community/366904), [permissionless pairs](https://t.me/koinos_community/367080), [fixed-price sales](https://t.me/koinos_community/367189), and the planned onboarding integration in [#367394](https://t.me/koinos_community/367394).
- **Cautions:** “Zero slippage” should be limited to limit orders that execute at the specified price. Google/X/biometric logins and one-click listing from Use Koinos were announced as future work, not confirmed current functionality.

## 4. OURO

<img src="https://raw.githubusercontent.com/therexdev/marketplace/8626715d63cf2a5681829c1621d551352f8ac23d/public/assets/mark.svg" alt="OURO icon" width="96">

- **Application:** OURO.
- **Category:** NFT marketplace.
- **Observed owner/maintainer:** Rex / `therexdev`.
- **Status:** Live on mainnet with public source code. Rex reported that 19 recoverable collections had been added by August 9.
- **Description:** A community successor to Kollection for discovering, creating, listing, buying, and selling KCS-2 NFTs in KOIN. Sales are non-custodial, creator royalties are honored, and the platform sponsors transaction mana.
- **Suggested website copy:** “OURO is a Koinos NFT marketplace for discovering, creating, listing, and trading KCS-2 assets in KOIN, with non-custodial listings, creator royalties, and sponsored mana.”
- **Icon:** [Official SVG mark](https://raw.githubusercontent.com/therexdev/marketplace/8626715d63cf2a5681829c1621d551352f8ac23d/public/assets/mark.svg).
- **Links:** [website](https://ouro.lifestyle/) · [GitHub](https://github.com/therexdev/marketplace).
- **Telegram evidence:** [Testing opened](https://t.me/koinos_community/366820), [collections added](https://t.me/koinos_community/366933), and the [proposed Koinos AI image-generation integration](https://t.me/koinos_community/367382).
- **Cautions:** Image generation through Koinos AI and automatic listing from Use Koinos were described as integrations under development. They should not yet be included in the public description.

## 5. Aurvania

<img src="https://aurvania.quest/assets/img/icon-192.png?v=20260818l" alt="Aurvania icon" width="96">

- **Application:** Aurvania.
- **Category:** Free-to-play / play-to-own game with NFT assets.
- **Observed owner/maintainer:** Rex.
- **Status:** Live and playable on Koinos mainnet. `aurvania.quest` is the current canonical domain; the retired `koinoscrusaders.com` domain serves the same experience and redirects non-file routes.
- **Description:** An open-world dungeon crawler with 91 creatures to catch and evolve, dungeons to explore, and items that can become real NFTs. Access uses a Web2-like Google or email login, and the application sponsors blockchain usage.
- **Suggested website copy:** “Aurvania is a free-to-play, play-to-own dungeon crawler on Koinos. Catch and evolve creatures, explore dungeons, and own in-game relics as NFTs without needing a wallet or paying gas.”
- **Icon:** [Official PNG](https://aurvania.quest/assets/img/icon-192.png?v=20260818l).
- **Links:** [website](https://aurvania.quest/) · [play](https://aurvania.quest/play) · [documentation](https://aurvania.quest/docs.html) · **GitHub:** no verifiable public repository was found.
- **Telegram evidence:** [Initial rebrand](https://t.me/koinos_community/366791), [major update](https://t.me/koinos_community/367173), and [current website](https://t.me/koinos_community/367380).
- **Cautions:** Treat **Koinos Crusaders** as a legacy name and URL, not as a second card. Do not label the project open source unless a verifiable public repository becomes available.

## 6. KoinosKit (Koinos Node Desktop)

<img src="https://raw.githubusercontent.com/therexdev/Koinos-Node/894014e587c50b4d4e21d13661a3a3cf57296d42/build/icon.png" alt="KoinosKit icon" width="96">

- **Application:** KoinosKit; the repository and binaries are named Koinos Node Desktop.
- **Category:** Wallet and node/block-producer manager.
- **Observed owner/maintainer:** Rex / `therexdev`.
- **Status:** Public [v0.4.4 release](https://github.com/therexdev/Koinos-Node/releases/tag/v0.4.4) for Windows, macOS arm64, and Linux x64. MIT-licensed with public source code.
- **Description:** A desktop application for creating and backing up a wallet, converting KOIN to VHP, installing and managing the official Koinos microservices through Docker, performing a quick sync, registering the producer key, and tracking rewards and returns from a dashboard.
- **Suggested website copy:** “KoinosKit is an open-source desktop app for running and monitoring a Koinos block-producing node, with guided setup, wallet and VHP management, quick sync, and reward tracking.”
- **Icon:** [Repository PNG](https://raw.githubusercontent.com/therexdev/Koinos-Node/894014e587c50b4d4e21d13661a3a3cf57296d42/build/icon.png).
- **Links:** [website](https://koinoskit.site/) · [GitHub](https://github.com/therexdev/Koinos-Node) · [releases](https://github.com/therexdev/Koinos-Node/releases) · [landing-page repository](https://github.com/therexdev/koinoskit).
- **Telegram evidence:** [First live version](https://t.me/koinos_community/366897), [integrated bridge/swap](https://t.me/koinos_community/366946), and [node-accessibility goal](https://t.me/koinos_community/366947).
- **Cautions:** The application handles real keys and funds, and its builds are documented as unsigned. The card/Coinbase purchase flow was still awaiting approval in Telegram and should be tested end to end before being advertised as complete.

## 7. Free Koinos Node

<img src="https://raw.githubusercontent.com/therexdev/free-koinos-node/7e80e5a45afcf2a6ec0a34c2527f732eac3e639c/build/icon.png" alt="Provisional Free Koinos Node icon" width="96">

- **Application:** Free Koinos Node.
- **Category:** Community node with profit redistribution.
- **Observed owner/maintainer:** Rex / `therexdev`.
- **Status:** Experimental, with a public [v0.6.2 release](https://github.com/therexdev/free-koinos-node/releases/tag/v0.6.2) for Windows, macOS arm64, and Linux x64. It has no dedicated landing page.
- **Description:** A Koinos Node Desktop variant that can redistribute part of the profit generated by its node among eligible active producers and reburn the remainder to sustain its own VHP.
- **Suggested website copy:** “Free Koinos Node is an experimental community-distribution variant of Koinos Node Desktop that can share node profit with eligible active producers while reburning the remainder to sustain its own VHP.”
- **Icon:** It currently reuses the same base icon as KoinosKit; [repository PNG](https://raw.githubusercontent.com/therexdev/free-koinos-node/7e80e5a45afcf2a6ec0a34c2527f732eac3e639c/build/icon.png).
- **Links:** [GitHub](https://github.com/therexdev/free-koinos-node) · [releases](https://github.com/therexdev/free-koinos-node/releases).
- **Telegram evidence:** The mechanism appears in Project Phoenix #79, with testing and distributions discussed in #114 and #127–150. Rex also showed his “distribution node” in [Koinos #367367](https://t.me/koinos_community/367367).
- **Cautions:** Do not confuse this project with KoinosKit or the node integrated into Koinos AI. Before it is added to the ecosystem page, it needs distinct branding, a dedicated landing page, and a simple public explanation of eligibility and the distribution model.

## Related names that should not become separate cards

| Name | What it actually represents | Recommended treatment |
| --- | --- | --- |
| Project Phoenix | Private group and umbrella name for the conversation; since August 13, primarily the Koinos AI technical hub | Mention it as a community/group, not as an application |
| KAI | Settlement token/economic layer of the Koinos AI network; currently on testnet | Include it within the Koinos AI entry |
| Koinos Code | Coding function/agent within Koinos AI | Include it within the Koinos AI entry when it matures |
| Koinos AI Node | Provider mode/component of Koinos AI | Do not create another card |
| Koinos Crusaders | Legacy name and domain now serving Aurvania | Redirect to Aurvania; do not duplicate |
| Koinos Node Desktop | Technical name of the KoinosKit repository and binaries | Use one card and clarify both names |
| `kai` / `koinoskit` | Repositories for the respective websites | Link them as supporting code, not separate projects |

## Mentioned ideas that are not yet catalogable entries

- **Pet-care game connected to Koinos Crusaders/Aurvania:** Rex discussed another game and shared pets, but did not publish a name, website, or repository. It is a developing idea, not a catalogable application.
- **Android mobile node:** Proposed as a future part of KoinosKit, not as an independent product.
- **Koinos AI image generation inside OURO:** A proposed integration, not a separate application or a feature that should be announced as complete.
- **New chain / Phoenix proposal:** The conversation shifted toward achieving similar goals on Koinos and later toward Koinos AI. There is no new public network to add to the ecosystem.

## Risks and checks before updating the page

1. **Label maturity.** Koinos AI remains alpha/testnet, Use Koinos remains a preview, and Free Koinos Node is experimental.
2. **Do not equate an accessible website with an audited product.** No evidence of independent audits for these projects was found during this review.
3. **Resolve ambiguous branding.** Choose Discover Koinos vs. Use Koinos and KoinosKit vs. Koinos Node Desktop. Give Free Koinos Node its own icon if it is published.
4. **Recheck sensitive claims.** Verify card on-ramping, shared logins, automatic listings, supported platforms, and mainnet status immediately before editing `ecosystem.js`.
5. **Maintain editorial independence.** These are independent community applications. Their presence on koinos.io should not be presented as an audit, guarantee, or endorsement.
6. **Use local icons when implementing.** The icons in this document point to verified sources. For production, they should be copied into `public/images/pages/ecosystem/`, optimized, and versioned in this repository.

## Telegram sources used

- Public [Koinos channel (`@koinos_community`)](https://t.me/koinos_community), including Rex's messages and tester responses between July 31 and August 26, 2026.
- Private [Project Phoenix (The Rebirth of Koinos)](https://t.me/+heWu1JYBWdowMWQx) group, messages #3–202 between August 8 and August 26, 2026.
- Project Phoenix milestones: #5 (pivot away from the new-chain idea), #6 (Koinos AI technical discussion), #51 (alpha), #79 (relationship with the Koinos node), #106 (documentation), #154 (scheduler still centralized), #169–170 (Use Koinos testing), and #196 (GPU usage correction).

All website, repository, and icon links above responded successfully on August 26, 2026.
