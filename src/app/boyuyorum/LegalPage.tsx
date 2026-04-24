"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  legalBodies,
  legalTitles,
  type LegalLocale,
  type LegalSection,
} from "./legal";

const BRAND = "#FBBC04";
const BRAND_SOFT = "rgba(251, 188, 4, 0.12)";

const navLabels: Record<LegalLocale, Record<LegalSection | "home", string>> = {
  tr: {
    home: "Boyuyorum Ana Sayfa",
    about: "Hakkımızda",
    privacy: "Gizlilik Politikası",
    terms: "Kullanım Koşulları",
    kvkk: "KVKK Aydınlatma Metni",
  },
  en: {
    home: "Boyuyorum Home",
    about: "About",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    kvkk: "Data Protection Notice",
  },
};

const sections: LegalSection[] = ["about", "privacy", "terms", "kvkk"];

export function LegalPage({ section }: { section: LegalSection }) {
  const [locale, setLocale] = useState<LegalLocale>("tr");
  const title = legalTitles[section][locale];
  const body = legalBodies[section][locale];

  return (
    <main className="min-h-screen flex flex-col bg-[#0a0a1a] text-white">
      {/* Top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a1a]/85 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/boyuyorum"
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <Image
              src="/apps/boyuyorum.png"
              alt="Boyuyorum"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="text-base font-bold tracking-tight">Boyuyorum</span>
          </Link>

          {/* Locale switcher */}
          <div className="flex items-center bg-white/5 rounded-lg border border-white/10 overflow-hidden">
            <button
              onClick={() => setLocale("tr")}
              className={`px-3 py-1.5 text-xs font-semibold transition ${
                locale === "tr"
                  ? "text-black"
                  : "text-gray-400 hover:text-white"
              }`}
              style={locale === "tr" ? { background: BRAND } : undefined}
            >
              TR
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`px-3 py-1.5 text-xs font-semibold transition ${
                locale === "en"
                  ? "text-black"
                  : "text-gray-400 hover:text-white"
              }`}
              style={locale === "en" ? { background: BRAND } : undefined}
            >
              EN
            </button>
          </div>
        </div>
      </nav>

      {/* Soft brand glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[140px] opacity-60"
        style={{ background: BRAND_SOFT }}
      />

      {/* Content */}
      <article className="relative z-10 max-w-3xl mx-auto w-full px-6 pt-28 pb-16 flex-1">
        <Link
          href="/boyuyorum"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition mb-6"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {navLabels[locale].home}
        </Link>

        <h1
          className="text-3xl md:text-4xl font-bold tracking-tight mb-8"
          style={{ color: BRAND }}
        >
          {title}
        </h1>

        <div className="prose prose-invert max-w-none">
          <pre className="whitespace-pre-wrap font-sans text-[15px] leading-[1.75] text-gray-200 m-0 p-0 bg-transparent border-0">
            {body}
          </pre>
        </div>

        {/* Cross-links to other legal pages */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            {locale === "tr" ? "Diğer sayfalar" : "Other pages"}
          </p>
          <div className="flex flex-wrap gap-3">
            {sections
              .filter((s) => s !== section)
              .map((s) => (
                <Link
                  key={s}
                  href={`/boyuyorum/${s}`}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 hover:text-white hover:border-white/30 transition"
                >
                  {navLabels[locale][s]}
                </Link>
              ))}
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-white/5 text-center">
        <p className="text-xs text-gray-500">
          &copy; 2026 TITECH YAZILIM LİMİTED ŞİRKETİ ·{" "}
          <a
            href="mailto:destek@titechyazilim.com"
            className="hover:text-white transition"
          >
            destek@titechyazilim.com
          </a>
        </p>
      </footer>
    </main>
  );
}
