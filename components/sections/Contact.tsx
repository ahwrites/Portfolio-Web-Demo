"use client";

import React, { useState } from "react";
import { Mail, CheckCircle, AlertTriangle, Send } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "$10k - $25k",
    timeline: "1 - 2 Months",
    message: ""
  });

  const [status, setStatus] = useState<"IDLE" | "LOADING" | "SUCCESS" | "ERROR">("IDLE");
  const [errorMessage, setErrorMessage] = useState("");

  const budgets = ["<$10k", "$10k - $25k", "$25k - $50k", "$50k+"];
  const timelines = ["<1 Month", "1 - 2 Months", "2 - 3 Months", "Flexible"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectBudget = (b: string) => {
    setFormData({ ...formData, budget: b });
  };

  const handleSelectTimeline = (t: string) => {
    setFormData({ ...formData, timeline: t });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("ERROR");
      setErrorMessage("All primary fields are required.");
      return;
    }

    if (!formData.email.includes("@")) {
      setStatus("ERROR");
      setErrorMessage("Please supply a valid email address.");
      return;
    }

    setStatus("LOADING");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus("SUCCESS");
        setFormData({
          name: "",
          email: "",
          budget: "$10k - $25k",
          timeline: "1 - 2 Months",
          message: ""
        });
      } else {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to submit message.");
      }
    } catch (err: any) {
      setStatus("ERROR");
      setErrorMessage(err.message || "An unexpected network error occurred.");
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-zinc-900 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Direct links / Copy */}
          <div className="lg:col-span-5">
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em] block mb-3">
              14 // CONNECT PIPELINE
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight mb-8">
              START A PROJECT
            </h2>
            
            <p className="font-sans text-sm text-zinc-400 leading-relaxed max-w-[38ch] mb-12">
              Have an enterprise AI product to architect or a high-end SaaS platform to build? Submit details to establish a primary communication stream.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl border border-zinc-900 bg-zinc-950/20">
                <div className="p-3 rounded bg-zinc-900 border border-zinc-800 text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-zinc-500 uppercase">
                    PRIMARY EMAIL
                  </span>
                  <a href="mailto:jubaerwrites@gmail.com" className="font-display font-bold text-sm text-white hover:text-zinc-300 transition-colors">
                    jubaerwrites@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-zinc-900 text-xs text-zinc-600 font-mono">
              [ESTIMATED RESPONSE LATENCY: &lt; 12 HOURS]
            </div>
          </div>

          {/* Right Column: Contact form box */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-xl border border-zinc-900 bg-zinc-950/20 relative">
              
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Inputs Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Elena Rostova"
                      className="bg-zinc-950 border border-zinc-900 rounded-lg py-3.5 px-4 font-sans text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-700 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. elena@zenith.com"
                      className="bg-zinc-950 border border-zinc-900 rounded-lg py-3.5 px-4 font-sans text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-700 transition-colors"
                    />
                  </div>
                </div>

                {/* Budget Bracket Selection */}
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block">
                    Estimated Project Budget
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {budgets.map((b) => {
                      const isActive = formData.budget === b;
                      return (
                        <button
                          key={b}
                          type="button"
                          onClick={() => handleSelectBudget(b)}
                          className={`py-3 rounded-lg font-mono text-xs border text-center transition-all duration-300 ${
                            isActive
                              ? "bg-white text-black border-white font-semibold"
                              : "bg-zinc-950 text-zinc-400 border-zinc-900 hover:text-white hover:border-zinc-800"
                          }`}
                        >
                          {b}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Timeline Selection */}
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block">
                    Desired Timeline
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {timelines.map((t) => {
                      const isActive = formData.timeline === t;
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => handleSelectTimeline(t)}
                          className={`py-3 rounded-lg font-mono text-xs border text-center transition-all duration-300 ${
                            isActive
                              ? "bg-white text-black border-white font-semibold"
                              : "bg-zinc-950 text-zinc-400 border-zinc-900 hover:text-white hover:border-zinc-800"
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message Box */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                    Project Summary *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Briefly detail what you are looking to build..."
                    className="bg-zinc-950 border border-zinc-900 rounded-lg py-3.5 px-4 font-sans text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-700 transition-colors resize-none"
                  />
                </div>

                {/* Inline alerts */}
                {status === "SUCCESS" && (
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-emerald-950/20 border border-emerald-900 text-emerald-400 font-sans text-xs">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <div>
                      <span className="block font-mono text-[9px] uppercase tracking-wider mb-1 font-bold">
                        TRANSMISSION LOGGED
                      </span>
                      Your query has been logged securely. Jubaer will contact you shortly.
                    </div>
                  </div>
                )}

                {status === "ERROR" && (
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-rose-950/20 border border-rose-900 text-rose-400 font-sans text-xs">
                    <AlertTriangle className="w-5 h-5 shrink-0" />
                    <div>
                      <span className="block font-mono text-[9px] uppercase tracking-wider mb-1 font-bold">
                        TRANSMISSION REJECTED
                      </span>
                      {errorMessage}
                    </div>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "LOADING"}
                  className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-mono text-xs font-bold uppercase hover:bg-zinc-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_24px_rgba(255,255,255,0.06)]"
                >
                  {status === "LOADING" ? (
                    <>
                      <span>Logging...</span>
                      <Send className="w-3.5 h-3.5 animate-pulse" />
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
