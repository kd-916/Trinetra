"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger once on client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STAGES = [
  {
    step: "01",
    name: "SCAN",
    desc: "Capture passport, visa or ID document.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="square" strokeLinejoin="miter" d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2" />
        <rect x="7" y="7" width="10" height="10" strokeLinecap="square" strokeLinejoin="miter" />
        <path strokeLinecap="square" d="M7 12h10" />
      </svg>
    ),
  },
  {
    step: "02",
    name: "EXTRACT",
    desc: "Extract MRZ and VIZ information using OCR.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="square" strokeLinejoin="miter" d="M4 6h16M4 10h16M4 14h10M4 18h7" />
        <path strokeLinecap="square" strokeLinejoin="miter" d="M17 14l2 2 4-4" />
      </svg>
    ),
  },
  {
    step: "03",
    name: "VALIDATE",
    desc: "Cross-check data and validate document authenticity.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="square" strokeLinejoin="miter" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    step: "04",
    name: "DETECT",
    desc: "Identify tampering, manipulation and forged elements.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="11" cy="11" r="8" strokeLinecap="square" strokeLinejoin="miter" />
        <path strokeLinecap="square" strokeLinejoin="miter" d="M21 21l-4.35-4.35" />
        <path strokeLinecap="square" strokeLinejoin="miter" d="M11 8v3m0 3h.01" />
      </svg>
    ),
  },
  {
    step: "05",
    name: "VERIFY",
    desc: "Match the passenger's live face with the document photo.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="square" strokeLinejoin="miter" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        <path strokeLinecap="square" strokeLinejoin="miter" d="M19 8v4m-2-2h4" />
      </svg>
    ),
  },
  {
    step: "06",
    name: "DECIDE",
    desc: "Combine all checks into a fast screening result.",
    isFinal: true,
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="square" strokeLinejoin="miter" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function OurSolution() {
  const sectionRef = useRef(null);
  const activeTimelineRef = useRef(null);
  const isNavScrollingRef = useRef(false);

  useEffect(() => {
    // 1. Accessibility: Check prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // Immediately show all cards and arrows in completed active state
      const allCards = sectionRef.current?.querySelectorAll(".stage-card");
      if (allCards) {
        allCards.forEach((c) => {
          c.style.opacity = "1";
          c.style.transform = "none";
          c.style.filter = "none";
        });
      }
      const allFlowLines = sectionRef.current?.querySelectorAll(".flow-line");
      if (allFlowLines) {
        allFlowLines.forEach((l) => {
          l.style.transform = "scale(1)";
        });
      }
      const allArrowHeads = sectionRef.current?.querySelectorAll(".arrow-head-icon");
      if (allArrowHeads) {
        allArrowHeads.forEach((h) => {
          h.style.color = "#0b5f54";
          h.style.opacity = "1";
          h.style.transform = "none";
        });
      }
      return;
    }

    // Helper: Create sequential GSAP timeline with centered flow arrows
    const createPipelineTimeline = (cards, arrows, isVertical) => {
      const tl = gsap.timeline({ paused: true });

      // Step 1: Inactive initial state
      gsap.set(cards, {
        opacity: 0.28,
        y: 16,
        scale: 0.96,
        filter: "grayscale(35%)",
      });

      // Initialize all arrows to inactive subtle state
      arrows.forEach((arrow) => {
        const line = arrow.querySelector(".flow-line");
        const head = arrow.querySelector(".arrow-head-icon");
        if (line) {
          if (isVertical) {
            gsap.set(line, { scaleY: 0, transformOrigin: "top center" });
          } else {
            gsap.set(line, { scaleX: 0, transformOrigin: "left center" });
          }
        }
        if (head) {
          gsap.set(head, {
            color: "#cbd5e1",
            opacity: 0.35,
            x: isVertical ? 0 : -4,
            y: isVertical ? -3 : 0,
          });
        }
      });

      // Step 2: Sequential activation:
      // SCAN -> arrow -> EXTRACT -> arrow -> VALIDATE -> arrow -> DETECT -> arrow -> VERIFY -> arrow -> DECIDE
      cards.forEach((card, index) => {
        const isFinal = index === cards.length - 1;
        const pulse = card.querySelector(".stage-pulse");

        // A. Card entrance: fade in + move up + scale to 1.0
        tl.to(
          card,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "grayscale(0%)",
            duration: 0.48,
            ease: "power2.out",
          },
          index === 0 ? 0.05 : "-=0.08"
        );

        // B. Brief card visual emphasis
        if (pulse) {
          tl.to(
            pulse,
            {
              opacity: 1,
              duration: 0.2,
              ease: "power1.out",
            },
            "-=0.38"
          ).to(
            pulse,
            {
              opacity: isFinal ? 0.5 : 0,
              duration: 0.24,
              ease: "power1.in",
            },
            "-=0.1"
          );
        }

        // C. Animate flow arrow toward next stage
        if (index < cards.length - 1 && arrows[index]) {
          const arrow = arrows[index];
          const line = arrow.querySelector(".flow-line");
          const head = arrow.querySelector(".arrow-head-icon");

          // Arrow flow progress movement
          if (line) {
            tl.to(
              line,
              {
                [isVertical ? "scaleY" : "scaleX"]: 1,
                duration: 0.24,
                ease: "power2.inOut",
              },
              "-=0.06"
            );
          }

          // Arrow head emphasis as flow reaches next card
          if (head) {
            tl.to(
              head,
              {
                color: "#0b5f54",
                opacity: 1,
                x: 0,
                y: 0,
                duration: 0.18,
                ease: "power1.out",
              },
              "-=0.12"
            );
          }

          // Subtle gap before next card activates
          tl.to({}, { duration: 0.1 });
        }
      });

      return tl;
    };

    // 2. Responsive GSAP MatchMedia context
    const mm = gsap.matchMedia();

    // Desktop Layout (>= 1024px)
    mm.add("(min-width: 1024px)", () => {
      const cards = gsap.utils.toArray(".desktop-stage-card", sectionRef.current);
      const arrows = gsap.utils.toArray(".desktop-arrow", sectionRef.current);

      const tl = createPipelineTimeline(cards, arrows, false);
      activeTimelineRef.current = tl;

      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 72%",
        end: "bottom 18%",
        onEnter: () => {
          if (!isNavScrollingRef.current) tl.restart();
        },
        onEnterBack: () => {
          if (!isNavScrollingRef.current) tl.restart();
        },
        onLeave: () => {
          if (!isNavScrollingRef.current) tl.pause(0);
        },
        onLeaveBack: () => {
          if (!isNavScrollingRef.current) tl.pause(0);
        },
      });

      return () => {
        st.kill();
        tl.kill();
      };
    });

    // Mobile & Tablet Layout (< 1024px)
    mm.add("(max-width: 1023px)", () => {
      const cards = gsap.utils.toArray(".mobile-stage-card", sectionRef.current);
      const arrows = gsap.utils.toArray(".mobile-arrow", sectionRef.current);

      const tl = createPipelineTimeline(cards, arrows, true);
      activeTimelineRef.current = tl;

      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 72%",
        end: "bottom 18%",
        onEnter: () => {
          if (!isNavScrollingRef.current) tl.restart();
        },
        onEnterBack: () => {
          if (!isNavScrollingRef.current) tl.restart();
        },
        onLeave: () => {
          if (!isNavScrollingRef.current) tl.pause(0);
        },
        onLeaveBack: () => {
          if (!isNavScrollingRef.current) tl.pause(0);
        },
      });

      return () => {
        st.kill();
        tl.kill();
      };
    });

    // 3. Coordinated navbar click listener: smooth scroll, reset, start from SCAN on arrival
    const handleNavScrollToSolutions = () => {
      if (!activeTimelineRef.current) return;
      isNavScrollingRef.current = true;
      // Reset immediately to initial inactive state
      activeTimelineRef.current.pause(0);

      const sectionEl = sectionRef.current;
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: "smooth", block: "start" });

        let scrollTimer = null;
        const checkScrollEnd = () => {
          clearTimeout(scrollTimer);
          scrollTimer = setTimeout(() => {
            window.removeEventListener("scroll", checkScrollEnd);
            isNavScrollingRef.current = false;
            // Start sequence from SCAN once arrived
            activeTimelineRef.current?.restart();
          }, 120);
        };

        window.addEventListener("scroll", checkScrollEnd, { passive: true });

        // Fallback for fast completion
        setTimeout(() => {
          window.removeEventListener("scroll", checkScrollEnd);
          if (isNavScrollingRef.current) {
            isNavScrollingRef.current = false;
            activeTimelineRef.current?.restart();
          }
        }, 750);
      }
    };

    window.addEventListener("scroll-to-solutions", handleNavScrollToSolutions);

    return () => {
      window.removeEventListener("scroll-to-solutions", handleNavScrollToSolutions);
      mm.revert();
    };
  }, []);

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="py-14 sm:py-16 lg:py-20 bg-[#fafbfc] border-t border-b border-gray-100/90 relative overflow-hidden"
    >
      {/* Subtle Technical Dot Grid Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(#04332d_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-[#0a1917] tracking-tight uppercase">
            SOLUTION
          </h2>

          <p className="mt-3 text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto">
            From document scanning to identity verification — one intelligent screening pipeline.
          </p>
        </div>

        {/* Process Timeline Container */}
        <div className="relative">
          {/* DESKTOP HORIZONTAL TIMELINE (>= 1024px) */}
          <div className="hidden lg:flex items-stretch justify-between gap-0 w-full relative">
            {STAGES.map((stage, idx) => {
              const isLast = idx === STAGES.length - 1;

              return (
                <div key={`desktop-group-${stage.name}`} className="flex items-stretch flex-1 min-w-0">
                  {/* Flow Card: Noticeably Taller Vertical Height with Balanced Proportions */}
                  <div
                    className={`stage-card desktop-stage-card flex-1 min-w-0 h-full min-h-[240px] xl:min-h-[255px] relative flex flex-col justify-between bg-white border p-5 xl:p-6 rounded-none transition-shadow ${
                      stage.isFinal
                        ? "border-[#04332d] shadow-[0_2px_14px_rgba(4,51,45,0.08)] ring-1 ring-[#04332d]/30"
                        : "border-gray-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.02)] hover:border-gray-300"
                    }`}
                  >
                    {/* Active Highlight Ring (Sharp rectangular) */}
                    <div
                      className={`stage-pulse desktop-pulse absolute -inset-[2px] rounded-none pointer-events-none transition-opacity ${
                        stage.isFinal
                          ? "bg-[#04332d]/40 opacity-0 blur-[1px]"
                          : "bg-[#36b37e]/40 opacity-0 blur-[1px]"
                      }`}
                    />

                    {/* Top Row: Step Tag + Node Icon */}
                    <div className="flex items-center justify-between mb-4 relative z-10">
                      <span
                        className={`font-mono text-xs font-bold px-2 py-0.5 rounded-none border ${
                          stage.isFinal
                            ? "bg-[#04332d] text-white border-[#04332d]"
                            : "bg-[#f2f7f5] text-[#0b5f54] border-[#d8eae5]"
                        }`}
                      >
                        {stage.step}
                      </span>

                      <div
                        className={`w-7 h-7 flex items-center justify-center rounded-none border ${
                          stage.isFinal
                            ? "bg-emerald-50 text-[#04332d] border-emerald-200"
                            : "bg-gray-50 text-gray-700 border-gray-100"
                        }`}
                      >
                        {stage.icon}
                      </div>
                    </div>

                    {/* Middle: Stage Title + Description with Generous Vertical Breathing Room */}
                    <div className="my-auto py-3 relative z-10">
                      <div className="flex items-center gap-1.5 mb-2">
                        <h3 className="text-base xl:text-[1.05rem] font-bold text-[#0a1917] tracking-wider uppercase">
                          {stage.name}
                        </h3>
                        {stage.isFinal && (
                          <span className="text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-none bg-emerald-100 text-[#04332d]">
                            Verdict
                          </span>
                        )}
                      </div>

                      <p className="text-xs xl:text-[13px] text-gray-500 leading-relaxed font-normal">
                        {stage.desc}
                      </p>
                    </div>

                    {/* Bottom Technical Indicator Accent */}
                    <div className="pt-3 border-t border-gray-100/90 flex items-center justify-between relative z-10 text-[11px] font-mono text-gray-400">
                      <span className="text-[10px] tracking-wider uppercase text-gray-400 font-medium">
                        Stage {stage.step}
                      </span>
                      <span
                        className={`w-1.5 h-1.5 ${
                          stage.isFinal ? "bg-[#36b37e]" : "bg-gray-300"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Flow Arrow (Centered Vertically relative to the taller cards) */}
                  {!isLast && (
                    <div className="desktop-arrow flex items-center justify-center w-6 xl:w-8 flex-shrink-0 self-center px-1">
                      <div className="relative w-full flex items-center">
                        {/* Connecting Line Track */}
                        <div className="w-full h-[1.5px] bg-gray-200/80 relative overflow-hidden">
                          {/* Animated Flow Progress Line */}
                          <div
                            className="flow-line arrow-flow-line absolute inset-0 bg-gradient-to-r from-[#04332d] to-[#36b37e] origin-left will-change-transform"
                            style={{ transform: "scaleX(0)" }}
                          />
                        </div>

                        {/* Arrowhead */}
                        <svg
                          className="arrow-head-icon w-3.5 h-3.5 -ml-1 text-gray-300 flex-shrink-0 transition-colors will-change-transform"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path strokeLinecap="square" strokeLinejoin="miter" d="M4 2l4 4-4 4" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* MOBILE / TABLET VERTICAL TIMELINE (< 1024px) */}
          <div className="block lg:hidden max-w-md mx-auto relative">
            <div className="space-y-0 relative z-10">
              {STAGES.map((stage, idx) => {
                const isLast = idx === STAGES.length - 1;

                return (
                  <div key={`mobile-group-${stage.name}`} className="flex flex-col items-center">
                    {/* Mobile Flow Card: Taller Vertical Height */}
                    <div
                      className={`stage-card mobile-stage-card w-full min-h-[170px] relative flex flex-col justify-between bg-white p-5 sm:p-6 border rounded-none transition-all ${
                        stage.isFinal
                          ? "border-[#04332d] shadow-[0_2px_12px_rgba(4,51,45,0.08)] ring-1 ring-[#04332d]/30"
                          : "border-gray-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.02)]"
                      }`}
                    >
                      {/* Active Highlight Ring (Sharp rectangular) */}
                      <div className="stage-pulse mobile-pulse absolute -inset-[2px] rounded-none pointer-events-none bg-[#36b37e]/40 opacity-0 blur-[1px]" />

                      {/* Top Row: Step Tag + Icon */}
                      <div className="flex items-center justify-between mb-3 relative z-10">
                        <span
                          className={`font-mono text-xs font-bold px-2 py-0.5 rounded-none border ${
                            stage.isFinal
                              ? "bg-[#04332d] text-white border-[#04332d]"
                              : "bg-[#f2f7f5] text-[#0b5f54] border-[#d8eae5]"
                          }`}
                        >
                          {stage.step}
                        </span>

                        <div
                          className={`w-7 h-7 flex items-center justify-center rounded-none border ${
                            stage.isFinal
                              ? "bg-emerald-50 text-[#04332d] border-emerald-200"
                              : "bg-gray-50 text-gray-600 border-gray-100"
                          }`}
                        >
                          {stage.icon}
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="my-auto py-2 relative z-10">
                        <div className="flex items-center gap-2 mb-1.5">
                          <h3 className="text-base font-bold text-[#0a1917] tracking-wider uppercase">
                            {stage.name}
                          </h3>
                          {stage.isFinal && (
                            <span className="text-[10px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-none bg-emerald-100 text-[#04332d]">
                              Verdict
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
                          {stage.desc}
                        </p>
                      </div>

                      {/* Bottom Subtle Indicator */}
                      <div className="pt-2.5 border-t border-gray-100/90 flex items-center justify-between relative z-10 text-[11px] font-mono text-gray-400">
                        <span className="text-[10px] tracking-wider uppercase">Stage {stage.step}</span>
                        <span
                          className={`w-1.5 h-1.5 ${
                            stage.isFinal ? "bg-[#36b37e]" : "bg-gray-300"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Mobile Flow Arrow (Centered vertically between adjacent cards, pointing down) */}
                    {!isLast && (
                      <div className="mobile-arrow flex flex-col items-center justify-center py-2.5 self-center">
                        {/* Vertical Connecting Line Track */}
                        <div className="w-[1.5px] h-6 bg-gray-200/80 relative overflow-hidden">
                          {/* Animated Flow Progress Line */}
                          <div
                            className="flow-line mobile-arrow-flow-line absolute inset-0 bg-gradient-to-b from-[#04332d] to-[#36b37e] origin-top will-change-transform"
                            style={{ transform: "scaleY(0)" }}
                          />
                        </div>

                        {/* Arrowhead */}
                        <svg
                          className="arrow-head-icon w-3.5 h-3.5 -mt-0.5 text-gray-300 transition-colors will-change-transform"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path strokeLinecap="square" strokeLinejoin="miter" d="M2 4l4 4 4-4" />
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
