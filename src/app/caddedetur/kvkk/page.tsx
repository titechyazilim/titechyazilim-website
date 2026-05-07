import type { Metadata } from "next";
import { LegalPage } from "../LegalPage";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni / Data Protection Notice — CaddedeTur",
  description:
    "CaddedeTur KVKK ve GDPR aydınlatma metni. Veri sorumlusu, işleme amaçları, aktarım, saklama süreleri ve veri sahibi hakları.",
  alternates: { canonical: "https://titechyazilim.com/caddedetur/kvkk" },
};

export default function Page() {
  return <LegalPage section="kvkk" />;
}
