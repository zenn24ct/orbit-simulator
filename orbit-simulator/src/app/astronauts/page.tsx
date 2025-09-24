"use client";

import React from "react";

const astronauts = [
  {
    name: "Yuri Gagarin",
    country: "USSR",
    mission: "Vostok 1 (1961) - 世界初の有人宇宙飛行士",
  },
  {
    name: "Neil Armstrong",
    country: "USA",
    mission: "Apollo 11 (1969) - 月面に初めて降り立った人類",
  },
  {
    name: "Sally Ride",
    country: "USA",
    mission: "STS-7 (1983) - アメリカ初の女性宇宙飛行士",
  },
  {
    name: "Soichi Noguchi",
    country: "Japan (JAXA)",
    mission: "STS-114, Soyuz TMA-17, Crew-1",
  },
  // NASA公式データからどんどん追加できる
];

export default function AstronautsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">👩‍🚀 宇宙飛行士紹介</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {astronauts.map((a, i) => (
          <div key={i} className="p-4 border border-cyan-600 rounded-xl bg-black/50 shadow-lg">
            <h2 className="text-xl font-semibold text-white">{a.name}</h2>
            <p className="text-cyan-300">{a.country}</p>
            <p className="text-gray-300">{a.mission}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
