import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Github, Calendar, Briefcase, User, TrendingUp } from "lucide-react";
import { projectsData } from "@/data/portfolioData";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/sections/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[projectIndex];

  if (!project) {
    return (
      <main className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center p-6 text-center">
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2">[404_CASE_STUDY_NOT_FOUND]</span>
        <h1 className="font-display font-bold text-4xl mb-6">PROJECT ARCHIVE MISSING</h1>
        <Link href="/" className="px-6 py-3 rounded-full bg-white text-black font-mono text-xs font-bold uppercase hover:bg-zinc-200 transition-all">
          Return to Hub
        </Link>
      </main>
    );
  }

  // Determine next and prev projects for sequence navigation
  const prevProject = projectsData[projectIndex - 1] || projectsData[projectsData.length - 1];
  const nextProject = projectsData[projectIndex + 1] || projectsData[0];

  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-white">
      <Navigation activeSection="work" />

      {/* Hero Visual Banner Section */}
      <div className="relative w-full h-[50vh] sm:h-[65vh] bg-zinc-950 border-b border-zinc-900 mt-16">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          referrerPolicy="no-referrer"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/40" />

        <div className="absolute bottom-12 left-0 w-full z-10">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col items-start">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase text-zinc-400 hover:text-white transition-colors group mb-6 bg-zinc-950/80 p-2.5 rounded-md border border-zinc-900"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              Return to Chronology
            </Link>

            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em] block mb-2">
              CASE_STUDY // {project.category}
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-none">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Case Study Details Body */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
        
        {/* Metadata Row / Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-xl border border-zinc-900 bg-zinc-950/20 mb-20">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider flex items-center gap-1">
              <User className="w-3.5 h-3.5" /> Client
            </span>
            <span className="font-sans text-sm text-white font-medium">{project.client}</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider flex items-center gap-1">
              <Briefcase className="w-3.5 h-3.5" /> Role
            </span>
            <span className="font-sans text-sm text-white font-medium">{project.role}</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> Timeline
            </span>
            <span className="font-sans text-sm text-white font-medium">{project.timeline}</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" /> Core Metric
            </span>
            <span className="font-sans text-sm text-white font-medium">{project.metrics[0]?.value} {project.metrics[0]?.label}</span>
          </div>
        </div>

        {/* Narrative columns split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Main Story (Left 8 cols) */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Problem block */}
            <div>
              <h2 className="font-display font-bold text-2xl text-white tracking-tight mb-4 flex items-center gap-2">
                <span className="font-mono text-xs text-zinc-600">[01 // CHALLENGE]</span>
                THE PROBLEM
              </h2>
              <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Approach block */}
            <div>
              <h2 className="font-display font-bold text-2xl text-white tracking-tight mb-4 flex items-center gap-2">
                <span className="font-mono text-xs text-zinc-600">[02 // EXECUTION]</span>
                THE APPROACH
              </h2>
              <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
                {project.approach}
              </p>
            </div>

            {/* Outcome block */}
            <div>
              <h2 className="font-display font-bold text-2xl text-white tracking-tight mb-4 flex items-center gap-2">
                <span className="font-mono text-xs text-zinc-600">[03 // REALIZATION]</span>
                THE OUTCOME
              </h2>
              <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
                {project.outcome}
              </p>
            </div>

          </div>

          {/* Sidebar block (Right 4 cols) */}
          <div className="lg:col-span-4 space-y-10 lg:sticky lg:top-32">
            
            {/* Metrics Checklist */}
            <div className="p-6 rounded-xl border border-zinc-900 bg-zinc-950/20">
              <h3 className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block mb-4 border-b border-zinc-900 pb-2">
                [VERIFIABLE_METRICS]
              </h3>
              <div className="space-y-4">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="flex justify-between items-center py-2 border-b border-zinc-900/40">
                    <span className="font-sans text-xs text-zinc-400">{metric.label}</span>
                    <span className="font-mono text-sm font-bold text-white">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack List */}
            <div className="p-6 rounded-xl border border-zinc-900 bg-zinc-950/20">
              <h3 className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block mb-4 border-b border-zinc-900 pb-2">
                [BUILT_WITH]
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-850 font-mono text-[10px] text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Streams */}
            <div className="flex flex-col gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-mono text-xs font-bold uppercase hover:bg-zinc-200 transition-all"
                >
                  Launch Live Experience
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-zinc-800 bg-transparent text-white font-mono text-xs font-bold uppercase hover:bg-zinc-900/60 hover:border-zinc-700 transition-all"
                >
                  <Github className="w-4 h-4" />
                  View Repository
                </a>
              )}
            </div>

          </div>

        </div>

        {/* Next/Prev Project Navigation */}
        <div className="border-t border-zinc-900 pt-16 mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
          
          <Link
            href={`/work/${prevProject.slug}`}
            className="p-6 rounded-xl border border-zinc-900 bg-zinc-950/10 hover:bg-zinc-950/40 hover:border-zinc-800 transition-all flex flex-col items-start group"
          >
            <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest mb-1">
              [PREVIOUS_PROJECT]
            </span>
            <span className="font-display font-bold text-lg text-white group-hover:text-zinc-300 transition-colors">
              {prevProject.title}
            </span>
          </Link>

          <Link
            href={`/work/${nextProject.slug}`}
            className="p-6 rounded-xl border border-zinc-900 bg-zinc-950/10 hover:bg-zinc-950/40 hover:border-zinc-800 transition-all flex flex-col items-end group"
          >
            <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest mb-1">
              [NEXT_PROJECT]
            </span>
            <span className="font-display font-bold text-lg text-white group-hover:text-zinc-300 transition-colors text-right">
              {nextProject.title}
            </span>
          </Link>

        </div>

      </div>

      <Footer />
    </main>
  );
}
