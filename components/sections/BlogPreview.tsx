"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { blogPostsData } from "@/data/portfolioData";
import { motion } from "motion/react";

export default function BlogPreview() {
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
    <section id="blog" className="relative py-24 md:py-32 border-t border-zinc-900 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em] block mb-3">
              12 // WRITTEN COGNITION
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight">
              INSIGHTS & ARTICLES
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-sm text-zinc-400 max-w-[32ch] leading-relaxed">
              Long-form writing analyzing product architecture, engineering decisions, and AI user flows.
            </p>
            <Link
              href="/blog"
              className="group flex items-center gap-1 font-mono text-xs font-bold uppercase text-white hover:text-zinc-300 transition-colors self-start"
            >
              View Full Insights
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {blogPostsData.slice(0, 3).map((post) => (
            <motion.div
              key={post.slug}
              variants={itemVariants}
              className="group flex flex-col justify-between rounded-xl border border-zinc-900 bg-zinc-950/20 overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900 border-b border-zinc-900">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  referrerPolicy="no-referrer"
                  className="object-cover opacity-40 group-hover:opacity-70 group-hover:scale-103 transition-all duration-700"
                />
                
                <div className="absolute top-4 left-4 px-2.5 py-0.5 bg-black/60 border border-zinc-850 rounded-full font-mono text-[9px] uppercase tracking-wider text-zinc-400">
                  {post.category}
                </div>
              </div>

              {/* Text content section */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  {/* Meta stats */}
                  <div className="flex items-center gap-3 font-mono text-[9px] text-zinc-500 uppercase tracking-wider mb-4">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-zinc-600" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-zinc-300 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read Action link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="group/action flex items-center justify-between w-full font-mono text-[10px] uppercase font-bold tracking-wider text-zinc-400 group-hover:text-white border-t border-zinc-900 pt-4 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/action:translate-x-0.5 group-hover/action:-translate-y-0.5 text-zinc-600 group-hover/action:text-white" />
                </Link>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
