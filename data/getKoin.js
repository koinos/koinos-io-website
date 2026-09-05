// Content for the /get-koin beginner guide.
//
// Everything a maintainer needs to change lives here: official links, the
// wallet/route matrix and the step copy. Token addresses come from
// data/koinTokens.js, which the homepage exchange section also uses.
//
// MAINTENANCE: re-walk every route and re-take every screenshot after any
// bridge, token or contract migration, then bump LAST_VERIFIED. Captions derive
// their date from it, so a stale date is visible on the page.

import { SWAP_LINKS, VKOIN_CONTRACTS, contractFor } from "@/data/koinTokens";

export const LAST_VERIFIED = "24 August 2026";

const IMG = "/images/pages/get-koin";

export const CONTRACTS = VKOIN_CONTRACTS;

export const OFFICIAL_LINKS = {
  vortex: "https://vortexbridge.io/bridge",
  koindx: SWAP_LINKS.koindx,
  // The guide links Kondor 1.3 (Chrome listing "Kondor", id ghipkefk…), not
  // Kondor 2 from kondorwallet.com. Kondor 2.0.3's "Use free mana" keeps the
  // dApp's rc_limit (= the signer's own mana, 0 on a new account) and retries
  // once with +1 KOIN, so a new account cannot pay the ~1.9 KOIN Vortex redeem.
  // Kondor 1 dry-runs every transaction and, when the signer's mana is short
  // and the sharer has mana, switches the payer to the sharer by itself
  // (estimateAndAdjustMana); verified
  // from a 0-KOIN account on mainnet 26 Aug 2026 (tx 0x1220ccd3…d33d).
  // Bug reported to the Kondor team. Switch back to kondorwallet.com once
  // Kondor 2 handles it.
  kondor:
    "https://chromewebstore.google.com/detail/kondor/ghipkefkpgkladckmlmdnadmcchefhjl",
  mana: "https://docs.koinos.io/overview/mana/",
  telegram: "https://telegram.koinos.io",
};

function captured(where) {
  return `${where}, captured ${LAST_VERIFIED}.`;
}

function sourced(what, where) {
  return `${what} Source: ${where}, retrieved ${LAST_VERIFIED}.`;
}

// --- Wallets --------------------------------------------------------------

export const WALLETS = [
  {
    id: "metamask",
    name: "MetaMask",
    family: "Ethereum and Base",
    install: "https://metamask.io/download",
    installLabel: "metamask.io/download",
    routes: ["ethereum", "base"],
    addressKind: "one Ethereum-style address",
    addressNote: "It works on Ethereum and on Base, not on Solana or Koinos.",
    quirks: [
      "The network name sits at the top of the window. Check it before you sign.",
      "If vKOIN does not appear after a swap, use Import tokens and paste the address from this page.",
      "When a site asks for a spending cap, set it to the amount you are using, not unlimited.",
    ],
  },
  {
    id: "rabby",
    name: "Rabby",
    family: "Ethereum and Base",
    install: "https://rabby.io/",
    installLabel: "rabby.io",
    routes: ["ethereum", "base"],
    addressKind: "one Ethereum-style address",
    addressNote: "It works on Ethereum and on Base, not on Solana or Koinos.",
    quirks: [
      "Rabby switches network to match the site, so you rarely do it by hand.",
      "Before you sign, it shows the balance changes it expects. If they are not the swap you asked for, reject.",
      "Some sites list it as Browser Wallet or Injected Wallet rather than Rabby.",
    ],
  },
  {
    id: "phantom",
    name: "Phantom",
    family: "Solana, Ethereum and Base",
    install: "https://phantom.com/download",
    installLabel: "phantom.com/download",
    routes: ["ethereum", "base", "solana"],
    addressKind: "two addresses",
    addressNote:
      "One 0x address shared by Ethereum and Base, and a separate Solana address. Copy the one for the network in your plan.",
    quirks: [
      "Open Receive and pick the network first. Ethereum and Base share one address; Solana has its own.",
      "Phantom finds tokens by itself and has no import-by-address. If vKOIN is missing, check the transaction in the explorer, then Phantom's hidden tokens list.",
      "Keep some SOL or ETH on the network you use; every transaction costs a fee, and on Ethereum it is not always small.",
    ],
  },
  {
    id: "kondor",
    name: "Kondor",
    family: "Koinos",
    install:
      "https://chromewebstore.google.com/detail/kondor/ghipkefkpgkladckmlmdnadmcchefhjl",
    installLabel: "the Chrome Web Store (Kondor 1.3)",
    routes: ["koinos"],
    addressKind: "a Koinos address",
    addressNote: "It cannot receive anything sent on Ethereum, Base or Solana.",
    quirks: [
      "Kondor shows mana next to your KOIN balance. Mana is what Koinos transactions use.",
      "When your account cannot pay a transaction's mana and Kondor's free-mana account can, the signing pop-up switches the payer to that account by itself — you see it in the Payer field.",
      "This guide is written for Kondor 1.3, the listing linked above — not Kondor 2. The FAQ explains why.",
      "Its receive screen says to send only Koinos assets to it. Take that literally.",
    ],
  },
];

// --- Routes ---------------------------------------------------------------
//
// Vortex bridges Koinos <-> Ethereum only (its network chooser offers exactly
// those two). vKOIN on Base and Solana is the Ethereum vKOIN moved there through
// Portal (Wormhole). Evidence: the Base contract answers Wormhole
// TokenImplementation.chainId() = 2 (Ethereum origin), the Solana mint
// authority is the Wormhole token bridge, and the project's own announcements
// (data/history-content.json) describe the Wormhole/Portal route. So those
// routes stop at vKOIN.
//
// The Koinos route is not a way to buy a first KOIN: an empty Koinos account
// holds nothing to trade. Its lack of mana is not the blocker — Kondor can have
// its free-mana sharer pay instead (see the redeem note in bridgeStep).

export const ROUTES = [
  {
    id: "ethereum",
    name: "Ethereum",
    tagline: "Buy vKOIN on Ethereum, then bridge it to native KOIN.",
    buyAsset: "ETH",
    network: "Ethereum",
    gasAsset: "ETH",
    dex: "DeFiLlama",
    dexUrl: SWAP_LINKS.ethereum,
    reachesNativeKoin: true,
    outcome: "native KOIN on Koinos",
    outcomeShort: "Ends with native KOIN",
    plan: "Buy ETH → send it to your wallet → swap it for vKOIN → bridge to Koinos with Vortex.",
    note: "The only route the Vortex bridge serves end to end.",
  },
  {
    id: "base",
    name: "Base",
    tagline: "Buy vKOIN on Base. Lower fees, no direct bridge to Koinos.",
    buyAsset: "ETH",
    network: "Base",
    gasAsset: "ETH on Base",
    dex: "DeFiLlama",
    dexUrl: SWAP_LINKS.base,
    reachesNativeKoin: false,
    outcome: "vKOIN on Base",
    outcomeShort: "Ends with vKOIN",
    plan: "Buy ETH → send it to your wallet on Base → swap it for vKOIN.",
    note: "Base vKOIN is the Ethereum vKOIN moved over through Portal (Wormhole). Vortex does not serve Base, so this route ends at vKOIN. For native KOIN, use the Ethereum route.",
  },
  {
    id: "solana",
    name: "Solana",
    tagline: "Buy vKOIN on Solana. No direct bridge to Koinos.",
    buyAsset: "SOL",
    network: "Solana",
    gasAsset: "SOL",
    dex: "Jupiter",
    dexUrl: SWAP_LINKS.solana,
    reachesNativeKoin: false,
    outcome: "vKOIN on Solana",
    outcomeShort: "Ends with vKOIN",
    plan: "Buy SOL → send it to your wallet → swap it for vKOIN on Jupiter.",
    note: "Solana vKOIN is the Ethereum vKOIN moved over through Portal (Wormhole). Vortex does not serve Solana, so this route ends at vKOIN. For native KOIN, use the Ethereum route.",
  },
  {
    id: "koinos",
    name: "Koinos",
    tagline: "Set up Kondor, fund it, then trade on KoinDX.",
    buyAsset: null,
    network: "Koinos",
    gasAsset: "mana",
    dex: "KoinDX",
    dexUrl: SWAP_LINKS.koindx,
    reachesNativeKoin: true,
    outcome: "a working Koinos wallet",
    outcomeShort: "Needs KOIN first",
    plan: "Install Kondor → receive native KOIN through the Ethereum route → trade on KoinDX.",
    note: "Not a way to buy your first KOIN — an empty Koinos account has nothing to trade yet. Fund it first through the Ethereum route.",
  },
];

// --- Compatibility --------------------------------------------------------

export function isSupported(walletId, routeId) {
  const wallet = WALLETS.find((w) => w.id === walletId);
  return Boolean(wallet && wallet.routes.includes(routeId));
}

export function suggestionFor(walletId, routeId) {
  const wallet = WALLETS.find((w) => w.id === walletId);
  const route = ROUTES.find((r) => r.id === routeId);
  if (!wallet || !route) return null;
  const worksWith = WALLETS.filter((w) => w.routes.includes(routeId)).map(
    (w) => w.name
  );
  return {
    message: `${wallet.name} is not used for the ${route.name} route.`,
    walletFix: `${wallet.name} works with ${wallet.routes
      .map((id) => ROUTES.find((r) => r.id === id).name)
      .join(", ")}.`,
    routeFix: worksWith.length
      ? `${route.name} is shown with ${worksWith.join(" or ")}.`
      : null,
    suggestedRoute: wallet.routes[0],
  };
}

// --- Wallet screenshots ---------------------------------------------------
//
// Extension pop-ups cannot be captured from a normal browser session, so these
// come from each vendor's own documentation or store listing, credited in the
// caption.

const WALLET_IMAGES = {
  metamask: {
    address: {
      src: `${IMG}/metamask-network.png`,
      alt: "The MetaMask extension window with the network selector open.",
      caption: sourced("The network selector.", "support.metamask.io"),
      frame: "phone",
    },
    token: {
      src: `${IMG}/metamask-import-token.png`,
      alt: "The MetaMask Import tokens dialog on the Custom token tab, with a warning that anyone can create a fake version of an existing token.",
      caption: sourced(
        "Adding a token by address. The example is a different token.",
        "support.metamask.io"
      ),
      frame: "phone",
    },
  },
  rabby: {
    sign: {
      src: `${IMG}/rabby-sign.png`,
      alt: "Rabby's signing screen: the token amount leaving the wallet, the chain, the destination address, the fee, and Sign and Cancel buttons.",
      caption: sourced(
        "What Rabby shows before you sign: amount, chain, destination and fee. The example is a different token.",
        "Rabby's Chrome Web Store listing"
      ),
      frame: "phone",
    },
  },
  phantom: {
    address: {
      src: `${IMG}/phantom-receive.png`,
      alt: "Two Phantom screens: the Receive button, then a list of networks each with its own address to copy.",
      caption: sourced(
        "Receive lists every network. Ethereum and Base show the same 0x address; Solana has its own.",
        "help.phantom.com"
      ),
    },
  },
  kondor: {
    // No Kondor 1.3 screenshot yet: kondorwallet.com only shows Kondor 2, and
    // the Chrome Web Store page carries no real screenshots. Add one from the
    // extension itself (Receive view) when available.
    address: null,
  },
};

// --- Steps ----------------------------------------------------------------

function walletSetupStep(wallet, route) {
  return {
    id: "wallet",
    title: `Install ${wallet.name} and copy your address`,
    context: `Install only from ${wallet.installLabel}, never from an ad or a link someone sent. The recovery phrase goes on paper — whoever has it owns the wallet, and nobody legitimate will ever ask for it.`,
    micro: [
      `Add the extension from ${wallet.installLabel} and create a wallet.`,
      "Write the recovery phrase on paper. No photo, no note, no cloud.",
      `Open Receive and copy your ${route.network} address.`,
    ],
    image: WALLET_IMAGES[wallet.id].address || null,
    callouts: [
      {
        type: "warning",
        text: `${wallet.name} gives you ${wallet.addressKind}. ${wallet.addressNote} An asset sent on the wrong network is usually gone.`,
      },
    ],
  };
}

function kondorSetupStep() {
  return {
    id: "kondor",
    title: "Install Kondor for the Koinos side",
    context:
      "Native KOIN lives on Koinos and your Ethereum wallet cannot hold it. Install Kondor 1.3 from the link below; this guide is written for that version (the FAQ explains why not Kondor 2).",
    micro: [
      "Add the Kondor extension from the link above.",
      "Create a wallet and write the recovery phrase on paper.",
      "Open Receive and copy your Koinos address.",
    ],
    link: { href: OFFICIAL_LINKS.kondor, label: "Open Kondor in the Chrome Web Store" },
    image: WALLET_IMAGES.kondor.address,
    callouts: [
      {
        type: "warning",
        text: "Only Koinos assets can be sent to this address.",
      },
      {
        type: "tip",
        text: "A new Koinos account holds no KOIN, so it has no mana of its own yet. Kondor 1.3 covers that by itself: when your account cannot pay and its free-mana account can, the signing pop-up puts that account in the Payer field. Nothing to switch on — it carries you through the redeem in the last step.",
      },
    ],
  };
}

function buyStep(route) {
  return {
    id: "buy",
    title: `Buy ${route.buyAsset} on an exchange`,
    context: `You cannot buy KOIN with a card. You buy ${route.buyAsset} first and swap it later; ${route.buyAsset} also pays the network fees, so buy a little more than you plan to swap.`,
    micro: [
      "Open an account at an exchange available in your country. Coinbase, Kraken and Binance are examples, not recommendations.",
      `Buy ${route.buyAsset}.`,
      `Check that the exchange can withdraw ${route.buyAsset} on ${route.network} before you go on.`,
    ],
    callouts: [
      {
        type: "cost",
        text: "Buying and withdrawing each carry a fee. Both are shown before you confirm.",
      },
    ],
  };
}

function withdrawStep(wallet, route) {
  return {
    id: "withdraw",
    title: `Send it to ${wallet.name} on ${route.network}`,
    context: `This moves your ${route.buyAsset} off the exchange into the wallet you control.`,
    micro: [
      `Paste your ${wallet.name} address into the exchange's withdrawal form.`,
      `Select ${route.network} as the network.`,
      "Compare the whole address, not just the first and last characters — scammers make addresses that match at the ends.",
      "Send a small test amount, wait for it to arrive, then send the rest.",
    ],
    callouts: [
      {
        type: "warning",
        text: `The network must say ${route.network}. The same address exists on other networks and the exchange will not stop you.`,
      },
    ],
  };
}

function swapStep(wallet, route) {
  const contract = contractFor(route.network);
  return {
    id: "swap",
    title: `Swap ${route.buyAsset} for vKOIN on ${route.dex}`,
    context: `The button below opens ${route.dex} with the network and token already set. Check your browser's address bar afterwards — fake swap sites exist.`,
    micro: [
      `Connect ${wallet.name} and check the network is ${route.network}.`,
      `Enter the amount, keeping some ${route.gasAsset} back for fees.`,
      `Compare the token address with ${contract ? contract.address : "the official one"}.`,
      "Read the amount you will receive, then sign.",
    ],
    link: { href: route.dexUrl, label: `Open ${route.dex}` },
    image:
      route.id === "ethereum"
        ? {
            src: `${IMG}/defillama-ethereum.png`,
            alt: "DeFiLlama with Ethereum selected, ETH to sell and vKOIN to buy.",
            caption: captured("swap.defillama.com"),
          }
        : route.id === "base"
        ? {
            src: `${IMG}/defillama-base.png`,
            alt: "DeFiLlama with Base selected, ETH to sell and vKOIN to buy.",
            caption: captured("swap.defillama.com"),
          }
        : {
            src: `${IMG}/jupiter-solana.png`,
            alt: "Jupiter with SOL to sell and vKOIN to buy, showing a warning label under vKOIN.",
            caption: captured(
              "jup.ag. The warning marks a thinly traded token; confirm the address yourself"
            ),
          },
    extraImages: [
      WALLET_IMAGES[wallet.id].sign,
      WALLET_IMAGES[wallet.id].token,
    ].filter(Boolean),
    callouts: [
      {
        type: "warning",
        text: "Check the address, not the name or logo. Anyone can create a token called vKOIN.",
      },
      {
        type: "cost",
        text: `A network fee in ${route.gasAsset}, a trading fee, and on larger orders a worse price. What the site shows before you sign is what applies.`,
      },
    ],
  };
}

// Verified 26 Aug 2026 against the live vortexbridge.io bundle and mainnet:
// the redeem is complete_transfer (entry 0x4d4d3ef9) on the Koinos bridge
// contract 1aqHtNRDkiAZeFtuM8fRFuurcje6eHqF8. The frontend sets no payer and
// its relayer list is empty, so the signing account pays. Kondor 1.3's default
// "Optimize mana" flow dry-runs the transaction and, when the signer's mana is
// short and the sharer has enough, switches the payer to Kondor's sharer
// 162GhJwsciDiKsgwzj2t6VoFHt3RMzGKdG by itself (authorize() accepts any
// transaction, 100 KOIN of mana cap per tx), setting rc_limit from rc_used plus
// the sharer's offset; otherwise it stops with "Free mana service is congested"
// or "unavailable due to lack of funds". The "Use free mana" box under Advanced
// is only the manual form. Walked end to end on mainnet
// 26 Aug 2026 from a brand-new 0-KOIN account: the sharer paid, rc_used 1.74 KOIN
// (tx 0x1220ccd3…d33d). Kondor 2.0.3 fails this case (see OFFICIAL_LINKS).
// Expired validator signatures are renewed with request_new_signatures,
// another Koinos transaction.
function bridgeStep() {
  return {
    id: "bridge",
    title: "Bridge to Koinos with Vortex",
    context:
      "Vortex takes vKOIN on Ethereum and releases native KOIN to the Koinos address you name. It does not finish by itself: you redeem on the Koinos side, and Vortex does not pay for that transaction — by default, the account that signs it does.",
    micro: [
      "Open Vortex, read its disclaimer, then set From: Ethereum, To: Koinos, Token: vKOIN, and the amount.",
      "Paste your Kondor address and compare the whole of it.",
      "Sign the permission, then the deposit, in your wallet. Note the transaction hash.",
      "Wait, then press Redeem and Sign in Kondor's pop-up — while your account is empty, Kondor pays the mana from its free-mana account by itself, as long as that account has mana to spare. This delivers your KOIN.",
    ],
    link: { href: OFFICIAL_LINKS.vortex, label: "Open Vortex" },
    image: {
      src: `${IMG}/vortex-bridge-form.png`,
      alt: "The Vortex bridge form filled in: From Ethereum, To Koinos, 2 vKOIN, a receiving address (blurred), and the summary You will receive 2 KOIN above the Bridge button.",
      caption:
        "The bridge form filled in: 2 vKOIN from Ethereum to Koinos, with the Kondor address as the receiving address. vortexbridge.io, captured 26 August 2026.",
    },
    extraImages: [
      {
        src: `${IMG}/vortex-redeem.png`,
        alt: "The Vortex Redeem tab showing source network Ethereum, redeem network Koinos, the source transaction ID (blurred), a status box with Tx Status signed, block time, expiry and three signatures, and a Redeem button.",
        caption:
          "The Redeem tab once the validators have signed: press Redeem. If you closed the page too early, paste the source transaction ID here to resume. Captured 26 August 2026.",
      },
      {
        src: `${IMG}/kondor-sign.png`,
        alt: "Kondor 1.3's signing pop-up for the redeem: the site vortexbridge.io, the operation Complete transfer, a koin Transfer event of 2 KOIN, an Advanced link, a warning about unknown contracts, and Cancel and Sign buttons.",
        caption:
          "Kondor 1.3 asking you to sign the redeem: the operation is Complete transfer and the event shows the KOIN you receive. Press Sign. Captured 26 August 2026.",
        frame: "phone",
      },
    ],
    callouts: [
      {
        type: "cost",
        text: "Ethereum fees for the permission and the deposit. The redeem runs on Koinos and spends mana instead of a fee; while your account is still empty, Kondor's free-mana account covers it by itself if it can — if not, Kondor says so and you try again later.",
      },
      {
        type: "tip",
        text: "Bridge a small amount first, all the way through the redeem.",
      },
    ],
  };
}

function holdStep(route) {
  return {
    id: "hold",
    title: `You now hold vKOIN on ${route.network}`,
    context: `This vKOIN is the Ethereum vKOIN moved to ${route.network} through Portal (Wormhole). It sits behind two bridges, it is not native KOIN, and Vortex cannot take it from here.`,
    micro: [
      "Check the amount and the token address.",
      "Do not send it to Ethereum or to a Koinos address — a plain transfer does not cross networks.",
      "If you want native KOIN, start again on the Ethereum route.",
    ],
    callouts: [
      {
        type: "warning",
        text: "Holding a wrapped token means trusting the bridges behind it, for as long as you hold it.",
      },
    ],
  };
}

function koinosFundStep() {
  return {
    id: "fund",
    title: "Get native KOIN into Kondor",
    context:
      "KoinDX trades between assets that are already on Koinos, so something has to arrive first. Fund the account through the Ethereum route, using your Kondor address as the destination.",
    micro: [
      "Follow the Ethereum route with your Kondor address in the bridge step.",
      "Complete the redeem, then check Kondor shows KOIN and mana.",
    ],
    routeLink: {
      wallet: "metamask",
      route: "ethereum",
      label: "Show me the Ethereum route",
    },
    callouts: [
      {
        type: "warning",
        text: "Only withdraw KOIN from an exchange straight to Kondor if that exchange explicitly supports the Koinos network. Most do not.",
      },
    ],
  };
}

function koinDxSwapStep() {
  return {
    id: "koindx",
    title: "Trade on KoinDX",
    context: "KoinDX swaps between assets that already live on Koinos.",
    micro: [
      "Open app.koindx.com and accept its terms.",
      "Connect Kondor Wallet and confirm in the extension.",
      "Set both tokens, read the details, confirm in Kondor.",
    ],
    link: { href: OFFICIAL_LINKS.koindx, label: "Open KoinDX" },
    image: {
      src: `${IMG}/koindx-connect.png`,
      alt: "The KoinDX connect dialog: accept terms, then choose Kondor Wallet, My Koinos Wallet or Wallet Connect.",
      caption: captured("app.koindx.com"),
    },
    callouts: [
      {
        type: "tip",
        text: "Keep some KOIN after a trade. It is what gives the account mana.",
      },
    ],
  };
}

export function buildSteps(walletId, routeId) {
  const wallet = WALLETS.find((w) => w.id === walletId);
  const route = ROUTES.find((r) => r.id === routeId);
  if (!wallet || !route || !isSupported(walletId, routeId)) return [];

  if (route.id === "koinos") {
    return [walletSetupStep(wallet, route), koinosFundStep(), koinDxSwapStep()];
  }

  const steps = [
    walletSetupStep(wallet, route),
    buyStep(route),
    withdrawStep(wallet, route),
    swapStep(wallet, route),
  ];

  if (route.reachesNativeKoin) {
    steps.push(kondorSetupStep(), bridgeStep());
  } else {
    steps.push(holdStep(route));
  }

  return steps;
}

// --- Static copy ----------------------------------------------------------

export const INTRO = {
  title: "How to buy KOIN",
  lead: "A short guide for people who have never bought crypto before.",
  paragraphs: [
    "Pick your wallet and where you want to buy. The steps below change to match. Send a small test amount before a large one — nothing here is urgent.",
  ],
};

export const RISK_NOTE = {
  title: "Before you start",
  points: [
    "You will use an exchange, a swap site and, for native KOIN, the Vortex bridge. Each is run by someone else, each can fail, and nothing can be reversed.",
    "Vortex's own disclaimer says it is unaudited and may lose your tokens. Use only what you could afford to lose.",
  ],
};

export const NATIVE_VS_WRAPPED = {
  title: "KOIN and vKOIN are not the same thing",
  intro: null,
  columns: [
    {
      name: "Native KOIN",
      where: "On Koinos",
      points: [
        "The token of the Koinos blockchain.",
        "Gives your account mana, which pays for transactions.",
        "Held in a Koinos wallet such as Kondor.",
      ],
    },
    {
      name: "vKOIN",
      where: "On Ethereum, Base or Solana",
      points: [
        "A wrapped KOIN, issued on Ethereum by the Vortex bridge.",
        "The Base and Solana copies were moved there through Portal (Wormhole) — two bridges deep.",
        "No mana, and it cannot be used on Koinos.",
      ],
    },
  ],
  outro: [
    "Sending vKOIN to a Koinos address does not convert it; only Vortex moves value between Ethereum and Koinos. If you see wKOIN mentioned, that was an older wrapper from Chainge and is not used here.",
  ],
};

export const MANA = {
  title: "Mana",
  paragraphs: [
    "Koinos has no gas fee. Holding KOIN gives your account mana; transactions spend it and it refills over a few days. A new account holds no KOIN, so it has no mana of its own.",
    "That would leave a new wallet unable to pay for anything, so Koinos lets one account pay the mana for another. Kondor 1.3 uses this by itself: when your account cannot pay and its free-mana account can, the signing pop-up puts that account in the Payer field. That is what carries a new wallet through its first transaction.",
    "Once your KOIN arrives you have your own mana. Keep some KOIN rather than moving the whole balance out, or the account goes back to having none.",
  ],
  linkLabel: "Mana documentation",
  linkHref: OFFICIAL_LINKS.mana,
};

export const SAFETY = {
  title: "Check before every transaction",
  items: [
    "Open every site from this page, then check the address bar.",
    "Never type or photograph your recovery phrase. Nobody legitimate needs it.",
    "Asset and network together: ETH on Base is not ETH on Ethereum.",
    "Compare token and destination addresses in full, not just the ends.",
    "Small test amount first. Keep some ETH or SOL for the next step.",
    "Read every wallet pop-up. Site, token, amount and destination must match the step you are on.",
    "A token permission outlives disconnecting from a site. Approve only the amount you need, and revoke it afterwards.",
    "Ignore anyone who contacts you privately offering help, recovery or a better price.",
  ],
};

export const FAQS = [
  {
    q: "Can I buy KOIN with a card?",
    a: "Not directly. You buy ETH or SOL on an exchange, move it to your own wallet, swap it for vKOIN, and — for native KOIN — bridge that through Vortex from Ethereum.",
  },
  {
    q: "Which route should I take?",
    a: "For native KOIN: Ethereum, the only one Vortex serves end to end. Base and Solana are cheaper to trade on but end at vKOIN. The Koinos route is for when you already hold KOIN.",
  },
  {
    q: "Why can't I start on KoinDX?",
    a: "KoinDX swaps between assets that are already on Koinos. A new account holds none, so there is nothing to swap yet. Bring KOIN over from Ethereum first.",
  },
  {
    q: "What does it cost?",
    a: "An exchange fee, a withdrawal fee, a network fee per transaction, a trading fee, and a worse price on large orders. Amounts change constantly — read the screen before each confirmation.",
  },
  {
    q: "My vKOIN doesn't show in my wallet.",
    a: "Probably not lost. Check the transaction in the block explorer, then add the token using the official address on this page. Never add an address someone sent you.",
  },
  {
    q: "Why Kondor 1.3 and not Kondor 2?",
    a: "Kondor 2 (kondorwallet.com) is the newer wallet, but as of August 2026 its free-mana option cannot pay the Vortex redeem for an account that holds no KOIN yet. Kondor 1.3 can, and that is what a first purchase needs. The bug has been reported; this guide will move to Kondor 2 once it is fixed.",
  },
  {
    q: "My Kondor account is empty. Can it pay for the redeem?",
    a: "Not from its own mana — it has none until the KOIN arrives. Kondor 1.3 notices that and, if its own free-mana account has enough mana, lets it pay instead; the pop-up's Payer field shows it. If Kondor says the free mana service is congested or unavailable, keep your transaction hash and come back later; the Redeem tab picks the transfer up again.",
  },
  {
    q: "My bridge transfer is stuck.",
    a: "Don't start another. Take the source transaction hash to Vortex's Redeem tab, which resumes a transfer whose redeem did not complete. If it shows the signatures as expired, press Renew signatures — a Koinos transaction too, paid the same way while your account is empty and free mana is available — wait, then redeem.",
  },
  {
    q: "Is this financial advice?",
    a: "No. It explains a process. It does not say whether to buy, how much, or endorse any service named here. KOIN and vKOIN can lose all their value.",
  },
];

export const GLOSSARY = [
  ["Address", "Where tokens are received. Safe to share, but it only works on its own network."],
  ["Bridge", "Moves value between two blockchains. Vortex: Ethereum ↔ Koinos. Portal (Wormhole): Ethereum ↔ Base / Solana."],
  ["Contract address", "The unique identifier of a token, and the only reliable way to tell a real one from a copy."],
  ["DEX", "A swap site that trades straight from your wallet without holding your funds."],
  ["Free mana", "Kondor paying a transaction's mana from its own account instead of yours, so a wallet with no KOIN can still send a transaction. Kondor 1.3 does this by itself when your account cannot pay and that account can."],
  ["Mana", "What Koinos transactions use instead of a fee. Comes from holding KOIN and refills over time."],
  ["Network fee", "What Ethereum, Base or Solana charge per transaction, paid in ETH or SOL."],
  ["Recovery phrase", "The words that restore a wallet. Whoever has them controls it."],
  ["Wrapped token", "A token on one chain that represents an asset from another. vKOIN is wrapped KOIN."],
];

export const DISCLAIMER = [
  "This guide is educational information only, not financial, legal or tax advice. KOIN and vKOIN can lose all their value. Exchanges, wallets, swap sites and bridges are independent services with their own risks, fees and availability; Koinos does not guarantee any price, amount, completion time or that a service keeps working, and Vortex states that it is unaudited. Blockchain transactions cannot be reversed. Check the site address, network, token address, destination, amount and fees before you sign anything.",
];
