"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { 
  IconMail, 
  IconPhone, 
  IconMapPin, 
  IconClock, 
  IconBrandLinkedin, 
  IconBrandInstagram, 
  IconBrandBehance,
  IconArrowRight,
  IconCircleCheck,
  IconAlertCircle
} from "@tabler/icons-react";

export default function ContactClient() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "branding",
    brief: "",
    budget: "$2.5k - $5k",
  });
  
  const [formState, setFormState] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'

  useEffect(() => {
    if (serviceParam) {
      const validServices = ["branding", "marketing", "media", "it", "full-package"];
      if (validServices.includes(serviceParam)) {
        setFormData(prev => ({ ...prev, service: serviceParam }));
      }
    }
  }, [serviceParam]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch (err) {
      setFormState("error");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "branding",
      brief: "",
      budget: "$2.5k - $5k",
    });
    setFormState("idle");
  };

  const budgetRanges = [
    { label: "< $2.5k", value: "< $2.5k" },
    { label: "$2.5k - $5k", value: "$2.5k - $5k" },
    { label: "$5k - $10k", value: "$5k - $10k" },
    { label: "$10k+", value: "$10k+" },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col pt-20 md:pt-24">
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2">
        
        {/* LEFT PANEL: CONTACT FORM (Deep Dark BG, White Text) */}
        <div className="bg-[#12130f] text-white p-8 md:p-16 lg:p-24 flex flex-col justify-center relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#ace539] opacity-[0.03] rounded-full filter blur-[80px]" />
          
          <div className="max-w-xl mx-auto w-full space-y-8 relative z-10">
            <div className="space-y-3">
              <span className="font-display font-bold text-xs uppercase tracking-[0.25em] text-[#ace539]">
                Initiate Project
              </span>
              <h1 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
                Let's Build Together
              </h1>
              <p className="text-slate-300 text-sm">
                Describe your requirements and we will design your full digital stack.
              </p>
            </div>

            {formState === "success" ? (
              <div className="bg-white/5 border border-[#ace539]/30 rounded-lg p-8 text-center space-y-6 animate-fade-in">
                <IconCircleCheck className="w-16 h-16 text-[#ace539] mx-auto" />
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl text-[#ace539]">Brief Received!</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Thanks! We'll be in touch within 24 hours. Our business solutions architects are reviewing your details.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#ace539] text-[#12130f] font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 hover:bg-white cursor-pointer"
                >
                  Submit Another Brief
                </button>
              </div>
            ) : formState === "error" ? (
              <div className="bg-white/5 border border-red-500/30 rounded-lg p-8 text-center space-y-6 animate-fade-in">
                <IconAlertCircle className="w-16 h-16 text-red-500 mx-auto" />
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl text-red-500">Submission Failed</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Something went wrong. Please email us directly.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-red-500 text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 hover:bg-white hover:text-red-500 cursor-pointer"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-sans text-sm">
                
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider text-slate-400 font-bold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    disabled={formState === "loading"}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#ace539] transition-colors disabled:opacity-50"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email & Phone (Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs uppercase tracking-wider text-slate-400 font-bold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      disabled={formState === "loading"}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#ace539] transition-colors disabled:opacity-50"
                      placeholder="name@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-slate-400 font-bold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      disabled={formState === "loading"}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#ace539] transition-colors disabled:opacity-50"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div className="space-y-2">
                  <label htmlFor="service" className="block text-xs uppercase tracking-wider text-slate-400 font-bold">
                    Primary Service Interest
                  </label>
                  <select
                    id="service"
                    disabled={formState === "loading"}
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#12130f] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#ace539] transition-colors appearance-none cursor-pointer disabled:opacity-50"
                  >
                    <option value="branding">Branding & Visual Identity</option>
                    <option value="marketing">Digital Marketing Strategy</option>
                    <option value="media">Media & Reels Production</option>
                    <option value="it">IT & Next.js Platforms</option>
                    <option value="full-package">Full Suite Integration (All 4)</option>
                  </select>
                </div>

                {/* Project Brief */}
                <div className="space-y-2">
                  <label htmlFor="brief" className="block text-xs uppercase tracking-wider text-slate-400 font-bold">
                    Project Brief & Goals *
                  </label>
                  <textarea
                    id="brief"
                    required
                    rows="4"
                    disabled={formState === "loading"}
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#ace539] transition-colors resize-none disabled:opacity-50"
                    placeholder="Tell us about your project deliverables, timeline, or tech specifications..."
                  />
                </div>

                {/* Budget Range (Radios styled as buttons) */}
                <div className="space-y-2">
                  <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold">
                    Estimated Budget Range
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {budgetRanges.map((range) => {
                      const isSelected = formData.budget === range.value;
                      return (
                        <button
                          key={range.value}
                          type="button"
                          disabled={formState === "loading"}
                          onClick={() => setFormData({ ...formData, budget: range.value })}
                          className={`py-3 rounded-sm font-bold text-xs transition-all duration-300 border text-center cursor-pointer disabled:opacity-50 ${
                            isSelected
                              ? "bg-[#ace539] text-[#12130f] border-[#ace539]"
                              : "bg-transparent text-white border-white/10 hover:border-white"
                          }`}
                        >
                          {range.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="w-full py-4 bg-[#ace539] text-[#12130f] font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 hover:bg-white flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    {formState === "loading" ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        Submit Project Brief <IconArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* RIGHT PANEL: INFO & MAP (Medium Olive-Charcoal BG, White Text) */}
        <div className="bg-[#21231d] text-white p-8 md:p-16 lg:p-24 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/5">
          <div className="max-w-xl mx-auto w-full space-y-12">
            
            {/* Address Details card */}
            <div className="space-y-6">
              <h2 className="font-display font-extrabold text-xl uppercase tracking-wider text-[#ace539]">
                Contact Info
              </h2>
              
              <ul className="space-y-6 text-sm font-sans">
                {/* Email */}
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-[#12130f] border border-white/10 rounded-sm">
                    <IconMail className="w-5 h-5 text-[#ace539]" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate-400 font-display">Email Us</span>
                    <a href="mailto:Hello@metamorph.live" className="font-bold hover:text-[#ace539] transition-colors">
                      Hello@metamorph.live
                    </a>
                  </div>
                </li>

                {/* Phone */}
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-[#12130f] border border-white/10 rounded-sm">
                    <IconPhone className="w-5 h-5 text-[#ace539]" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate-400 font-display">Call Us</span>
                    <a href="tel:+919605109910" className="font-bold block text-slate-300 hover:text-[#ace539] transition-colors">
                      +91 96051 09910
                    </a>
                  </div>
                </li>

                {/* Location */}
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-[#12130f] border border-white/10 rounded-sm">
                    <IconMapPin className="w-5 h-5 text-[#ace539]" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate-400 font-display">Visit Us</span>
                    <span className="font-bold block text-slate-300">
                      Majestic Tower, Vengara<br/>Malappuram, Kerala
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Embedded Google Maps Widget iframe (Bug 16) */}
            <div className="w-full h-[220px] rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.87!2d76.0096!3d11.1295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6454eb80c1a75%3A0x2f0adf5f8b64abd!2sVengara%2C%20Kerala!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Metamorph location map"
              />
            </div>

            {/* Note & Socials */}
            <div className="space-y-4 pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-sans text-slate-400">
              <div className="flex items-center gap-2">
                <IconClock className="w-4 h-4 text-[#ace539]" />
                <span>We usually reply within 24 hours.</span>
              </div>
              <div className="flex gap-4">
                <a href="https://linkedin.com/company/metamorphlive" target="_blank" rel="noopener noreferrer" className="hover:text-[#ace539] transition-colors"><IconBrandLinkedin className="w-4 h-4" /></a>
                <a href="https://instagram.com/metamorphlive" target="_blank" rel="noopener noreferrer" className="hover:text-[#ace539] transition-colors"><IconBrandInstagram className="w-4 h-4" /></a>
                <a href="https://behance.net/metamorphlive" target="_blank" rel="noopener noreferrer" className="hover:text-[#ace539] transition-colors"><IconBrandBehance className="w-4 h-4" /></a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
