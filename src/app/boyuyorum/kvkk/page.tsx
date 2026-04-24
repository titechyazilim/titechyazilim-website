import type { Metadata } from "next";
import { LegalPage } from "../LegalPage";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni — Boyuyorum",
  description:
    "Boyuyorum uygulaması için 6698 sayılı KVKK kapsamında aydınlatma metni. TITECH YAZILIM LİMİTED ŞİRKETİ veri sorumlusu bilgileri.",
  alternates: { canonical: "https://titechyazilim.com/boyuyorum/kvkk" },
};

export default function Page() {
  return <LegalPage section="kvkk" />;
}
