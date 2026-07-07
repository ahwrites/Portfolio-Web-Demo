"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-zinc-900 bg-[#0A0A0A] py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top bar with logo and back-to-top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-zinc-900 pb-12 mb-12">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded bg-white text-black flex items-center justify-center font-bold text-base">
              AJ
            </span>
            <span className="font-mono text-xs tracking-widest text-zinc-400">
              AH JUBAER // PRODUCT ENGINE
            </span>
          </div>

          <button
            onClick={handleScrollToTop}
            className="group flex items-center gap-2 p-3 rounded-full border border-zinc-900 hover:border-zinc-700 bg-zinc-950 text-zinc-400 hover:text-white transition-all duration-300 font-mono text-[10px] uppercase font-bold"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Center column grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Logo / Tagline Column */}
          <div className="md:col-span-5">
            <p className="font-sans text-sm text-zinc-400 leading-relaxed max-w-[34ch] mb-6">
              I build AI-powered products, SaaS platforms, and premium digital experiences that command attention. Let&apos;s architect what is next.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/ahjubaer"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-zinc-900 hover:border-zinc-700 text-zinc-500 hover:text-white transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/ahjubaer"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-zinc-900 hover:border-zinc-700 text-zinc-500 hover:text-white transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:jubaerwrites@gmail.com"
                className="p-2.5 rounded-full border border-zinc-900 hover:border-zinc-700 text-zinc-500 hover:text-white transition-all duration-300"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-3">
            <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest block mb-4">
              [NAV_MIRROR]
            </span>
            <ul className="space-y-2">
              {["Work", "About", "Services", "Process"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/#${item.toLowerCase()}`}
                    className="font-sans text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest block mb-4">
              [DEEP_LINKS]
            </span>
            <ul className="space-y-2">
              <li>
                <Link href="/work" className="font-sans text-xs text-zinc-400 hover:text-white transition-colors">
                  Full Project Index
                </Link>
              </li>
              <li>
                <Link href="/blog" className="font-sans text-xs text-zinc-400 hover:text-white transition-colors">
                  Insights & Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-sans text-xs text-zinc-400 hover:text-white transition-colors">
                  Contact Staging
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Outlined display wordmark banner as closing moment */}
        <div className="select-none pointer-events-none mb-12 border-t border-zinc-900/60 pt-12">
          <span className="block font-display font-extrabold text-[8vw] sm:text-[10vw] tracking-tighter leading-[0.8] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#1F1F1F] to-[#0A0A0A] uppercase select-none opacity-40">
            AH JUBAER
          </span>
        </div>

        {/* Copyright strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] text-zinc-600 border-t border-zinc-900 pt-8">
          <span>© 2026 AH JUBAER. ALL SYSTEM RIGHTS CONSERVED.</span>
          <span>DESIGNED & ENGINEERED BY AH JUBAER</span>
        </div>

      </div>
    </footer>
  );
}
