"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqsData } from "@/data/portfolioData";
import { motion, AnimatePresence } from "motion/react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 border-t border-zinc-900 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em] block mb-3">
            13 // OPERATIONS GUIDANCE
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="font-sans text-sm text-zinc-400 mt-2 max-w-[42ch]">
            Answers to common queries regarding delivery structures, tech selections, and communication styles.
          </p>
        </div>

        {/* Accordion Body */}
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqsData.map((faq) => {
            const isOpen = openIndex === faq.id;
            return (
              <div 
                key={faq.id}
                className="rounded-xl border border-zinc-900 bg-zinc-950/20 overflow-hidden transition-all duration-300"
              >
                {/* Trigger Row */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="flex items-center justify-between w-full p-6 text-left hover:bg-zinc-950/50 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                    <span className="font-display font-bold text-base text-white group-hover:text-zinc-300 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-300 shrink-0 ${
                    isOpen ? "rotate-180 text-white" : ""
                  }`} />
                </button>

                {/* Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                    >
                      <div className="p-6 pt-0 border-t border-zinc-900/60 font-sans text-xs text-zinc-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
