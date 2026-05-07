import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://titechyazilim.com"),
  title: {
    default: "CaddedeTur — Sosyal Konum Uygulaması",
    template: "%s",
  },
  description:
    "CaddedeTur — Bağdat Caddesi ve çevresinde konum tabanlı sosyal etkileşim. Yakınınızdaki kullanıcıları plakalarından bulun, arkadaşlık isteği gönderin, güvenle mesajlaşın.",
  keywords: [
    "CaddedeTur",
    "Bağdat Caddesi",
    "konum tabanlı sosyal uygulama",
    "plaka ile arkadaş",
    "TITECH YAZILIM",
    "iOS",
    "KVKK",
    "GDPR",
  ],
  openGraph: {
    title: "CaddedeTur — Sosyal Konum Uygulaması",
    description:
      "Bağdat Caddesi'nde yakınınızdaki kullanıcıları plakalarından bulun, arkadaşlık isteği gönderin ve güvenle mesajlaşın.",
    url: "https://titechyazilim.com/caddedetur",
    siteName: "CaddedeTur",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/apps/caddedetur.png",
        width: 512,
        height: 512,
        alt: "CaddedeTur",
      },
    ],
  },
  alternates: { canonical: "https://titechyazilim.com/caddedetur" },
};

export default function CaddeDeTurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
