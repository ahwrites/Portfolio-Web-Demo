"use client";

import React, { useEffect, useRef, useState } from "react";

export default function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false });
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    // Respect user's motion preferences
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const matches = mediaQuery.matches;
    
    Promise.resolve().then(() => {
      setPrefersReduced(matches);
    });
    
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulseAngle: number;
      pulseSpeed: number;
    }

    let particles: Particle[] = [];
    const particleCount = 60;
    const connectionDist = 120;
    const mouseRadius = 180;

    const setupCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Generate particles
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1.5,
          pulseAngle: Math.random() * Math.PI,
          pulseSpeed: Math.random() * 0.02 + 0.01,
        });
      }
    };

    setupCanvas();

    const resizeObserver = new ResizeObserver(() => {
      setupCanvas();
    });
    resizeObserver.observe(container);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse LERP
      const mouse = mouseRef.current;
      if (mouse.active) {
        if (mouse.x === -1000) {
          mouse.x = mouse.targetX;
          mouse.y = mouse.targetY;
        } else {
          mouse.x += (mouse.targetX - mouse.x) * 0.1;
          mouse.y += (mouse.targetY - mouse.y) * 0.1;
        }
      } else {
        mouse.x += (-1000 - mouse.x) * 0.1;
        mouse.y += (-1000 - mouse.y) * 0.1;
      }

      // Draw subtle mouse guide
      if (mouse.active && mouse.x > -100) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouseRadius * 0.4, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
        ctx.stroke();
      }

      // Draw nodes & connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.pulseAngle += p.pulseSpeed;
        const radiusOffset = Math.sin(p.pulseAngle) * 0.6;
        const currentRadius = p.radius + radiusOffset;

        // Physics drift
        p.x += p.vx;
        p.y += p.vy;

        // Bounce borders
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Keep inside bounds roughly
        p.x = Math.max(0, Math.min(width, p.x));
        p.y = Math.max(0, Math.min(height, p.y));

        // Interaction with mouse
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRadius) {
            // Gravitate gently
            const force = (mouseRadius - dist) / mouseRadius;
            p.x -= (dx / dist) * force * 0.5;
            p.y -= (dy / dist) * force * 0.5;
          }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.fill();

        // Connect lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [prefersReduced]);

  if (prefersReduced) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-zinc-950 opacity-40">
        <div className="w-48 h-48 rounded-full border border-zinc-800/60 flex items-center justify-center animate-pulse">
          <div className="w-24 h-24 rounded-full border border-zinc-700/40"></div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-crosshair overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 block" />
    </div>
  );
}
