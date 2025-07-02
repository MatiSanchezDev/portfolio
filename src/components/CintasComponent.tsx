"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CintasComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const line1 = useRef<HTMLDivElement>(null);
  const line2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!line1.current || !line2.current || !containerRef.current) return;

    // Línea 1: izquierda → derecha
    gsap.fromTo(
      line1.current,
      { x: "-20%" },
      {
        x: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Línea 2: derecha → izquierda
    gsap.fromTo(
      line2.current,
      { x: "20%" },
      {
        x: "-20%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-96 overflow-hidden sepia-75"
    >
      {/* Línea 1 - arriba */}
      <div
        ref={line1}
        className="absolute left-1/2 w-[250%] whitespace-nowrap text-[60px] font-urbanist bg-white px-6 py-3 text-black"
        style={{
          top: "10%",
          transform: "translateX(-50%)",
        }}
      >
        CONTRATAR ✨ CONTRATAR ✨ CONTRATAR ✨ CONTRATAR ✨ CONTRATAR ✨
        CONTRATAR ✨ CONTRATAR ✨ CONTRATAR ✨ CONTRATAR ✨ CONTRATAR ✨
        CONTRATAR ✨ CONTRATAR ✨ CONTRATAR ✨ CONTRATAR ✨ CONTRATAR ✨
        CONTRATAR ✨ CONTRATAR ✨ CONTRATAR ✨
      </div>

      {/* Línea 2 - debajo */}
      <div
        ref={line2}
        className="absolute left-1/2 w-[250%] whitespace-nowrap text-[60px] font-urbanist bg-white px-6 py-3 text-black"
        style={{
          top: "60%",
          transform: "translateX(-50%)",
        }}
      >
        CANDIDATO PERFECTO ✨ CANDIDATO PERFECTO ✨ CANDIDATO PERFECTO ✨
        CANDIDATO PERFECTO ✨ CANDIDATO PERFECTO ✨ CANDIDATO PERFECTO ✨
        CANDIDATO PERFECTO ✨ CANDIDATO PERFECTO ✨ CANDIDATO PERFECTO ✨
        CANDIDATO PERFECTO ✨ CANDIDATO PERFECTO ✨ CANDIDATO PERFECTO ✨
        CANDIDATO PERFECTO ✨ CANDIDATO PERFECTO ✨ CANDIDATO PERFECTO ✨
        CANDIDATO PERFECTO ✨
      </div>
    </div>
  );
}
