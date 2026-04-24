import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://titechyazilim.com"),
  title: {
    default: "Boyuyorum — Çocuklar için boyama uygulaması",
    template: "%s",
  },
  description:
    "Boyuyorum — çocuklar için tasarlanmış boyama uygulaması. 180+ boyanabilir resim, 8 dil, 3+ yaş için. iPhone ve iPad için yakında.",
  keywords: [
    "Boyuyorum",
    "çocuk boyama uygulaması",
    "kids coloring app",
    "TITECH YAZILIM",
    "iOS kids app",
    "COPPA",
    "KVKK",
  ],
  openGraph: {
    title: "Boyuyorum — Çocuklar için boyama uygulaması",
    description:
      "180+ boyanabilir resim, 8 dil, 3+ yaş için. iPhone ve iPad'de yakında.",
    url: "https://titechyazilim.com/boyuyorum",
    siteName: "Boyuyorum",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/apps/boyuyorum.png",
        width: 512,
        height: 512,
        alt: "Boyuyorum",
      },
    ],
  },
  alternates: { canonical: "https://titechyazilim.com/boyuyorum" },
};

export default function BoyuyorumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
