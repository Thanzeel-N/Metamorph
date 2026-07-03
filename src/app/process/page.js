import Link from "next/link";
import { IconBolt, IconArrowRight, IconChecks } from "@tabler/icons-react";

export const metadata = {
  title: "Our Process | Metamorph.live",
  description: "Learn how we translate business challenges into branding systems, media assets, and high-performance software applications.",
};

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery & Audit",
    duration: "Week 1",
    deliverables: ["Tech Stack Audit", "Brand Equity Audit", "Competitor Matrix", "Growth Pipeline Outline"],
    description: "We begin by taking a deep look at your current systems. Our team audits your user behavior, marketing funnels, code quality, and brand positioning to map out exactly where the inefficiencies lie."
  },
  {
    num: "02",
    title: "Strategy & Architecture",
    duration: "Weeks 1 - 2",
    deliverables: ["Product Specification", "Visual Moodboards", "Content Strategy", "System Architecture Blueprint"],
    description: "Before writing any code or designing assets, we align on a clear technical specification and design roadmap. We define the user journeys, data pipelines, and visual language that will drive conversions."
  },
  {
    num: "03",
    title: "Design & Build",
    duration: "Weeks 2 - 6",
    deliverables: ["High-Fidelity UI Design", "Media Templates & Assets", "Next.js Web Applications", "API Integrations"],
    description: "Our design and engineering teams work in sync. We build custom Next.js frontends, design high-impact social media assets, and build reliable backend systems, keeping you updated via weekly staging builds."
  },
  {
    num: "04",
    title: "Launch & Iteration",
    duration: "Ongoing",
    deliverables: ["Production Deployment", "Analytics Dashboards", "SEO Optimization", "Performance Auditing"],
    description: "Deployment is just the starting line. We hook up detailed analytics dashboards to track key conversion metrics, continuously optimize page speed, and refine user acquisition channels for steady growth."
  }
];

export default function ProcessPage() {
  return (
    <div className="w-full bg-[#050505] min-h-screen text-white font-sans selection:bg-white/20 pb-32 pt-32">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col gap-6">
        
        {/* HERO BENTO */}
        <div className="w-full bg-[#111111] rounded-[2rem] md:rounded-[3rem] p-10 md:p-20 relative overflow-hidden flex flex-col justify-end min-h-[50vh] border border-white/5 shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#ace539]/20 blur-[120px] rounded-full pointer-events-none transform translate-x-1/4 -translate-y-1/4"></div>
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-[#ace539]"></span>
              <span className="text-xs font-medium text-white/80 tracking-wide uppercase font-mono">Our Method</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-[1.1] text-white">
              The execution framework.
            </h1>
            <p className="text-white/50 text-base md:text-lg max-w-xl mt-6 leading-relaxed">
              We bridge branding, media production, growth marketing, and software engineering into one unified delivery workflow.
            </p>
          </div>
        </div>

        {/* PROCESS TIMELINE / DETAIL CARDS */}
        <div className="grid grid-cols-1 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div 
              key={step.num}
              className="w-full bg-[#111111] rounded-[2rem] p-8 md:p-14 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors duration-500 flex flex-col lg:flex-row gap-10 lg:gap-16 justify-between"
            >
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#ace539]/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-[#ace539]/10 transition-colors duration-700"></div>

              {/* Number and Meta */}
              <div className="lg:w-1/4 flex flex-col justify-between z-10 relative">
                <div>
                  <span className="font-display font-black text-6xl md:text-8xl text-white/10 group-hover:text-[#ace539]/20 transition-colors block select-none">
                    {step.num}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#ace539] font-bold block mt-3">
                    {step.duration}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="lg:w-1/2 z-10 relative">
                <h3 className="text-2xl md:text-3.5xl font-display font-medium text-white mb-6">
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="lg:w-1/4 bg-black/40 border border-white/5 p-6 rounded-2xl z-10 relative h-fit">
                <div className="flex items-center gap-2 mb-4 text-[#ace539]">
                  <IconChecks className="w-5 h-5" />
                  <span className="text-[10px] uppercase tracking-widest font-bold font-mono">Deliverables</span>
                </div>
                <ul className="space-y-3">
                  {step.deliverables.map((item, i) => (
                    <li key={i} className="text-xs text-white/70 leading-snug flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ace539]/40 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CALL TO ACTION */}
        <div className="w-full bg-[#ace539] rounded-[2rem] md:rounded-[3rem] p-10 md:p-16 border border-[#ace539] mt-6 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8 group text-black">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-4">
              Ready to construct your pipeline?
            </h2>
            <p className="text-black/70 max-w-lg">
              Let's map out a bespoke roadmap and deliver high-fidelity digital solutions built to scale your business.
            </p>
          </div>
          
          <Link
            href="/contact"
            className="relative z-10 shrink-0 px-8 py-4 bg-black text-white rounded-full font-medium flex items-center gap-2 hover:bg-black/80 transition-colors duration-300 shadow-xl"
          >
            Start Project <IconArrowRight className="w-5 h-5 -rotate-45" />
          </Link>
        </div>

      </div>
    </div>
  );
}
