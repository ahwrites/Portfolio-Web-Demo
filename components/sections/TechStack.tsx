"use client";

import React from "react";
import { Layout, Server, BrainCircuit, Terminal } from "lucide-react";
import { motion } from "motion/react";

export default function TechStack() {
  const groups = [
    {
      name: "AI & Data Science",
      icon: <BrainCircuit className="w-4 h-4 text-white" />,
      items: ["Gemini API", "OpenAI API", "Claude SDK", "LangChain", "Vector Embeddings", "RAG Systems", "Python"]
    },
    {
      name: "Frontend Craft",
      icon: <Layout className="w-4 h-4 text-white" />,
      items: ["React 19", "Next.js", "TypeScript", "Tailwind CSS v4", "Framer Motion", "GSAP", "Three.js / WebGL"]
    },
    {
      name: "Backend & Storage",
      icon: <Server className="w-4 h-4 text-white" />,
      items: ["Node.js / Express", "Go (Golang)", "PostgreSQL", "Prisma ORM", "Firebase / Firestore", "Supabase", "Redis"]
    },
    {
      name: "DevOps & Tooling",
      icon: <Terminal className="w-4 h-4 text-white" />,
      items: ["Docker", "GCP / Cloud Run", "Vercel Edge", "Git / GitHub Actions", "VS Code", "Cursor AI", "Figma Design"]
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
    <section id="tech-stack" className="relative py-24 md:py-32 border-t border-zinc-900 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em] block mb-3">
              08 // PRODUCT ENGINE
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight">
              TECH STACK
            </h2>
          </div>
          <p className="font-sans text-sm text-zinc-400 max-w-[34ch] leading-relaxed">
            A carefully selected collection of frameworks, databases, and LLM providers powering our projects.
          </p>
        </div>

        {/* Tech Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {groups.map((grp) => (
            <motion.div
              key={grp.name}
              variants={itemVariants}
              className="p-6 rounded-xl border border-zinc-900 bg-zinc-950/20 flex flex-col"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-zinc-900 pb-4 mb-6">
                <div className="p-2 rounded bg-zinc-900 border border-zinc-850">
                  {grp.icon}
                </div>
                <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                  {grp.name}
                </h3>
              </div>

              {/* Items List */}
              <div className="flex flex-col gap-2">
                {grp.items.map((item, index) => (
                  <div 
                    key={item}
                    className="flex items-center justify-between py-2 border-b border-zinc-900/40 font-mono text-xs text-zinc-400 hover:text-white transition-colors group"
                  >
                    <span>{item}</span>
                    <span className="text-[9px] text-zinc-700 group-hover:text-zinc-500 transition-colors">
                      [0{index + 1}]
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
