import React from "react";
import Link from "next/link";
import { ArrowLeft, HelpCircle } from "lucide-react";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/sections/Footer";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-white flex flex-col justify-between">
      <Navigation />

      {/* 404 Main Panel */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-48 pb-24 flex flex-col items-center justify-center text-center flex-grow">
        
        {/* Visual code token */}
        <div className="mb-6 px-4 py-2 rounded bg-zinc-950 border border-zinc-900 font-mono text-xs text-zinc-500 tracking-wider flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-zinc-600 animate-pulse" />
          <span>[ERROR_LOGS // ROUTE_NOT_REGISTERED]</span>
        </div>

        {/* Display Heading */}
        <h1 className="font-display font-extrabold text-7xl sm:text-9xl text-white tracking-tighter leading-none mb-6">
          404
        </h1>

        <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-[42ch] leading-relaxed mb-10">
          The requested path is not linked to any active case studies, blog articles, or operational sections.
        </p>

        {/* Return Button */}
        <Link
          href="/"
          className="group flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-mono text-xs font-bold uppercase hover:bg-zinc-200 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Return to Hub
        </Link>

      </div>

      <Footer />
    </main>
  );
}
