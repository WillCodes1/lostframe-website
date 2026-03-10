"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function FloatingOrb({ delay, duration, x, y, size, opacity }: {
  delay: number; duration: number; x: string; y: string; size: number; opacity: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: `radial-gradient(circle, rgba(184,134,11,${opacity}) 0%, transparent 70%)`,
        filter: "blur(20px)",
      }}
      animate={{
        x: [0, 30, -20, 10, 0],
        y: [0, -25, 15, -10, 0],
        scale: [1, 1.1, 0.95, 1.05, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function AnimatedMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.004;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const points: { x: number; y: number; wave: number }[] = [];
      const cols = 18;
      const rows = 12;

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const baseX = (i / cols) * canvas.width;
          const baseY = (j / rows) * canvas.height;
          const wave = Math.sin(time * 2 + i * 0.4 + j * 0.3);
          const offsetX = Math.sin(time + i * 0.5 + j * 0.3) * 35 + wave * 10;
          const offsetY = Math.cos(time + j * 0.5 + i * 0.2) * 25 + wave * 8;
          points.push({ x: baseX + offsetX, y: baseY + offsetY, wave });
        }
      }

      ctx.lineWidth = 0.8;

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            const alpha = (1 - dist / 160) * 0.22;
            ctx.strokeStyle = `rgba(184, 134, 11, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      for (const p of points) {
        const pulse = 2.5 + Math.sin(time * 3 + p.wave) * 1;
        const dotAlpha = 0.25 + Math.sin(time * 2 + p.wave) * 0.1;
        ctx.fillStyle = `rgba(184, 134, 11, ${dotAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulse, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-[0]" style={{ pointerEvents: "none" }} />;
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden bg-[#fafaf8]">
      {/* Animated mesh background */}
      {mounted && <AnimatedMesh />}

      {/* Floating orbs */}
      <FloatingOrb delay={0} duration={20} x="10%" y="20%" size={400} opacity={0.12} />
      <FloatingOrb delay={3} duration={25} x="70%" y="15%" size={350} opacity={0.08} />
      <FloatingOrb delay={7} duration={18} x="50%" y="60%" size={450} opacity={0.1} />
      <FloatingOrb delay={5} duration={22} x="85%" y="70%" size={280} opacity={0.06} />

      {/* Top fade overlay for depth */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#fafaf8] to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#fafaf8] to-transparent z-[1]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        {/* Thin horizontal rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
          className="w-24 h-px bg-[#b8860b] mx-auto mb-8 origin-center"
        />

        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xs font-mono tracking-[0.3em] text-[#b8860b] uppercase mb-6"
        >
          Lost Frame Ventures / Intelligence Briefing
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[0.92] mb-6"
        >
          <span className="text-[#1a1a2e]">The Foundations</span>
          <br />
          <span className="text-[#1a1a2e]">Are </span>
          <span className="gradient-text italic">Cracking</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          className="w-16 h-px bg-[#e5e2d9] mx-auto my-8 origin-center"
        />

        {/* Subheadline - editorial style */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-lg md:text-xl text-[#4a4a5a] max-w-2xl mx-auto leading-relaxed mb-10 font-light"
        >
          An executive summary of my 248,000-word proprietary research paper on the collision of artificial intelligence,
          energy scarcity, semiconductor monopolies, and the global labor market disruption
          already reshaping who wins and who loses.
        </motion.p>

        {/* Inline metadata - not boxy cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="text-xs font-mono text-[#7a7a85] mb-12"
        >
          <div className="hidden sm:flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span>Summary of 248,000-word proprietary research paper</span>
            <span className="text-[#e5e2d9]">|</span>
            <span>35+ data visualizations</span>
            <span className="text-[#e5e2d9]">|</span>
            <span>200+ primary sources</span>
            <span className="text-[#e5e2d9]">|</span>
            <span>March 2026</span>
          </div>
          <div className="sm:hidden grid grid-cols-2 gap-x-4 gap-y-1.5 text-center">
            <span>Summary of 248K-word paper</span>
            <span>35+ data visualizations</span>
            <span>200+ primary sources</span>
            <span>March 2026</span>
          </div>
        </motion.div>

        {/* Author line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex flex-col items-center gap-1"
        >
          <p className="text-sm text-[#4a4a5a]">
            by <span className="text-[#1a1a2e] font-semibold">Will Taubenheim</span>
          </p>
          <p className="text-xs text-[#7a7a85] text-center leading-relaxed">
            Serial Tech Founder &nbsp;&middot;&nbsp; AI Researcher &nbsp;&middot;&nbsp; <span className="whitespace-nowrap">2x NASA Award Winner</span> &nbsp;&middot;&nbsp; <span className="whitespace-nowrap">Founder of Lost Frame Ventures</span>
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] text-[#7a7a85] font-mono tracking-[0.3em]">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-[#b8860b]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
