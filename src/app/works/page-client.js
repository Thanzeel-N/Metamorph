"use client";
import { useState } from "react";
import Link from "next/link";
import { works } from "@/lib/data";
import { IconArrowRight } from "@tabler/icons-react";

export default function WorksClient() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Works" },
    { id: "branding", name: "Branding" },
    { id: "marketing", name: "Marketing" },
    { id: "media", name: "Media" },
    { id: "it", name: "IT & Tech" },
  ];

  const filteredWorks = filter === "all" 
    ? works 
    : works.filter((w) => w.category === filter);

  return (
    <div className="w-full bg-[#050505] min-h-screen text-white font-sans selection:bg-white/20 pb-32 pt-32">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col gap-6">
        
        {/* HEADER / FILTER HEADER */}
        <div className="w-full bg-[#111111] rounded-[2rem] md:rounded-[3rem] p-10 md:p-14 border border-white/5 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ace539]"></span>
              <span className="text-xs font-medium text-white/80 tracking-wide uppercase">Portfolio</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-white">
              Selected Works
            </h1>
          </div>

          <div className="flex flex-wrap gap-2 md:max-w-md">
            {categories.map((cat) => {
              const isActive = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white text-black"
                      : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* WORKS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {filteredWorks.map((work) => (
            <div
              key={work.slug}
              className="group bg-[#111111] rounded-[2rem] p-4 md:p-6 border border-white/5 hover:border-white/10 transition-colors duration-500 relative overflow-hidden flex flex-col"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ace539]/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>

              {/* Image Container */}
              <div className="w-full aspect-[4/3] bg-black rounded-3xl overflow-hidden relative z-10 mb-6">
                <img
                  src={work.image}
                  alt={work.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Category Pill Floating */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                  <span className="text-[10px] uppercase tracking-widest text-white/90 font-medium">
                    {work.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="px-2 pb-2 flex flex-col flex-grow z-10 relative">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-2">{work.client}</p>
                <h3 className="font-display font-medium text-2xl text-white mb-3 group-hover:text-[#ace539] transition-colors">{work.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm line-clamp-2">
                  {work.challenge}
                </p>

                {/* Actions Row */}
                <div className="mt-auto flex flex-wrap items-center gap-3">
                  <Link
                    href={`/works/${work.slug}`}
                    className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
                  >
                    View Details
                  </Link>
                  {work.url ? (
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ace539] text-[#12130f] hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-1.5"
                    >
                      Visit Site <IconArrowRight className="w-3.5 h-3.5 -rotate-45" />
                    </a>
                  ) : (
                    <span className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 text-white/40 cursor-default">
                      Local Platform
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredWorks.length === 0 && (
          <div className="w-full bg-[#111111] rounded-[2rem] p-24 border border-white/5 text-center mt-6 flex flex-col items-center justify-center">
            <p className="text-white/50 text-lg mb-6">No projects found in this category.</p>
            <button 
              onClick={() => setFilter("all")} 
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white hover:text-black transition-all"
            >
              Clear Filter
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
