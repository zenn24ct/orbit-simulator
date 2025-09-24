import type { Metadata } from "next";
import "./globals.css";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"], // 太さを指定
});

export const metadata: Metadata = {
  title: "宇宙ポータルサイト",
  description: "惑星・宇宙飛行士・宇宙工学・シミュレーションを学べるサイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={orbitron.className}>{children}</body>
    </html>
  );
}
