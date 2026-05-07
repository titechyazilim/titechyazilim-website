import type { Metadata } from "next";
import { LegalPage } from "../LegalPage";

export const metadata: Metadata = {
  title: "Kullanım Koşulları / Terms of Use — CaddedeTur",
  description:
    "CaddedeTur uygulaması kullanım koşulları. 18+ yaş kontrolü, hizmet bölgesi, içerik politikası, engelleme ve şikayet kuralları.",
  alternates: { canonical: "https://titechyazilim.com/caddedetur/terms" },
};

export default function Page() {
  return <LegalPage section="terms" />;
}
