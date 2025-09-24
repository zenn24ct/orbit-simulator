"use client";

import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* 背景 Three.js 星空 */}
      <Canvas className="absolute inset-0" camera={{ position: [0, 0, 5] }}>
        <Stars radius={300} depth={60} count={7000} factor={7} fade />
      </Canvas>

      {/* オーバーレイ UI */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* ヘッダー */}
        <header className="flex justify-between items-center px-8 py-4 bg-black/40 backdrop-blur-md border-b border-cyan-700">
          <h1 className="text-2xl font-bold text-cyan-400">🌌 宇宙ポータル</h1>
          <nav className="space-x-6">
            <Link href="/simulator" className="hover:text-cyan-300">
              シミュレーター
            </Link>
            <Link href="/planets" className="hover:text-cyan-300">
              惑星図鑑
            </Link>
            <Link href="/astronauts" className="hover:text-cyan-300">
              宇宙飛行士
            </Link>
            <Link href="/engineering" className="hover:text-cyan-300">
              宇宙工学
            </Link>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center flex-1 text-center px-6">
          <h2 className="text-5xl md:text-7xl font-bold text-yellow-400 drop-shadow-lg mb-6">
            宇宙を学び、探検しよう 🚀
          </h2>
          <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            惑星・宇宙飛行士・宇宙工学・シミュレーションを体験できる
            インタラクティブな宇宙ポータルサイト。
          </p>
          <Link
            href="/simulator"
            className="px-6 py-3 bg-cyan-600 rounded-lg shadow-lg text-lg font-semibold hover:bg-cyan-400 transition"
          >
            🌍 軌道シミュレーターを試す
          </Link>
        </section>

        {/* Content Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 pb-12">
          <Card
            title="🪐 惑星図鑑"
            desc="太陽系の惑星についてデータと解説を読む"
            link="/planets"
            color="indigo"
          />
          <Card
            title="👩‍🚀 宇宙飛行士"
            desc="人類が宇宙に挑んだ歴史と最新の宇宙飛行士"
            link="/astronauts"
            color="purple"
          />
          <Card
            title="🛠 宇宙工学"
            desc="ロケット・衛星・宇宙探査機の技術を学ぶ"
            link="/engineering"
            color="teal"
          />
          <Card
            title="🌌 軌道シミュレーション"
            desc="本物の物理公式を用いた惑星の軌道運動を体験"
            link="/simulator"
            color="cyan"
          />
        </section>

        {/* フッター */}
        <footer className="text-center py-4 bg-black/40 border-t border-cyan-700 text-sm text-gray-400">
          © 2025 宇宙ポータルサイト | Data from NASA / JAXA
        </footer>
      </div>
    </main>
  );
}

function Card({
  title,
  desc,
  link,
  color,
}: {
  title: string;
  desc: string;
  link: string;
  color: string;
}) {
  return (
    <Link
      href={link}
      className={`p-6 rounded-2xl bg-${color}-900/40 border border-${color}-500 shadow-lg hover:scale-105 hover:shadow-${color}-400/40 transform transition`}
    >
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{desc}</p>
    </Link>
  );
}
