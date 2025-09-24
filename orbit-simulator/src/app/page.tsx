"use client";
import React, { useRef, useEffect } from "react";

type Planet = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
};

type Star = { x: number; y: number };

const OrbitSimulator = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // 万有引力定数（ゲーム用に調整済み）
    const G = 0.1;
    const sunMass = 5000;

    // 惑星データ（位置＋速度）
    const planets: Planet[] = Array.from({ length: 5 }).map((_, i) => ({
      x: centerX + (100 + i * 60),
      y: centerY,
      vx: 0,
      vy: 1.5 - i * 0.2, // 初速度（調整すると軌道が変わる）
      radius: 8 + i * 2,
      color: `hsl(${i * 70}, 80%, 60%)`,
    }));

    // 星（背景は固定）
    const stars: Star[] = Array.from({ length: 150 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
    }));

    const draw = () => {
      // 背景
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 星を描画
      ctx.fillStyle = "white";
      stars.forEach((s) => {
        ctx.fillRect(s.x, s.y, 2, 2);
      });

      // 太陽
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
      ctx.fillStyle = "yellow";
      ctx.shadowColor = "orange";
      ctx.shadowBlur = 40;
      ctx.fill();

      // 惑星更新
      planets.forEach((p) => {
        // 太陽から惑星へのベクトル
        const dx = centerX - p.x;
        const dy = centerY - p.y;
        const distSq = dx * dx + dy * dy;
        const dist = Math.sqrt(distSq);

        // 万有引力による加速度
        const force = (G * sunMass) / distSq;
        const ax = force * (dx / dist);
        const ay = force * (dy / dist);

        // 速度更新
        p.vx += ax;
        p.vy += ay;

        // 位置更新
        p.x += p.vx;
        p.y += p.vy;

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

  return <canvas ref={canvasRef} className="w-screen h-screen" />;
};

export default function SimulatorPage() {
  return (
    <main className="relative">
      <OrbitSimulator />
      <div className="absolute top-5 left-5 text-cyan-400 text-3xl font-bold drop-shadow-lg">
        🌌 Orbit Simulator (Gravity)
      </div>
    </main>
  );
}
