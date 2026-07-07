"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { projectsData } from "@/data/portfolioData";
import { motion } from "motion/react";

export default function FeaturedWork() {
  const featuredProjects = projectsData.filter((p) => p.isFeatured);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="work" className="relative py-24 md:py-32 border-t border-zinc-900 bg-[#0A0A0A]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] px-6 md:px-12 pointer-events-none select-none">
        <div className="w-full border-t border-zinc-900" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em] block mb-3">
              01 // CORE PORTFOLIO
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              FEATURED WORK
            </h2>
          </div>
          <p className="font-sans text-sm text-zinc-400 max-w-[32ch] leading-relaxed">
            Proof of craft through actual outcomes, technical architectures, and optimized metrics.
          </p>
        </div>

        {/* Alternating Featured Cards */}
        <div className="flex flex-col gap-24 md:gap-32">
          {featuredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={project.slug}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center`}
              >
                {/* Visual Image Side */}
                <div 
                  className={`lg:col-span-7 overflow-hidden rounded-xl border border-zinc-900 bg-zinc-950/40 relative aspect-[3/2] group ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Link href={`/work/${project.slug}`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 800px"
                      referrerPolicy="no-referrer"
                      className="object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="px-6 py-3 rounded-full bg-white text-black font-mono text-[10px] uppercase font-bold tracking-widest flex items-center gap-1.5 shadow-xl scale-95 group-hover:scale-100 transition-transform duration-300">
                        Explore Case Study
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Link>

                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 border border-zinc-800 rounded-full font-mono text-[9px] uppercase tracking-wider text-zinc-400">
                    {project.category}
                  </div>
                </div>

                {/* Content Side */}
                <div 
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest block mb-2">
                    {project.role}
                  </span>
                  
                  <h3 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight mb-4 hover:text-zinc-300 transition-colors">
                    <Link href={`/work/${project.slug}`}>{project.title}</Link>
                  </h3>
                  
                  <p className="font-sans text-sm md:text-base text-zinc-400 leading-relaxed mb-6">
                    {project.subtitle}
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-4 py-6 border-y border-zinc-900 mb-8 bg-zinc-950/10 px-2 rounded-lg">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <span className="block font-display font-bold text-lg md:text-xl text-white">
                          {metric.value}
                        </span>
                        <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-wider">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800/60 font-mono text-[10px] text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-6">
                    <Link
                      href={`/work/${project.slug}`}
                      className="group flex items-center gap-1.5 font-mono text-xs font-semibold uppercase text-white hover:text-zinc-300 transition-colors"
                    >
                      View Case Study
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-zinc-900 hover:border-zinc-700 text-zinc-500 hover:text-white transition-all duration-300"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
