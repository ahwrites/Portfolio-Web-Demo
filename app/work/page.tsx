"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Search } from "lucide-react";
import { projectsData } from "@/data/portfolioData";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/sections/Footer";
import { motion, AnimatePresence } from "motion/react";

type ProjectCategory = "ALL" | "AI" | "SaaS" | "Web App" | "Landing" | "Branding";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filters: ProjectCategory[] = ["ALL", "AI", "SaaS", "Web App", "Landing", "Branding"];

  const filteredProjects = projectsData.filter((project) => {
    const matchesFilter = activeFilter === "ALL" || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-white">
      <Navigation activeSection="work" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-32 pb-24 relative z-10">
        
        {/* Back Link */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Hub
          </Link>
        </div>

        {/* Header Block */}
        <div className="mb-16">
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em] block mb-3">
            ARCHIVE // INDEX_VIEW
          </span>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white tracking-tight leading-none mb-6">
            WORK CHRONOLOGY
          </h1>
          <p className="font-sans text-sm md:text-base text-zinc-400 max-w-[50ch] leading-relaxed">
            The full index of SaaS web applications, custom developer intelligence systems, and interactive branding modules compiled since 2022.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-900 pb-8 mb-12">
          {/* Filters */}
          <div className="flex flex-wrap gap-1.5 bg-zinc-950 p-1 rounded-full border border-zinc-900">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-white text-black font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by stack or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950/40 border border-zinc-900 rounded-full py-2 pl-9 pr-4 font-sans text-xs text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors"
            />
          </div>
        </div>

        {/* Grid Archive */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.slug}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col rounded-xl border border-zinc-900 bg-zinc-950/20 overflow-hidden relative"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900 border-b border-zinc-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    referrerPolicy="no-referrer"
                    className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="absolute top-4 left-4 px-2.5 py-0.5 bg-black/60 border border-zinc-800/80 rounded-full font-mono text-[9px] uppercase tracking-wider text-zinc-400">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-zinc-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-6">
                      {project.subtitle}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-2 py-0.5 rounded bg-zinc-900/50 border border-zinc-850 font-mono text-[9px] text-zinc-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/work/${project.slug}`}
                      className="group/btn flex items-center justify-between w-full font-mono text-[10px] uppercase font-bold tracking-wider text-zinc-400 group-hover:text-white border-t border-zinc-900 pt-4 transition-colors"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-4.5 h-4.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-zinc-500 group-hover/btn:text-white" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 border border-dashed border-zinc-900 rounded-xl bg-zinc-950/10">
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-1">
              [SYS_NO_MATCH_FOUND]
            </p>
            <p className="font-sans text-sm text-zinc-400">
              No projects matched your search queries. Try redefining tags.
            </p>
          </div>
        )}

      </div>

      <Footer />
    </main>
  );
}
