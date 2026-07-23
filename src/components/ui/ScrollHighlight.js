"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollHighlight() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const words = textRef.current.querySelectorAll(".highlight-word");
    if (!words.length) return;

    // Create a timeline that highlights each word sequentially
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=120%",
        pin: true,
        scrub: 0.7,
        anticipatePin: 1,
      },
    });

    words.forEach((word) => {
      const isBracketed = word.getAttribute("data-bracketed") === "true";
      tl.to(
        word,
        {
          color: isBracketed ? "#ace539" : "#ffffff",
          opacity: 1,
          duration: 0.15,
        },
        "-=0.03" // slightly overlap transitions for smoothness
      );
    });

    return () => {
      // Safely kill scroll trigger instances created here
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === containerRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  // Word list parsed from: "We handle [Branding] [Marketing] [Media] and [IT] so you don't have to split your team."
  const wordsData = [
    { text: "We", bracketed: false },
    { text: "handle", bracketed: false },
    { text: "[Branding],", bracketed: true, label: "Branding," },
    { text: "[Marketing],", bracketed: true, label: "Marketing," },
    { text: "[Media]", bracketed: true, label: "Media" },
    { text: "and", bracketed: false },
    { text: "[IT]", bracketed: true, label: "IT" },
    { text: "solution", bracketed: false },
    { text: "all", bracketed: false },
    { text: "under", bracketed: false },
    { text: "one", bracketed: false },
    { text: "roof.", bracketed: false },
  ];

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen bg-[#12130f] flex items-center justify-center px-6 md:px-12 py-24 relative overflow-hidden"
    >
      {/* Decorative Grid Background Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ace539] opacity-5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center z-10">
        <p
          ref={textRef}
          className="text-3xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.25] tracking-tight flex flex-wrap justify-center"
        >
          {wordsData.map((item, idx) => (
            <span
              key={idx}
              className="highlight-word transition-colors duration-150 mr-3 md:mr-4 mb-2"
              style={{
                color: "rgba(255, 255, 255, 0.15)",
                display: "inline-block",
              }}
              data-bracketed={item.bracketed}
            >
              {item.bracketed ? (
                <span className="font-extrabold text-[#ace539]/20 transition-all duration-300">
                  {item.label}
                </span>
              ) : (
                item.text
              )}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
