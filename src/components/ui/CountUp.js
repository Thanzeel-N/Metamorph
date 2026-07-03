"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CountUp({ value, duration = 1.2 }) {
  const elementRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    // Extract numbers, decimal formatting, and surrounding characters
    const textValue = value.toString();
    const match = textValue.match(/([^\d.]*)(\d+\.?\d*)([^\d.]*)/);
    
    if (!match) {
      if (elementRef.current) elementRef.current.innerText = textValue;
      return;
    }

    const prefix = match[1] || "";
    const numberStr = match[2];
    const suffix = match[3] || "";
    
    const targetNumber = parseFloat(numberStr);
    const isDecimal = numberStr.includes(".");
    const decimalPlaces = isDecimal ? numberStr.split(".")[1].length : 0;

    const obj = { val: 0 };

    const anim = gsap.to(obj, {
      val: targetNumber,
      duration: duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        if (elementRef.current) {
          const currentVal = isDecimal 
            ? obj.val.toFixed(decimalPlaces) 
            : Math.floor(obj.val).toString();
          elementRef.current.innerText = `${prefix}${currentVal}${suffix}`;
        }
      }
    });

    return () => {
      anim.kill();
    };
  }, [value, duration]);

  return (
    <span ref={elementRef} className="inline-block tabular-nums">
      {value}
    </span>
  );
}
