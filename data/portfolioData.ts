export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: "AI" | "SaaS" | "Web App" | "Landing" | "Branding";
  isFeatured: boolean;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
  role: string;
  timeline: string;
  client: string;
  metrics: {
    label: string;
    value: string;
  }[];
  problem: string;
  approach: string;
  outcome: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  dates: string;
  impact: string;
  details: string[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    proofPoint: string;
  }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const projectsData: Project[] = [
  {
    slug: "synapse-ai",
    title: "Synapse AI",
    subtitle: "Enterprise developer intelligence & predictive DevOps platform powered by Gemini.",
    category: "AI",
    isFeatured: true,
    image: "https://picsum.photos/seed/synapse/1200/800",
    githubUrl: "https://github.com/ahjubaer/synapse-ai",
    liveUrl: "https://synapse.ahjubaer.com",
    tags: ["Next.js", "FastAPI", "Gemini API", "Tailwind CSS", "D3.js"],
    role: "Lead AI Engineer & Co-Founder",
    timeline: "6 Months (2025)",
    client: "Zenith Labs",
    metrics: [
      { label: "Prediction Accuracy", value: "98.4%" },
      { label: "Deployment Cost reduction", value: "42%" },
      { label: "Active Enterprise Devs", value: "12k+" }
    ],
    problem: "Modern microservice deployments are highly complex and prone to unpredictable failures. Developers spend hours debugging logs and tracking telemetry anomalies without clear context, leading to increased mean-time-to-resolution (MTTR) and high infrastructure costs.",
    approach: "We designed a full-stack real-time intelligence hub. By implementing server-side RAG pipelines with Gemini models, we ingested real-time telemetry and log streams, translating raw JSON anomalies into actionable conversational insights. The UI was built around a highly structured, dense dark theme with bespoke interactive metric visualizers using D3.js and Recharts.",
    outcome: "Successfully launched the platform in mid-2025, scaling to 12,000 active developers within the first three months. Microservice incident resolution times dropped by an average of 42%, while the automatic prompt optimization engine controlled LLM consumption overhead gracefully."
  },
  {
    slug: "vortex-analytics",
    title: "Vortex Analytics",
    subtitle: "Real-time edge event processor handling 10M+ daily events with sub-millisecond lag.",
    category: "SaaS",
    isFeatured: true,
    image: "https://picsum.photos/seed/vortex/1200/800",
    githubUrl: "https://github.com/ahjubaer/vortex-analytics",
    liveUrl: "https://vortex.ahjubaer.com",
    tags: ["React", "Go", "WebSockets", "Redis", "Framer Motion"],
    role: "Full-Stack Developer",
    timeline: "4 Months (2024)",
    client: "Vortex Corp",
    metrics: [
      { label: "Daily Events Processed", value: "10M+" },
      { label: "Data Pipeline Latency", value: "<15ms" },
      { label: "User Retention", value: "+28%" }
    ],
    problem: "Existing analytics suites either lagged by minutes or burdened client applications with resource-heavy monitoring libraries. Startups needed an ultra-lightweight, sub-millisecond edge analytics system that visualized user retention and funnel drop-offs live.",
    approach: "Engineered a high-performance Go backend with WebSocket persistence to stream compressed event packets directly to a Redis in-memory broker. On the frontend, we built a canvas-based rendering pipeline with virtualized lists, guaranteeing smooth 120 FPS interface redraws even under extreme data influx.",
    outcome: "Shipped the platform to production, reducing monitoring resource overhead by 80% on client apps. Startups reported immediate retention improvements due to real-time funnel visibility, confirming Vortex's edge over legacy non-live suites."
  },
  {
    slug: "aurora-design-system",
    title: "Aurora Design",
    subtitle: "An open-source monochrome React primitive library focusing on accessibility and micro-motion.",
    category: "Web App",
    isFeatured: true,
    image: "https://picsum.photos/seed/aurora/1200/800",
    githubUrl: "https://github.com/ahjubaer/aurora-design",
    liveUrl: "https://aurora.ahjubaer.com",
    tags: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
    role: "UI/UX & Core Maintainer",
    timeline: "Continuous (2024 - Present)",
    client: "Open Source Initiative",
    metrics: [
      { label: "GitHub Stars", value: "15.4k+" },
      { label: "Monthly NPM Downloads", value: "85k" },
      { label: "WCAG Compliance", value: "100% AA" }
    ],
    problem: "Most design libraries prioritize visual density or animation flashiness, completely ignoring screen-readers, layout shift, or device-specific performance limits. Designers are often forced to choose between interactive modern layouts and strict WCAG accessibility compliance.",
    approach: "Constructed an uncompromising headless foundation utilizing Radix Primitives, wrapped in a strict, high-contrast monochrome design token system. We engineered every component from scrollbars to nested dialogs with fully native keyboard navigation, screen-reader landmarks, and adaptive layout-shift prevention.",
    outcome: "Aurora grew to become one of the top trending open-source design systems of late 2024, utilized by companies like Linear and Vercel for specialized internal microsites. It maintains a perfect 100/100 accessibility rating across all responsive viewport scales."
  },
  {
    slug: "pulse-crm",
    title: "Pulse CRM",
    subtitle: "Automated workflow and client tracking system for mid-market agencies.",
    category: "SaaS",
    isFeatured: false,
    image: "https://picsum.photos/seed/pulse/1200/800",
    githubUrl: "https://github.com/ahjubaer/pulse-crm",
    liveUrl: "https://pulse.ahjubaer.com",
    tags: ["Next.js", "Supabase", "Stripe API", "Zustand"],
    role: "Lead Full-Stack Developer",
    timeline: "3 Months (2024)",
    client: "Pulse Media Agency",
    metrics: [
      { label: "Agency MRR Growth", value: "+$50k" },
      { label: "Lead Capture Rate", value: "3.2x" },
      { label: "Onboarding Time", value: "-60%" }
    ],
    problem: "Agencies struggle to consolidate scattered client conversations, invoicing, and task timelines, resulting in fragmented context, late deliverables, and lost potential revenue.",
    approach: "Created a unified CRM cockpit featuring custom Kanban boards, interactive contract signing pipelines, and automated Stripe billing triggers. Implemented dynamic offline caching via Zustand to keep the workspace operational in poor-network conditions.",
    outcome: "Integrated seamlessly into Pulse Media, resulting in a documented $50,000 monthly recurring revenue growth due to streamlined lead follow-ups and faster contract closes."
  },
  {
    slug: "nova-docs",
    title: "Nova Docs",
    subtitle: "AI-native real-time collaborative documentation editor.",
    category: "Web App",
    isFeatured: false,
    image: "https://picsum.photos/seed/nova/1200/800",
    githubUrl: "https://github.com/ahjubaer/nova-docs",
    liveUrl: "https://nova.ahjubaer.com",
    tags: ["Next.js", "Socket.io", "Gemini API", "ProseMirror"],
    role: "Full-Stack & UX Engineer",
    timeline: "5 Months (2025)",
    client: "Nova Technologies",
    metrics: [
      { label: "Collaborative Delay", value: "<10ms" },
      { label: "AI Suggestions Accepted", value: "72%" },
      { label: "Documents Created", value: "45k+" }
    ],
    problem: "Collaborative writing is plagued by merge conflicts, rigid editing formats, and static comments that require human manual sorting.",
    approach: "Integrated Yjs conflict-free replicated data types (CRDTs) with ProseMirror on a custom Next.js server. We embedded server-side Gemini endpoints to dynamically summarize threads, draft document summaries, and suggest real-time structural edits.",
    outcome: "Launched for general availability in early 2025. Over 45,000 documents have been compiled, with users reporting 30% faster document generation times when utilizing the inline AI assist."
  },
  {
    slug: "quantum-cms",
    title: "Quantum CMS",
    subtitle: "High-performance Git-based content management engine for static-site generators.",
    category: "Landing",
    isFeatured: false,
    image: "https://picsum.photos/seed/quantum/1200/800",
    githubUrl: "https://github.com/ahjubaer/quantum-cms",
    liveUrl: "https://quantum.ahjubaer.com",
    tags: ["TypeScript", "GitHub API", "Tailwind CSS", "Next.js"],
    role: "Lead Architect",
    timeline: "2 Months (2024)",
    client: "Quantum Inc",
    metrics: [
      { label: "Static Rebuild Speed", value: "1.4s" },
      { label: "Client Satisfaction", value: "99%" },
      { label: "GitHub Commits Driven", value: "120k+" }
    ],
    problem: "Traditional headless CMS architectures impose huge operational costs, heavy API payload dependencies, and force content editors into confusing third-party dashboards.",
    approach: "Designed a Git-backed interface that translates drag-and-drop structural edits directly into clean JSON changes committed straight to a GitHub repository, leveraging Next.js Incremental Static Regeneration (ISR).",
    outcome: "Enabled marketing teams to deploy high-impact copy changes in under 2 seconds, completely bypassing standard engineering release pipelines."
  }
];

export const experienceData: Experience[] = [
  {
    id: "zenith",
    role: "Lead AI Engineer & Co-Founder",
    organization: "Zenith Labs",
    dates: "2024 - Present",
    impact: "Pioneered production-grade RAG pipelines, SaaS architectures, and autonomous agent systems scaling to 10k+ daily users.",
    details: [
      "Engineered server-side AI solutions using Gemini API, custom prompt routing, and structured output schemas.",
      "Designed clean, accessible interfaces with React, Next.js, Tailwind CSS, and Framer Motion.",
      "Mentored a cross-functional squad of 6 designers and developers, instilling strict code reviews and performance budgets."
    ]
  },
  {
    id: "pixelcraft",
    role: "Senior Full-Stack Developer",
    organization: "PixelCraft Studio",
    dates: "2022 - 2024",
    impact: "Architected modern web architectures and robust databases, optimizing site load speeds by over 40%.",
    details: [
      "Built multi-tenant enterprise platforms utilizing Next.js (App Router), PostgreSQL, and real-time WebSockets.",
      "Implemented beautiful, fluid, performance-focused user interactions adhering to strict Awwwards visual standards.",
      "Established fully automated CI/CD deployment pipelines on GCP and Vercel, decreasing team release cycles from days to hours."
    ]
  },
  {
    id: "freelance",
    role: "UI/UX Designer & Digital Strategist",
    organization: "Independent Consultant",
    dates: "2020 - 2022",
    impact: "Designed and engineered software prototypes, branding, and conversion funnels for series-A startups.",
    details: [
      "Created highly cohesive branding assets, typography systems, and interaction guidelines.",
      "Developed custom client-side web applications with rich storytelling components and micro-interactions.",
      "Consulted on technical product roadmaps, aligning engineering capabilities with high-priority business metrics."
    ]
  }
];

export const skillsCategories: SkillCategory[] = [
  {
    category: "AI & Data Science",
    skills: [
      { name: "Gemini API SDK", proofPoint: "Built 5 production autonomous agent frameworks" },
      { name: "RAG Architectures", proofPoint: "Designed vector-search indexing for 10M+ records" },
      { name: "Structured Outputs", proofPoint: "Engineered robust JSON schema validation via LLMs" },
      { name: "Prompt Engineering", proofPoint: "Reduced token overhead by 34% using optimized system prompts" }
    ]
  },
  {
    category: "Frontend Craft",
    skills: [
      { name: "React / Next.js", proofPoint: "Shipped 12+ production App Router architectures" },
      { name: "TypeScript (Strict)", proofPoint: "Zero 'any' codebase enforcement policy" },
      { name: "Tailwind CSS v4", proofPoint: "Crafted deep bespoke monochrome token libraries" },
      { name: "Framer Motion", proofPoint: "Optimized scroll-triggered choreography to 120 FPS" }
    ]
  },
  {
    category: "Backend & Systems",
    skills: [
      { name: "Node.js / Express", proofPoint: "Scaled REST APIs to sustain 1,500 requests/sec" },
      { name: "Go (Golang)", proofPoint: "Engineered ultra-low latency WebSocket stream routers" },
      { name: "PostgreSQL & Prisma", proofPoint: "Implemented composite indexes slashing query times" },
      { name: "Firebase / Firestore", proofPoint: "Wrote tight, emulator-tested, least-privilege security rules" }
    ]
  },
  {
    category: "Strategy & Design",
    skills: [
      { name: "UI/UX Product Design", proofPoint: "Awwwards & CSSDA nominee for interactive portfolio systems" },
      { name: "User Research & Flows", proofPoint: "Conducted 50+ user interviews to streamline B2B SaaS boarding" },
      { name: "Conversion Optimization", proofPoint: "Boosted product landing checkout click rates by 22%" }
    ]
  }
];

export const servicesData: Service[] = [
  {
    id: "01",
    title: "AI & Agentic Systems",
    description: "Design and implementation of custom LLM wrappers, autonomous agents, RAG pipelines, and server-side model routing.",
    features: ["Gemini API Integration", "Context Injection & Vector DBs", "Structured Model Output", "Autonomous Agent Systems"]
  },
  {
    id: "02",
    title: "Full-Stack Engineering",
    description: "Production-ready, highly modular architectures using React, Next.js, Node.js, and strict type safety across the entire stack.",
    features: ["Next.js App Router (SSR/ISR)", "Type-Safe APIs & Routers", "Real-Time WebSocket Streams", "Performance & SEO Optimizations"]
  },
  {
    id: "03",
    title: "UI/UX & Design Systems",
    description: "Uncompromisingly polished, accessible interfaces structured around cohesive typography, layouts, and purposeful micro-motions.",
    features: ["Interactive Figma Prototypes", "Bespoke Tailwind Theme Setup", "WCAG 2.1 AA Compliance", "Choreographed Transitions"]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    quote: "AH Jubaer sits at an elite junction of engineering and design. He didn't just build our AI interface—he defined the entire product's visual identity and scaled our API response speeds by 40%.",
    author: "Elena Rostova",
    role: "VP of Product",
    company: "Zenith Labs",
    avatar: "https://picsum.photos/seed/elena/100/100"
  },
  {
    id: "t2",
    quote: "Working with Jubaer was a masterclass in craft. Every animation is intentional, the code is meticulously commented, and our team was able to launch our Edge Analytics portal two weeks ahead of schedule.",
    author: "Marcus Vance",
    role: "Engineering Director",
    company: "Vortex Corp",
    avatar: "https://picsum.photos/seed/marcus/100/100"
  },
  {
    id: "t3",
    quote: "A rare breed of builder. He took full ownership of our SaaS dashboard design and converted it into a flawless, fast, and gorgeous Next.js application that blew our Series-A investors away.",
    author: "Sarah Jenkins",
    role: "CEO & Founder",
    company: "Nova Technologies",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  }
];

export const blogPostsData: BlogPost[] = [
  {
    slug: "designing-for-ai-native-era",
    title: "Designing for the AI-Native Era: Layouts that Think",
    excerpt: "How interfaces must adapt when the primary driver of interaction is no longer static buttons, but dynamic model-generated content.",
    category: "AI & Design",
    date: "May 12, 2026",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/designai/1200/800",
    content: `The static web is dying. For the past two decades, web design has revolved around a predictable feedback loop: a developer builds a button, a user clicks it, and a server fetches a static database record. 

In the AI-native era, this paradigm is shattered. Interactions are fluid, conversational, and non-deterministic. When a user queries an LLM, they aren't requesting a pre-rendered template—they are asking for a bespoke answer synthesized on the fly.

### The Challenge of Dynamic Interfaces

How do we design interfaces that can expand, contract, and re-arrange themselves gracefully based on model output? 

1. **Structured Outputs (JSON Schemas):** First, we must stop treating model outputs as raw strings of text. By utilizing standard schemas, we can coerce models like Gemini into returning structured JSON payloads. This allows the frontend to safely map properties (like lists, graphs, or actions) directly into beautifully styled React components rather than relying on brittle markdown parsing.
2. **Skeleton & Intentional Loading States:** An Awwwards-grade portfolio or platform should never look jarring. If a model takes 2 seconds to formulate a response, the layout must animate seamlessly into a skeleton container that mirrors the expected geometry of the final output.
3. **Typography as the Primary Anchor:** When everything else is dynamic, typography is your consistent anchor. By pairing high-contrast displays like *Clash Display* with rigid, readable system text like *General Sans*, we maintain cohesive branding regardless of what text the model generates.

\`\`\`typescript
// Example of enforcing structured layout generation
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const response = await ai.models.generateContent({
  model: "gemini-3.5-flash",
  contents: "Generate developer metrics...",
  config: {
    responseMimeType: "application/json",
    responseSchema: {
      type: "OBJECT",
      properties: {
        efficiency: { type: "NUMBER" },
        bottlenecks: { type: "ARRAY", items: { type: "STRING" } }
      }
    }
  }
});
\`\`\`

### Moving Beyond Chatboxes

The chatbox is a lazy design metaphor. The future of AI interfaces is **ambient and embedded**. A calendar should suggest reschedules in-line; a markdown editor should automatically suggest heading structure adjustments as you pause typing. By placing AI capabilities inside established user flows rather than a separate chat widget, we achieve a state of effortless digital collaboration.`
  },
  {
    slug: "death-of-hype-clean-engineering",
    title: "The Death of Hype: Why Clean Engineering Wins in 2026",
    excerpt: "Moving past marketing buzzwords to build products that deliver tangible metrics, bulletproof performance, and true client trust.",
    category: "Product Strategy",
    date: "April 18, 2026",
    readTime: "4 min read",
    image: "https://picsum.photos/seed/engineering/1200/800",
    content: `Startups are waking up. For years, the recipe for a venture-backed landing page was predictable: a massive glowing purple gradient, three references to "revolutionary synergization," and a heavy 3D blob that spun at 15 FPS on a standard laptop.

In 2026, the market has matured. Clients, investors, and users are fatigued by buzzwords. They don't want "synergy"—they want an API response latency under 50ms, a page that is immediately keyboard navigable, and an application that safely handles their private data without leaks.

### Principles of Falsifiable Craft

True digital luxury on the modern web is built on three strict principles:

* **No Performance Compromises:** An interface should be interactable within 1.5 seconds. Code splitting, asset optimization (using modern AVIF formats), and dynamic bundle loading are not optimizations you run before a release—they are daily boundaries that guide every single line of code you write.
* **Falsifiable Claims:** If your portfolio says you are an expert, back it up with metrics. Don't say "I build incredibly fast apps"—state "I optimized Vortex's edge pipelines to achieve sub-15ms data latency."
* **Systemic Accessibility:** If your site breaks when a user tabs through it via a keyboard, or if your contrast ratio fails WCAG 2.1 AA, your product is incomplete. Visual style must never be an excuse for poor engineering discipline.`
  },
  {
    slug: "building-performant-interactive-canvas-react",
    title: "Building Highly Performant Interactive Canvas in React",
    excerpt: "A deep technical dive into managing particle rendering, mouse tracking physics, and fluid interactions at 120 FPS.",
    category: "Frontend Craft",
    date: "March 29, 2026",
    readTime: "8 min read",
    image: "https://picsum.photos/seed/canvaspost/1200/800",
    content: `When building interactive hero sections, developers often default to heavy 3D frameworks like Three.js. While WebGL is extremely powerful, it comes with massive package overhead (often exceeding 500KB gzipped) and can easily stutter on mobile GPUs if shaders are poorly written.

For abstract animations—like particle systems, node maps, or interactive mesh backgrounds—a custom HTML5 Canvas element wrapped in a React lifecycle is a highly performant, lightweight alternative.

### The Golden Rules of Canvas in React

1. **Keep State Out of React:** The single biggest mistake is storing particle coordinates in React state. Doing so triggers React's reconciliation engine 60 to 120 times per second, dragging performance down to single digits. Instead, store your array of particles inside a mutable \`useRef\` or a local closure, and use a single \`requestAnimationFrame\` loop to handle all calculations and updates.
2. **Handle Device Pixel Ratio (DPR) Manually:** Standard canvas elements can look blurry on Retina displays. You must always scale the canvas dimensions by \`window.devicePixelRatio\` while keeping its CSS display size constant.
3. **Throttle Event Listeners:** Listening to continuous events like \`mousemove\` can swamp the CPU. Use damped interpolation (LERP) inside your loop rather than applying mouse coordinates directly to your particle calculations.

\`\`\`typescript
// The standard animation loop skeleton in React
import { useEffect, useRef } from "react";

export function useCanvasAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let animationFrameId: number;
    
    const render = () => {
      // 1. Clear previous frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 2. Perform physics calculations
      // 3. Draw updated elements
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return canvasRef;
}
\`\`\`

By bypassing React's virtual DOM completely during the animation cycle, we achieve pristine, high-framerate rendering that stays consistently light, allowing full-screen interactions to run seamlessly on older mobile devices.`
  }
];

export const faqsData: FAQ[] = [
  {
    id: "f1",
    question: "What is your typical product delivery timeframe?",
    answer: "For premium marketing pages or high-fidelity landing experiences, delivery ranges between 2 to 3 weeks. Full-stack AI platform MVPs or complex SaaS portals typically require 6 to 8 weeks, including thorough database schema designs, model routing pipelines, and automated end-to-end testing."
  },
  {
    id: "f2",
    question: "Which LLMs and AI SDKs do you recommend?",
    answer: "I specialize in the server-side Gemini API using the official @google/genai SDK. This allows us to harness advanced multimodal models (like gemini-3.5-flash) with structured output schema validation, RAG pipelines, and highly optimized prompt routing. For other custom use cases, I am experienced in adapting models to specific client data layers with Supabase Vector, Pinecone, or PostgreSQL."
  },
  {
    id: "f3",
    question: "Do you design interfaces in Figma before coding?",
    answer: "Absolutely. I am a hybrid product builder. Every project starts in Figma to establish grid density, typography rules (like Clash Display paired with General Sans), and custom monochrome token palettes. Having a locked, high-fidelity mock in Figma prevents layout confusion during the engineering stage."
  },
  {
    id: "f4",
    question: "How do you handle project payments and timelines?",
    answer: "I structure payments across clear, verifiable milestones (e.g., 25% kickoff, 25% locked Figma designs, 25% coded staging release, 25% production launch). All deliverables are tracked transparently in Notion, with daily code commits accessible via a private GitHub repo."
  }
];
