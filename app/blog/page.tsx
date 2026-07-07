"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Search, BookOpen, Calendar } from "lucide-react";
import { blogPostsData } from "@/data/portfolioData";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/sections/Footer";
import { motion, AnimatePresence } from "motion/react";

export default function BlogIndex() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPostsData.filter((post) => {
    return post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
           post.category.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-white">
      <Navigation activeSection="blog" />

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
            LOGS // WRITTEN_THOUGHTS
          </span>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white tracking-tight leading-none mb-6">
            INSIGHTS ARCHIVE
          </h1>
          <p className="font-sans text-sm md:text-base text-zinc-400 max-w-[50ch] leading-relaxed">
            Analytical research, structural guidelines, and tech postmortems investigating LLMs, user interfaces, and custom web layers.
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-between border-b border-zinc-900 pb-8 mb-12">
          <div className="relative max-w-sm w-full">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950/40 border border-zinc-900 rounded-full py-2 pl-9 pr-4 font-sans text-xs text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors"
            />
          </div>
        </div>

        {/* Grid Archive */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.div
                layout
                key={post.slug}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col justify-between rounded-xl border border-zinc-900 bg-zinc-950/20 overflow-hidden"
              >
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

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
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
          </AnimatePresence>
        </motion.div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 border border-dashed border-zinc-900 rounded-xl bg-zinc-950/10">
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-1">
              [SYS_NO_MATCH_FOUND]
            </p>
            <p className="font-sans text-sm text-zinc-400">
              No articles matched your criteria.
            </p>
          </div>
        )}

      </div>

      <Footer />
    </main>
  );
}
