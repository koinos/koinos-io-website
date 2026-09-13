export const UI = {
  headTitle: "How to add liquidity | Koinos",
  metaDescription:
    "A safety-first guide to adding vKOIN liquidity on Uniswap v4 on Ethereum or Base, and Raydium CLMM on Solana.",
  eyebrow: "Liquidity guide",
  title: "How to add vKOIN liquidity",
  lead:
    "Choose a verified pool, understand the price range, and review every wallet request before you create a position.",
  intro:
    "This guide covers three concentrated-liquidity markets: Uniswap v4 on Ethereum and Base, and Raydium CLMM on Solana. It never asks you to send funds to a person or an address.",
  start: "Choose a network",
  riskTitle: "Before you deposit",
  riskPoints: [
    "Liquidity provision is not a savings product. Your position can lose value compared with simply holding the tokens.",
    "A position only earns fees while the market price is inside your chosen range.",
    "Only use the exact pool and token identifiers shown below. A familiar symbol or logo is not proof of identity.",
    "Keep the network's native fee token in your wallet: ETH on Ethereum, ETH on Base, or SOL on Solana.",
  ],
  networksTitle: "Three networks, three separate positions",
  networksLead:
    "vKOIN represents KOIN outside the Koinos blockchain. The networks below do not share balances, fees, or liquidity.",
  routeSummaries: {
    ethereum:
      "Ethereum Layer 1. Usually the highest transaction cost of these routes, paid in ETH.",
    base:
      "An Ethereum Layer 2. Transactions are paid with ETH held on Base, not ETH held on Ethereum.",
    solana:
      "An independent Layer 1. It uses Solana addresses and SOL for fees; WSOL is the token form of SOL used by the pool.",
  },
  prerequisitesTitle: "What you need",
  prerequisites: [
    "A compatible self-custody wallet that you control",
    "vKOIN and the matching quote token on the same selected network",
    "ETH or SOL on that network for approvals and transaction fees",
    "Time to verify the full identifiers, range, and amounts before signing",
  ],
  chooseTitle: "Choose your network",
  chooseLead:
    "Your selection stays in the URL, so you can bookmark or share the exact route.",
  openPool: "Open the exact pool",
  planTitle: "Your route",
  facts: {
    network: "Network",
    venue: "Venue",
    pair: "Pair",
    model: "Position type",
    poolFee: "Pool fee tier",
    feeAsset: "Transaction fees",
  },
  modelValue: "Concentrated liquidity",
  feeAssets: {
    ethereum: "ETH on Ethereum",
    base: "ETH on Base",
    solana: "SOL",
  },
  identifiersTitle: "Verify the identifiers",
  identifiersLead:
    "Compare the complete values in your wallet or DEX. Do not rely on shortened addresses.",
  identifierLabels: {
    tokenA: "vKOIN contract / mint",
    tokenB: "Quote-token contract / mint",
    pool: "Pool ID",
  },
  copy: "Copy",
  copied: "Copied",
  copyFailed: "Copy failed",
  copyLabel: (subject) => `Copy ${subject}`,
  copySuccess: (subject) => `${subject} copied to the clipboard.`,
  copyFailure: (subject) =>
    `Could not copy ${subject}. Select the full value and copy it manually.`,
  guideTitle: (route) => `Add liquidity on ${route.chain}`,
  stepCount: (current, total) => `Step ${current} of ${total}`,
  screenshots: {
    poolScreenshotAlt: (route) =>
      `${route.pair} pool page on ${route.venue} for ${route.chain}`,
    poolScreenshotCaption: (route) =>
      `Confirm ${route.chain}, ${route.pair}, and the complete pool ID before continuing.`,
    formScreenshotAlt: () => "Uniswap add-liquidity form on Base",
    formScreenshotCaption: () =>
      "Uniswap's add-liquidity form after opening the verified Base pool.",
    rangeScreenshotAlt: () =>
      "Uniswap price-range and deposit controls for a Base liquidity position",
    rangeScreenshotCaption: () =>
      "The chosen range determines when the position is active and earning fees.",
  },
  rangeTitle: "What concentrated liquidity means",
  rangeParagraphs: [
    "You choose a minimum and maximum price. Inside that interval, your capital can facilitate swaps and earn a share of pool fees. Outside it, the position becomes inactive and stops earning fees until the price returns.",
    "A narrower range can use capital more efficiently, but it goes out of range more easily and needs more active monitoring. A wider range is usually less sensitive to price movement, but spreads the same capital more broadly.",
  ],
  rangeAdvice:
    "There is no universally correct range. Review the live market, your risk tolerance, and how often you can monitor the position. This guide does not recommend a price or range.",
  risksTitle: "Risks to understand",
  risks: [
    {
      title: "Impermanent loss",
      text: "If the relative token prices change, the position can be worth less than holding the two tokens separately. Fees may not offset that difference.",
    },
    {
      title: "Out-of-range position",
      text: "An out-of-range position stops earning fees and can become almost entirely one of the two assets.",
    },
    {
      title: "Smart-contract and token risk",
      text: "DEX contracts, bridges, wallets, and the assets themselves can fail or be exploited. Use only what you understand and can afford to lose.",
    },
    {
      title: "Network and transaction risk",
      text: "A transaction on the wrong network, a malicious approval, or a copied impostor address can result in permanent loss.",
    },
  ],
  afterTitle: "After the transaction",
  afterPoints: [
    "Confirm the position appears in the DEX portfolio on the same network.",
    "Save the transaction link and check that both token and pool identifiers match.",
    "Monitor whether the position remains in range and whether fees justify transaction costs.",
    "Never respond to direct messages offering support or asking for a seed phrase.",
  ],
  problemsTitle: "Common problems",
  problems: [
    {
      title: "The pool is missing",
      text: "Check the selected network and open the exact pool link from this page. Searching by token symbol can surface impostors.",
    },
    {
      title: "The deposit button is disabled",
      text: "Make sure the wallet is connected, the price range is valid, you have the requested token amounts, and you still have the native fee asset.",
    },
    {
      title: "Only one token amount changes",
      text: "That can happen when the chosen range is entirely above or below the current market price. Review the range before approving.",
    },
    {
      title: "The position is not visible",
      text: "Switch the wallet and DEX back to the network where you created it, then check the confirmed transaction in that network's explorer.",
    },
  ],
  checklistTitle: "Final checklist",
  checklist: [
    "Correct network",
    "Exact pool ID",
    "Exact vKOIN and quote-token identifiers",
    "Price range and token amounts understood",
    "Wallet approvals and spending limits reviewed",
    "Enough ETH or SOL remains for fees",
  ],
  sourcesTitle: "Official references",
  sourcesLead:
    "Interfaces and protocol behavior can change. Check the current documentation before committing funds.",
  sources: [
    {
      label: "Uniswap: concentrated liquidity",
      href: "https://developers.uniswap.org/docs/get-started/concepts/liquidity-providers/concentrated-liquidity",
    },
    {
      label: "Uniswap support: providing liquidity",
      href: "https://support.uniswap.org/hc/en-us/sections/35918325712525-Adding-Liquidity",
    },
    {
      label: "Raydium: concentrated liquidity",
      href: "https://docs.raydium.io/products/clmm",
    },
    {
      label: "Base: using ETH on Base",
      href: "https://docs.base.org/base-chain/network-information/network-fees",
    },
    {
      label: "Solana: transaction fees",
      href: "https://solana.com/docs/core/fees",
    },
  ],
  disclaimer:
    "Educational information only. This is not financial, investment, legal, or tax advice. Pool availability and interfaces can change. Verify every identifier and transaction in your own wallet before signing.",
  verified: "Pool links and identifiers last verified 13 September 2026.",
};

const commonEvmSteps = (chain, quote) => [
  {
    title: "Open the verified pool",
    text: `Use the button on this page instead of searching by token name. Confirm the interface shows ${chain} and vKOIN / ${quote}.`,
    imageIndex: 0,
  },
  {
    title: "Verify the full identifiers",
    text: "Compare the pool ID and both token contracts with the values above. Stop if any character differs.",
  },
  {
    title: "Connect your wallet",
    text: `Connect a wallet you trust and switch it to ${chain}. Keep enough ETH on ${chain} to pay every approval and position transaction.`,
  },
  {
    title: "Choose Add liquidity",
    text: "Open the add-liquidity flow from the verified pool page. Review which contracts the wallet asks you to interact with.",
    imageIndex: chain === "Base" ? 1 : undefined,
  },
  {
    title: "Set your price range",
    text: "Choose a minimum and maximum price you understand. The position earns fees only while the market remains inside that interval.",
    imageIndex: chain === "Base" ? 2 : undefined,
  },
  {
    title: "Enter the deposit amounts",
    text: `Enter vKOIN and ${quote}. Uniswap calculates the required ratio from the live price and your selected range.`,
  },
  {
    title: "Review approvals and create the position",
    text: "Read every approval or Permit2 request, its token, amount, and spender. Then review the final amounts, price range, pool fee, network fee, and destination before signing.",
  },
  {
    title: "Confirm and monitor",
    text: "Wait for confirmation, open the transaction in the network explorer, and verify the new position appears in your Uniswap portfolio.",
  },
];

export const STEPS = {
  ethereum: commonEvmSteps("Ethereum", "USDT"),
  base: commonEvmSteps("Base", "USDC"),
  solana: [
    {
      title: "Open the verified position page",
      text: "Use the exact Raydium link on this page. Raydium may show an eligibility or legal notice; read it and make your own decision. This guide does not accept it for you.",
    },
    {
      title: "Verify the pool and mints",
      text: "Confirm the complete pool ID, vKOIN mint, WSOL mint, 1% fee tier, and CLMM position type. Stop if any value differs.",
    },
    {
      title: "Connect a Solana wallet",
      text: "Connect a wallet you trust. Keep enough SOL for transaction fees and account creation in addition to the amount you intend to wrap or deposit.",
    },
    {
      title: "Choose Create position",
      text: "Open the CLMM position form for the verified vKOIN / WSOL pool. WSOL is the SPL-token form of SOL used by programs; it can be wrapped and unwrapped.",
    },
    {
      title: "Set your price range",
      text: "Choose a minimum and maximum price. Your position earns fees only while the current price stays inside that range.",
    },
    {
      title: "Enter the deposit amounts",
      text: "Enter vKOIN and WSOL amounts and check the live ratio. Review any SOL wrapping step and leave enough SOL outside the position for fees.",
    },
    {
      title: "Review and sign",
      text: "Check the program, pool, mints, range, amounts, slippage information, and wallet simulation before approving each transaction.",
    },
    {
      title: "Confirm and monitor",
      text: "Wait for finalization, inspect the transaction in a Solana explorer, and verify the position appears in your Raydium portfolio.",
    },
  ],
};
