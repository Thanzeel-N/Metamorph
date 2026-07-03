import Link from "next/link";
import { notFound } from "next/navigation";
import { works } from "@/lib/data";
import { IconArrowRight, IconCalendar, IconUser, IconFolder, IconTools } from "@tabler/icons-react";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = works.find((w) => w.slug === slug);
  if (!project) {
    return {
      title: "Project Not Found | Metamorph.live",
      description: "The requested project case study could not be found.",
    };
  }
  return {
    title: `${project.name} — Case Study | Metamorph.live`,
    description: (project.brief || project.challenge).substring(0, 155),
  };
}

export default async function WorkDetailPage({ params }) {
  const { slug } = await params;
  
  // Find project
  const project = works.find((p) => p.slug === slug);
  if (!project) {
    notFound();
  }

  const work = project;
  
  // Compute next project link dynamically using nextSlug
  const nextWork = works.find((w) => w.slug === work.nextSlug) || works[0];

  return (
    <div className="w-full bg-[#12130f] pt-0">
      {/* FULL-WIDTH HERO IMAGE */}
      <section className="relative h-[60vh] md:h-[80vh] w-full bg-slate-900 overflow-hidden">
        <img
          src={work.image}
          alt={work.name}
          loading="lazy"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12130f] via-transparent to-black/50" />
        
        {/* Overlay Content */}
        <div className="absolute bottom-0 left-0 w-full py-12 px-6">
          <div className="max-w-7xl mx-auto space-y-4">
            <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#ace539] text-[#12130f]">
              {work.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight">
              {work.name}
            </h1>
          </div>
        </div>
      </section>

      {/* DETAIL LAYOUT WITH SIDEBAR */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main content columns (Challenge, Approach, Outcome) */}
          <div className="lg:col-span-2 space-y-12">
            {/* Challenge */}
            <div className="space-y-4">
              <h2 className="font-display font-extrabold text-2xl text-white border-l-4 border-[#ace539] pl-4 uppercase tracking-wide">
                The Challenge
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
                {work.challenge}
              </p>
            </div>

            {/* Approach */}
            <div className="space-y-4">
              <h2 className="font-display font-extrabold text-2xl text-white border-l-4 border-[#ace539] pl-4 uppercase tracking-wide">
                Our Approach
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
                {work.approach}
              </p>
            </div>

            {/* Outcome */}
            <div className="space-y-4">
              <h2 className="font-display font-extrabold text-2xl text-white border-l-4 border-[#ace539] pl-4 uppercase tracking-wide">
                The Outcome
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
                {work.outcome}
              </p>
            </div>
          </div>

          {/* Project Meta Sidebar */}
          <div className="bg-[#21231d] border border-white/5 rounded-lg p-8 h-fit space-y-6">
            <h3 className="font-display font-bold text-lg text-white border-b border-white/10 pb-4">
              Project Meta
            </h3>
            
            <div className="space-y-4 font-sans text-sm">
              {/* Client */}
              <div className="flex items-start gap-3">
                <IconUser className="w-5 h-5 text-[#ace539] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-400 font-display">Client</span>
                  <span className="font-bold text-white">{work.client}</span>
                </div>
              </div>

              {/* Category */}
              <div className="flex items-start gap-3">
                <IconFolder className="w-5 h-5 text-[#ace539] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-400 font-display">Category</span>
                  <span className="font-bold text-white uppercase tracking-wide">{work.category}</span>
                </div>
              </div>

              {/* Year */}
              <div className="flex items-start gap-3">
                <IconCalendar className="w-5 h-5 text-[#ace539] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-400 font-display">Year</span>
                  <span className="font-bold text-white">{work.year}</span>
                </div>
              </div>

              {/* Services Used */}
              <div className="flex items-start gap-3">
                <IconTools className="w-5 h-5 text-[#ace539] shrink-0 mt-0.5" />
                <div className="w-full">
                  <span className="block text-xs uppercase tracking-wider text-slate-400 font-display mb-2">Services Used</span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {work.services.map((srv, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-[#12130f] border border-white/10 rounded-sm text-xs font-bold text-white">
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {work.url && (
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-6 py-3 px-4 bg-[#ace539] text-[#12130f] hover:bg-white hover:text-black transition-all duration-300 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 rounded-[4px] font-sans"
              >
                Visit Live Site <IconArrowRight className="w-4 h-4 -rotate-45" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      {work.gallery && work.gallery.length > 0 && (
        <section className="bg-[#21231d] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[#ace539] block mb-2">Deliverables</span>
              <h2 className="text-white text-3xl font-display font-extrabold tracking-tight">
                Project Gallery
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {work.gallery.map((img, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden shadow-sm aspect-4/3 bg-slate-800">
                  <img
                    src={img}
                    alt={`Deliverable ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-103"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* NEXT PROJECT FOOTER CTA */}
      <section className="bg-[#12130f] text-white py-20 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ace539] opacity-5 rounded-full filter blur-[80px]" />
        
        <div className="max-w-2xl mx-auto px-6 space-y-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ace539]">
            Up Next
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold">
            {nextWork.name}
          </h2>
          <p className="text-slate-400 text-xs md:text-sm max-w-sm mx-auto">
            Explore how we deployed brand visual strategy and tech layers for this client.
          </p>
          <div className="pt-4">
            <Link
              href={`/works/${nextWork.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#ace539] text-[#12130f] font-bold text-sm uppercase tracking-wider rounded-sm transition-all duration-300 border border-[#ace539] hover:bg-transparent hover:text-[#ace539]"
            >
              Next Project <IconArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
