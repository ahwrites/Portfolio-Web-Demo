"use client";

import React, { useState, useEffect } from "react";
import Navigation from "@/components/ui/Navigation";
import Hero from "@/components/sections/Hero";
import FeaturedWork from "@/components/sections/FeaturedWork";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import SelectedProjects from "@/components/sections/SelectedProjects";
import Experience from "@/components/sections/Experience";
import TechStack from "@/components/sections/TechStack";
import OpenSource from "@/components/sections/OpenSource";
import Testimonials from "@/components/sections/Testimonials";
import GitHubActivity from "@/components/sections/GitHubActivity";
import BlogPreview from "@/components/sections/BlogPreview";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "work", "about", "skills", "services", "process", "blog", "faq", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#0A0A0A] overflow-hidden">
      {/* Decorative vertical blueprint lines */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-zinc-900/40 pointer-events-none select-none z-0" />
      <div className="absolute right-6 md:right-12 top-0 bottom-0 w-[1px] bg-zinc-900/40 pointer-events-none select-none z-0" />

      {/* Primary navigation bar */}
      <Navigation activeSection={activeSection} />

      {/* Sections choreography */}
      <Hero />
      <FeaturedWork />
      <About />
      <Skills />
      <Services />
      <Process />
      <SelectedProjects />
      <Experience />
      <TechStack />
      <OpenSource />
      <Testimonials />
      <GitHubActivity />
      <BlogPreview />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
