export const translations = {
  tr: {
    nav: {
      about: "Hakkımızda",
      products: "Uygulamalarımız",
      contact: "İletişim",
    },
    hero: {
      badge: "Yeni uygulamamız CaddedeTur yayında",
      titleLine1: "Teknolojiyle",
      titleLine2: "Geleceği İnşa Ediyoruz",
      description:
        "TITECH YAZILIM olarak, kullanıcıların hayatını kolaylaştıran yenilikçi mobil uygulamalar ve yazılım çözümleri geliştiriyoruz.",
      cta1: "Uygulamalarımızı Keşfet",
      cta2: "İletişime Geç",
    },
    about: {
      title: "Hakkımızda",
      subtitle: "İstanbul merkezli bir yazılım şirketiyiz.",
      card1Title: "Mobil Uygulama",
      card1Desc:
        "iOS ve Android platformları için yüksek performanslı, kullanıcı dostu mobil uygulamalar geliştiriyoruz.",
      card2Title: "Web Çözümleri",
      card2Desc:
        "Modern web teknolojileri ile hızlı, güvenli ve ölçeklenebilir web uygulamaları ve siteler oluşturuyoruz.",
      card3Title: "Bulut Altyapı",
      card3Desc:
        "Firebase ve bulut tabanlı altyapılar ile güçlü, güvenilir ve ölçeklenebilir backend çözümleri sunuyoruz.",
    },
    products: {
      title: "Uygulamalarımız",
      subtitle:
        "Kullanıcıların hayatını kolaylaştıran uygulamalar geliştiriyoruz.",
      comingSoon: "Çok Yakında",
      apps: {
        caddedetur: {
          name: "CaddedeTur",
          desc: "Bağdat Caddesi'nde tur atarken beğendiğiniz birine ulaşmak artık çok kolay. Yakınlarınızdaki kullanıcıları plakalarından bulun, arkadaşlık isteği gönderin ve güvenle mesajlaşmaya başlayın.",
          tags: ["Konum Tabanlı", "Gerçek Zamanlı", "Güvenli Mesajlaşma", "iOS"],
        },
        myzzle: {
          name: "Myzzle",
          desc: "Gerçek fotoğraflardan yapay zekâ destekli yapboz. Kendi fotoğrafını yükle, parçalara ayır, çöz. Arkadaşlarınla yarış, puan topla, sıralamada yüksel.",
          tags: ["Yapbozlar", "AI Destekli", "Sosyal", "iOS"],
        },
        boyuyorum: {
          name: "Boyuyorum",
          desc: "Çocuklar için eğlenceli ve eğitici dijital boyama uygulaması. Yüzlerce hazır tasarım, canlı renk paleti ve yaratıcı araçlarla hayal gücünü özgür bırak.",
          tags: ["Çocuklar", "Eğitim", "Yaratıcılık", "iOS"],
        },
      },
    },
    contact: {
      title: "İletişim",
      subtitle:
        "Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz.",
      addressTitle: "Adres",
      address:
        "Acıbadem Mah. Çeçen Sk.\nAkasya AVM No: 25\nİç Kapı No: 426\nÜsküdar / İstanbul",
      emailTitle: "E-posta",
      webTitle: "Web",
    },
    footer: {
      company: "TITECH YAZILIM LİMİTED ŞİRKETİ",
      rights: "Tüm hakları saklıdır.",
    },
  },
  en: {
    nav: {
      about: "About",
      products: "Our Apps",
      contact: "Contact",
    },
    hero: {
      badge: "Our new app CaddedeTur is live",
      titleLine1: "Building the Future",
      titleLine2: "with Technology",
      description:
        "At TITECH YAZILIM, we develop innovative mobile applications and software solutions that make users' lives easier.",
      cta1: "Explore Our Apps",
      cta2: "Get in Touch",
    },
    about: {
      title: "About Us",
      subtitle: "An Istanbul-based software company.",
      card1Title: "Mobile Apps",
      card1Desc:
        "We develop high-performance, user-friendly mobile applications for iOS and Android platforms.",
      card2Title: "Web Solutions",
      card2Desc:
        "We create fast, secure, and scalable web applications and websites using modern web technologies.",
      card3Title: "Cloud Infrastructure",
      card3Desc:
        "We provide powerful, reliable, and scalable backend solutions with Firebase and cloud-based infrastructures.",
    },
    products: {
      title: "Our Apps",
      subtitle: "We develop applications that make users' lives easier.",
      comingSoon: "Coming Soon",
      apps: {
        caddedetur: {
          name: "CaddedeTur",
          desc: "Reaching someone you like while cruising on Bağdat Caddesi is now easier than ever. Find nearby users by their license plates, send friend requests, and start messaging securely.",
          tags: ["Location-Based", "Real-Time", "Secure Messaging", "iOS"],
        },
        myzzle: {
          name: "Myzzle",
          desc: "AI-powered jigsaw puzzles from real photos. Upload your own photo, split it into pieces, and solve. Compete with friends, earn points, climb the leaderboard.",
          tags: ["Puzzles", "AI Powered", "Social", "iOS"],
        },
        boyuyorum: {
          name: "Boyuyorum",
          desc: "A fun and educational digital coloring app for kids. Hundreds of ready-made designs, vibrant color palettes, and creative tools to set imagination free.",
          tags: ["Kids", "Education", "Creativity", "iOS"],
        },
      },
    },
    contact: {
      title: "Contact",
      subtitle: "Use the information below to get in touch with us.",
      addressTitle: "Address",
      address:
        "Acıbadem Mah. Çeçen Sk.\nAkasya AVM No: 25\nİç Kapı No: 426\nÜsküdar / İstanbul",
      emailTitle: "Email",
      webTitle: "Web",
    },
    footer: {
      company: "TITECH YAZILIM LİMİTED ŞİRKETİ",
      rights: "All rights reserved.",
    },
  },
} as const;

export type Locale = keyof typeof translations;
