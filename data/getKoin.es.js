// Spanish content for /es/get-koin.
//
// Keep the object shapes and route IDs aligned with data/getKoin.js so the
// page component and shareable wallet/route query parameters stay language
// independent. Money-critical links and token identities remain centralized in
// the English source module and data/koinTokens.js.

import { SWAP_LINKS, contractFor } from "@/data/koinTokens";
import {
  CONTRACTS,
  OFFICIAL_LINKS,
} from "@/data/getKoin";

export { CONTRACTS, OFFICIAL_LINKS };

export const LAST_VERIFIED = "24 de agosto de 2026";

const IMG = "/images/pages/get-koin";

function captured(where) {
  return `${where}, captura del ${LAST_VERIFIED}.`;
}

function sourced(what, where) {
  return `${what} Fuente: ${where}, consultada el ${LAST_VERIFIED}.`;
}

export const WALLETS = [
  {
    id: "metamask",
    name: "MetaMask",
    family: "Ethereum y Base",
    install: "https://metamask.io/download",
    installLabel: "metamask.io/download",
    routes: ["ethereum", "base"],
    addressKind: "una dirección de tipo Ethereum",
    addressNote: "Funciona en Ethereum y Base, no en Solana ni Koinos.",
    quirks: [
      "El nombre de la red aparece en la parte superior de la ventana. Compruébalo antes de firmar.",
      "Si vKOIN no aparece después de un intercambio, usa Import tokens y pega la dirección de esta página.",
      "Cuando un sitio solicite un límite de gasto, ajústalo a la cantidad que vas a usar, no a una cantidad ilimitada.",
    ],
  },
  {
    id: "rabby",
    name: "Rabby",
    family: "Ethereum y Base",
    install: "https://rabby.io/",
    installLabel: "rabby.io",
    routes: ["ethereum", "base"],
    addressKind: "una dirección de tipo Ethereum",
    addressNote: "Funciona en Ethereum y Base, no en Solana ni Koinos.",
    quirks: [
      "Rabby cambia la red para adaptarse al sitio, así que rara vez tendrás que hacerlo a mano.",
      "Antes de firmar, muestra los cambios de saldo previstos. Si no corresponden al intercambio que pediste, recházalo.",
      "Algunos sitios lo muestran como Browser Wallet o Injected Wallet en lugar de Rabby.",
    ],
  },
  {
    id: "phantom",
    name: "Phantom",
    family: "Solana, Ethereum y Base",
    install: "https://phantom.com/download",
    installLabel: "phantom.com/download",
    routes: ["ethereum", "base", "solana"],
    addressKind: "dos direcciones",
    addressNote:
      "Una dirección 0x compartida por Ethereum y Base, y otra distinta para Solana. Copia la correspondiente a la red de tu plan.",
    quirks: [
      "Abre Receive y elige primero la red. Ethereum y Base comparten una dirección; Solana tiene la suya.",
      "Phantom detecta los tokens automáticamente y no permite importarlos por dirección. Si falta vKOIN, comprueba la transacción en el explorador y después la lista de tokens ocultos de Phantom.",
      "Conserva algo de SOL o ETH en la red que uses; cada transacción tiene una comisión y en Ethereum no siempre es pequeña.",
    ],
  },
  {
    id: "kondor",
    name: "Kondor",
    family: "Koinos",
    install:
      "https://chromewebstore.google.com/detail/kondor/ghipkefkpgkladckmlmdnadmcchefhjl",
    installLabel: "Chrome Web Store (Kondor 1.3)",
    routes: ["koinos"],
    addressKind: "una dirección de Koinos",
    addressNote: "No puede recibir nada enviado por Ethereum, Base o Solana.",
    quirks: [
      "Kondor muestra el mana junto a tu saldo de KOIN. El mana es lo que utilizan las transacciones de Koinos.",
      "Cuando tu cuenta no puede pagar el mana de una transacción y la cuenta de mana gratuito de Kondor sí puede, la ventana de firma cambia automáticamente el pagador a esa cuenta; lo verás en el campo Payer.",
      "Esta guía está escrita para Kondor 1.3, la versión enlazada arriba, no para Kondor 2. Las preguntas frecuentes explican por qué.",
      "Su pantalla de recepción indica que solo se deben enviar activos de Koinos. Tómatelo al pie de la letra.",
    ],
  },
];

export const ROUTES = [
  {
    id: "ethereum",
    name: "Ethereum",
    tagline: "Compra vKOIN en Ethereum y después conviértelo en KOIN nativo.",
    buyAsset: "ETH",
    network: "Ethereum",
    gasAsset: "ETH",
    dex: "DeFiLlama",
    dexUrl: SWAP_LINKS.ethereum,
    reachesNativeKoin: true,
    outcome: "KOIN nativo en Koinos",
    outcomeShort: "Termina con KOIN nativo",
    plan: "Compra ETH → envíalo a tu monedero → intercámbialo por vKOIN → usa Vortex para pasarlo a Koinos.",
    note: "La única ruta que el puente Vortex cubre de principio a fin.",
  },
  {
    id: "base",
    name: "Base",
    tagline: "Compra vKOIN en Base. Comisiones menores, sin puente directo a Koinos.",
    buyAsset: "ETH",
    network: "Base",
    gasAsset: "ETH en Base",
    dex: "DeFiLlama",
    dexUrl: SWAP_LINKS.base,
    reachesNativeKoin: false,
    outcome: "vKOIN en Base",
    outcomeShort: "Termina con vKOIN",
    plan: "Compra ETH → envíalo a tu monedero por Base → intercámbialo por vKOIN.",
    note: "El vKOIN de Base es el vKOIN de Ethereum trasladado mediante Portal (Wormhole). Vortex no funciona con Base, por lo que esta ruta termina en vKOIN. Para obtener KOIN nativo, usa la ruta de Ethereum.",
  },
  {
    id: "solana",
    name: "Solana",
    tagline: "Compra vKOIN en Solana. No hay un puente directo a Koinos.",
    buyAsset: "SOL",
    network: "Solana",
    gasAsset: "SOL",
    dex: "Jupiter",
    dexUrl: SWAP_LINKS.solana,
    reachesNativeKoin: false,
    outcome: "vKOIN en Solana",
    outcomeShort: "Termina con vKOIN",
    plan: "Compra SOL → envíalo a tu monedero → intercámbialo por vKOIN en Jupiter.",
    note: "El vKOIN de Solana es el vKOIN de Ethereum trasladado mediante Portal (Wormhole). Vortex no funciona con Solana, por lo que esta ruta termina en vKOIN. Para obtener KOIN nativo, usa la ruta de Ethereum.",
  },
  {
    id: "koinos",
    name: "Koinos",
    tagline: "Configura Kondor, añade fondos y después opera en KoinDX.",
    buyAsset: null,
    network: "Koinos",
    gasAsset: "mana",
    dex: "KoinDX",
    dexUrl: SWAP_LINKS.koindx,
    reachesNativeKoin: true,
    outcome: "un monedero de Koinos con fondos",
    outcomeShort: "Necesita KOIN primero",
    plan: "Instala Kondor → recibe KOIN nativo mediante la ruta de Ethereum → opera en KoinDX.",
    note: "No sirve para comprar tus primeros KOIN: una cuenta de Koinos vacía todavía no tiene nada que intercambiar. Añade fondos primero mediante la ruta de Ethereum.",
  },
];

export function isSupported(walletId, routeId) {
  const wallet = WALLETS.find((item) => item.id === walletId);
  return Boolean(wallet && wallet.routes.includes(routeId));
}

export function suggestionFor(walletId, routeId) {
  const wallet = WALLETS.find((item) => item.id === walletId);
  const route = ROUTES.find((item) => item.id === routeId);
  if (!wallet || !route) return null;
  const worksWith = WALLETS.filter((item) => item.routes.includes(routeId)).map(
    (item) => item.name
  );
  return {
    message: `${wallet.name} no se utiliza para la ruta de ${route.name}.`,
    walletFix: `${wallet.name} funciona con ${wallet.routes
      .map((id) => ROUTES.find((item) => item.id === id).name)
      .join(", ")}.`,
    routeFix: worksWith.length
      ? `${route.name} se muestra con ${worksWith.join(" o ")}.`
      : null,
    suggestedRoute: wallet.routes[0],
  };
}

const WALLET_IMAGES = {
  metamask: {
    address: {
      src: `${IMG}/metamask-network.png`,
      alt: "La ventana de la extensión MetaMask con el selector de red abierto.",
      caption: sourced("El selector de red.", "support.metamask.io"),
      frame: "phone",
    },
    token: {
      src: `${IMG}/metamask-import-token.png`,
      alt: "El cuadro Import tokens de MetaMask en la pestaña Custom token, con un aviso de que cualquiera puede crear una versión falsa de un token existente.",
      caption: sourced(
        "Cómo añadir un token mediante su dirección. El ejemplo muestra otro token.",
        "support.metamask.io"
      ),
      frame: "phone",
    },
  },
  rabby: {
    sign: {
      src: `${IMG}/rabby-sign.png`,
      alt: "Pantalla de firma de Rabby: cantidad de tokens que sale del monedero, cadena, dirección de destino, comisión y botones Sign y Cancel.",
      caption: sourced(
        "Lo que Rabby muestra antes de firmar: cantidad, cadena, destino y comisión. El ejemplo utiliza otro token.",
        "la ficha de Rabby en Chrome Web Store"
      ),
      frame: "phone",
    },
  },
  phantom: {
    address: {
      src: `${IMG}/phantom-receive.png`,
      alt: "Dos pantallas de Phantom: el botón Receive y, después, una lista de redes con una dirección para copiar en cada una.",
      caption: sourced(
        "Receive muestra todas las redes. Ethereum y Base tienen la misma dirección 0x; Solana tiene la suya.",
        "help.phantom.com"
      ),
    },
  },
  kondor: { address: null },
};

function walletSetupStep(wallet, route) {
  return {
    id: "wallet",
    title: `Instala ${wallet.name} y copia tu dirección`,
    context: `Instálalo solo desde ${wallet.installLabel}, nunca desde un anuncio o un enlace que te envíe otra persona. Escribe la frase de recuperación en papel: quien la tenga controla el monedero y nadie legítimo te la pedirá jamás.`,
    micro: [
      `Añade la extensión desde ${wallet.installLabel} y crea un monedero.`,
      "Escribe la frase de recuperación en papel. Sin fotos, notas digitales ni nube.",
      `Abre Receive y copia tu dirección de ${route.network}.`,
    ],
    image: WALLET_IMAGES[wallet.id].address || null,
    callouts: [
      {
        type: "warning",
        text: `${wallet.name} te proporciona ${wallet.addressKind}. ${wallet.addressNote} Un activo enviado por la red equivocada normalmente se pierde.`,
      },
    ],
  };
}

function kondorSetupStep() {
  return {
    id: "kondor",
    title: "Instala Kondor para operar en Koinos",
    context:
      "El KOIN nativo existe en Koinos y tu monedero de Ethereum no puede guardarlo. Instala Kondor 1.3 desde el enlace inferior; esta guía está escrita para esa versión (las preguntas frecuentes explican por qué no se usa Kondor 2).",
    micro: [
      "Añade la extensión Kondor desde el enlace anterior.",
      "Crea un monedero y escribe la frase de recuperación en papel.",
      "Abre Receive y copia tu dirección de Koinos.",
    ],
    link: { href: OFFICIAL_LINKS.kondor, label: "Abrir Kondor en Chrome Web Store" },
    image: WALLET_IMAGES.kondor.address,
    callouts: [
      {
        type: "warning",
        text: "A esta dirección solo se pueden enviar activos de Koinos.",
      },
      {
        type: "tip",
        text: "Una cuenta nueva de Koinos no tiene KOIN y, por tanto, todavía no dispone de mana propio. Kondor 1.3 lo resuelve automáticamente: cuando tu cuenta no puede pagar y su cuenta de mana gratuito sí puede, la ventana de firma coloca esa cuenta en el campo Payer. No hay que activar nada; así podrás completar el canje del último paso.",
      },
    ],
  };
}

function buyStep(route) {
  return {
    id: "buy",
    title: `Compra ${route.buyAsset} en un exchange`,
    context: `No puedes comprar KOIN con tarjeta directamente. Primero compras ${route.buyAsset} y lo intercambias después; ${route.buyAsset} también paga las comisiones de red, así que compra algo más de lo que pretendes intercambiar.`,
    micro: [
      "Abre una cuenta en un exchange disponible en tu país. Coinbase, Kraken y Binance son ejemplos, no recomendaciones.",
      `Compra ${route.buyAsset}.`,
      `Antes de continuar, comprueba que el exchange permite retirar ${route.buyAsset} por ${route.network}.`,
    ],
    callouts: [
      {
        type: "cost",
        text: "Tanto la compra como la retirada tienen una comisión. Ambas se muestran antes de confirmar.",
      },
    ],
  };
}

function withdrawStep(wallet, route) {
  return {
    id: "withdraw",
    title: `Envíalo a ${wallet.name} por ${route.network}`,
    context: `Este paso saca tu ${route.buyAsset} del exchange y lo lleva al monedero que controlas.`,
    micro: [
      `Pega tu dirección de ${wallet.name} en el formulario de retirada del exchange.`,
      `Selecciona ${route.network} como red.`,
      "Compara la dirección completa, no solo los primeros y últimos caracteres: los estafadores crean direcciones que coinciden en los extremos.",
      "Envía primero una cantidad pequeña de prueba, espera a que llegue y después envía el resto.",
    ],
    callouts: [
      {
        type: "warning",
        text: `La red debe indicar ${route.network}. La misma dirección existe en otras redes y el exchange no te impedirá elegir la incorrecta.`,
      },
    ],
  };
}

function swapStep(wallet, route) {
  const contract = contractFor(route.network);
  return {
    id: "swap",
    title: `Intercambia ${route.buyAsset} por vKOIN en ${route.dex}`,
    context: `El botón inferior abre ${route.dex} con la red y el token ya configurados. Comprueba después la barra de direcciones del navegador: existen sitios de intercambio falsos.`,
    micro: [
      `Conecta ${wallet.name} y comprueba que la red sea ${route.network}.`,
      `Introduce la cantidad y reserva algo de ${route.gasAsset} para las comisiones.`,
      `Compara la dirección del token con ${contract ? contract.address : "la dirección oficial"}.`,
      "Lee la cantidad que recibirás y después firma.",
    ],
    link: { href: route.dexUrl, label: `Abrir ${route.dex}` },
    image:
      route.id === "ethereum"
        ? {
            src: `${IMG}/defillama-ethereum.png`,
            alt: "DeFiLlama con Ethereum seleccionado, ETH para vender y vKOIN para comprar.",
            caption: captured("swap.defillama.com"),
          }
        : route.id === "base"
        ? {
            src: `${IMG}/defillama-base.png`,
            alt: "DeFiLlama con Base seleccionado, ETH para vender y vKOIN para comprar.",
            caption: captured("swap.defillama.com"),
          }
        : {
            src: `${IMG}/jupiter-solana.png`,
            alt: "Jupiter con SOL para vender y vKOIN para comprar, con una etiqueta de advertencia bajo vKOIN.",
            caption: captured(
              "jup.ag. El aviso señala un token con poca liquidez; comprueba la dirección por tu cuenta"
            ),
          },
    extraImages: [
      WALLET_IMAGES[wallet.id].sign,
      WALLET_IMAGES[wallet.id].token,
    ].filter(Boolean),
    callouts: [
      {
        type: "warning",
        text: "Comprueba la dirección, no el nombre ni el logotipo. Cualquiera puede crear un token llamado vKOIN.",
      },
      {
        type: "cost",
        text: `Hay una comisión de red en ${route.gasAsset}, una comisión de intercambio y un precio peor en órdenes grandes. Se aplicará lo que muestre el sitio antes de firmar.`,
      },
    ],
  };
}

function bridgeStep() {
  return {
    id: "bridge",
    title: "Pasa los fondos a Koinos con Vortex",
    context:
      "Vortex toma vKOIN de Ethereum y libera KOIN nativo en la dirección de Koinos que indiques. El proceso no termina solo: debes canjearlo en Koinos y Vortex no paga esa transacción; de forma predeterminada, la paga la cuenta que firma.",
    micro: [
      "Abre Vortex, lee su aviso legal y configura From: Ethereum, To: Koinos, Token: vKOIN y la cantidad.",
      "Pega tu dirección de Kondor y compruébala completa.",
      "Firma en tu monedero primero el permiso y después el depósito. Anota el hash de la transacción.",
      "Espera y después pulsa Redeem y Sign en la ventana de Kondor. Mientras tu cuenta esté vacía, Kondor paga automáticamente el mana desde su cuenta de mana gratuito, siempre que tenga suficiente. Así recibirás tus KOIN.",
    ],
    link: { href: OFFICIAL_LINKS.vortex, label: "Abrir Vortex" },
    image: {
      src: `${IMG}/vortex-bridge-form.png`,
      alt: "Formulario del puente Vortex rellenado: From Ethereum, To Koinos, 2 vKOIN, una dirección de recepción difuminada y el resumen You will receive 2 KOIN sobre el botón Bridge.",
      caption:
        "El formulario del puente rellenado: 2 vKOIN de Ethereum a Koinos, con la dirección de Kondor como destino. vortexbridge.io, captura del 26 de agosto de 2026.",
    },
    extraImages: [
      {
        src: `${IMG}/vortex-redeem.png`,
        alt: "Pestaña Redeem de Vortex con la red de origen Ethereum, la red de canje Koinos, el identificador de la transacción de origen difuminado, un estado con Tx Status signed, hora del bloque, caducidad, tres firmas y un botón Redeem.",
        caption:
          "La pestaña Redeem cuando los validadores ya han firmado: pulsa Redeem. Si cerraste la página demasiado pronto, pega aquí el identificador de la transacción de origen para continuar. Captura del 26 de agosto de 2026.",
      },
      {
        src: `${IMG}/kondor-sign.png`,
        alt: "Ventana de firma de Kondor 1.3 para el canje: sitio vortexbridge.io, operación Complete transfer, evento koin Transfer de 2 KOIN, enlace Advanced, aviso sobre contratos desconocidos y botones Cancel y Sign.",
        caption:
          "Kondor 1.3 te pide firmar el canje: la operación es Complete transfer y el evento muestra los KOIN que recibes. Pulsa Sign. Captura del 26 de agosto de 2026.",
        frame: "phone",
      },
    ],
    callouts: [
      {
        type: "cost",
        text: "Ethereum cobra comisiones por el permiso y el depósito. El canje se ejecuta en Koinos y gasta mana en lugar de una comisión; mientras tu cuenta siga vacía, la cuenta de mana gratuito de Kondor lo cubre automáticamente si puede. Si no puede, Kondor te lo indica y puedes intentarlo de nuevo más tarde.",
      },
      {
        type: "tip",
        text: "Envía primero una cantidad pequeña por el puente y completa todo el proceso hasta el canje.",
      },
    ],
  };
}

function holdStep(route) {
  return {
    id: "hold",
    title: `Ahora tienes vKOIN en ${route.network}`,
    context: `Este vKOIN es el vKOIN de Ethereum trasladado a ${route.network} mediante Portal (Wormhole). Depende de dos puentes, no es KOIN nativo y Vortex no puede tomarlo desde aquí.`,
    micro: [
      "Comprueba la cantidad y la dirección del token.",
      "No lo envíes a Ethereum ni a una dirección de Koinos: una transferencia normal no cruza redes.",
      "Si quieres KOIN nativo, vuelve a empezar con la ruta de Ethereum.",
    ],
    callouts: [
      {
        type: "warning",
        text: "Mientras tengas un token envuelto, dependes de la seguridad de los puentes que lo respaldan.",
      },
    ],
  };
}

function koinosFundStep() {
  return {
    id: "fund",
    title: "Recibe KOIN nativo en Kondor",
    context:
      "KoinDX intercambia activos que ya están en Koinos, por lo que primero tiene que llegar algo. Añade fondos a la cuenta mediante la ruta de Ethereum y usa tu dirección de Kondor como destino.",
    micro: [
      "Sigue la ruta de Ethereum y usa tu dirección de Kondor en el paso del puente.",
      "Completa el canje y comprueba que Kondor muestre KOIN y mana.",
    ],
    routeLink: {
      wallet: "metamask",
      route: "ethereum",
      label: "Mostrar la ruta de Ethereum",
    },
    callouts: [
      {
        type: "warning",
        text: "Solo retires KOIN de un exchange directamente a Kondor si el exchange indica expresamente que admite la red Koinos. La mayoría no lo hace.",
      },
    ],
  };
}

function koinDxSwapStep() {
  return {
    id: "koindx",
    title: "Opera en KoinDX",
    context: "KoinDX intercambia activos que ya existen en Koinos.",
    micro: [
      "Abre app.koindx.com y acepta sus condiciones.",
      "Conecta Kondor Wallet y confirma en la extensión.",
      "Selecciona los dos tokens, revisa los detalles y confirma en Kondor.",
    ],
    link: { href: OFFICIAL_LINKS.koindx, label: "Abrir KoinDX" },
    image: {
      src: `${IMG}/koindx-connect.png`,
      alt: "Cuadro de conexión de KoinDX: aceptar las condiciones y elegir Kondor Wallet, My Koinos Wallet o Wallet Connect.",
      caption: captured("app.koindx.com"),
    },
    callouts: [
      {
        type: "tip",
        text: "Conserva algunos KOIN después de operar. Son los que proporcionan mana a la cuenta.",
      },
    ],
  };
}

export function buildSteps(walletId, routeId) {
  const wallet = WALLETS.find((item) => item.id === walletId);
  const route = ROUTES.find((item) => item.id === routeId);
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

export const INTRO = {
  title: "Cómo comprar KOIN",
  lead: "Una guía breve para quienes nunca han comprado criptomonedas.",
  paragraphs: [
    "Elige tu monedero y dónde quieres comprar. Los pasos inferiores cambiarán para adaptarse a tu elección. Envía una cantidad pequeña de prueba antes de enviar una grande: aquí nada es urgente.",
  ],
};

export const RISK_NOTE = {
  title: "Antes de empezar",
  points: [
    "Utilizarás un exchange, un sitio de intercambio y, para obtener KOIN nativo, el puente Vortex. Cada servicio lo gestiona un tercero, puede fallar y ninguna operación se puede revertir.",
    "El propio aviso legal de Vortex indica que no está auditado y que podrías perder tus tokens. Utiliza solo una cantidad que puedas permitirte perder.",
  ],
};

export const NATIVE_VS_WRAPPED = {
  title: "KOIN y vKOIN no son lo mismo",
  intro: null,
  columns: [
    {
      name: "KOIN nativo",
      where: "En Koinos",
      points: [
        "Es el token de la blockchain Koinos.",
        "Proporciona mana a tu cuenta, que se utiliza para las transacciones.",
        "Se guarda en un monedero de Koinos como Kondor.",
      ],
    },
    {
      name: "vKOIN",
      where: "En Ethereum, Base o Solana",
      points: [
        "Es KOIN envuelto, emitido en Ethereum por el puente Vortex.",
        "Las copias de Base y Solana se trasladaron mediante Portal (Wormhole), por lo que dependen de dos puentes.",
        "No proporciona mana y no se puede utilizar en Koinos.",
      ],
    },
  ],
  outro: [
    "Enviar vKOIN a una dirección de Koinos no lo convierte: solo Vortex mueve valor entre Ethereum y Koinos. Si ves alguna referencia a wKOIN, se trata de un envoltorio anterior de Chainge que no se utiliza aquí.",
  ],
};

export const MANA = {
  title: "Mana",
  paragraphs: [
    "Koinos no cobra gas. Al tener KOIN, tu cuenta obtiene mana; las transacciones lo consumen y se recupera a lo largo de varios días. Una cuenta nueva no tiene KOIN y, por tanto, tampoco tiene mana propio.",
    "Esto dejaría a un monedero nuevo sin posibilidad de pagar ninguna operación, por lo que Koinos permite que una cuenta pague el mana de otra. Kondor 1.3 lo hace automáticamente: cuando tu cuenta no puede pagar y su cuenta de mana gratuito sí puede, la ventana de firma coloca esa cuenta en el campo Payer. Así puede completarse la primera transacción de un monedero nuevo.",
    "Cuando lleguen tus KOIN, dispondrás de mana propio. Conserva algunos KOIN en vez de sacar todo el saldo; de lo contrario, la cuenta volverá a quedarse sin mana.",
  ],
  linkLabel: "Documentación sobre el mana",
  linkHref: OFFICIAL_LINKS.mana,
};

export const SAFETY = {
  title: "Comprueba esto antes de cada transacción",
  items: [
    "Abre cada sitio desde esta página y después comprueba la barra de direcciones.",
    "Nunca escribas ni fotografíes tu frase de recuperación. Nadie legítimo la necesita.",
    "Comprueba el activo y la red juntos: ETH en Base no es ETH en Ethereum.",
    "Compara por completo las direcciones del token y del destino, no solo los extremos.",
    "Envía primero una cantidad pequeña de prueba. Conserva algo de ETH o SOL para el siguiente paso.",
    "Lee cada ventana del monedero. El sitio, token, cantidad y destino deben coincidir con el paso en el que te encuentras.",
    "Un permiso de token sigue vigente después de desconectar el monedero de un sitio. Aprueba solo la cantidad necesaria y revoca el permiso después.",
    "Ignora a cualquiera que te contacte por privado para ofrecer ayuda, recuperación o un precio mejor.",
  ],
};

export const FAQS = [
  {
    q: "¿Puedo comprar KOIN con tarjeta?",
    a: "No directamente. Primero compras ETH o SOL en un exchange, lo envías a tu propio monedero, lo intercambias por vKOIN y, para obtener KOIN nativo, lo pasas desde Ethereum a Koinos mediante Vortex.",
  },
  {
    q: "¿Qué ruta debo elegir?",
    a: "Para obtener KOIN nativo, elige Ethereum: es la única ruta que Vortex cubre de principio a fin. Operar en Base y Solana es más barato, pero esas rutas terminan en vKOIN. La ruta de Koinos sirve para cuando ya tienes KOIN.",
  },
  {
    q: "¿Por qué no puedo empezar en KoinDX?",
    a: "KoinDX intercambia activos que ya están en Koinos. Una cuenta nueva no tiene ninguno, así que todavía no hay nada que intercambiar. Lleva primero KOIN desde Ethereum.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Hay una comisión del exchange, otra de retirada, una comisión de red por transacción, una comisión de intercambio y un precio peor en órdenes grandes. Las cantidades cambian constantemente: lee la pantalla antes de cada confirmación.",
  },
  {
    q: "Mi vKOIN no aparece en el monedero.",
    a: "Probablemente no se haya perdido. Comprueba la transacción en el explorador de bloques y después añade el token con la dirección oficial de esta página. Nunca uses una dirección que te haya enviado otra persona.",
  },
  {
    q: "¿Por qué Kondor 1.3 y no Kondor 2?",
    a: "Kondor 2 (kondorwallet.com) es el monedero más reciente, pero en agosto de 2026 su opción de mana gratuito no podía pagar el canje de Vortex para una cuenta que todavía no tuviera KOIN. Kondor 1.3 sí puede, y eso es lo que necesita una primera compra. El error se ha comunicado; esta guía pasará a Kondor 2 cuando se corrija.",
  },
  {
    q: "Mi cuenta de Kondor está vacía. ¿Puede pagar el canje?",
    a: "No con su propio mana, porque no tendrá hasta que lleguen los KOIN. Kondor 1.3 lo detecta y, si su cuenta de mana gratuito tiene suficiente, permite que pague en su lugar; lo verás en el campo Payer. Si Kondor indica que el servicio de mana gratuito está congestionado o no está disponible, conserva el hash de la transacción y vuelve más tarde; la pestaña Redeem retoma la transferencia.",
  },
  {
    q: "Mi transferencia por el puente se ha quedado bloqueada.",
    a: "No inicies otra. Lleva el hash de la transacción de origen a la pestaña Redeem de Vortex, que reanuda una transferencia cuyo canje no se haya completado. Si indica que las firmas han caducado, pulsa Renew signatures; también es una transacción de Koinos y se paga del mismo modo mientras tu cuenta esté vacía y el mana gratuito esté disponible. Espera y después canjea.",
  },
  {
    q: "¿Esto es asesoramiento financiero?",
    a: "No. Explica un proceso, pero no te dice si debes comprar, qué cantidad comprar ni recomienda ninguno de los servicios mencionados. KOIN y vKOIN pueden perder todo su valor.",
  },
];

export const GLOSSARY = [
  ["Dirección", "El destino donde se reciben los tokens. Se puede compartir, pero solo funciona en su propia red."],
  ["Puente", "Mueve valor entre dos blockchains. Vortex: Ethereum ↔ Koinos. Portal (Wormhole): Ethereum ↔ Base / Solana."],
  ["Dirección de contrato", "El identificador único de un token y la única forma fiable de distinguir el auténtico de una copia."],
  ["DEX", "Un sitio que intercambia activos directamente desde tu monedero sin custodiar tus fondos."],
  ["Mana gratuito", "Kondor paga el mana de una transacción desde su propia cuenta en lugar de la tuya, de modo que un monedero sin KOIN también pueda enviar una transacción. Kondor 1.3 lo hace automáticamente cuando tu cuenta no puede pagar y esa cuenta sí."],
  ["Mana", "Lo que utilizan las transacciones de Koinos en lugar de una comisión. Se obtiene al tener KOIN y se recupera con el tiempo."],
  ["Comisión de red", "Lo que cobran Ethereum, Base o Solana por cada transacción, pagado en ETH o SOL."],
  ["Frase de recuperación", "Las palabras que permiten restaurar un monedero. Quien las tenga controla el monedero."],
  ["Token envuelto", "Un token de una cadena que representa un activo de otra. vKOIN es KOIN envuelto."],
];

export const DISCLAIMER = [
  "Esta guía tiene fines educativos y no constituye asesoramiento financiero, jurídico ni fiscal. KOIN y vKOIN pueden perder todo su valor. Los exchanges, monederos, sitios de intercambio y puentes son servicios independientes con sus propios riesgos, comisiones y disponibilidad; Koinos no garantiza ningún precio, cantidad, plazo de ejecución ni que un servicio continúe funcionando, y Vortex indica que no está auditado. Las transacciones de una blockchain no se pueden revertir. Comprueba la dirección del sitio, la red, la dirección del token, el destino, la cantidad y las comisiones antes de firmar.",
];

export const UI = {
  headTitle: "Cómo comprar KOIN | Koinos",
  metaDescription:
    "Guía para principiantes sobre cómo comprar KOIN: elige un monedero y una ruta, compra en un exchange descentralizado y pasa los fondos a Koinos con Vortex para obtener KOIN nativo.",
  languageLabel: "Elegir idioma",
  eyebrow: "Guía",
  startGuide: "Empezar la guía",
  contractsTitle: "Direcciones oficiales de vKOIN",
  contractsIntro:
    "La dirección identifica el token; el nombre y el logotipo no demuestran nada.",
  network: "Red",
  contractAddress: "Dirección del contrato",
  decimals: "Decimales",
  copyAddress: "Copiar dirección",
  copy: "Copiar",
  copied: "Copiada",
  copyFailed: "No se pudo copiar",
  copyLabel: (chain) => `Copiar la dirección del contrato vKOIN en ${chain}`,
  copySubject: (chain) => `dirección del contrato vKOIN en ${chain}`,
  copySuccess: (subject) => `Se ha copiado la ${subject} al portapapeles.`,
  copyFailure: (subject) =>
    `No se pudo copiar la ${subject}. Selecciona la dirección en la tabla y cópiala manualmente.`,
  contractsFineprint:
    "Cada dirección abre el explorador de bloques de la red (símbolo vKOIN, nombre Vortex Koin).",
  chooseTitle: "Elige tu ruta",
  chooseLead: "Selecciona el monedero que utilizarás y dónde comprarás.",
  walletLegend: "Tu monedero",
  routeLegend: "Dónde compras",
  showCombination: (wallet, route) =>
    `Mostrar ${wallet} con la ruta de ${route}`,
  buyFirst: "Primero compras",
  nothingFirst: "Nada: ya necesitas KOIN",
  whereSwap: "Dónde intercambias",
  endWith: "Terminas con",
  nativeRoute: "Mostrar la ruta que termina con KOIN nativo",
  guideHeading: (route, wallet) => `${route} con ${wallet}`,
  chooseSupported: "Elige una combinación compatible",
  stepCount: (current, total) => `Paso ${current} de ${total}`,
  beforeContinue: "Antes de continuar",
  specificTo: (wallet) => `Indicaciones para ${wallet}`,
  installWallet: (wallet, source) => `Instalar ${wallet} desde ${source}`,
  unsupportedLead:
    "Elige arriba un monedero y una ruta compatibles para que aparezcan aquí los pasos.",
  questions: "Preguntas",
  glossary: "Glosario",
  importantInformation: "Información importante",
  verificationPrefix: (date) =>
    `Pasos verificados por última vez el ${date}. Las interfaces cambian. Si una pantalla es distinta de la captura de esta página, detente, comprueba la red, la dirección del token, el destino y la cantidad antes de firmar, y pregunta en la `,
  verificationSuffix:
    " antes de firmar cualquier operación que no entiendas.",
  communityLinkText: "comunidad de Koinos",
  change: "Cambiar",
  calloutLabels: { tip: "Consejo", warning: "Advertencia", cost: "Coste" },
};
