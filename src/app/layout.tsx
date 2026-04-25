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
      <body className="min-h-full bg-background text-foreground">
        <SiteHeader />
        <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col">
          <main className="flex-1 px-4 pb-10 md:px-8">{children}</main>
          <SiteFooter />
        </div>
        <CursorGlow />
        <ScrollToTop />
      </body>
    </html>
  );
}
