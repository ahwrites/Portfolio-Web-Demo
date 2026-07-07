"use client";

import React, { useState } from "react";
import { Sparkles, Trophy, CheckCircle2 } from "lucide-react";
import { skillsCategories } from "@/data/portfolioData";
import { motion, AnimatePresence } from "motion/react";

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    proofPoint: string;
    category: string;
  }>({
    name: "Gemini API SDK",
    proofPoint: "Built 5 production autonomous agent frameworks",
    category: "AI & Data Science"
  });

  return (
    <section id="skills" className="relative py-24 md:py-32 border-t border-zinc-900 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em] block mb-3">
            03 // TECHNICAL STANDARDS
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight">
            SKILLS & OUTCOMES
          </h2>
          <p className="font-sans text-sm text-zinc-400 mt-2 max-w-[42ch]">
            Hover or click any skill to inspect the corresponding, falsifiable outcome achieved in production.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Category Tag Clusters */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {skillsCategories.map((cat, catIdx) => (
              <div key={cat.category} className="border-b border-zinc-900/60 pb-8">
                <h3 className="font-display font-bold text-sm text-zinc-500 tracking-wider uppercase mb-4 flex items-center gap-2">
                  <span className="text-[10px] font-mono text-zinc-600">0{catIdx + 1} {" // "}</span>
                  {cat.category}
                </h3>
                
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => {
                    const isSelected = selectedSkill.name === skill.name;
                    return (
                      <button
                        key={skill.name}
                        onClick={() => setSelectedSkill({ ...skill, category: cat.category })}
                        onMouseEnter={() => setSelectedSkill({ ...skill, category: cat.category })}
                        className={`px-4 py-2.5 rounded-full font-mono text-xs transition-all duration-300 text-left flex items-center gap-2 border ${
                          isSelected
                            ? "bg-white text-black border-white"
                            : "bg-zinc-950 text-zinc-400 border-zinc-900 hover:text-white hover:border-zinc-700"
                        }`}
                      >
                        {skill.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Interactive Proof Console */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-8 relative overflow-hidden shadow-2xl">
              {/* Layout grid overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.01] rounded-full blur-2xl pointer-events-none" />
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-6">
                <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest block">
                  PROVABLE_RECORD // OUTCOME
                </span>
                <Trophy className="w-4 h-4 text-zinc-600" />
              </div>

              {/* Dynamic Interactive Window */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSkill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col h-full min-h-[220px] justify-between"
                >
                  <div>
                    <span className="font-mono text-[10px] text-zinc-500 uppercase block mb-1">
                      {selectedSkill.category}
                    </span>
                    
                    <h4 className="font-display font-bold text-2xl text-white tracking-tight mb-4">
                      {selectedSkill.name}
                    </h4>
                    
                    <div className="flex gap-3 items-start mt-6 p-4 rounded-lg bg-zinc-900/40 border border-zinc-900">
                      <CheckCircle2 className="w-5 h-5 text-zinc-400 mt-0.5 shrink-0" />
                      <div>
                        <span className="block font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-1">
                          PRODUCTION VERIFICATION
                        </span>
                        <p className="font-sans text-sm text-zinc-200 font-medium leading-relaxed">
                          {selectedSkill.proofPoint}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-zinc-900 flex items-center justify-between font-mono text-[10px] text-zinc-600">
                    <span>SYS_RECORD_ID_0{selectedSkill.name.length}</span>
                    <span>STATUS: EXCELLENT</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
