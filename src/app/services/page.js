import Link from "next/link";
import { services } from "@/lib/data";
import { IconCheck, IconArrowRight, IconBolt } from "@tabler/icons-react";

export const metadata = {
  title: "Metamorph.live",
  description: "Explore our full suite: brand identity, growth marketing, reels & media production, and Next.js web platforms.",
};

export default function ServicesPage() {
  return (
    <div className="w-full bg-[#050505] min-h-screen text-white font-sans selection:bg-white/20 pb-32 pt-32">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col gap-6">
        
        {/* HERO BENTO */}
        <div className="w-full bg-[#111111] rounded-[2rem] md:rounded-[3rem] p-10 md:p-20 relative overflow-hidden flex flex-col justify-end min-h-[50vh] border border-white/5 shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#ace539]/20 blur-[120px] rounded-full pointer-events-none transform translate-x-1/4 -translate-y-1/4"></div>
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-[#ace539]"></span>
              <span className="text-xs font-medium text-white/80 tracking-wide uppercase">Capabilities</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-[1.1] text-white">
              End-to-end digital pipelines.
            </h1>
          </div>
        </div>

        {/* SERVICES BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div 
              key={service.id} 
              className="bg-[#111111] rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 border border-white/5 flex flex-col relative overflow-hidden group hover:border-white/10 transition-colors duration-500"
            >
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-white/10 transition-colors duration-700"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-xs font-medium text-[#ace539] uppercase tracking-widest">{service.number} — {service.name}</span>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 text-white/50 group-hover:bg-[#ace539] group-hover:text-black transition-colors duration-500">
                    <IconBolt className="w-5 h-5" />
                  </div>
                </div>

                <div className="mb-10 flex-grow">
                  <h3 className="text-3xl md:text-4xl font-display font-medium text-white mb-4">{service.name}</h3>
                  <p className="text-white/50 text-base leading-relaxed">{service.description}</p>
                </div>

                <div className="space-y-3 mb-10">
                  <p className="text-xs uppercase tracking-widest text-white/30 font-medium">Included</p>
                  <ul className="space-y-3">
                    {service.included.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <IconCheck className="w-5 h-5 text-[#ace539] shrink-0" />
                        <span className="text-white/70 text-sm leading-tight">{item.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/contact?service=${service.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 w-fit"
                >
                  Start Project <IconArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA BENTO */}
        <div className="w-full bg-[#ace539] rounded-[2rem] md:rounded-[3rem] p-10 md:p-16 border border-[#ace539] mt-6 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8 group text-black">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-4">
              Need a Custom Scope?
            </h2>
            <p className="text-black/70 max-w-lg">
              We construct bespoke workflows based on your exact requirements. Let's talk about your project and build a tailored solution.
            </p>
          </div>
          
          <Link
            href="/contact"
            className="relative z-10 shrink-0 px-8 py-4 bg-black text-white rounded-full font-medium flex items-center gap-2 hover:bg-black/80 transition-colors duration-300"
          >
            Contact Us <IconArrowRight className="w-5 h-5 -rotate-45" />
          </Link>
        </div>

      </div>
    </div>
  );
}
