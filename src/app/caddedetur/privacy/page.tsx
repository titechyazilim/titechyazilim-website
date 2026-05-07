import type { Metadata } from "next";
import { LegalPage } from "../LegalPage";

export const metadata: Metadata = {
  title: "Gizlilik Politikası / Privacy Policy — CaddedeTur",
  description:
    "CaddedeTur konum tabanlı sosyal uygulaması gizlilik politikası. KVKK ve GDPR uyumludur. Konumunuz yalnızca hizmet bölgesinde paylaşılır.",
  alternates: { canonical: "https://titechyazilim.com/caddedetur/privacy" },
};

export default function Page() {
  return <LegalPage section="privacy" />;
}
