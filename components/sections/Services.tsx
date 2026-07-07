"use client";

import React from "react";
import { Sparkles, Terminal, Layers, Check } from "lucide-react";
import { servicesData } from "@/data/portfolioData";
import { motion } from "motion/react";

export default function Services() {
  const getIcon = (id: string) => {
    switch (id) {
      case "01":
        return <Sparkles className="w-5 h-5 text-white" />;
      case "02":
        return <Terminal className="w-5 h-5 text-white" />;
      case "03":
        default:
        return <Layers className="w-5 h-5 text-white" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="services" className="relative py-24 md:py-32 border-t border-zinc-900 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em] block mb-3">
              04 // SERVICES OFFERINGS
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight">
              SERVICES
            </h2>
          </div>
          <p className="font-sans text-sm text-zinc-400 max-w-[34ch] leading-relaxed">
            Highly focused full-stack development, premium design, and integrated AI capabilities.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group p-8 rounded-xl border border-zinc-900 bg-zinc-950/20 hover:bg-zinc-950/60 hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between min-h-[380px] relative overflow-hidden"
            >
              {/* Card visual highlight on hover */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="p-2.5 rounded bg-zinc-900 border border-zinc-800 transition-colors group-hover:border-zinc-700">
                    {getIcon(service.id)}
                  </div>
                  <span className="font-mono text-xs text-zinc-600 font-bold tracking-widest block">
                    {service.id} {" // "}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white tracking-tight mb-4 group-hover:text-zinc-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* Feature Tags List */}
              <ul className="space-y-2 border-t border-zinc-900/80 pt-6 mt-auto">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 font-mono text-[10px] text-zinc-400">
                    <Check className="w-3 h-3 text-zinc-500 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
