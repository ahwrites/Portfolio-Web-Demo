"use client";

import React from "react";
import { ArrowUpRight, Github, Code, Cpu } from "lucide-react";
import InteractiveCanvas from "@/components/ui/InteractiveCanvas";
import { motion } from "motion/react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // ease-out-expo
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] pt-20">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12 md:py-20">
        
        {/* Left Side: Typography */}
        <motion.div 
          className="lg:col-span-7 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6 self-start">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-500 absolute" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 ml-2">
              Available for Elite Ventures · 2026
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={nameVariants} className="mb-6">
            <h1 className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-[0.95] mb-2">
              AH JUBAER
            </h1>
            <p className="font-display font-medium text-2xl sm:text-4xl text-zinc-400 tracking-tight leading-snug">
              Design meets engineering, <br />
              <span className="text-white relative inline-block">
                powered by AI.
                <span className="absolute bottom-1 left-0 w-full h-[2px] bg-zinc-800" />
              </span>
            </p>
          </motion.div>

          {/* Subtext */}
          <motion.p 
            variants={itemVariants}
            className="font-sans text-base sm:text-lg text-zinc-400 max-w-[48ch] leading-relaxed mb-10"
          >
            I design, build, and ship autonomous agentic workflows, highly scalable SaaS platforms, and premium digital experiences that command attention.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <button
              onClick={() => handleScrollTo("work")}
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-mono text-xs font-bold uppercase hover:bg-zinc-200 transition-all duration-300 shadow-[0_4px_24px_rgba(255,255,255,0.06)]"
            >
              View Case Studies
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            
            <button
              onClick={() => handleScrollTo("contact")}
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-zinc-800 bg-transparent text-white font-mono text-xs font-bold uppercase hover:bg-zinc-900/60 hover:border-zinc-700 transition-all duration-300"
            >
              Let&apos;s Build Together
            </button>
          </motion.div>

          {/* Social icons/trust metrics */}
          <motion.div variants={itemVariants} className="flex items-center gap-8 mt-16 pt-8 border-t border-zinc-900">
            <div className="flex gap-4">
              <a 
                href="https://github.com/ahjubaer" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-full border border-zinc-800/80 hover:border-white text-zinc-400 hover:text-white transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <div className="w-px h-10 bg-zinc-900" />
            </div>
            
            <div className="flex gap-8">
              <div>
                <span className="block font-display font-semibold text-lg text-white">10M+</span>
                <span className="block font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Events Processed</span>
              </div>
              <div>
                <span className="block font-display font-semibold text-lg text-white">15k+</span>
                <span className="block font-mono text-[10px] text-zinc-500 uppercase tracking-wider">GitHub Stars</span>
              </div>
              <div>
                <span className="block font-display font-semibold text-lg text-white">5+</span>
                <span className="block font-mono text-[10px] text-zinc-500 uppercase tracking-wider">RAG Pipelines</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Interactive Abstract Network Canvas Grid */}
        <div className="lg:col-span-5 h-[320px] sm:h-[450px] lg:h-[600px] relative rounded-2xl border border-zinc-900 bg-zinc-950/20 overflow-hidden">
          {/* Subtle frame lines like a layout blueprint */}
          <div className="absolute top-4 left-4 font-mono text-[10px] text-zinc-600 uppercase tracking-widest pointer-events-none select-none z-20 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 animate-pulse" />
            <span>AI_ENGINE_GRID // LOCAL_NODE</span>
          </div>
          <div className="absolute bottom-4 right-4 font-mono text-[9px] text-zinc-700 pointer-events-none select-none z-20">
            [SYS_ACTIVE_120HZ]
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

          {/* Canvas Engine */}
          <InteractiveCanvas />
        </div>

      </div>
    </section>
  );
}
