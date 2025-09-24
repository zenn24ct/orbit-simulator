"use client";

import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative w-screen h-screen text-white overflow-hidden">
      {/* Three.js キャンバス */}
      <Canvas camera={{ position: [0, 0, 5] }}>
        {/* 星空 */}
        <Stars radius={300} depth={60} count={5000} factor={7} fade />
        <OrbitControls enableZoom={false} />
      </Canvas>

      {/* UIオーバーレイ */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 drop-shadow-lg mb-4">
          🌌 宇宙ポータルサイト
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl">
          惑星・宇宙飛行士・宇宙工学・シミュレーションを体験しよう 🚀
        </p>

        {/* メニュー */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/simulator"
            className="p-6 bg-cyan-900/40 rounded-xl border border-cyan-500 hover:scale-105 transform transition shadow-lg hover:shadow-cyan-400/40"
          >
            🪐 軌道シミュレーター
          </Link>
          <Link
            href="/planets"
            className="p-6 bg-indigo-900/40 rounded-xl border border-indigo-500 hover:scale-105 transform transition shadow-lg hover:shadow-indigo-400/40"
          >
            🌍 惑星図鑑
          </Link>
          <Link
            href="/astronauts"
            className="p-6 bg-purple-900/40 rounded-xl border border-purple-500 hover:scale-105 transform transition shadow-lg hover:shadow-purple-400/40"
          >
            👩‍🚀 宇宙飛行士
          </Link>
          <Link
            href="/engineering"
            className="p-6 bg-teal-900/40 rounded-xl border border-teal-500 hover:scale-105 transform transition shadow-lg hover:shadow-teal-400/40"
          >
            🛠 宇宙工学
          </Link>
        </div>
      </div>
    </main>
  );
}
