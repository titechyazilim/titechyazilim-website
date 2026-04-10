"use client";

import Image from "next/image";
import { useState } from "react";
import { translations, type Locale } from "./translations";

function TitechLogo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#2257EE" }} />
          <stop offset="100%" style={{ stopColor: "#5B8BFF" }} />
        </linearGradient>
      </defs>
      <rect
        width="196"
        height="196"
        x="2"
        y="2"
        rx="44"
        fill="#0a0a1a"
        stroke="url(#logoGrad)"
        strokeWidth="4"
      />
      <text
        x="80"
        y="140"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontSize="120"
        fontWeight="800"
        fill="#2257EE"
        opacity="0.7"
      >
        T
      </text>
      <text
        x="120"
        y="140"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontSize="120"
        fontWeight="800"
        fill="#5B8BFF"
        opacity="0.7"
      >
        T
      </text>
    </svg>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("tr");
  const t = translations[locale];

  return (
    <main className="flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a1a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TitechLogo size={36} />
            <span className="text-lg font-bold tracking-tight">
              TITECH YAZILIM
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
              <a
                href="#hakkimizda"
                className="hover:text-white transition"
              >
                {t.nav.about}
              </a>
              <a href="#urunler" className="hover:text-white transition">
                {t.nav.products}
              </a>
              <a href="#iletisim" className="hover:text-white transition">
                {t.nav.contact}
              </a>
            </div>
            {/* Language Switcher */}
            <div className="flex items-center bg-white/5 rounded-lg border border-white/10 overflow-hidden">
              <button
                onClick={() => setLocale("tr")}
                className={`px-3 py-1.5 text-xs font-semibold transition ${
                  locale === "tr"
                    ? "bg-[#2257ee] text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                TR
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`px-3 py-1.5 text-xs font-semibold transition ${
                  locale === "en"
                    ? "bg-[#2257ee] text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2257ee]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#5b8bff]/15 rounded-full blur-[100px]" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            {t.hero.badge}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            {t.hero.titleLine1}
            <br />
            <span className="bg-gradient-to-r from-[#2257ee] to-[#5b8bff] bg-clip-text text-transparent">
              {t.hero.titleLine2}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#urunler"
              className="px-8 py-4 bg-gradient-to-r from-[#2257ee] to-[#5b8bff] rounded-xl font-semibold text-white hover:opacity-90 transition"
            >
              {t.hero.cta1}
            </a>
            <a
              href="#iletisim"
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 transition"
            >
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </section>

      {/* Hakkımızda */}
      <section id="hakkimizda" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {t.about.title}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              {t.about.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#2257ee]/30 transition group">
              <div className="w-14 h-14 rounded-xl bg-[#2257ee]/10 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-[#2257ee]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{t.about.card1Title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {t.about.card1Desc}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#2257ee]/30 transition group">
              <div className="w-14 h-14 rounded-xl bg-[#2257ee]/10 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-[#2257ee]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{t.about.card2Title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {t.about.card2Desc}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#2257ee]/30 transition group">
              <div className="w-14 h-14 rounded-xl bg-[#2257ee]/10 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-[#2257ee]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{t.about.card3Title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {t.about.card3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ürünler */}
      <section id="urunler" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {t.products.title}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              {t.products.subtitle}
            </p>
          </div>

          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#2257ee]/10 to-[#5b8bff]/5 border border-[#2257ee]/20 overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#2257ee]/10 rounded-full blur-[80px]" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="CaddedeTur"
                  width={120}
                  height={120}
                  className="rounded-3xl shadow-2xl shadow-[#2257ee]/20"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  CaddedeTur
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {t.products.caddedetur.desc}
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                    {t.products.caddedetur.tag1}
                  </span>
                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                    {t.products.caddedetur.tag2}
                  </span>
                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                    {t.products.caddedetur.tag3}
                  </span>
                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                    {t.products.caddedetur.tag4}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim */}
      <section id="iletisim" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {t.contact.title}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
              <div className="w-14 h-14 rounded-xl bg-[#2257ee]/10 flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-7 h-7 text-[#2257ee]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">
                {t.contact.addressTitle}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                {t.contact.address}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
              <div className="w-14 h-14 rounded-xl bg-[#2257ee]/10 flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-7 h-7 text-[#2257ee]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">
                {t.contact.emailTitle}
              </h3>
              <p className="text-gray-400 text-sm">
                <a
                  href="mailto:destek@titechyazilim.com"
                  className="hover:text-white transition"
                >
                  destek@titechyazilim.com
                </a>
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
              <div className="w-14 h-14 rounded-xl bg-[#2257ee]/10 flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-7 h-7 text-[#2257ee]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">{t.contact.webTitle}</h3>
              <p className="text-gray-400 text-sm">
                <a
                  href="https://titechyazilim.com"
                  className="hover:text-white transition"
                >
                  www.titechyazilim.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <TitechLogo size={24} />
            <span className="text-sm text-gray-500">{t.footer.company}</span>
          </div>
          <p className="text-sm text-gray-500">
            &copy; 2026 {t.footer.rights}
          </p>
        </div>
      </footer>
    </main>
  );
}
