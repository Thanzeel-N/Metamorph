export const metadata = {
  title: "Privacy Policy | Metamorph.live",
  description: "Metamorph.live Privacy Policy. For enquiries contact hello@metamorph.solutions.",
  alternates: {
    canonical: "https://metamorph.live/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="w-full bg-[#12130f] pt-32 pb-24 min-h-screen text-white">
      <div className="max-w-3xl mx-auto px-6 space-y-8">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight">Privacy Policy</h1>
        <p className="text-xs text-[#ace539] font-mono tracking-widest uppercase">Last Updated: June 30, 2026</p>
        <div className="border-t border-white/10 pt-8 text-slate-300 font-sans text-sm md:text-base leading-relaxed space-y-4">
          <p>
            This policy will be updated shortly. For privacy enquiries contact{" "}
            <a href="mailto:hello@metamorph.solutions" className="text-[#ace539] underline hover:text-white transition-colors">
              hello@metamorph.solutions
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
