"use client";
import { useState } from "react";
import { clients, testimonials } from "@/lib/data";
import { IconStar, IconQuote, IconCircleCheck, IconUsers, IconCalendarTime } from "@tabler/icons-react";
import CountUp from "@/components/ui/CountUp";

export default function ClientsClient() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Partners" },
    { id: "startup", name: "Startups" },
    { id: "sme", name: "SMEs" },
    { id: "enterprise", name: "Enterprise" },
  ];

  const filteredClients = filter === "all"
    ? clients
    : clients.filter((c) => c.category.toLowerCase() === filter);

  // Success metrics
  const clientMetrics = [
    {
      icon: <IconCircleCheck className="w-8 h-8 text-[#ace539]" />,
      value: "98.4%",
      label: "Client Satisfaction",
    },
    {
      icon: <IconUsers className="w-8 h-8 text-[#ace539]" />,
      value: "84.2%",
      label: "Retention / Return Rate",
    },
    {
      icon: <IconCalendarTime className="w-8 h-8 text-[#ace539]" />,
      value: "100%",
      label: "On-Time Delivery",
    },
  ];

  return (
    <div className="w-full bg-[#050505] min-h-screen text-white font-sans selection:bg-white/20 pb-32 pt-32">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col gap-6">

        {/* HERO / METRICS BENTO */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 bg-[#111111] rounded-[2rem] md:rounded-[3rem] p-10 md:p-16 border border-white/5 flex flex-col justify-end relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#ace539]/20 blur-[120px] rounded-full pointer-events-none transform translate-x-1/4 -translate-y-1/4"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                <span className="w-2 h-2 rounded-full bg-[#ace539]"></span>
                <span className="text-xs font-medium text-white/80 tracking-wide uppercase">Relationships</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-white mb-6">
                Trusted by visionary brands.
              </h1>
              <p className="text-white/50 text-lg max-w-lg">
                From local startups to regional leaders, we build digital channels that drive real business growth.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 bg-[#ace539] rounded-[2rem] md:rounded-[3rem] p-10 md:p-16 border border-[#ace539] flex flex-col justify-center text-black relative overflow-hidden">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
             <div className="relative z-10 space-y-10">
               {clientMetrics.map((met, idx) => (
                 <div key={idx} className="flex flex-col gap-1">
                   <div className="flex items-center gap-2 text-black/50 mb-1">
                     {met.icon}
                     <span className="text-xs uppercase tracking-widest font-bold">{met.label}</span>
                   </div>
                   <span className="text-5xl font-display font-medium tracking-tighter">
                     <CountUp value={met.value} />
                   </span>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* LOGO WALL BENTO */}
        <div className="w-full bg-[#111111] rounded-[2rem] md:rounded-[3rem] p-10 md:p-14 border border-white/5 relative overflow-hidden mt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-12">
            <div>
              <span className="text-xs font-medium text-[#ace539] uppercase tracking-widest block mb-3">01 / Network</span>
              <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight text-white">
                Our Partners
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-2 md:max-w-md">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                    filter === cat.id
                      ? "bg-white text-black"
                      : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredClients.map((client, idx) => (
              <div
                key={idx}
                title={`${client.name} (${client.category})`}
                className="aspect-video bg-black/40 border border-white/5 rounded-2xl flex items-center justify-center p-4 group hover:bg-white/5 hover:border-[#ace539]/20 transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ace539] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain filter grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* TESTIMONIALS BENTO GRID */}
        <div className="w-full bg-[#111111] rounded-[2rem] md:rounded-[3rem] p-10 md:p-16 border border-white/5 relative overflow-hidden mt-6">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[#ace539]/5 blur-[120px] rounded-t-full pointer-events-none"></div>

          <div className="relative z-10 mb-16">
            <span className="text-xs font-medium text-[#ace539] uppercase tracking-widest block mb-3">02 / Validation</span>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-white">
              What Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className={`bg-black/40 border border-white/5 p-8 rounded-3xl flex flex-col justify-between hover:border-white/10 transition-colors duration-500 ${
                  test.featured ? "md:col-span-2 md:row-span-2 p-10 md:p-14" : ""
                }`}
              >
                <div>
                  <div className="flex gap-1 text-[#ace539] mb-8">
                    {Array(test.rating).fill().map((_, i) => (
                      <IconStar key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className={`${test.featured ? "text-2xl md:text-3xl" : "text-base"} font-medium text-white leading-relaxed mb-8`}>
                    "{test.quote}"
                  </blockquote>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center font-medium text-sm">
                    {test.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <cite className="not-italic block font-medium text-sm text-white">
                      {test.name}
                    </cite>
                    <span className="text-xs text-white/50 uppercase tracking-widest">
                      {test.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
