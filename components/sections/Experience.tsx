"use client";

import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experienceData } from "@/data/portfolioData";
import { motion } from "motion/react";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="experience" className="relative py-24 md:py-32 border-t border-zinc-900 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em] block mb-3">
            07 // CAREER TIMELINE
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight">
            EXPERIENCE
          </h2>
          <p className="font-sans text-sm text-zinc-400 mt-2 max-w-[42ch]">
            Professional background focused on software development leadership, technical architecture, and product launch execution.
          </p>
        </div>

        {/* Timeline body */}
        <div className="relative max-w-4xl mx-auto pl-4 sm:pl-8 border-l border-zinc-900">
          
          <motion.div 
            className="flex flex-col gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {experienceData.map((exp) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative group"
              >
                {/* Visual Circle Marker on Left Line */}
                <div className="absolute -left-[21px] sm:-left-[37px] top-1.5 w-3 h-3 rounded-full bg-zinc-950 border border-zinc-800 group-hover:border-white transition-colors duration-300 z-10 shrink-0" />

                {/* Date tag above */}
                <div className="inline-flex items-center gap-2 mb-3">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  <span className="font-mono text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                    {exp.dates}
                  </span>
                </div>

                {/* Role and Organization */}
                <h3 className="font-display font-bold text-2xl text-white tracking-tight mb-1 group-hover:text-zinc-300 transition-colors">
                  {exp.role}
                </h3>
                
                <span className="font-mono text-xs text-zinc-500 uppercase block mb-4">
                  {exp.organization}
                </span>

                {/* Impact Summary paragraph */}
                <p className="font-sans text-sm text-zinc-300 font-medium leading-relaxed max-w-2xl mb-6 bg-zinc-950/40 border border-zinc-900/60 p-4 rounded-lg">
                  {exp.impact}
                </p>

                {/* Core duties bullets list */}
                <ul className="space-y-3 pl-1">
                  {exp.details.map((bullet, index) => (
                    <li key={index} className="flex gap-3 items-start font-sans text-xs text-zinc-400 leading-relaxed max-w-2xl">
                      <span className="font-mono text-zinc-700 mt-0.5 select-none">[0{index + 1}]</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
