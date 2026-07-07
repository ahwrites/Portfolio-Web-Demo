"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/ui/Navigation";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function StandaloneContact() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-white">
      <Navigation activeSection="contact" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-32 relative z-10">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Hub
          </Link>
        </div>
      </div>

      <Contact />
      
      <Footer />
    </main>
  );
}
