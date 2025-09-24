"use client";

import React from "react";

const topics = [
  {
    title: "ロケット工学",
    description: "液体燃料・固体燃料ロケットの仕組みや打ち上げ技術。",
  },
  {
    title: "人工衛星開発",
    description: "地球観測衛星、通信衛星、GPSなど多様な用途で活躍。",
  },
  {
    title: "宇宙探査機",
    description: "火星探査車や木星探査機など、惑星科学に重要な役割を果たす。",
  },
  {
    title: "国際宇宙ステーション (ISS)",
    description: "各国が共同で運営する巨大な宇宙実験室。20年以上稼働中。",
  },
];

export default function EngineeringPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">🛠 宇宙工学</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((topic, i) => (
          <div key={i} className="p-4 border border-cyan-600 rounded-xl bg-black/50 shadow-lg">
            <h2 className="text-xl font-semibold text-white">{topic.title}</h2>
            <p className="text-gray-300">{topic.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
