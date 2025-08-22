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
  title: "ポートフォリオ | 開発者名",
  description: "Webアプリケーション開発者のポートフォリオサイト。これまでに開発したプロジェクトやスキルをご紹介します。",
  keywords: ["ポートフォリオ", "Web開発", "React", "Next.js", "TypeScript"],
  authors: [{ name: "開発者名" }],
  openGraph: {
    title: "ポートフォリオ | 開発者名",
    description: "Webアプリケーション開発者のポートフォリオサイト",
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
