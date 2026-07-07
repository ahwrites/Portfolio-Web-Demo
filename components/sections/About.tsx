"use client";

import React from "react";
import Image from "next/image";
import { User, Shield, Terminal, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <section id="about" className="relative py-24 md:py-32 border-t border-zinc-900 bg-[#0A0A0A] overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-white/[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Storytelling */}
          <motion.div 
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span variants={itemVariants} className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em] block mb-3">
              02 // THE BUILDER STORY
            </motion.span>
            
            <motion.h2 
              variants={itemVariants}
              className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight mb-10"
            >
              ABOUT AH JUBAER
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6 font-sans text-base text-zinc-400 leading-relaxed max-w-[62ch]">
              <p className="text-zinc-200 font-medium text-lg leading-relaxed">
                I operate at the intersection of developer experience, backend systems engineering, and AI product architecture.
              </p>
              <p>
                My design and code philosophy is anchored in one primary idea: <strong>complexity should be handled on the server, resulting in pristine, lightweight user interfaces.</strong> I don&apos;t build generic web templates or larp with buzzwords. I collaborate with series-A startups and enterprise entities to build fast, robust, and accessible platforms that drive users and revenue.
              </p>
              <p>
                Whether it is integrating standard Gemini API models with rich tool-calling handlers, structuring robust multi-tenant web routers in Next.js, or polishing fluid 120 FPS animations, I treat every pixel and every line of code as a cohesive unit of craftsmanship.
              </p>
            </motion.div>

            {/* Core Values Row */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-zinc-900">
              <div className="flex flex-col gap-2">
                <div className="p-2 w-fit rounded bg-zinc-900 border border-zinc-800 text-white">
                  <Terminal className="w-4 h-4" />
                </div>
                <h4 className="font-display font-bold text-sm text-white uppercase mt-1">Systems Rigor</h4>
                <p className="font-sans text-xs text-zinc-500 leading-relaxed">Strict type systems, performant queries, and robust server pipelines.</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="p-2 w-fit rounded bg-zinc-900 border border-zinc-800 text-white">
                  <User className="w-4 h-4" />
                </div>
                <h4 className="font-display font-bold text-sm text-white uppercase mt-1">User Empathy</h4>
                <p className="font-sans text-xs text-zinc-500 leading-relaxed">Pristine typography, accessible markup, and organic micro-interactions.</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="p-2 w-fit rounded bg-zinc-900 border border-zinc-800 text-white">
                  <Shield className="w-4 h-4" />
                </div>
                <h4 className="font-display font-bold text-sm text-white uppercase mt-1">AI Native</h4>
                <p className="font-sans text-xs text-zinc-500 leading-relaxed">Structured JSON responses, clean RAG databases, and contextual assistants.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              className="relative overflow-hidden rounded-xl border border-zinc-900 bg-zinc-950/40 aspect-[4/5] group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src="https://picsum.photos/seed/workspace/800/1000"
                alt="AH Jubaer Workspace"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                referrerPolicy="no-referrer"
                className="object-cover opacity-50 group-hover:opacity-75 transition-opacity duration-700"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500 block mb-1">
                  CURRENT LOCATION
                </span>
                <span className="font-display font-bold text-lg text-white mb-4">
                  Dhaka, Bangladesh (GMT+6)
                </span>
                
                <p className="font-sans text-xs text-zinc-400 leading-relaxed border-t border-zinc-800 pt-4">
                  &ldquo;A product isn&apos;t finished when there is nothing left to add, but when there is nothing left to strip away.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* Decorative layout anchor */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-l border-b border-zinc-800 pointer-events-none select-none hidden sm:block" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border-r border-t border-zinc-800 pointer-events-none select-none hidden sm:block" />
          </div>

        </div>
      </div>
    </section>
  );
}
