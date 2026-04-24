"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Locale = "tr" | "en";

const BRAND = "#FBBC04";
const BRAND_2 = "#FF9F1C";

const t = {
  tr: {
    tagline: "Çocuklar için boyama uygulaması",
    description:
      "Yüzlerce hazır tasarım, canlı renk paleti ve yaratıcı araçlarla hayal gücünü özgür bırak. 3 yaş ve üzeri için tasarlandı.",
    download: {
      title: "İndir",
      appStore: "App Store'da yakında",
      playStore: "Google Play'de yakında",
    },
    features: {
      title: "Özellikler",
      list: [
        { emoji: "🎨", title: "180+ Boyama", body: "10 farklı kategoride yüzlerce hazır tasarım." },
        { emoji: "🧒", title: "3+ Yaş", body: "Çocuk dostu, güvenli ve kolay kullanım." },
        { emoji: "🌍", title: "8 Dil", body: "Türkçe, İngilizce, İspanyolca, Fransızca ve daha fazlası." },
        { emoji: "🔒", title: "Veri Güvenliği", body: "Kişisel veri toplanmaz. Her şey cihazda kalır." },
        { emoji: "📱", title: "iPhone + iPad", body: "Tüm iOS cihazlarda mükemmel çalışır." },
        { emoji: "✨", title: "Ücretsiz", body: "Reklam destekli, ücretsiz indir." },
      ],
    },
    legal: {
      title: "Yasal Bilgiler",
      privacy: "Gizlilik Politikası",
      terms: "Kullanım Koşulları",
      kvkk: "KVKK Aydınlatma Metni",
      about: "Hakkımızda",
    },
    contact: {
      title: "İletişim",
      email: "destek@titechyazilim.com",
    },
  },
  en: {
    tagline: "Coloring app for kids",
    description:
      "Hundreds of ready-made designs, vibrant color palettes, and creative tools to set imagination free. Designed for ages 3 and up.",
    download: {
      title: "Download",
      appStore: "Coming soon to App Store",
      playStore: "Coming soon to Google Play",
    },
    features: {
      title: "Features",
      list: [
        { emoji: "🎨", title: "180+ Drawings", body: "Hundreds of ready designs across 10 categories." },
        { emoji: "🧒", title: "Ages 3+", body: "Child-friendly, safe, and easy to use." },
        { emoji: "🌍", title: "8 Languages", body: "Turkish, English, Spanish, French, and more." },
        { emoji: "🔒", title: "Data Safety", body: "No personal data collected. Everything stays on device." },
        { emoji: "📱", title: "iPhone + iPad", body: "Works beautifully on all iOS devices." },
        { emoji: "✨", title: "Free", body: "Ad-supported, free to download." },
      ],
    },
    legal: {
      title: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      kvkk: "Data Protection Notice",
      about: "About",
    },
    contact: {
      title: "Contact",
      email: "destek@titechyazilim.com",
    },
  },
} as const;

export default function BoyuyorumPage() {
  const [locale, setLocale] = useState<Locale>("tr");
  const l = t[locale];

  return (
    <main className="min-h-screen flex flex-col bg-[#0a0a1a] text-white">
      {/* Navbar */}
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

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="hidden sm:inline text-sm text-gray-400 hover:text-white transition"
            >
              TITECH YAZILIM
            </Link>
            <div className="flex items-center bg-white/5 rounded-lg border border-white/10 overflow-hidden">
              <button
                onClick={() => setLocale("tr")}
                className={`px-3 py-1.5 text-xs font-semibold transition ${
                  locale === "tr" ? "text-black" : "text-gray-400 hover:text-white"
                }`}
                style={locale === "tr" ? { background: BRAND } : undefined}
              >
                TR
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`px-3 py-1.5 text-xs font-semibold transition ${
                  locale === "en" ? "text-black" : "text-gray-400 hover:text-white"
                }`}
                style={locale === "en" ? { background: BRAND } : undefined}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24 pb-16 px-6">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px]"
          style={{ background: `${BRAND}30` }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px]"
          style={{ background: `${BRAND_2}25` }}
        />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <Image
            src="/apps/boyuyorum.png"
            alt="Boyuyorum"
            width={120}
            height={120}
            className="rounded-3xl mx-auto mb-8 shadow-2xl"
            style={{ boxShadow: `0 25px 50px -12px ${BRAND}40` }}
            priority
          />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-5">
            Boyuyorum
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">{l.tagline}</p>
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed mb-10">
            {l.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <span
              className="px-6 py-3 rounded-xl font-semibold text-black text-sm"
              style={{ background: BRAND }}
            >
              {l.download.appStore}
            </span>
            <span className="px-6 py-3 rounded-xl font-semibold text-white text-sm bg-white/5 border border-white/10">
              {l.download.playStore}
            </span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {l.features.title}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {l.features.list.map((feat, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition"
              >
                <div className="text-3xl mb-3">{feat.emoji}</div>
                <h3 className="text-lg font-bold mb-2">{feat.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feat.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            {l.legal.title}
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link
              href="/boyuyorum/privacy"
              className="px-5 py-4 rounded-xl bg-white/[0.04] border border-white/10 text-left hover:border-white/30 transition flex items-center justify-between"
            >
              <span className="font-medium">{l.legal.privacy}</span>
              <span className="text-gray-500">→</span>
            </Link>
            <Link
              href="/boyuyorum/terms"
              className="px-5 py-4 rounded-xl bg-white/[0.04] border border-white/10 text-left hover:border-white/30 transition flex items-center justify-between"
            >
              <span className="font-medium">{l.legal.terms}</span>
              <span className="text-gray-500">→</span>
            </Link>
            <Link
              href="/boyuyorum/kvkk"
              className="px-5 py-4 rounded-xl bg-white/[0.04] border border-white/10 text-left hover:border-white/30 transition flex items-center justify-between"
            >
              <span className="font-medium">{l.legal.kvkk}</span>
              <span className="text-gray-500">→</span>
            </Link>
            <Link
              href="/boyuyorum/about"
              className="px-5 py-4 rounded-xl bg-white/[0.04] border border-white/10 text-left hover:border-white/30 transition flex items-center justify-between"
            >
              <span className="font-medium">{l.legal.about}</span>
              <span className="text-gray-500">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {l.contact.title}
          </h2>
          <a
            href={`mailto:${l.contact.email}`}
            className="text-lg font-medium hover:underline"
            style={{ color: BRAND }}
          >
            {l.contact.email}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© 2026 TITECH YAZILIM LİMİTED ŞİRKETİ</span>
          <Link href="/" className="hover:text-white transition">
            titechyazilim.com
          </Link>
        </div>
      </footer>
    </main>
  );
}
