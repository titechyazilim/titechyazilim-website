import type { Metadata } from "next";
import { LegalPage } from "../LegalPage";

export const metadata: Metadata = {
  title: "Hakkımızda / About — Boyuyorum",
  description:
    "Boyuyorum hakkında. Çocuklar için tasarlanmış boyama uygulaması. 180+ boyanabilir resim, 8 dil, 3+ yaş için.",
  alternates: { canonical: "https://titechyazilim.com/boyuyorum/about" },
};

export default function Page() {
  return <LegalPage section="about" />;
}
