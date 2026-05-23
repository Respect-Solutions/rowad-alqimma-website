"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

const PROJECTS = [
  "/assets/project (1).png",
  "/assets/project (2).png",
  "/assets/project (3).png",
  "/assets/project (4).png",
  "/assets/project (5).png",
  "/assets/project (6).png",
  "/assets/project (7).png",
  "/assets/project (8).png",
  "/assets/project (9).png",
  "/assets/project (10).png",
  "/assets/project (11).png",
  "/assets/project (12).png",
  "/assets/project (13).png",
  "/assets/project (14).png",
  "/assets/project (15).png",
  "/assets/project (16).png",
  "/assets/project (17).png",
  "/assets/project (18).png",
  "/assets/project (19).png",
];

export function ProjectsCarousel() {
  const total = PROJECTS.length;
  const slides = [PROJECTS[total - 1], ...PROJECTS, PROJECTS[0]];

  const [index, setIndex] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const [trackVisible, setTrackVisible] = useState(true);
  const isJumping = useRef(false);

  const realIndex =
    index === 0 ? total - 1 : index === slides.length - 1 ? 0 : index - 1;

  const GAP = 20;

  const goToIndex = useCallback(
    (i: number) => {
      if (transitioning || isJumping.current) return;
      setTransitioning(true);
      setIndex(i);
    },
    [transitioning],
  );

  const goPrev = () => {
    const target = index - 1 < 0 ? slides.length - 2 : index - 1;
    goToIndex(target);
  };

  const goNext = () => {
    goToIndex(index + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToIndex(index + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, [index, goToIndex]);

  const handleTransitionEnd = () => {
    setTransitioning(false);

    if (index === slides.length - 1) {
      setTrackVisible(false);
      isJumping.current = true;
      setIndex(1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTrackVisible(true);
          isJumping.current = false;
        });
      });
    }

    if (index === 0) {
      setTrackVisible(false);
      isJumping.current = true;
      setIndex(total);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTrackVisible(true);
          isJumping.current = false;
        });
      });
    }
  };

  const displayNumber = String(realIndex + 1).padStart(2, "0");
  const displayTotal = String(total).padStart(2, "0");

  return (
    <section dir="ltr" className="relative overflow-hidden bg-[#14263D] py-16">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full " />

      <div className="relative z-10 mx-auto max-w-[1400px] pl-6 md:pl-10">
        {/* Viewport */}
        <div className="overflow-hidden">
          {/* Track */}
          <div
            className="flex items-center"
            style={{
              gap: GAP,
              transform: `translateX(calc(-${index} * (78% + ${GAP}px)))`,
              opacity: trackVisible ? 1 : 0,
              transition:
                transitioning && !isJumping.current
                  ? "transform 0.75s cubic-bezier(0.32, 0.72, 0, 1)"
                  : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((src, i) => {
              const isActive = i === index;
              const isNext = i === index + 1;

              return (
                <div key={i} className="shrink-0" style={{ width: "78%" }}>
                  <div
                    className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#1A2A44]"
                    style={{
                      height: "clamp(220px, 34vw, 440px)",
                      transition:
                        "transform 0.75s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.75s ease",
                      transform: isActive ? "scale(1)" : "scale(0.93)",
                      opacity: isActive ? 1 : isNext ? 0.65 : 0.35,
                    }}
                  >
                    <Image
                      src={src}
                      alt={`Project ${i}`}
                      fill
                      className="object-fill"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t " />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-center gap-6 pr-6 md:pr-10">
          {/* Prev Arrow */}
          <button
            onClick={goPrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-all duration-200 hover:border-white/30 hover:bg-white/10 hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Counter */}
          <div className="flex items-center gap-2 font-mono text-sm">
            <span className="text-white">{displayNumber}</span>
            <span className="text-white/25">/</span>
            <span className="text-white/40">{displayTotal}</span>
          </div>

          {/* Next Arrow */}
          <button
            onClick={goNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-all duration-200 hover:border-white/30 hover:bg-white/10 hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 4L10 8L6 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
