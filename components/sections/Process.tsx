"use client";

import React from "react";
import { Search, Compass, Cpu, Ship, RefreshCw } from "lucide-react";
import { motion } from "motion/react";

export default function Process() {
  const steps = [
    {
      num: "01",
      name: "Discover",
      desc: "Investigating user behavior, current metrics, technical constraints, and data vectors.",
      icon: <Search className="w-4 h-4" />
    },
    {
      num: "02",
      name: "Design",
      desc: "Locking Figma grids, typographic scales, micro-motion curves, and JSON API payloads.",
      icon: <Compass className="w-4 h-4" />
    },
    {
      num: "03",
      name: "Build",
      desc: "Assembling robust server components, strict types, AI prompt routing, and Go/Next.js pipelines.",
      icon: <Cpu className="w-4 h-4" />
    },
    {
      num: "04",
      name: "Ship",
      desc: "Running emulator audits, lint routines, and edge optimizations before Vercel/GCP deploy.",
      icon: <Ship className="w-4 h-4" />
    },
    {
      num: "05",
      name: "Iterate",
      desc: "Analyzing clickmaps, pipeline latency logs, and tuning prompt schemas to lower token costs.",
      icon: <RefreshCw className="w-4 h-4" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="process" className="relative py-24 md:py-32 border-t border-zinc-900 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em] block mb-3">
            05 // PROCESS MATURITY
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight">
            METHODOLOGY
          </h2>
          <p className="font-sans text-sm text-zinc-400 mt-2 max-w-[42ch]">
            Rigorous steps taken from initial abstract brief to highly performant, live production platforms.
          </p>
        </div>

        {/* Steps Grid (Horizontal scroll on mobile, flex row on desktop) */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-5 gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Horizontal Line across items for desktop */}
          <div className="absolute top-[28px] left-[32px] right-[32px] h-[1px] bg-zinc-900 hidden md:block z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              variants={itemVariants}
              className="relative z-10 flex flex-col items-start bg-zinc-950/20 md:bg-transparent p-6 md:p-0 rounded-xl border border-zinc-900 md:border-none"
            >
              {/* Circle Icon Indicator */}
              <div className="flex items-center justify-between w-full mb-6">
                <div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-white transition-all duration-300 group-hover:border-zinc-500 shadow-xl z-10 shrink-0">
                  {step.icon}
                </div>
                <span className="font-mono text-xs text-zinc-600 font-bold md:hidden">
                  PHASE // {step.num}
                </span>
                <span className="font-mono text-[10px] text-zinc-700 font-bold hidden md:block">
                  PHASE // {step.num}
                </span>
              </div>

              {/* Text info */}
              <h3 className="font-display font-bold text-lg text-white mb-3">
                {step.name}
              </h3>
              
              <p className="font-sans text-xs text-zinc-400 leading-relaxed max-w-[260px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
