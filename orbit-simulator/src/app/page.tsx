"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950 to-black" />

      {/* 星を散らす */}
      <div className="absolute inset-0">
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Hero セクション */}
      <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 z-10 drop-shadow-lg mb-4">
        🌌 宇宙ポータルサイト
      </h1>
      <p className="text-lg md:text-2xl text-gray-300 z-10 mb-12 text-center max-w-2xl">
        惑星・宇宙飛行士・宇宙工学・シミュレーションを学びながら、
        あなたの宇宙を広げていこう 🚀
      </p>

      {/* メニュー */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-10">
        <Link
          href="/simulator"
          className="p-6 bg-cyan-900/30 rounded-xl border border-cyan-500 hover:scale-105 transform transition shadow-lg hover:shadow-cyan-400/40"
        >
          🪐 軌道シミュレーター
        </Link>
        <Link
          href="/planets"
          className="p-6 bg-indigo-900/30 rounded-xl border border-indigo-500 hover:scale-105 transform transition shadow-lg hover:shadow-indigo-400/40"
        >
          🌍 惑星図鑑
        </Link>
        <Link
          href="/astronauts"
          className="p-6 bg-purple-900/30 rounded-xl border border-purple-500 hover:scale-105 transform transition shadow-lg hover:shadow-purple-400/40"
        >
          👩‍🚀 宇宙飛行士
        </Link>
        <Link
          href="/engineering"
          className="p-6 bg-teal-900/30 rounded-xl border border-teal-500 hover:scale-105 transform transition shadow-lg hover:shadow-teal-400/40"
        >
          🛠 宇宙工学
        </Link>
      </div>

      {/* 下部に装飾 */}
      <div className="absolute bottom-5 text-cyan-300 text-sm">
        © 2025 宇宙ポータルサイト
      </div>
    </main>
  );
}
