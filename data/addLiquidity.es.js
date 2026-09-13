export const UI = {
  headTitle: "Cómo añadir liquidez | Koinos",
  metaDescription:
    "Guía segura para añadir liquidez de vKOIN en Uniswap v4 sobre Ethereum o Base, y en Raydium CLMM sobre Solana.",
  eyebrow: "Guía de liquidez",
  title: "Cómo añadir liquidez de vKOIN",
  lead:
    "Elige un pool verificado, entiende el rango de precios y revisa cada solicitud de la cartera antes de crear una posición.",
  intro:
    "Esta guía cubre tres mercados de liquidez concentrada: Uniswap v4 en Ethereum y Base, y Raydium CLMM en Solana. Nunca te pedirá que envíes fondos a una persona o a una dirección.",
  start: "Elegir una red",
  riskTitle: "Antes de depositar",
  riskPoints: [
    "Aportar liquidez no es un producto de ahorro. Tu posición puede perder valor frente a conservar los tokens.",
    "La posición solo genera comisiones mientras el precio de mercado está dentro del rango elegido.",
    "Usa únicamente los identificadores exactos del pool y de los tokens que aparecen abajo. Un símbolo o logotipo conocido no demuestra la identidad.",
    "Conserva el token nativo para comisiones en la cartera: ETH en Ethereum, ETH en Base o SOL en Solana.",
  ],
  networksTitle: "Tres redes, tres posiciones independientes",
  networksLead:
    "vKOIN representa KOIN fuera de la blockchain de Koinos. Las redes siguientes no comparten saldos, comisiones ni liquidez.",
  routeSummaries: {
    ethereum:
      "Capa 1 de Ethereum. Suele tener el coste de transacción más alto de estas rutas y se paga en ETH.",
    base:
      "Una capa 2 de Ethereum. Las transacciones se pagan con ETH que esté en Base, no con ETH que esté en Ethereum.",
    solana:
      "Una capa 1 independiente. Utiliza direcciones de Solana y SOL para comisiones; WSOL es la forma tokenizada de SOL que usa el pool.",
  },
  prerequisitesTitle: "Qué necesitas",
  prerequisites: [
    "Una cartera de autocustodia compatible que controles tú",
    "vKOIN y el token de cotización correspondiente dentro de la misma red",
    "ETH o SOL en esa red para autorizaciones y comisiones de transacción",
    "Tiempo para verificar identificadores, rango y cantidades antes de firmar",
  ],
  chooseTitle: "Elige tu red",
  chooseLead:
    "La selección queda guardada en la URL para que puedas marcar o compartir la ruta exacta.",
  openPool: "Abrir el pool exacto",
  planTitle: "Tu ruta",
  facts: {
    network: "Red",
    venue: "Plataforma",
    pair: "Par",
    model: "Tipo de posición",
    poolFee: "Comisión del pool",
    feeAsset: "Comisiones de red",
  },
  modelValue: "Liquidez concentrada",
  feeAssets: {
    ethereum: "ETH en Ethereum",
    base: "ETH en Base",
    solana: "SOL",
  },
  identifiersTitle: "Verifica los identificadores",
  identifiersLead:
    "Compara los valores completos en tu cartera o DEX. No te fíes de direcciones abreviadas.",
  identifierLabels: {
    tokenA: "Contrato / mint de vKOIN",
    tokenB: "Contrato / mint del token de cotización",
    pool: "ID del pool",
  },
  copy: "Copiar",
  copied: "Copiado",
  copyFailed: "No se pudo copiar",
  copyLabel: (subject) => `Copiar ${subject}`,
  copySuccess: (subject) => `${subject} copiado al portapapeles.`,
  copyFailure: (subject) =>
    `No se pudo copiar ${subject}. Selecciona el valor completo y cópialo manualmente.`,
  guideTitle: (route) => `Añadir liquidez en ${route.chain}`,
  stepCount: (current, total) => `Paso ${current} de ${total}`,
  screenshots: {
    poolScreenshotAlt: (route) =>
      `Página del pool ${route.pair} en ${route.venue} para ${route.chain}`,
    poolScreenshotCaption: (route) =>
      `Confirma ${route.chain}, ${route.pair} y el ID completo del pool antes de continuar.`,
    formScreenshotAlt: () => "Formulario de Uniswap para añadir liquidez en Base",
    formScreenshotCaption: () =>
      "Formulario de Uniswap para añadir liquidez después de abrir el pool verificado de Base.",
    rangeScreenshotAlt: () =>
      "Controles de rango de precio y depósito de una posición de liquidez en Base",
    rangeScreenshotCaption: () =>
      "El rango elegido determina cuándo la posición está activa y genera comisiones.",
  },
  rangeTitle: "Qué significa liquidez concentrada",
  rangeParagraphs: [
    "Eliges un precio mínimo y otro máximo. Dentro de ese intervalo, tu capital puede facilitar intercambios y recibir una parte de las comisiones del pool. Fuera de él, la posición queda inactiva y deja de generar comisiones hasta que el precio regrese.",
    "Un rango estrecho puede aprovechar el capital con más eficiencia, pero se sale de rango con mayor facilidad y exige más seguimiento. Un rango amplio suele ser menos sensible al movimiento del precio, aunque reparte el mismo capital en un intervalo mayor.",
  ],
  rangeAdvice:
    "No existe un rango correcto para todo el mundo. Revisa el mercado actual, tu tolerancia al riesgo y la frecuencia con la que puedes vigilar la posición. Esta guía no recomienda un precio ni un rango.",
  risksTitle: "Riesgos que debes entender",
  risks: [
    {
      title: "Pérdida impermanente",
      text: "Si cambia el precio relativo de los tokens, la posición puede valer menos que conservarlos por separado. Las comisiones podrían no compensar la diferencia.",
    },
    {
      title: "Posición fuera de rango",
      text: "Una posición fuera de rango deja de generar comisiones y puede quedar compuesta casi por completo por uno de los dos activos.",
    },
    {
      title: "Riesgo de contratos y tokens",
      text: "Los contratos del DEX, los puentes, las carteras y los propios activos pueden fallar o sufrir ataques. Usa solo lo que entiendas y puedas permitirte perder.",
    },
    {
      title: "Riesgo de red y transacción",
      text: "Una operación en la red equivocada, una autorización maliciosa o una dirección falsa pueden provocar una pérdida permanente.",
    },
  ],
  afterTitle: "Después de la transacción",
  afterPoints: [
    "Confirma que la posición aparece en la cartera del DEX dentro de la misma red.",
    "Guarda el enlace de la transacción y comprueba que coinciden el pool y ambos tokens.",
    "Vigila si la posición sigue dentro del rango y si las comisiones compensan los costes de transacción.",
    "No respondas a mensajes privados que ofrezcan soporte o pidan la frase semilla.",
  ],
  problemsTitle: "Problemas habituales",
  problems: [
    {
      title: "No aparece el pool",
      text: "Comprueba la red seleccionada y abre el enlace exacto desde esta página. Buscar por el símbolo del token puede mostrar imitaciones.",
    },
    {
      title: "El botón de depósito está desactivado",
      text: "Comprueba que la cartera está conectada, el rango es válido, dispones de los tokens solicitados y conservas el activo nativo para comisiones.",
    },
    {
      title: "Solo cambia la cantidad de un token",
      text: "Puede ocurrir cuando el rango está completamente por encima o por debajo del precio actual. Revisa el rango antes de aprobar.",
    },
    {
      title: "No se ve la posición",
      text: "Vuelve a cambiar la cartera y el DEX a la red donde la creaste y consulta la transacción confirmada en el explorador de esa red.",
    },
  ],
  checklistTitle: "Lista final de comprobación",
  checklist: [
    "Red correcta",
    "ID exacto del pool",
    "Identificadores exactos de vKOIN y del token de cotización",
    "Rango de precios y cantidades comprendidos",
    "Autorizaciones y límites de gasto revisados",
    "Suficiente ETH o SOL reservado para comisiones",
  ],
  sourcesTitle: "Referencias oficiales",
  sourcesLead:
    "Las interfaces y el funcionamiento de los protocolos pueden cambiar. Consulta la documentación actual antes de comprometer fondos.",
  sources: [
    {
      label: "Uniswap: liquidez concentrada",
      href: "https://developers.uniswap.org/docs/get-started/concepts/liquidity-providers/concentrated-liquidity",
    },
    {
      label: "Soporte de Uniswap: aportar liquidez",
      href: "https://support.uniswap.org/hc/en-us/sections/35918325712525-Adding-Liquidity",
    },
    {
      label: "Raydium: liquidez concentrada",
      href: "https://docs.raydium.io/products/clmm",
    },
    {
      label: "Base: utilizar ETH en Base",
      href: "https://docs.base.org/base-chain/network-information/network-fees",
    },
    {
      label: "Solana: comisiones de transacción",
      href: "https://solana.com/docs/core/fees",
    },
  ],
  disclaimer:
    "Contenido exclusivamente educativo. No constituye asesoramiento financiero, de inversión, legal ni fiscal. La disponibilidad de los pools y las interfaces pueden cambiar. Verifica cada identificador y transacción en tu propia cartera antes de firmar.",
  verified: "Enlaces e identificadores verificados por última vez el 13 de septiembre de 2026.",
};

const commonEvmSteps = (chain, quote) => [
  {
    title: "Abre el pool verificado",
    text: `Utiliza el botón de esta página en vez de buscar por el nombre del token. Confirma que la interfaz muestra ${chain} y vKOIN / ${quote}.`,
    imageIndex: 0,
  },
  {
    title: "Verifica los identificadores completos",
    text: "Compara el ID del pool y los contratos de ambos tokens con los valores anteriores. Detente si cualquier carácter es diferente.",
  },
  {
    title: "Conecta tu cartera",
    text: `Conecta una cartera de confianza y cámbiala a ${chain}. Conserva ETH suficiente en ${chain} para pagar cada autorización y la creación de la posición.`,
  },
  {
    title: "Elige Añadir liquidez",
    text: "Abre el flujo para añadir liquidez desde la página del pool verificado. Revisa con qué contratos te pide interactuar la cartera.",
    imageIndex: chain === "Base" ? 1 : undefined,
  },
  {
    title: "Define el rango de precios",
    text: "Elige un precio mínimo y otro máximo que entiendas. La posición solo genera comisiones mientras el mercado permanece dentro de ese intervalo.",
    imageIndex: chain === "Base" ? 2 : undefined,
  },
  {
    title: "Introduce las cantidades",
    text: `Introduce vKOIN y ${quote}. Uniswap calcula la proporción necesaria a partir del precio actual y el rango elegido.`,
  },
  {
    title: "Revisa las autorizaciones y crea la posición",
    text: "Lee cada autorización o solicitud de Permit2: token, cantidad y destinatario. Después comprueba las cantidades finales, el rango, la comisión del pool, la comisión de red y el destino antes de firmar.",
  },
  {
    title: "Confirma y supervisa",
    text: "Espera la confirmación, abre la transacción en el explorador de la red y comprueba que la posición nueva aparece en tu cartera de Uniswap.",
  },
];

export const STEPS = {
  ethereum: commonEvmSteps("Ethereum", "USDT"),
  base: commonEvmSteps("Base", "USDC"),
  solana: [
    {
      title: "Abre la página verificada de la posición",
      text: "Utiliza el enlace exacto de Raydium de esta página. Raydium puede mostrar un aviso legal o de elegibilidad: léelo y toma tu propia decisión. Esta guía no lo acepta por ti.",
    },
    {
      title: "Verifica el pool y los mints",
      text: "Confirma el ID completo del pool, el mint de vKOIN, el mint de WSOL, la comisión del 1 % y que sea una posición CLMM. Detente si cualquier valor es distinto.",
    },
    {
      title: "Conecta una cartera de Solana",
      text: "Conecta una cartera de confianza. Conserva SOL suficiente para las comisiones y la creación de cuentas, además de la cantidad que pretendas envolver o depositar.",
    },
    {
      title: "Elige Crear posición",
      text: "Abre el formulario CLMM del pool verificado vKOIN / WSOL. WSOL es la forma de token SPL de SOL que utilizan los programas; se puede envolver y desenvolver.",
    },
    {
      title: "Define el rango de precios",
      text: "Elige un precio mínimo y otro máximo. La posición solo genera comisiones mientras el precio actual permanezca dentro del rango.",
    },
    {
      title: "Introduce las cantidades",
      text: "Introduce las cantidades de vKOIN y WSOL y comprueba la proporción actual. Revisa cualquier paso para envolver SOL y deja SOL suficiente fuera de la posición para las comisiones.",
    },
    {
      title: "Revisa y firma",
      text: "Comprueba el programa, el pool, los mints, el rango, las cantidades, la información sobre deslizamiento y la simulación de la cartera antes de aprobar cada transacción.",
    },
    {
      title: "Confirma y supervisa",
      text: "Espera la finalización, consulta la transacción en un explorador de Solana y confirma que la posición aparece en tu cartera de Raydium.",
    },
  ],
};
