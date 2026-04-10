export const translations = {
  tr: {
    nav: {
      about: "Hakkımızda",
      products: "Ürünler",
      contact: "İletişim",
    },
    hero: {
      badge: "Yeni uygulamamız CaddedeTur yayında",
      titleLine1: "Teknolojiyle",
      titleLine2: "Geleceği İnşa Ediyoruz",
      description:
        "TITECH YAZILIM olarak, kullanıcıların hayatını kolaylaştıran yenilikçi mobil uygulamalar ve yazılım çözümleri geliştiriyoruz.",
      cta1: "Ürünlerimizi Keşfet",
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
      title: "Ürünlerimiz",
      subtitle:
        "Kullanıcıların hayatını kolaylaştıran uygulamalar geliştiriyoruz.",
      caddedetur: {
        desc: "Bağdat Caddesi'nde tur atarken beğendiğiniz birine ulaşmak artık çok kolay. CaddedeTur ile yakınlarınızdaki kullanıcıları plakalarından bulun, arkadaşlık isteği gönderin ve güvenle mesajlaşmaya başlayın. Geleneksel cadde kültürünü dijital çağa taşıyoruz.",
        tag1: "Konum Tabanlı",
        tag2: "Gerçek Zamanlı",
        tag3: "Güvenli Mesajlaşma",
        tag4: "iOS",
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
      products: "Products",
      contact: "Contact",
    },
    hero: {
      badge: "Our new app CaddedeTur is live",
      titleLine1: "Building the Future",
      titleLine2: "with Technology",
      description:
        "At TITECH YAZILIM, we develop innovative mobile applications and software solutions that make users' lives easier.",
      cta1: "Explore Products",
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
      title: "Our Products",
      subtitle: "We develop applications that make users' lives easier.",
      caddedetur: {
        desc: "Reaching someone you like while cruising on Bağdat Caddesi is now easier than ever. With CaddedeTur, find nearby users by their license plates, send friend requests, and start messaging securely. We're bringing traditional street culture into the digital age.",
        tag1: "Location-Based",
        tag2: "Real-Time",
        tag3: "Secure Messaging",
        tag4: "iOS",
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
