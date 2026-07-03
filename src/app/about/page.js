import { teamMembers, milestones } from "@/lib/data";
import { 
  IconCircleCheck, 
  IconShield, 
  IconRocket, 
  IconBolt, 
  IconBrandLinkedin, 
  IconArrowRight 
} from "@tabler/icons-react";

export const metadata = {
  title: "About Us | Metamorph",
  description: "One integrated team of designers, strategists, and engineers.",
};

export default function AboutPage() {
  const valuePillars = [
    {
      icon: <IconShield className="w-6 h-6 text-white" />,
      title: "Absolute Integration",
      desc: "Our designers, marketers, and developers work synchronously on the same roadmap.",
    },
    {
      icon: <IconBolt className="w-6 h-6 text-white" />,
      title: "Velocity & Focus",
      desc: "We deliver high-fidelity drafts in 48 hours and launch complex systems in weeks.",
    },
    {
      icon: <IconRocket className="w-6 h-6 text-white" />,
      title: "Elite Craftsmanship",
      desc: "Every pixel and line of code is polished. We build software that performs.",
    },
  ];

  return (
    <div className="w-full bg-[#050505] min-h-screen text-white font-sans selection:bg-white/20 pb-32 pt-32">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col gap-6">
        
        {/* HERO BENTO */}
        <div className="w-full bg-[#111111] rounded-[2rem] md:rounded-[3rem] p-10 md:p-20 relative overflow-hidden flex flex-col justify-end min-h-[60vh] border border-white/5 shadow-2xl">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#ace539]/20 blur-[120px] rounded-full pointer-events-none transform translate-x-1/4 -translate-y-1/4"></div>
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-[#ace539]"></span>
              <span className="text-xs font-medium text-white/80 tracking-wide uppercase">About Metamorph</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-[1.1] text-white">
              A strike team of designers & engineers building digital flagship experiences.
            </h1>
          </div>
        </div>

        {/* VALUES BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Box 1 (Wide) */}
          <div className="md:col-span-2 bg-[#111111] rounded-[2rem] p-10 md:p-14 border border-white/5 flex flex-col justify-between min-h-[320px] relative overflow-hidden group hover:border-white/10 transition-colors duration-500">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-white/10 transition-colors duration-700"></div>
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 border border-white/5 group-hover:bg-[#ace539] group-hover:text-black transition-colors duration-500">
               {valuePillars[0].icon}
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-display font-medium text-white mb-3">{valuePillars[0].title}</h3>
              <p className="text-white/50 text-lg leading-relaxed max-w-md">{valuePillars[0].desc}</p>
            </div>
          </div>

          {/* Box 2 (Square) */}
          <div className="md:col-span-1 bg-[#111111] rounded-[2rem] p-10 md:p-14 border border-white/5 flex flex-col justify-between min-h-[320px] group hover:border-white/10 transition-colors duration-500">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 border border-white/5 group-hover:bg-[#ace539] group-hover:text-black transition-colors duration-500">
               {valuePillars[1].icon}
            </div>
            <div>
              <h3 className="text-2xl font-display font-medium text-white mb-3">{valuePillars[1].title}</h3>
              <p className="text-white/50 leading-relaxed text-base">{valuePillars[1].desc}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Box 3 (Square) */}
          <div className="md:col-span-1 bg-[#111111] rounded-[2rem] p-10 md:p-14 border border-white/5 flex flex-col justify-between min-h-[320px] group hover:border-white/10 transition-colors duration-500">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 border border-white/5 group-hover:bg-[#ace539] group-hover:text-black transition-colors duration-500">
               {valuePillars[2].icon}
            </div>
            <div>
              <h3 className="text-2xl font-display font-medium text-white mb-3">{valuePillars[2].title}</h3>
              <p className="text-white/50 leading-relaxed text-base">{valuePillars[2].desc}</p>
            </div>
          </div>

          {/* STATS BENTO (Accent Color) */}
          <div className="md:col-span-2 bg-[#ace539] rounded-[2rem] p-10 md:p-14 flex flex-col justify-between min-h-[320px] text-[#0a0a0a] relative overflow-hidden group">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/30 blur-[100px] rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2 group-hover:bg-white/40 transition-colors duration-700"></div>
             
             <div className="relative z-10 flex flex-col h-full justify-between">
                <p className="text-xl md:text-2xl font-medium max-w-md leading-snug">
                  We don't do handoffs. Every discipline sits in the same room, iterating in real-time.
                </p>
                <div className="flex justify-between items-end mt-12">
                  <h3 className="text-7xl md:text-9xl font-display font-bold tracking-tighter leading-none">100%</h3>
                  <p className="text-sm font-bold uppercase tracking-widest text-[#0a0a0a]/60 pb-2">In-house</p>
                </div>
             </div>
          </div>
        </div>

        {/* TEAM BENTO */}
        <div className="w-full bg-[#111111] rounded-[2rem] md:rounded-[3rem] p-10 md:p-16 border border-white/5 mt-6 relative overflow-hidden">
          {/* Subtle bg glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[#ace539]/5 blur-[120px] rounded-t-full pointer-events-none"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 relative z-10">
            <div>
              <span className="text-xs font-medium text-[#ace539] uppercase tracking-widest block mb-3">02 / The Core</span>
              <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-white">
                The Architects
              </h2>
            </div>
            <p className="text-white/50 max-w-sm text-base">
              The core team responsible for bringing high-end digital experiences to life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-black/40 rounded-3xl p-4 border border-white/5 hover:border-white/20 transition-colors duration-500 group flex flex-col">
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-[#ace539]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                  {member.image && (member.image.startsWith("linear-gradient") || member.image.startsWith("gradient")) ? (
                    <div 
                      style={{ backgroundImage: member.image }}
                      className="w-full h-full opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover filter grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="px-2 pb-2 flex justify-between items-end flex-grow">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1 group-hover:text-[#ace539] transition-colors">{member.name}</h3>
                    <p className="text-xs text-white/50 uppercase tracking-widest">{member.role}</p>
                  </div>
                  <a href="#" className="w-10 h-10 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:bg-[#ace539] group-hover:text-black group-hover:border-[#ace539] transition-all duration-300">
                    <IconArrowRight className="w-4 h-4 -rotate-45" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MILESTONES / TIMELINE BENTO */}
        <div className="w-full bg-[#111111] rounded-[2rem] md:rounded-[3rem] p-10 md:p-16 border border-white/5 mt-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ace539]/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="mb-12">
            <span className="text-xs font-medium text-[#ace539] uppercase tracking-widest block mb-3">03 / Journey</span>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-white">
              Our Milestones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0 pt-0 md:pt-8 border-l md:border-l-0 md:border-t border-white/10 group hover:border-[#ace539]/40 transition-colors duration-500">
                {/* Connector Dot */}
                <div className="absolute -left-[6px] md:left-0 top-0 md:-top-[6px] w-3 h-3 rounded-full bg-white/20 border-2 border-[#111111] group-hover:bg-[#ace539] group-hover:scale-125 transition-all duration-300" />
                
                <span className="block font-display font-bold text-3xl text-[#ace539] mb-4">{milestone.year}</span>
                <h4 className="font-display font-bold text-lg text-white mb-2 group-hover:text-[#ace539] transition-colors">{milestone.title}</h4>
                <p className="text-sm text-white/50 leading-relaxed max-w-xs">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
