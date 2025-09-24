"use client";

import React from "react";

const planets = [
  {
    name: "Mercury",
    diameter: "4,879 km",
    mass: "3.30 × 10^23 kg",
    orbit: "88日",
    description: "太陽に最も近い惑星。表面温度の変化が非常に激しい。",
  },
  {
    name: "Venus",
    diameter: "12,104 km",
    mass: "4.87 × 10^24 kg",
    orbit: "225日",
    description: "厚い二酸化炭素の大気と硫酸の雲で覆われた高温の惑星。",
  },
  {
    name: "Earth",
    diameter: "12,742 km",
    mass: "5.97 × 10^24 kg",
    orbit: "365日",
    description: "私たちの住む惑星。液体の水と大気を持ち、生命が存在。",
  },
  {
    name: "Mars",
    diameter: "6,779 km",
    mass: "6.42 × 10^23 kg",
    orbit: "687日",
    description: "赤い惑星。将来の人類探査の候補地として注目されている。",
  },
  {
    name: "Jupiter",
    diameter: "139,820 km",
    mass: "1.90 × 10^27 kg",
    orbit: "11.9年",
    description: "太陽系最大の惑星。大赤斑と多数の衛星を持つ。",
  },
  {
    name: "Saturn",
    diameter: "116,460 km",
    mass: "5.68 × 10^26 kg",
    orbit: "29.5年",
    description: "氷と岩石でできた美しい環を持つガス惑星。",
  },
  {
    name: "Uranus",
    diameter: "50,724 km",
    mass: "8.68 × 10^25 kg",
    orbit: "84年",
    description: "横倒しになった自転軸を持ち、独特な公転をしている。",
  },
  {
    name: "Neptune",
    diameter: "49,244 km",
    mass: "1.02 × 10^26 kg",
    orbit: "165年",
    description: "太陽系の最遠惑星。強力な風と嵐が吹き荒れる。",
  },
];

export default function PlanetsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">🪐 惑星図鑑</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {planets.map((planet, i) => (
          <div key={i} className="p-4 border border-cyan-600 rounded-xl bg-black/50 shadow-lg">
            <h2 className="text-xl font-semibold text-white">{planet.name}</h2>
            <p className="text-gray-300">{planet.description}</p>
            <ul className="text-sm text-cyan-300 mt-2">
              <li>直径: {planet.diameter}</li>
              <li>質量: {planet.mass}</li>
              <li>公転周期: {planet.orbit}</li>
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
