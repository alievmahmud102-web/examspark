import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";

import { CursorGlow } from "@/components/CursorGlow";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "ExamSpark - Сайт учебного центра за 1 день",
    template: "%s | ExamSpark",
  },
  description:
    "Готовый шаблон сайта для учебного центра ЕГЭ/ОГЭ/ЦТ за $300 с квизом, расписанием и формой заявок. Ready template for education centers. O'quv markazi uchun tayyor sayt shabloni.",
  alternates: {
    canonical: "/",
    languages: {
      ru: "/?lang=ru",
      en: "/?lang=en",
      uz: "/?lang=uz",
    },
  },
  openGraph: {
    title: "ExamSpark - Template for education center",
    description:
      "RU / EN / UZ: быстрый запуск лендинга учебного центра за 1 день.",
    url: "/",
    siteName: "ExamSpark",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "ExamSpark site template preview",
      },
    ],
    locale: "ru_RU",
    alternateLocale: ["en_US", "uz_UZ"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ExamSpark - Education center template",
    description: "Launch your center website in one day for $300.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${unbounded.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-background text-foreground">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")",
          }}
        />
        <SiteHeader />
        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col">
          <main className="flex-1 px-4 pb-10 md:px-8">{children}</main>
          <SiteFooter />
        </div>
        <CursorGlow />
        <ScrollToTop />
      </body>
    </html>
  );
}
