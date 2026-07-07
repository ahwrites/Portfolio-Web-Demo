import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen, Calendar, Share2, CornerDownRight } from "lucide-react";
import { blogPostsData } from "@/data/portfolioData";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/sections/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const postIndex = blogPostsData.findIndex((p) => p.slug === slug);
  const post = blogPostsData[postIndex];

  if (!post) {
    return (
      <main className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center p-6 text-center">
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2">[404_ARTICLE_NOT_FOUND]</span>
        <h1 className="font-display font-bold text-4xl mb-6">ARTICLE INDEX NOT REGISTERED</h1>
        <Link href="/blog" className="px-6 py-3 rounded-full bg-white text-black font-mono text-xs font-bold uppercase hover:bg-zinc-200 transition-all">
          Return to Insights
        </Link>
      </main>
    );
  }

  // Next and prev posts
  const prevPost = blogPostsData[postIndex - 1] || blogPostsData[blogPostsData.length - 1];
  const nextPost = blogPostsData[postIndex + 1] || blogPostsData[0];

  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-white">
      <Navigation activeSection="blog" />

      {/* Hero Header Cover */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] bg-zinc-950 border-b border-zinc-900 mt-16">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          referrerPolicy="no-referrer"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/40" />

        <div className="absolute bottom-10 left-0 w-full z-10">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase text-zinc-400 hover:text-white transition-colors group mb-6 bg-zinc-950/80 p-2.5 rounded-md border border-zinc-900"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              Return to Insights
            </Link>

            <div className="flex items-center gap-3 font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-2">
              <span>{post.date}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-3 h-3 text-zinc-600" />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight max-w-[32ch]">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Editorial Content Grid */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main article columns */}
          <article className="lg:col-span-8 prose prose-invert max-w-none">
            {/* Custom styled markdown parsing for simple headings/code blocks */}
            <div className="space-y-6 font-sans text-sm sm:text-base text-zinc-300 leading-relaxed">
              {post.content.split("\n\n").map((block, idx) => {
                // Render headers
                if (block.startsWith("### ")) {
                  return (
                    <h3 key={idx} className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight pt-6 pb-2 border-b border-zinc-900 flex items-center gap-2">
                      <CornerDownRight className="w-4 h-4 text-zinc-500" />
                      {block.replace("### ", "")}
                    </h3>
                  );
                }
                
                // Render lists
                if (block.startsWith("* ")) {
                  return (
                    <ul key={idx} className="space-y-3 pl-4 border-l border-zinc-900 pt-2 pb-2">
                      {block.split("\n").map((li, liIdx) => (
                        <li key={liIdx} className="flex gap-2 items-start text-xs sm:text-sm text-zinc-400">
                          <span className="text-white mt-1 shrink-0 select-none">·</span>
                          <span>{li.replace("* ", "")}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }

                // Render lists with index numbers
                if (block.startsWith("1. ")) {
                  return (
                    <ol key={idx} className="space-y-3 pl-4 border-l border-zinc-900 pt-2 pb-2">
                      {block.split("\n").map((li, liIdx) => (
                        <li key={liIdx} className="flex gap-3 items-start text-xs sm:text-sm text-zinc-400">
                          <span className="font-mono text-zinc-600 mt-0.5 shrink-0 select-none">[0{liIdx + 1}]</span>
                          <span>{li.substring(3)}</span>
                        </li>
                      ))}
                    </ol>
                  );
                }

                // Render code blocks
                if (block.startsWith("```")) {
                  const codeLines = block.split("\n").filter(l => !l.startsWith("```"));
                  return (
                    <pre key={idx} className="p-6 rounded-lg bg-zinc-950 border border-zinc-900 font-mono text-xs text-zinc-400 overflow-x-auto leading-relaxed max-w-full">
                      <code>{codeLines.join("\n")}</code>
                    </pre>
                  );
                }

                // Default Paragraphs
                return (
                  <p key={idx} className="text-zinc-300 leading-relaxed font-sans text-sm sm:text-base">
                    {block}
                  </p>
                );
              })}
            </div>
          </article>

          {/* Sidebar / Sharing section */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
            
            {/* Writer details */}
            <div className="p-6 rounded-xl border border-zinc-900 bg-zinc-950/20">
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block mb-4 border-b border-zinc-900 pb-2">
                [AUTHOR_METADATA]
              </span>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold font-display text-sm">
                  AJ
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
                    AH JUBAER
                  </h4>
                  <span className="block font-mono text-[9px] text-zinc-500 uppercase">
                    AI Builder & Full-Stack dev
                  </span>
                </div>
              </div>
            </div>

            {/* Sharing link simulation */}
            <div className="p-6 rounded-xl border border-zinc-900 bg-zinc-950/20">
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block mb-4 border-b border-zinc-900 pb-2">
                [META_CHANNELS]
              </span>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-4">
                Share this written post to developers, product designers, or AI builders.
              </p>
              
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-zinc-900 border border-zinc-800 text-white font-mono text-[10px] uppercase font-bold tracking-wider hover:bg-zinc-850 hover:border-zinc-700 transition-colors">
                <Share2 className="w-3.5 h-3.5 text-zinc-400" />
                Copy Article Reference
              </button>
            </div>

          </div>

        </div>

        {/* Next/Prev Posts navigation */}
        <div className="border-t border-zinc-900 pt-16 mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
          
          <Link
            href={`/blog/${prevPost.slug}`}
            className="p-6 rounded-xl border border-zinc-900 bg-zinc-950/10 hover:bg-zinc-950/40 hover:border-zinc-800 transition-all flex flex-col items-start group"
          >
            <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest mb-1">
              [PREVIOUS_ARTICLE]
            </span>
            <span className="font-display font-bold text-base text-white group-hover:text-zinc-300 transition-colors">
              {prevPost.title}
            </span>
          </Link>

          <Link
            href={`/blog/${nextPost.slug}`}
            className="p-6 rounded-xl border border-zinc-900 bg-zinc-950/10 hover:bg-zinc-950/40 hover:border-zinc-800 transition-all flex flex-col items-end group"
          >
            <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest mb-1">
              [NEXT_ARTICLE]
            </span>
            <span className="font-display font-bold text-base text-white group-hover:text-zinc-300 transition-colors text-right">
              {nextPost.title}
            </span>
          </Link>

        </div>

      </div>

      <Footer />
    </main>
  );
}
