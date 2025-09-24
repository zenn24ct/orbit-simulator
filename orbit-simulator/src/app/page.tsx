"use client";
import React, { useRef, useEffect } from "react";

type Planet = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  mass: number;
  radius: number;
  color: string;
  trail: { x: number; y: number }[];
};

export default function SimulatorPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // 定数
    const G = 6.67430e-20; // km^3 / kg / s^2 （単位をkmに変換済）
    const SUN_MASS = 1.989e30;

    // スケール（描画用）
    const SCALE = 1 / 2e6; // km → px
    const TIMESTEP = 60 * 60 * 6; // 6時間ごとに進める

    // --- 初期条件（2025-01-01 00:00UT, JPL Horizonsから取得する想定） ---
    const planets: Planet[] = [
      {
        // Earth
        x: centerX + (1.4710e8 * SCALE), // km
        y: centerY,
        vx: 0,
        vy: -30.29 * SCALE, // km/s
        mass: 5.972e24,
        radius: 6,
        color: "deepskyblue",
        trail: [],
      },
      {
        // Mars
        x: centerX + (2.0662e8 * SCALE), // km
        y: centerY,
        vx: 0,
        vy: -26.50 * SCALE, // km/s
        mass: 6.39e23,
        radius: 5,
        color: "orangered",
        trail: [],
      },
    ];

    const draw = () => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 太陽
      ctx.beginPath();
      ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
      ctx.fillStyle = "yellow";
      ctx.shadowColor = "orange";
      ctx.shadowBlur = 40;
      ctx.fill();

      planets.forEach((p) => {
        // 太陽からの距離
        const dx = centerX - p.x;
        const dy = centerY - p.y;
        const distPx = Math.sqrt(dx * dx + dy * dy);
        const distKm = distPx / SCALE;

        // 加速度（km/s^2）
        const accel = (G * SUN_MASS) / (distKm * distKm);
        const ax = accel * (dx / distPx);
        const ay = accel * (dy / distPx);

        // 速度更新
        p.vx += ax * TIMESTEP * SCALE;
        p.vy += ay * TIMESTEP * SCALE;

        // 位置更新
        p.x += p.vx * TIMESTEP;
        p.y += p.vy * TIMESTEP;

        // 軌道を残す
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 500) p.trail.shift();

        // 軌跡を描画
        ctx.beginPath();
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 1;
        p.trail.forEach((pos, i) => {
          if (i === 0) ctx.moveTo(pos.x, pos.y);
          else ctx.lineTo(pos.x, pos.y);
        });
        ctx.stroke();

        // 惑星本体
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
        🌌 Orbit Simulator (JPL Initial Conditions)
      </div>
    </main>
  );
}
