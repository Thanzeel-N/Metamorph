import Link from "next/link";
import { IconArrowRight, IconPhoto } from "@tabler/icons-react";

export const metadata = {
  title: "Poster & Asset Archive | Metamorph.live",
  description: "Explore our archive of premium visual designs, promotional campaigns, and brand poster assets.",
};

const ARCHIVE_POSTERS = [
  {
    title: "Abstract Geometry",
    category: "Branding",
    img: "/images/posters/poster1.jpeg",
    ratio: "aspect-[3/4]"
  },
  {
    title: "Liquid Fluidity",
    category: "Art Direction",
    img: "/images/posters/poster2.jpg",
    ratio: "aspect-[3/4]"
  },
  {
    title: "Neo-Brutalist Layout",
    category: "Poster Design",
    img: "/images/posters/poster3.jpg",
    ratio: "aspect-[3/4]"
  },
  {
    title: "Futuristic Cyberpunk",
    category: "VFX & Motion",
    img: "/images/posters/poster4.jpg",
    ratio: "aspect-[3/4]"
  },
  {
    title: "Gradient Flow",
    category: "Creative Asset",
    img: "/images/posters/poster5.jpg",
    ratio: "aspect-[3/4]"
  },
  {
    title: "Brutalist Grid",
    category: "Typography",
    img: "/images/posters/poster6.jpg",
    ratio: "aspect-[3/4]"
  },
  {
    title: "Retro Wave",
    category: "Art Direction",
    img: "/images/posters/poster7.jpg",
    ratio: "aspect-[3/4]"
  },
  {
    title: "Dark Minimalist",
    category: "Poster Design",
    img: "/images/posters/poster8.jpg",
    ratio: "aspect-[3/4]"
  },
  {
    title: "Organic Curves",
    category: "Branding",
    img: "/images/posters/poster9.jpg",
    ratio: "aspect-[3/4]"
  },
  {
    title: "Vivid Noise",
    category: "Creative Asset",
    img: "/images/posters/poster10.jpg",
    ratio: "aspect-[3/4]"
  },
  {
    title: "Experimental Layout",
    category: "Art Direction",
    img: "/images/posters/poster2 (12).jpg",
    ratio: "aspect-[3/4]"
  },
  {
    title: "Editorial Design",
    category: "Typography",
    img: "/images/posters/poster2 (13).jpg",
    ratio: "aspect-[3/4]"
  },
  {
    title: "Cybernetic Interface",
    category: "VFX & Motion",
    img: "/images/posters/poster2 (14).jpg",
    ratio: "aspect-[3/4]"
  },
  {
    title: "Visual System Matrix",
    category: "Branding",
    img: "/images/posters/poster2 (15).jpg",
    ratio: "aspect-[3/4]"
  },
  {
    title: "Abstract Formulations",
    category: "Creative Asset",
    img: "/images/posters/poster2 (16).jpg",
    ratio: "aspect-[3/4]"
  },
  {
    title: "Kinetic Motion Layout",
    category: "VFX & Motion",
    img: "/images/posters/poster2 (17).jpg",
    ratio: "aspect-[3/4]"
  },
  {
    title: "Brutalist Collage",
    category: "Poster Design",
    img: "/images/posters/poster2 (18).jpg",
    ratio: "aspect-[3/4]"
  }
];

export default function ArchivePage() {
  return (
    <div className="w-full bg-[#050505] min-h-screen text-white font-sans selection:bg-white/20 pb-32 pt-32">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col gap-6">
        
        {/* HERO BENTO */}
        <div className="w-full bg-[#111111] rounded-[2rem] md:rounded-[3rem] p-10 md:p-20 relative overflow-hidden flex flex-col justify-end min-h-[45vh] border border-white/5 shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#ace539]/20 blur-[120px] rounded-full pointer-events-none transform translate-x-1/4 -translate-y-1/4"></div>
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <IconPhoto className="w-4 h-4 text-[#ace539]" />
              <span className="text-xs font-medium text-white/80 tracking-wide uppercase font-mono">Visual Vault</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-[1.1] text-white">
              Poster & Asset Archive.
            </h1>
            <p className="text-white/50 text-base md:text-lg max-w-xl mt-6 leading-relaxed">
              A curated catalog of promotional posters, graphic deliverables, and custom motion frames crafted for our global clients.
            </p>
          </div>
        </div>

        {/* POSTERS ARCHIVE GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
          {ARCHIVE_POSTERS.map((poster, idx) => (
            <div 
              key={idx}
              className="bg-[#111111] border border-white/5 rounded-3xl p-3 hover:border-white/15 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Image box */}
              <div className="w-full aspect-[3/4] bg-black rounded-2xl overflow-hidden relative">
                <img 
                  src={poster.img} 
                  alt={poster.title}
                  className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-103 group-hover:brightness-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#ace539]/15 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER CALL TO ACTION */}
        <div className="w-full bg-[#ace539] rounded-[2rem] md:rounded-[3rem] p-10 md:p-16 border border-[#ace539] mt-6 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8 group text-black">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-4">
              Need premium branding assets?
            </h2>
            <p className="text-black/70 max-w-lg">
              We design comprehensive visual systems, social media assets, posters, and print campaigns that resonate with your target audience.
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
