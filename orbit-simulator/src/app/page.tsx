"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        🌌 宇宙ポータルサイト
      </h1>
      <p className="text-lg text-gray-300 mb-12">
        惑星・宇宙飛行士・宇宙工学・シミュレーションを学べるサイト
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
        <Link href="/simulator" className="p-6 bg-cyan-900/50 rounded-xl hover:bg-cyan-700">
          🪐 軌道シミュレーター
        </Link>
        <Link href="/planets" className="p-6 bg-cyan-900/50 rounded-xl hover:bg-cyan-700">
          🌍 惑星図鑑
        </Link>
        <Link href="/astronauts" className="p-6 bg-cyan-900/50 rounded-xl hover:bg-cyan-700">
          👩‍🚀 宇宙飛行士
        </Link>
        <Link href="/engineering" className="p-6 bg-cyan-900/50 rounded-xl hover:bg-cyan-700">
          🛠 宇宙工学
        </Link>
      </div>
    </main>
  );
}
