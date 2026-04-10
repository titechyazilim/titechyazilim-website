import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TITECH YAZILIM | Yazilim Cozumleri",
  description:
    "TITECH YAZILIM LIMITED SIRKETI - Mobil uygulama ve yazilim cozumleri. CaddedeTur uygulamasinin gelistiricisi.",
  keywords: ["titech", "yazilim", "mobil uygulama", "caddedetur", "istanbul"],
  openGraph: {
    title: "TITECH YAZILIM",
    description: "Mobil uygulama ve yazilim cozumleri",
    url: "https://titechyazilim.com",
    siteName: "TITECH YAZILIM",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-[var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
