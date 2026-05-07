import type { Metadata } from "next";
import { LegalPage } from "../LegalPage";

export const metadata: Metadata = {
  title: "Hakkımızda / About — CaddedeTur",
  description:
    "CaddedeTur — Bağdat Caddesi'nde konum tabanlı sosyal etkileşim. TITECH YAZILIM LİMİTED ŞİRKETİ tarafından geliştirilmektedir.",
  alternates: { canonical: "https://titechyazilim.com/caddedetur/about" },
};

export default function Page() {
  return <LegalPage section="about" />;
}
