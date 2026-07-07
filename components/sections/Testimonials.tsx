"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { testimonialsData } from "@/data/portfolioData";
import { motion } from "motion/react";

export default function Testimonials() {
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
    <section id="testimonials" className="relative py-24 md:py-32 border-t border-zinc-900 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em] block mb-3">
              10 // CLIENT VERIFICATION
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight">
              TESTIMONIALS
            </h2>
          </div>
          <p className="font-sans text-sm text-zinc-400 max-w-[34ch] leading-relaxed">
            Direct endorsements from engineering leaders and executives on shipped products.
          </p>
        </div>

        {/* Testimonials Masonry / Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonialsData.map((test) => (
            <motion.div
              key={test.id}
              variants={itemVariants}
              className="p-8 rounded-xl border border-zinc-900 bg-zinc-950/20 hover:bg-zinc-950/40 hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-zinc-800 mb-6 shrink-0" />
                <p className="font-sans text-sm text-zinc-300 leading-relaxed italic mb-8">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-4 border-t border-zinc-900/60 pt-6 mt-auto">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-zinc-800 shrink-0">
                  <Image
                    src={test.avatar}
                    alt={test.author}
                    fill
                    sizes="40px"
                    referrerPolicy="no-referrer"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
                    {test.author}
                  </h4>
                  <span className="block font-mono text-[9px] text-zinc-500 uppercase">
                    {test.role} @ {test.company}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
