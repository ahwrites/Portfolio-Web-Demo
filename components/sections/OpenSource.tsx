"use client";

import React from "react";
import { GitPullRequest, Star, ArrowUpRight, Github } from "lucide-react";
import { motion } from "motion/react";

export default function OpenSource() {
  const contributions = [
    {
      repo: "ahjubaer/aurora-design",
      desc: "An open-source monochrome React primitive library focusing on full keyboard accessibility and ultra-fluid micro-motions.",
      stars: "15.4k",
      role: "Creator & Maintainer",
      tags: ["React", "TypeScript", "Radix"]
    },
    {
      repo: "vercel/next.js",
      desc: "Contributed server-side path resolution optimization and bundle size reduction fixes for App Router configurations.",
      stars: "124k",
      role: "Contributor (PR #8932)",
      tags: ["Next.js", "SWC", "Rust"]
    },
    {
      repo: "google/generative-ai-js",
      desc: "Proposed improved TS types for schema verification in multimodal Gemini API model configurations.",
      stars: "1.2k",
      role: "Contributor",
      tags: ["Gemini", "TypeScript", "JSONSchema"]
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
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="open-source" className="relative py-24 md:py-32 border-t border-zinc-900 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em] block mb-3">
            09 // INDEPENDENT ECOSYSTEMS
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight">
            OPEN SOURCE
          </h2>
          <p className="font-sans text-sm text-zinc-400 mt-2 max-w-[42ch]">
            Active community contributions, public libraries, and production patches driven to core developer toolings.
          </p>
        </div>

        {/* Contributions list */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {contributions.map((contrib) => (
            <motion.div
              key={contrib.repo}
              variants={itemVariants}
              className="p-6 rounded-xl border border-zinc-900 bg-zinc-950/20 hover:bg-zinc-950/50 hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Repo header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Github className="w-4.5 h-4.5" />
                    <span className="font-mono text-xs font-semibold text-white group-hover:text-zinc-300 transition-colors">
                      {contrib.repo.split("/")[1]}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[10px] text-zinc-500">
                    <Star className="w-3 h-3 text-zinc-600 fill-zinc-600" />
                    <span>{contrib.stars}</span>
                  </div>
                </div>

                {/* Sub-header / role info */}
                <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 block mb-3">
                  ROLE: {contrib.role}
                </span>

                {/* Description paragraph */}
                <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-6">
                  {contrib.desc}
                </p>
              </div>

              {/* Tags & Action links */}
              <div className="flex items-center justify-between border-t border-zinc-900 pt-4 mt-auto">
                <div className="flex gap-1.5">
                  {contrib.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-1.5 py-0.5 rounded bg-zinc-900/60 font-mono text-[9px] text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={`https://github.com/${contrib.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] uppercase font-bold tracking-wider text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  Code
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-zinc-600 group-hover:text-white" />
                </a>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
