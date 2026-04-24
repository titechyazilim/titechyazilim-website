import type { Metadata } from "next";
import { LegalPage } from "../LegalPage";

export const metadata: Metadata = {
  title: "Gizlilik Politikası / Privacy Policy — Boyuyorum",
  description:
    "Boyuyorum çocuk boyama uygulaması gizlilik politikası. Kişisel veri toplamaz, tüm veriler cihazda kalır. COPPA ve KVKK uyumludur.",
  alternates: { canonical: "https://titechyazilim.com/boyuyorum/privacy" },
};

export default function Page() {
  return <LegalPage section="privacy" />;
}
