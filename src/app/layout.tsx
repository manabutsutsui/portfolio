import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ポートフォリオ | MANABU TSUTSUI",
  description: "モバイルアプリケーション開発者のポートフォリオサイト。これまでに開発したプロジェクトやスキルをご紹介します。",
  keywords: ["ポートフォリオ", "モバイルアプリ", "Flutter", "Dart"],
  authors: [{ name: "MANABU TSUTSUI" }],
  openGraph: {
    title: "ポートフォリオ | MANABU TSUTSUI",
    description: "モバイルアプリケーション開発者のポートフォリオサイト",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
