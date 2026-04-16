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
}

export const CASINOS: Casino[] = [
  {
    id: "1",
    name: "Bet365",
    slug: "bet365",
    logo: "🟢",
    score: 4.9,
    bonus: "100% hasta 100€",
    rollover: "20x",
    minDeposit: "10€",
    payoutSpeed: "24h",
    pros: ["Líder mundial", "App excelente", "Pagos rápidos"],
    cons: ["Diseño sobrio", "Pocos bonos sin depósito"],
    affiliateUrl: "https://www.bet365.com/olp/open-account?affiliate=365_029746",
    isRecommended: true,
    isBestBono: true,
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
      summary: "Bet365 es el referente absoluto en el mercado español. Su plataforma es robusta y ofrece una de las mejores experiencias de usuario.",
      welcomeBonus: "El bono de bienvenida es del 100% hasta 100€ con un rollover muy competitivo de 20x.",
      games: "Más de 1000 tragaperras y una sección de casino en vivo líder con crupieres en español.",
      payments: "Acepta Bizum, PayPal, Apple Pay y tarjetas. Retiros procesados en menos de 24h.",
      support: "Chat 24/7, teléfono gratuito y email.",
      verdict: "La opción más segura y completa para cualquier jugador en España."
    }
  },
  {
    id: "2",
    name: "YAASS Casino",
    slug: "yaass-casino",
    logo: "🚀",
    score: 4.7,
    bonus: "Bono hasta 200€",
    rollover: "30x",
    minDeposit: "10€",
    payoutSpeed: "2-3 días",
    pros: ["Gran variedad de slots", "Interfaz moderna", "Licencia DGOJ"],
    cons: ["Retiros algo lentos", "Menos juegos de mesa"],
    affiliateUrl: "https://partner.yaasscasino.es/redirect.aspx?pid=12121&bid=8837&lpid=610",
    isNew: true,
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
      summary: "YAASS Casino ha entrado fuerte en España con una propuesta fresca y centrada en el jugador joven.",
      welcomeBonus: "Ofrecen un bono generoso de hasta 200€ para nuevos usuarios.",
      games: "Destaca su catálogo de slots con proveedores como NetEnt y Play'n GO.",
      payments: "Soporta los métodos más comunes en España incluyendo Bizum.",
      support: "Atención al cliente eficiente vía chat.",
      verdict: "Una excelente alternativa si buscas variedad en tragaperras."
    }
  },
  {
    id: "3",
    name: "Luckia",
    slug: "luckia",
    logo: "🍀",
    score: 4.8,
    bonus: "Hasta 200€ + 20€ gratis",
    rollover: "25x",
    minDeposit: "5€",
    payoutSpeed: "Instantáneo",
    pros: ["Retiros instantáneos", "Locales físicos", "Excelente soporte"],
    cons: ["App mejorable", "Límites de apuesta bajos"],
    affiliateUrl: "https://bet.redluckia.com/redirect.aspx?pid=2164&bid=1532&promotionCode=WEBAP",
    isFastWithdraw: true,
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
      summary: "Luckia es una marca española con gran presencia física y online. Su punto fuerte es la confianza y la rapidez de pagos.",
      welcomeBonus: "Bono de hasta 200€ con un extra de 20€ por verificar la cuenta.",
      games: "Variedad equilibrada entre slots, ruleta y blackjack.",
      payments: "Líder en rapidez, especialmente si usas sus locales para retirar.",
      support: "Soporte en español de alta calidad.",
      verdict: "Ideal para quienes valoran la cercanía y la rapidez de cobro."
    }
  },
  {
    id: "4",
    name: "888 Casino",
    slug: "888-casino",
    logo: "🎰",
    score: 4.6,
    bonus: "100% hasta 150€",
    rollover: "30x",
    minDeposit: "10€",
    payoutSpeed: "2-5 días",
    pros: ["Juegos exclusivos", "Prestigio internacional", "Club VIP"],
    cons: ["Interfaz algo oscura", "Soporte lento a veces"],
    affiliateUrl: "https://ic.aff-handler.com/C/46627?sr=1851572",
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
      summary: "888 es un gigante del sector con juegos propios que no encontrarás en otros sitios.",
      welcomeBonus: "Bono estándar del 100% hasta 150€.",
      games: "Sección de juegos exclusivos '888 Originals' muy recomendable.",
      payments: "PayPal es su método estrella, aunque no tiene Bizum.",
      support: "Centro de ayuda muy completo.",
      verdict: "Perfecto para jugadores que buscan exclusividad."
    }
  },
  {
    id: "5",
    name: "Golden Park",
    slug: "golden-park",
    logo: "🏆",
    score: 4.5,
    bonus: "Bono hasta 100€",
    rollover: "35x",
    minDeposit: "10€",
    payoutSpeed: "24-48h",
    pros: ["Trato personalizado", "Buenas promociones", "Fácil de usar"],
    cons: ["Menos slots que la competencia", "Sin app nativa"],
    affiliateUrl: "https://www.goldenpark.es/?memberid=7333&sourceid=211858",
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
      summary: "Golden Park destaca por su sencillez y buen trato al cliente.",
      welcomeBonus: "Bono de 100€ con condiciones claras.",
      games: "Enfoque en slots clásicas y ruleta en vivo.",
      payments: "Aceptan Bizum, lo cual es un gran punto a favor.",
      support: "Muy cercano y eficiente.",
      verdict: "Una opción sólida y sin complicaciones."
    }
  }
];
