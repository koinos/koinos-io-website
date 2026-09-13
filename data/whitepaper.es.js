export const WHITEPAPER_ES = {
  title: "Libro blanco",
  headTitle: "Libro blanco | Koinos",
  description:
    "Libro blanco de Koinos en español: mana, contratos inteligentes sin comisiones, Proof of Burn, gobernanza y actualizaciones sin hard forks.",
  languageLabel: "Elegir idioma",
  sections: [
    {
      title: "Resumen",
      paragraphs: [
        "Una red descentralizada de propósito general basada en blockchain que permite utilizar aplicaciones gratuitamente mediante un mecanismo de «Mana». Este mecanismo asigna dinámicamente un precio a los recursos de red en forma de coste de oportunidad —no de tokens— y permite crear dApps gratuitas mediante la «delegación» de mana.",
        "Proof of Burn se implementa como algoritmo de consenso para maximizar la eficiencia, la descentralización y un igualitarismo demostrable, al tiempo que impide el ataque de los exchanges y reduce el spam. Los bloques se producen aplicando una función hash a una clave privada y al número aleatorio generado por una función aleatoria verificable (VRF), y dividiendo después el resultado por la cantidad de tokens quemados. Como en Proof of Work, la cadena más larga sirve como registro inmutable de transacciones respaldado por la mayor cantidad de capital sacrificado.",
        "Gracias a su capacidad modular de actualización, el framework de Koinos permite actualizar la blockchain sin hard forks. El resultado es una blockchain de propósito general, gratuita y realmente descentralizada, con una experiencia convencional que maximiza la accesibilidad para usuarios, desarrolladores y operadores de nodos.",
      ],
    },
    {
      title: "Trabajo anterior",
      paragraphs: [
        "Satoshi Nakamoto creó en Bitcoin la primera moneda digital descentralizada entre pares mediante una arquitectura de base de datos novedosa —la blockchain— que utilizaba comisiones para regular el uso de la red y Proof of Work para regular las transiciones de estado. Ethereum conservó estos elementos y la base de datos blockchain, pero amplió su utilidad al permitir que los usuarios incluyeran código Turing completo en sus transacciones. Ese código se ejecutaba en una máquina virtual, haciendo posibles las aplicaciones descentralizadas (dApps).",
        "Antes de desarrollar Koinos fuimos parte del equipo principal de Steem, la primera blockchain social y sin comisiones, hasta que sufrió una adquisición hostil y un ataque mediante exchanges. Tras abandonar aquel proyecto, quisimos crear una empresa que permitiera desarrollar dApps como Steem y Hive sobre una blockchain realmente descentralizada, sin comisiones y resistente a ese tipo de ataque. Ninguna blockchain existente reunía las propiedades necesarias. Las que afirmaban no tener comisiones exigían pagar por RAM o cuentas y tampoco estaban realmente descentralizadas debido a su lanzamiento mediante ICO, su algoritmo de consenso o ambas cosas.",
        "Queríamos llevar la accesibilidad de una blockchain al extremo y permitir por primera vez dApps gratuitas. Para ello no bastaban las transacciones sin comisiones: también hacían falta cuentas gratuitas, ejecución gratuita de contratos inteligentes y delegación de recursos de red. Conseguirlo exigía construir desde cero una blockchain nueva y realizar un lanzamiento descentralizado cuya equidad pudiera demostrarse. El resultado no sería otro competidor de Ethereum, sino la primera alternativa genuina a Ethereum.",
      ],
    },
    {
      title: "$KOIN",
      paragraphs: [
        "Antes de KOIN, la mayoría de las criptomonedas tenían diseños económicos relativamente sencillos: el token se utilizaba para pagar las comisiones que sostenían el funcionamiento de la red descentralizada. Aunque resulte contraintuitivo, eliminar las comisiones permite crear un sistema más dinámico, flexible y eficiente, y una moneda digital que materializa la visión futurista, igualitaria y descentralizada iniciada por Bitcoin.",
      ],
    },
    {
      title: "Suministro y distribución del token",
      small: true,
      paragraphs: [
        "Para maximizar desde el principio la descentralización y una equidad demostrable, KOIN se lanzó del mismo modo que Bitcoin: mediante minería Proof of Work, en este caso sobre Ethereum. El suministro máximo minable fue de 100 millones de KOIN. Los saldos iniciales de mainnet se establecieron mediante una instantánea del KOIN ERC-20 y la tasa objetivo inicial de creación de nuevos tokens fue del 2 %, aunque la gobernanza puede modificarla dentro de la propia red. El componente de quema del algoritmo de consenso puede producir una inflación real mucho menor e incluso periodos temporales de deflación.",
        "Gracias al sistema de mana, los tokens de mainnet pueden transferirse sin pagar comisiones: el mana asociado permite utilizar la red sin gastar KOIN. Los usuarios no necesitan comprar cuentas, pagar por ejecutar contratos inteligentes ni siquiera adquirir KOIN para empezar a utilizar aplicaciones cuando otra cuenta delega los recursos necesarios.",
      ],
    },
    {
      title: "Inflacionario y deflacionario",
      small: true,
      paragraphs: [
        "Al ser la primera blockchain de propósito general que utiliza Proof of Burn como algoritmo de consenso, el suministro de KOIN puede expandirse o contraerse según las condiciones del mercado. Ofrece así mecanismos económicos comparables a los de las monedas globales más avanzadas, pero administrados de forma totalmente descentralizada y algorítmica.",
      ],
    },
    {
      title: "Rápido y sin comisiones",
      small: true,
      paragraphs: [
        "Proof of Burn elimina el trabajo computacional carente de utilidad, por lo que los bloques de Koinos pueden producirse rápidamente y KOIN puede ser veloz y funcionar sin comisiones. La capacidad de actualización de Koinos permite reducir progresivamente el tiempo de bloque y la latencia, con los únicos límites de la estabilidad de la red y el crecimiento del estado. Esto abre modelos de negocio nuevos al permitir intercambiar valor en segundos sin perder parte de él en una comisión.",
      ],
    },
    {
      title: "Actualizaciones sin hard forks",
      paragraphs: [
        "Al desarrollar Steem vimos cómo los hard forks frenan la adopción al crear un gran cuello de botella en el proceso de actualización. Mainnet resuelve este problema mediante el framework de Koinos, que permite añadir cualquier comportamiento a la blockchain como contrato inteligente. En la lógica del sistema, el contrato de gobernanza puede convertir dentro de la propia red un contrato de usuario en un contrato del sistema que sustituya una implementación nativa básica. Las actualizaciones de la lógica pueden propagarse por la red P2P como un parche del sistema operativo y con una interrupción mínima.",
        "El framework de Koinos es una blockchain de propósito general, sencilla y plenamente funcional dentro de una arquitectura de microservicios. El microservicio de cadena contiene de forma nativa solo las funciones criptográficas necesarias y la lógica que deriva las llamadas hacia implementaciones nativas o hacia llamadas nuevas ejecutadas como contratos inteligentes WASM en la máquina virtual. Esta combinación forma un núcleo de blockchain eficiente, escalable verticalmente y actualizable al que se puede añadir cualquier comportamiento sin hard forks.",
      ],
    },
    {
      title: "Compatibilidad universal con lenguajes",
      paragraphs: [
        "Ethereum amplió radicalmente el espacio creativo de los desarrolladores mediante un único lenguaje Turing completo creado a medida: Solidity. Koinos vuelve a ampliarlo al permitir trabajar con los lenguajes Turing completos más utilizados, empezando por C++ y TypeScript mediante AssemblyScript. Lo consigue combinando tres tecnologías de código abierto con compatibilidad creciente: WebAssembly, Protocol Buffers y Advanced Message Queuing Protocol.",
        "WebAssembly se utiliza para los contratos inteligentes, Protobuf para la serialización dentro del nodo y AMQP para la comunicación entre microservicios mediante mensajes de difusión en un modelo basado en eventos. Estas tecnologías facilitan la creación de un SDK para cualquier lenguaje que sea compatible con las tres, lo que abarca prácticamente todos los lenguajes Turing completos más utilizados.",
      ],
    },
    {
      title: "Mana",
      paragraphs: [
        "El objetivo de Koinos es permitir aplicaciones descentralizadas Web3 con una experiencia propia de Web2. Las dApps deben ser agradables de usar y cualquier persona debe poder empezar sin adquirir tokens previamente, una de las principales barreras de entrada. El sistema de mana permite conseguirlo y recibe ese nombre porque reproduce una experiencia conocida por los usuarios de videojuegos de rol.",
        "La premisa básica es que cada KOIN contiene mana que se consume cuando una persona utiliza recursos de red. El mana es una propiedad de KOIN, no un token independiente: no se puede comprar ni vender y no tiene un precio distinto. Sin embargo, puede delegarse a otras cuentas, permitiendo utilizar la blockchain sin tener tokens y manteniendo al mismo tiempo una protección eficaz contra el spam. El mana continúa vinculado a los KOIN de quien lo delega para preservar la sostenibilidad económica y su liquidez, ya que puede retirar la delegación cuando quiera.",
      ],
    },
    {
      title: "Detalles de implementación",
      paragraphs: [
        "Al igual que el gas de Ethereum, cada instrucción de la máquina virtual tiene un coste concreto en mana. Como cada bloque solo puede contener un número limitado de instrucciones, el mana está estrechamente vinculado a los recursos de red disponibles. Mientras Ethereum exige comprar gas a los mineros y consumirlo en la transacción, Koinos descuenta automáticamente del saldo de mana la cantidad correspondiente a los recursos utilizados.",
      ],
    },
    {
      title: "«Pagar» con tiempo",
      small: true,
      paragraphs: [
        "Cuando se consume parte del mana asociado a un token, ese token queda bloqueado durante el periodo de regeneración. Esto crea un coste de oportunidad temporal en lugar de un coste monetario inmediato y desincentiva las transacciones sin valor. El periodo funciona como tiempo de recarga y genera la sensación de que el mana se regenera, de forma parecida a una batería.",
        "La regeneración se aplica al mismo tiempo a todos los tokens de una cuenta y se distribuye progresivamente. Para el usuario parece dinámica: el mana se recupera constantemente y no es necesario esperar a que termine el periodo completo para volver a utilizar la blockchain.",
      ],
    },
    {
      title: "Uso gratuito",
      paragraphs: [
        "Para permitir que una persona utilice una dApp sin adquirir tokens, Koinos deja que los desarrolladores de contratos inteligentes especifiquen quién paga el mana cuando se ejecuta el contrato. Cada transacción indica una cuenta pagadora y puede indicar también otra cuenta como beneficiaria de la operación. Se gasta el mana del pagador y se actualiza el nonce del beneficiario; si no se especifica uno, el pagador cumple ambas funciones. Esta semántica permite que un contrato determine quién cubre sus costes de mana.",
        "Estas reglas permiten empezar a utilizar la blockchain sin comprar KOIN y ofrecen a los grandes titulares de KOIN una forma de apoyar dApps valiosas sin sacrificar sus tokens.",
      ],
    },
    {
      title: "Multidimensionalidad",
      small: true,
      paragraphs: [
        "Como <a href=\"https://ethresear.ch/t/multidimensional-eip-1559/11651\">ha explicado Vitalik Buterin</a>, el cálculo del gas de Ethereum es unidimensional y asigna precio como si fueran iguales a recursos muy diferentes, como almacenamiento y computación. El modelo de mana registra cada recurso por separado para maximizar la eficiencia, aunque el usuario solo paga en mana. Los recursos se agrupan en cada bloque, se limita cuánto puede consumirse y un creador de mercado XYK fija el precio de cada recurso.",
        "La multidimensionalidad permite optimizar los contratos para aprovechar recursos infrautilizados. Las aplicaciones que lo hagan consumirán menos mana, creando un ciclo positivo de autorregulación descentralizada. El sistema cobra progresivamente más mana por los recursos con mayor demanda y menos por los infrautilizados. El mana total es la combinación lineal del coste y el uso de cada recurso, por ejemplo: <code>bandwidth_cost * bandwidth_used + storage_cost * storage_used + compute_cost * compute_used</code>.",
      ],
    },
    {
      title: "Proof of Burn",
      paragraphs: [
        "Además de ser rápido y no cobrar comisiones, KOIN busca materializar <a href=\"https://bitcoin.org/bitcoin.pdf\">la visión original de Satoshi de un efectivo electrónico realmente entre pares</a>, que aprovecha recursos computacionales disponibles y no exige hardware dedicado. <a href=\"https://en.bitcoin.it/wiki/Proof_of_burn\">Iain Stewart propuso Proof of Burn en 2012</a>, un año después de Proof of Stake. Proof of Burn busca aportar la economía de Proof of Work con una eficiencia incluso mayor que Proof of Stake. El resultado pretende ser un consenso más descentralizado que Proof of Work y más eficiente que Proof of Stake.",
      ],
    },
    {
      title: "El ataque de los exchanges",
      small: true,
      paragraphs: [
        "Proof of Burn exige pagar por adelantado el coste de atacar la red, como Proof of Work, pero no requiere comprar y operar hardware adicional más allá del necesario para producir bloques. El productor ya ha destruido su capital y solo puede recuperarlo manteniendo un registro correcto. Un exchange que quisiera utilizar los fondos de sus clientes para influir en la gobernanza, como en el <a href=\"https://decrypt.co/38050/steem-steemit-tron-justin-sun-cryptocurrency-war\">incidente Steem/Tron</a>, tendría que destruir primero esos fondos. Esto también reduce la necesidad de las complejas penalizaciones de Proof of Stake, porque el capital queda penalizado antes de recibir recompensas.",
      ],
    },
    {
      title: "Minería virtual",
      paragraphs: [
        "Quien quiera obtener recompensas de bloque quema KOIN, reduciendo su suministro total. La blockchain entrega al productor tokens fungibles de potencia de hash virtual (VHP), que permiten producir bloques sin equipos costosos. A medida que se producen bloques, el VHP disminuye y es necesario quemar más KOIN para continuar. Quemar tokens equivale así a comprar equipos de minería que se degradan y la electricidad necesaria para Proof of Work.",
      ],
    },
    {
      title: "Inflación",
      small: true,
      paragraphs: [
        "VHP se trata siempre en una relación 1:1 con KOIN. Por cada KOIN quemado, una cuenta recibe la misma cantidad de VHP. Cuando una cuenta con VHP recibe KOIN como recompensa de bloque, su saldo de VHP se reduce en la misma cantidad. VHP actúa como sustituto de KOIN y ambos suministros pueden sumarse para calcular el suministro virtual con el que se fija la tasa máxima de creación de tokens. Para mantener el incentivo de producir bloques debe existir una tasa neta positiva; inicialmente se fijó como objetivo un 2 %.",
      ],
    },
    {
      title: "Deflación",
      small: true,
      paragraphs: [
        "Debido a la quema, el suministro total puede aumentar —inflación— o disminuir —deflación— según la competencia por producir bloques. Si la demanda de recompensas crece lo suficiente, KOIN puede quemarse a mayor velocidad de la que se crea, reduciendo el suministro aunque continúe la emisión de nuevos tokens.",
      ],
    },
    {
      title: "Aleatoriedad",
      small: true,
      paragraphs: [
        "Proof of Burn conserva el mecanismo esencial de Proof of Work, pero intercambia energía por tiempo mediante una <a href=\"https://people.csail.mit.edu/silvio/Selected%20Scientific%20Papers/Pseudo%20Randomness/Verifiable_Random_Functions.pdf\">función aleatoria verificable</a> (VRF). Cada bloque contiene intervalos temporales en los que compiten los productores. En cada intervalo, un productor combina su clave privada, una marca de tiempo y el resultado aleatorio anterior para generar un hash que se divide por su VHP. Si el valor es suficientemente bajo, produce el bloque; si no, vuelve a intentarlo en el siguiente intervalo.",
      ],
    },
    {
      title: "Eficiencia y regularidad",
      small: true,
      paragraphs: [
        "El incentivo del productor no es realizar todo el trabajo posible, sino el mínimo necesario para participar en cada intervalo. A partir de ahí, Proof of Burn funciona como Proof of Work, pero solo requiere un hash por intervalo. La competencia continua mantiene la producción de bloques. Dividir el hash por el tamaño de la quema garantiza que el factor dominante sea el capital quemado, no una cantidad de trabajo computacional que en la práctica es mínima.",
      ],
    },
    {
      title: "Pools de producción",
      small: true,
      paragraphs: [
        "A diferencia de las cadenas Proof of Work, los pools de Koinos pueden aumentar la descentralización y la participación en la gobernanza. Los usuarios sin conocimientos técnicos pueden asignar su capital a operadores capaces de mantener una mayor disponibilidad y votar según las preferencias de quienes contribuyen. Para participar basta con transferir VHP a una cuenta equipada con un contrato que distribuya automáticamente las recompensas.",
      ],
    },
    {
      title: "Mayor liquidez",
      small: true,
      paragraphs: [
        "Si un productor o participante de un pool quiere abandonar la producción de bloques, puede retirar su VHP de la cuenta y venderlo como cualquier token fungible. Esto maximiza la liquidez y permite salir cuando se desee con un perjuicio económico mínimo.",
      ],
    },
    {
      title: "Resistente a la centralización e igualitario de forma demostrable",
      small: true,
      paragraphs: [
        "En Proof of Burn no hay equipos de minería, sino cuentas con VHP, por lo que la distribución de recompensas es totalmente algorítmica. Esto permite personalizarla y elimina la centralización provocada por el hardware. Proof of Burn busca ofrecer la economía igualitaria de Proof of Work y materializar la visión de un efectivo electrónico entre pares que aprovecha recursos disponibles sin requerir equipos dedicados.",
      ],
    },
    {
      title: "Gobernanza descentralizada",
      paragraphs: [
        "La gran capacidad de actualización del framework de Koinos convierte a la gobernanza, y no al proceso de hard fork, en el principal punto de decisión. Como los demás comportamientos del sistema, la gobernanza es un contrato inteligente, aunque cuenta con privilegios de sistema y una función especial en las actualizaciones. Inspirado en la forma en que Bitcoin gestiona cambios como SegWit, permite proponer actualizaciones, revisarlas, votarlas y aprobarlas o rechazarlas al terminar el periodo de votación. Los votos se emiten produciendo bloques, por lo que la influencia depende de cuántos tokens se han quemado y no de cuántos se mantienen en stake.",
        "La aplicación de una actualización se retrasa una semana para que desarrolladores y empresas puedan adaptar sus sistemas. Para evitar el spam, proponer una actualización exige quemar KOIN. La cantidad se calcula de manera descentralizada dividiendo el suministro total entre 1.000.000. La propuesta también consume recursos en mana según los límites definidos por el sistema.",
      ],
    },
    {
      title: "Actualización de la gobernanza",
      paragraphs: [
        "Como la gobernanza es un contrato inteligente de Koinos, sus parámetros pueden modificarse sin un hard fork; la propia gobernanza puede actualizarse. Debido a su importancia, cambiarla requiere una supermayoría del 75 %, mientras que otras actualizaciones del sistema requieren una mayoría del 60 %. Incluso esos umbrales pueden modificarse mediante gobernanza con la supermayoría correspondiente.",
      ],
    },
    {
      title: "Conclusión",
      paragraphs: [
        "Este documento describe la lógica incorporada al framework de Koinos para hacer de mainnet una blockchain especialmente accesible. El mana permite utilizar mejor los recursos y ofrecer experiencias fluidas; su delegación deja que personas sin tokens utilicen dApps. El lanzamiento abierto y justo de KOIN mediante Proof of Work en Ethereum proporcionó una base descentralizada. En mainnet, KOIN regula el uso gratuito del ecosistema, mientras Proof of Burn ajusta el suministro y la gobernanza descentralizada impulsa mejoras continuas mediante actualizaciones sin hard forks y compatibilidad con lenguajes de uso general.",
      ],
    },
  ],
};
