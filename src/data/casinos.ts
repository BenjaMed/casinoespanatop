export interface Casino {
  id: string;
  name: string;
  slug: string;
  logo: string;
  score: number;
  bonus: string;
  rollover: string;
  minDeposit: string;
  payoutSpeed: string;
  pros: string[];
  cons: string[];
  affiliateUrl: string;
  isRecommended?: boolean;
  isNew?: boolean;
  isBestBono?: boolean;
  isFastWithdraw?: boolean;
  features: {
    liveCasino: boolean;
    mobileApp: boolean;
    bizum: boolean;
    paypal: boolean;
    slots: boolean;
    blackjack: boolean;
    roulette: boolean;
  };
  review: {
    summary: string;
    welcomeBonus: string;
    games: string;
    payments: string;
    support: string;
    verdict: string;
  };
  lastVerified: string;
}

export const CASINOS: Casino[] = [
  {
    id: "1",
    name: "TonyBet",
    slug: "tonybet",
    logo: "🎰",
    score: 4.8,
    bonus: "100% hasta 500€ + 100 Giros",
    rollover: "x30",
    minDeposit: "10€",
    payoutSpeed: "24h",
    pros: ["Catálogo masivo (+7000 juegos)", "Rollover bajo (x30)", "Retiros rápidos"],
    cons: ["No acepta Bizum", "Soporte mejorable en horas punta"],
    affiliateUrl: "https://tonybet.es/",
    isRecommended: true,
    isBestBono: true,
    lastVerified: "2026-04-01",
    features: {
      liveCasino: true,
      mobileApp: true,
      bizum: false,
      paypal: true,
      slots: true,
      blackjack: true,
      roulette: true,
    },
    review: {
      summary: "TonyBet destaca por ser una solución todo-en-uno genuina con más de 7.000 juegos y un rollover muy competitivo.",
      welcomeBonus: "100% hasta 500€ y 100 giros gratis con rollover x30.",
      games: "Más de 7.000 juegos de 130 proveedores premium.",
      payments: "PayPal, Visa, Mastercard y más. Retiros en 24h.",
      support: "Chat en vivo y email.",
      verdict: "El mejor casino actual por catálogo y condiciones de bono."
    }
  },
  {
    id: "2",
    name: "Luckia",
    slug: "luckia",
    logo: "🍀",
    score: 4.7,
    bonus: "30€ de bienvenida",
    rollover: "x60",
    minDeposit: "1€",
    payoutSpeed: "24h",
    pros: ["Catálogo masivo (+3700 slots)", "Depósito mínimo 1€", "Marca española de confianza"],
    cons: ["Rollover elevado (x60)", "App no incluye todo el catálogo"],
    affiliateUrl: "https://www.luckia.es/",
    isFastWithdraw: true,
    lastVerified: "2026-04-10",
    features: {
      liveCasino: true,
      mobileApp: true,
      bizum: true,
      paypal: true,
      slots: true,
      blackjack: true,
      roulette: true,
    },
    review: {
      summary: "El gigante español con el mayor catálogo de tragaperras y depósitos desde solo 1€.",
      welcomeBonus: "30€ de bienvenida con rollover x60.",
      games: "+3.700 slots y excelente casino en vivo.",
      payments: "Bizum, PayPal y tarjetas. Depósitos desde 1€.",
      support: "Soporte premium en español.",
      verdict: "Ideal para principiantes por su bajo depósito mínimo."
    }
  },
  {
    id: "3",
    name: "Gratogana",
    slug: "gratogana",
    logo: "🎁",
    score: 4.6,
    bonus: "50 Giros + 100% hasta 200€",
    rollover: "x40",
    minDeposit: "10€",
    payoutSpeed: "1-3 días",
    pros: ["Programa de fidelidad atractivo", "Interfaz sencilla", "Bono combinado"],
    cons: ["Catálogo limitado (~500)", "Retiros no tan rápidos"],
    affiliateUrl: "https://www.gratogana.es/",
    lastVerified: "2026-03-25",
    features: {
      liveCasino: true,
      mobileApp: true,
      bizum: true,
      paypal: true,
      slots: true,
      blackjack: true,
      roulette: true,
    },
    review: {
      summary: "Popular por su programa de fidelidad y sencillez de uso, ideal para jugadores casuales.",
      welcomeBonus: "50 giros + 100% hasta 200€ con rollover x40.",
      games: "Selección compacta de unos 500 juegos.",
      payments: "Bizum, PayPal y otros métodos comunes.",
      support: "Atención al cliente eficiente.",
      verdict: "Una opción sólida para quienes buscan simplicidad."
    }
  },
  {
    id: "4",
    name: "PlayUZU",
    slug: "playuzu",
    logo: "💎",
    score: 4.6,
    bonus: "80 Giros Gratis (Sin Rollover)",
    rollover: "x0",
    minDeposit: "10€",
    payoutSpeed: "Instantáneo",
    pros: ["Sin requisitos de apuesta", "Retiros instantáneos", "Transparencia total"],
    cons: ["Bono menor en cantidad", "Sin app nativa"],
    affiliateUrl: "https://www.playuzu.es/",
    isRecommended: true,
    lastVerified: "2026-04-12",
    features: {
      liveCasino: true,
      mobileApp: false,
      bizum: true,
      paypal: true,
      slots: true,
      blackjack: true,
      roulette: true,
    },
    review: {
      summary: "El casino más transparente con bonos sin rollover. Lo que ganas es tuyo inmediatamente.",
      welcomeBonus: "80 giros gratis sin ningún requisito de apuesta.",
      games: "+3.500 juegos de proveedores top.",
      payments: "Bizum, PayPal. Retiros instantáneos sin mínimo.",
      support: "Herramienta 'Guardaespaldas UZU' para juego responsable.",
      verdict: "El mejor para quienes odian los rollovers."
    }
  },
  {
    id: "5",
    name: "YoCasino",
    slug: "yocasino",
    logo: "🎰",
    score: 4.5,
    bonus: "100% hasta 200€ + 50 Giros",
    rollover: "x40",
    minDeposit: "10€",
    payoutSpeed: "1-3 días",
    pros: ["Especialista en videobingo", "Plataforma 100% española", "Interfaz intuitiva"],
    cons: ["Catálogo algo compacto", "Retiros estándar"],
    affiliateUrl: "https://www.yocasino.es/",
    lastVerified: "2026-04-05",
    features: {
      liveCasino: true,
      mobileApp: true,
      bizum: true,
      paypal: true,
      slots: true,
      blackjack: true,
      roulette: true,
    },
    review: {
      summary: "Plataforma española especializada en slots y videobingo con un trato muy cercano.",
      welcomeBonus: "100% hasta 200€ y 50 giros gratis.",
      games: "900 juegos con excelente sección de videobingo.",
      payments: "Bizum y PayPal disponibles.",
      support: "Soporte en español de calidad.",
      verdict: "La mejor opción para amantes del videobingo."
    }
  },
  {
    id: "6",
    name: "Casino Gran Madrid",
    slug: "casino-gran-madrid",
    logo: "🏰",
    score: 4.4,
    bonus: "30€ sin depósito + 200% hasta 200€",
    rollover: "x40",
    minDeposit: "10€",
    payoutSpeed: "24h",
    pros: ["Bono sin depósito 30€", "Mesas reales desde Torrelodones", "Prestigio nacional"],
    cons: ["Rollover x40", "Interfaz algo clásica"],
    affiliateUrl: "https://www.casinogranmadridonline.es/",
    lastVerified: "2026-04-15",
    features: {
      liveCasino: true,
      mobileApp: true,
      bizum: true,
      paypal: true,
      slots: true,
      blackjack: true,
      roulette: true,
    },
    review: {
      summary: "Tradición digitalizada con mesas que emiten directamente desde su casino físico.",
      welcomeBonus: "30€ gratis solo por registrarte + 200% en primer depósito.",
      games: "+3.500 juegos y ruletas exclusivas.",
      payments: "Bizum, PayPal y cobro en locales físicos.",
      support: "Atención VIP profesional.",
      verdict: "Ideal para experimentar la emoción de un casino real desde casa."
    }
  },
  {
    id: "7",
    name: "LeoVegas",
    slug: "leovegas",
    logo: "🦁",
    score: 4.4,
    bonus: "Hasta 200€ en dinero real",
    rollover: "x20",
    minDeposit: "10€",
    payoutSpeed: "24h",
    pros: ["Rey del móvil", "Retiros rápidos (2-4h)", "Casino en vivo premium"],
    cons: ["Menos promociones de bienvenida que antes"],
    affiliateUrl: "https://www.leovegas.es/",
    isRecommended: true,
    lastVerified: "2026-04-13",
    features: {
      liveCasino: true,
      mobileApp: true,
      bizum: true,
      paypal: true,
      slots: true,
      blackjack: true,
      roulette: true,
    },
    review: {
      summary: "App nativa galardonada y procesamiento de retiros ultrarrápido.",
      welcomeBonus: "Hasta 200€ en dinero real con rollover x20.",
      games: "+1.500 juegos y más de 300 mesas en vivo.",
      payments: "Bizum, PayPal. Retiros en tiempo récord.",
      support: "Chat 24/7 en español.",
      verdict: "Indiscutiblemente el mejor para jugar desde el móvil."
    }
  },
  {
    id: "8",
    name: "PlatinCasino",
    slug: "platincasino",
    logo: "💎",
    score: 4.3,
    bonus: "200% hasta 200€ + 10 Giros",
    rollover: "x55",
    minDeposit: "10€",
    payoutSpeed: "24h",
    pros: ["Bono de depósito generoso (200%)", "Gran variedad de proveedores", "Pagos rápidos"],
    cons: ["Rollover muy alto (x55)"],
    affiliateUrl: "https://www.platincasino.es/",
    lastVerified: "2026-04-02",
    features: {
      liveCasino: true,
      mobileApp: true,
      bizum: true,
      paypal: true,
      slots: true,
      blackjack: true,
      roulette: true,
    },
    review: {
      summary: "Destaca por su bono del 200% que triplica tu saldo inicial, aunque con requisitos exigentes.",
      welcomeBonus: "200% hasta 200€ + 10 giros gratis.",
      games: "+2.500 juegos de alta calidad.",
      payments: "Bizum y PayPal con retiros en 24h.",
      support: "Soporte eficiente.",
      verdict: "Bueno para quienes buscan maximizar su saldo inicial."
    }
  },
  {
    id: "9",
    name: "Betway",
    slug: "betway",
    logo: "⚫",
    score: 4.2,
    bonus: "Hasta 150€",
    rollover: "x30",
    minDeposit: "10€",
    payoutSpeed: "1-2 días",
    pros: ["Marca global reconocida", "Excelente sección de deportes", "Rollover justo"],
    cons: ["Catálogo de juegos algo menor"],
    affiliateUrl: "https://betway.es/",
    lastVerified: "2026-03-20",
    features: {
      liveCasino: true,
      mobileApp: true,
      bizum: false,
      paypal: true,
      slots: true,
      blackjack: true,
      roulette: true,
    },
    review: {
      summary: "Un clásico del sector con una plataforma muy equilibrada y segura.",
      welcomeBonus: "Hasta 150€ con rollover x30.",
      games: "~800 juegos bien seleccionados.",
      payments: "PayPal y tarjetas. Retiros fiables.",
      support: "Soporte 24/7.",
      verdict: "Una opción segura y de confianza internacional."
    }
  },
  {
    id: "10",
    name: "Versus",
    slug: "versus",
    logo: "🔴",
    score: 4.1,
    bonus: "100% hasta 200€",
    rollover: "x40",
    minDeposit: "10€",
    payoutSpeed: "~24h",
    pros: ["Diseño moderno", "Locales físicos en España", "Acepta Bizum"],
    cons: ["Menos juegos que los líderes"],
    affiliateUrl: "https://www.versus.es/",
    lastVerified: "2026-04-08",
    features: {
      liveCasino: true,
      mobileApp: true,
      bizum: true,
      paypal: true,
      slots: true,
      blackjack: true,
      roulette: true,
    },
    review: {
      summary: "Versus ofrece una experiencia moderna y muy integrada con sus locales físicos.",
      welcomeBonus: "100% hasta 200€ con el código CASINOBIENVENIDA.",
      games: "~1.000 juegos disponibles.",
      payments: "Bizum, PayPal y cobro en locales Versus.",
      support: "Atención cercana.",
      verdict: "Ideal para quienes combinan juego online y físico."
    }
  },
  {
    id: "11",
    name: "Codere",
    slug: "codere",
    logo: "🟢",
    score: 4.0,
    bonus: "100% hasta 200€",
    rollover: "x35",
    minDeposit: "10€",
    payoutSpeed: "1-3 días",
    pros: ["Casa de apuestas líder", "Cobro inmediato en locales", "Marca muy conocida"],
    cons: ["Web a veces lenta"],
    affiliateUrl: "https://www.codere.es/",
    lastVerified: "2026-04-05",
    features: {
      liveCasino: true,
      mobileApp: true,
      bizum: true,
      paypal: true,
      slots: true,
      blackjack: true,
      roulette: true,
    },
    review: {
      summary: "Codere es sinónimo de juego en España, con una integración total entre online y retail.",
      welcomeBonus: "100% hasta 200€ con rollover x35.",
      games: "~1.000 juegos.",
      payments: "Bizum, PayPal y locales Codere.",
      support: "Soporte multicanal.",
      verdict: "La confianza de una marca de toda la vida."
    }
  },
  {
    id: "12",
    name: "Sportium",
    slug: "sportium",
    logo: "🔴",
    score: 3.9,
    bonus: "10€ sin depósito + 100% hasta 200€",
    rollover: "x50",
    minDeposit: "10€",
    payoutSpeed: "24-48h",
    pros: ["10€ gratis al registrarte", "Cobro en tiendas", "Acepta Bizum"],
    cons: ["Rollover elevado (x50)"],
    affiliateUrl: "https://www.sportium.es/",
    lastVerified: "2026-04-10",
    features: {
      liveCasino: true,
      mobileApp: true,
      bizum: true,
      paypal: true,
      slots: true,
      blackjack: true,
      roulette: true,
    },
    review: {
      summary: "Sportium destaca por su bono sin depósito y su enorme red de locales físicos.",
      welcomeBonus: "10€ gratis + 100% hasta 200€.",
      games: "~1.000 juegos.",
      payments: "Bizum, PayPal y Sportium Uno.",
      support: "Atención profesional.",
      verdict: "Excelente para empezar sin arriesgar dinero propio."
    }
  },
  {
    id: "13",
    name: "YAASS Casino",
    slug: "yaass-casino",
    logo: "🚀",
    score: 3.8,
    bonus: "100% hasta 200€",
    rollover: "x40",
    minDeposit: "10€",
    payoutSpeed: "0-24h",
    pros: ["Retiros muy rápidos", "Gran variedad de slots", "Interfaz moderna"],
    cons: ["Menos juegos de mesa"],
    affiliateUrl: "https://www.yaasscasino.es/",
    lastVerified: "2026-04-01",
    features: {
      liveCasino: true,
      mobileApp: true,
      bizum: true,
      paypal: true,
      slots: true,
      blackjack: true,
      roulette: true,
    },
    review: {
      summary: "YAASS Casino ofrece una propuesta moderna con retiros procesados en menos de 24h.",
      welcomeBonus: "100% hasta 200€ con rollover x40.",
      games: "+2.000 slots de proveedores top.",
      payments: "Bizum y PayPal con gran rapidez.",
      support: "Chat eficiente.",
      verdict: "Una opción fresca y rápida."
    }
  },
  {
    id: "14",
    name: "Casumo",
    slug: "casumo",
    logo: "🟣",
    score: 3.7,
    bonus: "100% hasta 300€",
    rollover: "x30",
    minDeposit: "10€",
    payoutSpeed: "24h",
    pros: ["Bono de hasta 300€", "Rollover justo (x30)", "Diseño único"],
    cons: ["Menos mesas en vivo que otros"],
    affiliateUrl: "https://www.casumo.es/",
    lastVerified: "2026-03-28",
    features: {
      liveCasino: true,
      mobileApp: true,
      bizum: true,
      paypal: true,
      slots: true,
      blackjack: true,
      roulette: true,
    },
    review: {
      summary: "Casumo ofrece una experiencia de juego gamificada y un bono muy competitivo.",
      welcomeBonus: "100% hasta 300€ con rollover x30.",
      games: "+1.500 juegos.",
      payments: "Bizum, PayPal y retiros en 24h.",
      support: "Chat 24/7 muy rápido.",
      verdict: "Excelente relación bono/requisitos."
    }
  },
  {
    id: "15",
    name: "Casino777",
    slug: "casino777",
    logo: "🎰",
    score: 3.6,
    bonus: "Promociones recurrentes",
    rollover: "x50",
    minDeposit: "10€",
    payoutSpeed: "24h",
    pros: ["Catálogo masivo (+6000 juegos)", "Retiros rápidos", "Muchos proveedores"],
    cons: ["Bono de bienvenida menos claro", "Rollover x50"],
    affiliateUrl: "https://www.casino777.es/",
    lastVerified: "2026-04-06",
    features: {
      liveCasino: true,
      mobileApp: true,
      bizum: true,
      paypal: true,
      slots: true,
      blackjack: true,
      roulette: true,
    },
    review: {
      summary: "Casino777 destaca por su inmenso catálogo de más de 6.000 juegos y su rapidez de pagos.",
      welcomeBonus: "Promociones variables y recurrentes para usuarios.",
      games: "+6.000 juegos de +50 proveedores.",
      payments: "Bizum, PayPal y retiros en menos de 24h.",
      support: "Atención al cliente correcta.",
      verdict: "El paraíso para los amantes de la variedad de slots."
    }
  }
];
