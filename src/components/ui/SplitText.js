"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SplitText({ text, delay = 0, className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const chars = containerRef.current.querySelectorAll(".char");
    
    gsap.killTweensOf(chars);
    gsap.fromTo(
      chars,
      { y: "110%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.8,
        stagger: 0.02,
        delay,
        ease: "power4.out",
      }
    );
  }, [text, delay]);

  const words = text.split(" ");

  return (
    <span
      ref={containerRef}
      className={`inline-flex flex-wrap overflow-hidden py-1 ${className}`}
      aria-label={text}
    >
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.25em] overflow-hidden">
          {word.split("").map((char, cIdx) => (
            <span
              key={cIdx}
              className="char inline-block translate-y-[110%] opacity-0"
              style={{ transformOrigin: "bottom center" }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
