"use client";

import React, { useState } from "react";
import { GitCommit, GitBranch, Terminal, ExternalLink, RefreshCw } from "lucide-react";
import { motion } from "motion/react";

export default function GitHubActivity() {
  const [selectedDay, setSelectedDay] = useState<{ date: string; count: number } | null>({
    date: "Jul 6, 2026",
    count: 14
  });

  const pinnedRepos = [
    { name: "aurora-design", desc: "A premium monochrome React primitive library focusing on accessibility.", lang: "TypeScript", stars: "15.4k" },
    { name: "synapse-engine", desc: "Server-side RAG pipelines and custom autonomous agent configurations.", lang: "Go", stars: "1.8k" },
    { name: "nextjs-router-patch", desc: "Experimental SWC compiler optimizations for Next.js App Router.", lang: "Rust", stars: "412" }
  ];

  // Helper to generate contributions grid mock that looks extremely realistic
  const weeks = 28; // columns
  const days = 7;   // rows
  
  // Generating a stable distribution of contribution intensity
  const getIntensity = (col: number, row: number) => {
    const val = (Math.sin(col * 0.3) * Math.cos(row * 0.5) + Math.cos(col * row * 0.1) + 1.2) / 2.2;
    return Math.max(0, Math.min(4, Math.floor(val * 4.8)));
  };

  const getIntensityClass = (intensity: number) => {
    switch (intensity) {
      case 4:
        return "bg-white"; // High
      case 3:
        return "bg-zinc-400"; // Medium-High
      case 2:
        return "bg-zinc-600"; // Medium
      case 1:
        return "bg-zinc-800"; // Low
      case 0:
      default:
        return "bg-zinc-950 border border-zinc-900/60"; // None
    }
  };

  const getCommitCount = (intensity: number) => {
    switch (intensity) {
      case 4: return 14;
      case 3: return 8;
      case 2: return 4;
      case 1: return 1;
      case 0:
      default: return 0;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <section id="github-activity" className="relative py-24 md:py-32 border-t border-zinc-900 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em] block mb-3">
            11 // GIT LAB LOGS
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight">
            GITHUB ACTIVITY
          </h2>
          <p className="font-sans text-sm text-zinc-400 mt-2 max-w-[42ch]">
            Continuous development logs, repository tracking, and commit pipelines synced daily.
          </p>
        </div>

        {/* Master Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contributions Heatmap */}
          <motion.div 
            className="lg:col-span-8 p-6 md:p-8 rounded-xl border border-zinc-900 bg-zinc-950/20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Heatmap header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-900 pb-6 mb-8">
              <div className="flex items-center gap-3">
                <GitCommit className="w-5 h-5 text-zinc-400" />
                <div>
                  <h3 className="font-display font-bold text-base text-white uppercase tracking-wider">
                    ahjubaer / CONTRIBUTIONS
                  </h3>
                  <span className="block font-mono text-[9px] text-zinc-500">
                    2,142 COMMITS IN THE PAST 365 DAYS
                  </span>
                </div>
              </div>

              {/* Day selection popup details */}
              {selectedDay && (
                <div className="px-4 py-2 rounded bg-zinc-900 border border-zinc-850 font-mono text-[10px] text-zinc-300">
                  <span className="text-zinc-500">Day:</span> {selectedDay.date} {" // "} <span className="text-zinc-500">Commits:</span> {selectedDay.count}
                </div>
              )}
            </div>

            {/* Heatmap grid */}
            <div className="overflow-x-auto pb-4">
              <div className="flex flex-col gap-1 min-w-[540px]">
                {Array.from({ length: days }).map((_, rIdx) => (
                  <div key={rIdx} className="flex gap-1">
                    {Array.from({ length: weeks }).map((_, cIdx) => {
                      const intensity = getIntensity(cIdx, rIdx);
                      const isHovered = selectedDay && selectedDay.date === `Col ${cIdx}, Row ${rIdx}`;
                      return (
                        <button
                          key={cIdx}
                          onMouseEnter={() => {
                            const dateStr = `Week ${cIdx + 1}, Day ${rIdx + 1}`;
                            const commitsNum = getCommitCount(intensity);
                            setSelectedDay({ date: dateStr, count: commitsNum });
                          }}
                          className={`w-3.5 h-3.5 rounded-sm transition-all duration-300 ${getIntensityClass(intensity)} ${
                            isHovered ? "scale-125 ring-2 ring-white/55" : ""
                          }`}
                          aria-label={`Contributions grid node, intensity ${intensity}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend row */}
            <div className="flex items-center justify-between font-mono text-[9px] text-zinc-600 mt-6 border-t border-zinc-900/40 pt-4">
              <span>LEARN_MORE // INFO</span>
              <div className="flex items-center gap-1.5">
                <span>Less</span>
                <div className="w-2.5 h-2.5 rounded-sm bg-zinc-950 border border-zinc-900" />
                <div className="w-2.5 h-2.5 rounded-sm bg-zinc-800" />
                <div className="w-2.5 h-2.5 rounded-sm bg-zinc-600" />
                <div className="w-2.5 h-2.5 rounded-sm bg-zinc-400" />
                <div className="w-2.5 h-2.5 rounded-sm bg-white" />
                <span>More</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Pinned Repos */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 mb-2 pl-1">
              [PINNED_REPOSITORIES]
            </h3>

            {pinnedRepos.map((repo) => (
              <a
                key={repo.name}
                href={`https://github.com/ahjubaer/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-xl border border-zinc-900 bg-zinc-950/20 hover:bg-zinc-950/40 hover:border-zinc-800 transition-all duration-300 block relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-3.5 h-3.5 text-zinc-500" />
                    <span className="font-display font-bold text-sm text-white group-hover:text-zinc-300 transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                </div>

                <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-4">
                  {repo.desc}
                </p>

                <div className="flex items-center gap-4 font-mono text-[9px] text-zinc-500">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-white inline-block" />
                    {repo.lang}
                  </span>
                  <span>★ {repo.stars}</span>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
