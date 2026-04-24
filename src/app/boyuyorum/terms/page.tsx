import type { Metadata } from "next";
import { LegalPage } from "../LegalPage";

export const metadata: Metadata = {
  title: "Kullanım Koşulları / Terms of Use — Boyuyorum",
  description:
    "Boyuyorum çocuk boyama uygulamasının kullanım koşulları. Kişisel, ticari olmayan kullanım için ücretsiz, reklam destekli uygulama.",
  alternates: { canonical: "https://titechyazilim.com/boyuyorum/terms" },
};

export default function Page() {
  return <LegalPage section="terms" />;
}
