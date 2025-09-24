"use client";
import React, { useRef, useEffect } from "react";

const OrbitSimulator = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // 惑星データ
    const planets = Array.from({ length: 6 }).map((_, i) => ({
      x: centerX + (120 + i * 60),
      y: centerY,
      vx: 0,
      vy: 1.2 - i * 0.15,
      radius: 8 + i * 2,
      color: `hsl(${i * 60}, 80%, 60%)`,
    }));

    const draw = () => {
      // 背景（宇宙っぽいグラデーション）
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, canvas.width);
      gradient.addColorStop(0, "rgba(0,0,30,1)");
      gradient.addColorStop(1, "rgba(0,0,0,1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // ランダムな星を描画
      for (let i = 0; i < 50; i++) {
        ctx.fillStyle = "white";
        ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 1, 1);
      }

      // 太陽
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
      ctx.fillStyle = "yellow";
      ctx.shadowColor = "orange";
      ctx.shadowBlur = 40;
      ctx.fill();

      // 惑星
      planets.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

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
        🌌 Orbit Simulator
      </div>
      <div className="absolute top-5 right-5 space-x-3">
        <button className="bg-cyan-800/70 px-4 py-2 rounded">Reset</button>
        <button className="bg-cyan-800/70 px-4 py-2 rounded">Add Planet</button>
      </div>
    </main>
  );
}
