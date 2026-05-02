import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";

import { DocumentLang } from "@/components/DocumentLang";

import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Language Vision — IELTS",
  description: "Подготовка к IELTS в Ташкенте: мини-группы, опытные преподаватели, структурированная программа.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning className={`${inter.variable} ${unbounded.variable}`}>
      <body className="antialiased">
        <DocumentLang />
        {children}
      </body>
    </html>
  );
}
