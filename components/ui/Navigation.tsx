"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavigationProps {
  activeSection?: string;
}

export default function Navigation({ activeSection = "" }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "/#work" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Process", href: "/#process" },
    { name: "Blog", href: "/#blog" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Scrolled past hero threshold
      setIsScrolled(currentScrollY > 80);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-[#0A0A0A]/85 backdrop-blur-md border-b border-[#1F1F1F] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Monogram logo */}
        <Link 
          href="/" 
          className="group flex items-center gap-2 font-display font-bold text-xl tracking-tight text-white select-none"
        >
          <span className="w-8 h-8 rounded bg-white text-black flex items-center justify-center font-bold text-base transition-transform group-hover:scale-105 duration-300">
            AJ
          </span>
          <span className="hidden sm:inline-block font-medium text-sm tracking-widest text-zinc-400 group-hover:text-white transition-colors duration-300">
            AH JUBAER
          </span>
        </Link>

        {/* Center links - Desktop */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/40 border border-zinc-800/40 rounded-full p-1.5 px-3">
          {navLinks.map((link) => {
            const isLinkActive = activeSection === link.name.toLowerCase();
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                  isLinkActive
                    ? "text-white bg-zinc-800"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:block">
          <Link
            href="/#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black font-mono text-xs font-bold uppercase hover:bg-zinc-200 transition-all duration-300"
          >
            Let&apos;s Build
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-[60px] bg-[#0A0A0A] border-t border-zinc-900 z-40 transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-8 gap-6 justify-center h-full max-h-[80vh]">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{ animationDelay: `${idx * 50}ms` }}
              className="font-display font-bold text-3xl tracking-tight text-zinc-400 hover:text-white transition-colors animate-fade-up"
            >
              {link.name}
            </a>
          ))}
          
          <div className="pt-8 border-t border-zinc-900 mt-4">
            <Link
              href="/#contact"
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center justify-between w-full p-4 rounded bg-zinc-900 border border-zinc-800 text-white font-mono text-sm tracking-wider uppercase hover:bg-zinc-800 transition-colors"
            >
              <span>Let&apos;s Build Together</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
