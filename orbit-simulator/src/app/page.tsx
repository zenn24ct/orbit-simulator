"use client"; // ← クライアントコンポーネント

import React, { useRef, useEffect } from "react";

type Planet = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  mass: number;
  radius: number;
  color: string;
};

type Star = { x: number; y: number };

export default function SimulatorPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // 万有引力定数
    const G = 6.67430e-11;
    const SUN_MASS = 1.989e30;

    // スケーリング
    const SCALE = 1 / 3e9; // m → px
    const TIMESTEP = 60 * 60 * 6; // 6時間ごと

    // 惑星データ（地球・火星）
    const planets: Planet[] = [
      {
        x: centerX + 1.496e11 * SCALE,
        y: centerY,
        vx: 0,
        vy: -29780 * SCALE, // m/s → px/s
        mass: 5.972e24,
        radius: 6,
        color: "deepskyblue",
      },
      {
        x: centerX + 2.279e11 * SCALE,
        y: centerY,
        vx: 0,
        vy: -24070 * SCALE,
        mass: 6.39e23,
        radius: 5,
        color: "orangered",
      },
    ];

    // 背景の星
    const stars: Star[] = Array.from({ length: 200 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
    }));

    const draw = () => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 背景の星
      ctx.fillStyle = "white";
      stars.forEach((s) => ctx.fillRect(s.x, s.y, 2, 2));

      // 太陽
      ctx.beginPath();
      ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
      ctx.fillStyle = "yellow";
      ctx.shadowColor = "orange";
      ctx.shadowBlur = 40;
      ctx.fill();

      // 惑星の更新＆描画
      planets.forEach((p) => {
        const dx = centerX - p.x;
        const dy = centerY - p.y;
        const distPx = Math.sqrt(dx * dx + dy * dy);
        const dist = distPx / SCALE; // m

        // 加速度
        const accel = (G * SUN_MASS) / (dist * dist); // m/s^2
        const ax = accel * (dx / distPx);
        const ay = accel * (dy / distPx);

        // 速度更新
        p.vx += ax * TIMESTEP * SCALE;
        p.vy += ay * TIMESTEP * SCALE;

        // 位置更新
        p.x += p.vx * TIMESTEP;
        p.y += p.vy * TIMESTEP;

        // 惑星描画
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 20;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <main className="relative">
      <canvas ref={canvasRef} className="w-screen h-screen" />
      <div className="absolute top-5 left-5 text-cyan-400 text-2xl font-bold drop-shadow-lg">
        🌌 Orbit Simulator (Real Physics)
      </div>
    </main>
  );
}
