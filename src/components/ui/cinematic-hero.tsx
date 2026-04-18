"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { Search, Code2, TrendingUp, Circle } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const INJECTED_STYLES = `
  .cinematic-scope .gsap-reveal { visibility: hidden; }

  .cinematic-scope .bg-grid-theme {
      background-size: 60px 60px;
      background-image:
          linear-gradient(to right, rgba(255, 58, 58, 0.06) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 58, 58, 0.06) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  .cinematic-scope .text-3d-matte {
      color: #ffffff;
      text-shadow:
          0 10px 30px rgba(255, 58, 58, 0.25),
          0 2px 4px rgba(0,0,0,0.6);
  }

  .cinematic-scope .text-silver-matte {
      background: linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.45) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter:
          drop-shadow(0px 10px 20px rgba(255, 58, 58, 0.25))
          drop-shadow(0px 2px 4px rgba(0,0,0,0.5));
  }

  .cinematic-scope .text-card-silver-matte {
      background: linear-gradient(180deg, #FFFFFF 0%, #d4a8a8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter:
          drop-shadow(0px 12px 24px rgba(0,0,0,0.85))
          drop-shadow(0px 4px 8px rgba(255, 58, 58, 0.2));
  }

  .cinematic-scope .premium-depth-card {
      background: linear-gradient(145deg, #2a0808 0%, #0a0202 100%);
      box-shadow:
          0 40px 100px -20px rgba(0, 0, 0, 0.95),
          0 20px 40px -20px rgba(255, 58, 58, 0.15),
          inset 0 1px 2px rgba(255, 255, 255, 0.08),
          inset 0 -2px 4px rgba(0, 0, 0, 0.85);
      border: 1px solid rgba(255, 58, 58, 0.12);
      position: relative;
  }

  .cinematic-scope .card-sheen {
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
      background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 58, 58, 0.10) 0%, transparent 40%);
      mix-blend-mode: screen; transition: opacity 0.3s ease;
  }

  .cinematic-scope .iphone-bezel {
      background-color: #0a0202;
      box-shadow:
          inset 0 0 0 2px #3a1010,
          inset 0 0 0 7px #000,
          0 40px 80px -15px rgba(0,0,0,0.9),
          0 15px 25px -5px rgba(255, 58, 58, 0.18);
      transform-style: preserve-3d;
  }

  .cinematic-scope .hardware-btn {
      background: linear-gradient(90deg, #3a1010 0%, #0a0202 100%);
      box-shadow:
          -2px 0 5px rgba(0,0,0,0.8),
          inset -1px 0 1px rgba(255,255,255,0.08),
          inset 1px 0 2px rgba(0,0,0,0.8);
      border-left: 1px solid rgba(255,58,58,0.1);
  }

  .cinematic-scope .screen-glare {
      background: linear-gradient(110deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 45%);
  }

  .cinematic-scope .widget-depth {
      background: linear-gradient(180deg, rgba(255,58,58,0.06) 0%, rgba(255,58,58,0.01) 100%);
      box-shadow:
          0 10px 20px rgba(0,0,0,0.4),
          inset 0 1px 1px rgba(255,255,255,0.05),
          inset 0 -1px 1px rgba(0,0,0,0.6);
      border: 1px solid rgba(255, 58, 58, 0.15);
  }

  .cinematic-scope .floating-ui-badge {
      background: linear-gradient(135deg, rgba(255, 58, 58, 0.18) 0%, rgba(255, 58, 58, 0.02) 100%);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      box-shadow:
          0 0 0 1px rgba(255, 58, 58, 0.3),
          0 25px 50px -12px rgba(0, 0, 0, 0.8),
          inset 0 1px 1px rgba(255,255,255,0.15),
          inset 0 -1px 1px rgba(0,0,0,0.5);
  }

  .cinematic-scope .highlight-pill {
      display: inline-block;
      padding: 1px 8px;
      margin: 0 2px;
      border-radius: 6px;
      border: 1px solid rgba(255, 58, 58, 0.5);
      color: #ff6464;
      background: rgba(255, 58, 58, 0.08);
      font-size: 0.95em;
  }
`;

export interface CinematicHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  brandName?: string;
  tagline1?: string;
  tagline2?: string;
  cardHeading?: string;
  cardLeftPara1?: React.ReactNode;
  cardLeftPara2?: React.ReactNode;
  cardRightText?: React.ReactNode;
  badgeText?: string;
}

export function CinematicHero({
  tagline1 = "Most problems aren't solved by",
  tagline2 = "more code, but better thinking.",
  cardHeading = "Curious by nature. Driven by understanding.",
  cardLeftPara1 = (
    <>
      I started with curiosity—<span className="highlight-pill">asking why things work</span> the
      way they do. That curiosity led me to explore{" "}
      <span className="highlight-pill">AI, systems, and research.</span> Since then, I've worked on
      projects that blend <span className="highlight-pill">machine learning</span> with real-world
      problems—turning ideas into implementations and learning by building.
    </>
  ),
  cardLeftPara2 = (
    <>
      I enjoy digging into the details, questioning assumptions, and making models{" "}
      <span className="highlight-pill">clearer,</span> <span className="highlight-pill">simpler,</span>{" "}
      and more reliable. For me, it's not just about building – it's about{" "}
      <span className="highlight-pill">understanding deeply</span> and improving what I build.
    </>
  ),
  cardRightText = (
    <>
      I believe thoughtful systems come from curious minds and consistent effort. I'm here to keep
      learning, keep building, and contribute with clarity and intent.
    </>
  ),
  badgeText = "Always Learning.",
  className,
  ...props
}: CinematicHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(requestRef.current);
      requestRef.current = requestAnimationFrame(() => {
        if (mainCardRef.current && mockupRef.current) {
          const rect = mainCardRef.current.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;
          mainCardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
          mainCardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);

          const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
          const yVal = (e.clientY / window.innerHeight - 0.5) * 2;
          gsap.to(mockupRef.current, {
            rotationY: xVal * 10,
            rotationX: -yVal * 10,
            ease: "power3.out",
            duration: 1.2,
          });
        }
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const ctx = gsap.context(() => {
      gsap.set(".text-track", {
        autoAlpha: 0,
        y: 60,
        scale: 0.85,
        filter: "blur(20px)",
        rotationX: -20,
      });
      gsap.set(".text-days", { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" });
      gsap.set(".main-card", { y: window.innerHeight + 200, autoAlpha: 1 });
      gsap.set(
        [".card-left-text", ".card-right-text", ".mockup-scroll-wrapper", ".floating-badge", ".phone-widget"],
        { autoAlpha: 0 },
      );

      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "top 20%",
          scrub: 1,
        },
      });
      introTl
        .to(".text-track", {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          rotationX: 0,
          ease: "power2.out",
          duration: 1.5,
        })
        .to(
          ".text-days",
          { clipPath: "inset(0 0% 0 0)", ease: "power2.inOut", duration: 1 },
          "-=0.6",
        );

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: isMobile ? "+=2800" : "+=3600",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      scrollTl
        .to(
          [".hero-text-wrapper", ".bg-grid-theme"],
          { scale: 1.15, filter: "blur(20px)", opacity: 0.15, ease: "power2.inOut", duration: 2 },
          0,
        )
        .to(".main-card", { y: 0, ease: "power3.inOut", duration: 2 }, 0)
        .to(".main-card", {
          width: "100%",
          height: "100%",
          borderRadius: "0px",
          ease: "power3.inOut",
          duration: 1.5,
        })
        .fromTo(
          ".mockup-scroll-wrapper",
          { y: 200, z: -400, rotationX: 40, rotationY: -20, autoAlpha: 0, scale: 0.7 },
          { y: 0, z: 0, rotationX: 0, rotationY: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 2 },
          "-=0.6",
        )
        .fromTo(
          ".phone-widget",
          { y: 30, autoAlpha: 0, scale: 0.95 },
          { y: 0, autoAlpha: 1, scale: 1, stagger: 0.1, ease: "back.out(1.2)", duration: 1.2 },
          "-=1.2",
        )
        .fromTo(
          ".floating-badge",
          { y: 80, autoAlpha: 0, scale: 0.7, rotationZ: -10 },
          { y: 0, autoAlpha: 1, scale: 1, rotationZ: 0, ease: "back.out(1.5)", duration: 1.2 },
          "-=1.6",
        )
        .fromTo(
          ".card-left-text",
          { x: -50, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, ease: "power4.out", duration: 1.2 },
          "-=1.2",
        )
        .fromTo(
          ".card-right-text",
          { x: 50, autoAlpha: 0, scale: 0.9 },
          { x: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 1.2 },
          "<",
        )
        .to({}, { duration: 1.5 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "cinematic-scope relative h-screen w-full overflow-hidden bg-black text-white",
        className,
      )}
      style={{ fontFamily: "'Inter', sans-serif" }}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />

      {/* Background grid */}
      <div className="bg-grid-theme pointer-events-none absolute inset-0 z-0" />

      {/* Initial hero text */}
      <div className="hero-text-wrapper absolute inset-0 z-10 flex items-center justify-center px-6">
        <h2
          className="text-track text-silver-matte max-w-5xl text-balance text-center text-3xl font-light leading-[1.15] tracking-[0.01em] sm:text-4xl md:text-6xl lg:text-7xl"
          style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 300 }}
        >
          <span className="block">{tagline1}</span>
          <span className="text-days mt-1 inline-block w-full">{tagline2}</span>
        </h2>
      </div>

      {/* The Main Card */}
      <div
        ref={mainCardRef}
        className="main-card premium-depth-card absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden"
        style={{
          width: "min(90vw, 1100px)",
          height: "min(70vh, 640px)",
          borderRadius: "32px",
          willChange: "transform,width,height",
        }}
      >
        <div className="card-sheen" />

        <div className="relative z-10 mx-auto grid h-full w-full max-w-[1400px] grid-cols-1 items-center gap-6 overflow-y-auto px-5 py-10 md:grid-cols-12 md:gap-8 md:overflow-visible md:px-12 md:py-16">
          {/* Left text column */}
          <div className="card-left-text col-span-1 md:col-span-4">
            <h3
              className="text-card-silver-matte text-3xl font-light leading-[1.05] md:text-5xl"
              style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 300 }}
            >
              {cardHeading}
            </h3>
            <p className="mt-6 text-sm leading-relaxed text-white/75 md:text-[15px]">
              {cardLeftPara1}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-[15px]">
              {cardLeftPara2}
            </p>
          </div>

          {/* Phone mockup */}
          <div className="col-span-1 flex justify-center md:col-span-4" style={{ perspective: "1500px" }}>
            <div
              ref={mockupRef}
              className="mockup-scroll-wrapper relative scale-[0.65] sm:scale-75 md:scale-100"
              style={{ transformStyle: "preserve-3d", transformOrigin: "center top" }}
            >
              <div
                className="iphone-bezel relative overflow-hidden"
                style={{ width: 280, height: 580, borderRadius: 44 }}
              >
                <div className="hardware-btn absolute -right-[3px] top-[140px] h-16 w-[3px] rounded-r-sm" />
                <div className="hardware-btn absolute -left-[3px] top-[120px] h-8 w-[3px] rounded-l-sm" />
                <div className="hardware-btn absolute -left-[3px] top-[170px] h-14 w-[3px] rounded-l-sm" />

                <div className="relative h-full w-full overflow-hidden bg-black p-3" style={{ borderRadius: 36 }}>
                  <div className="screen-glare absolute inset-0 z-30 pointer-events-none" />

                  {/* Notch */}
                  <div className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

                  {/* Phone content */}
                  <div className="mt-8 flex h-[calc(100%-2rem)] flex-col gap-3">
                    {/* CORE FOCUS radar widget */}
                    <div className="phone-widget widget-depth flex-1 rounded-2xl p-4">
                      <div
                        className="text-center text-[10px] font-semibold tracking-[0.25em] text-[#ff6464]"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        CORE FOCUS
                      </div>
                      <RadarChart />
                    </div>

                    {/* WHAT DRIVES ME */}
                    <div
                      className="text-[9px] tracking-[0.3em] text-white/60"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      WHAT DRIVES ME
                    </div>

                    <div className="phone-widget widget-depth flex items-center gap-3 rounded-xl px-3 py-2">
                      <Search className="h-4 w-4 text-[#ff6464]" />
                      <div className="flex-1">
                        <div className="text-[11px] font-semibold text-white">Understand</div>
                        <div className="text-[9px] text-white/50">Ask better questions</div>
                      </div>
                    </div>
                    <div className="phone-widget widget-depth flex items-center gap-3 rounded-xl px-3 py-2">
                      <Code2 className="h-4 w-4 text-[#ff6464]" />
                      <div className="flex-1">
                        <div className="text-[11px] font-semibold text-white">Build</div>
                        <div className="text-[9px] text-white/50">Turn ideas into systems</div>
                      </div>
                    </div>
                    <div className="phone-widget widget-depth flex items-center gap-3 rounded-xl px-3 py-2">
                      <TrendingUp className="h-4 w-4 text-[#ff6464]" />
                      <div className="flex-1">
                        <div className="text-[11px] font-semibold text-white">Improve</div>
                        <div className="text-[9px] text-white/50">Make things work better</div>
                      </div>
                    </div>

                    <div className="phone-widget widget-depth rounded-xl p-3">
                      <div
                        className="text-[8px] font-semibold tracking-[0.25em] text-[#ff6464]"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        CURRENTLY EXPLORING
                      </div>
                      <div
                        className="mt-1 text-[9px] leading-snug text-white/80"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        &gt; Reliable LLM Systems, RAG, and Evaluating What Matters.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right text column */}
          <div className="card-right-text col-span-1 md:col-span-4">
            <p className="text-center text-sm leading-relaxed text-white/80 md:text-right md:text-base">
              {cardRightText}
            </p>
            <div className="mt-6 flex justify-center md:justify-end">
              <div className="floating-badge floating-ui-badge inline-flex items-center gap-2 rounded-full px-5 py-2.5">
                <Circle className="h-2 w-2 fill-[#ff3a3a] text-[#ff3a3a]" />
                <span
                  className="text-xs tracking-wider text-white"
                  style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                >
                  {badgeText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RadarChart() {
  // Pentagon radar with values
  const cx = 100;
  const cy = 90;
  const r = 60;
  const labels = ["ML", "SYSTEMS", "COMMUNICATION", "PROBLEM\nSOLVING", "RESEARCH"];
  const values = [0.95, 0.85, 0.7, 0.85, 0.9];
  const points = labels.map((_, i) => {
    const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
    return [cx + Math.cos(angle) * r, cy + Math.sin(angle) * r];
  });
  const valuePoints = values.map((v, i) => {
    const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
    return [cx + Math.cos(angle) * r * v, cy + Math.sin(angle) * r * v];
  });
  const labelPoints = labels.map((_, i) => {
    const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
    return [cx + Math.cos(angle) * (r + 18), cy + Math.sin(angle) * (r + 18)];
  });

  return (
    <svg viewBox="0 0 200 190" className="mt-1 h-auto w-full">
      {[0.33, 0.66, 1].map((scale, idx) => (
        <polygon
          key={idx}
          points={points.map(([x, y]) => `${cx + (x - cx) * scale},${cy + (y - cy) * scale}`).join(" ")}
          fill="none"
          stroke="rgba(255,58,58,0.25)"
          strokeWidth="0.5"
        />
      ))}
      {points.map(([x, y], i) => (
        <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="rgba(255,58,58,0.2)" strokeWidth="0.5" />
      ))}
      <polygon
        points={valuePoints.map((p) => p.join(",")).join(" ")}
        fill="rgba(255,58,58,0.35)"
        stroke="#ff3a3a"
        strokeWidth="1"
      />
      {valuePoints.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.8" fill="#ff6464" />
      ))}
      {labelPoints.map(([x, y], i) => (
        <text
          key={i}
          x={x}
          y={y}
          fill="#ff6464"
          fontSize="6"
          fontFamily="'JetBrains Mono', monospace"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {labels[i].split("\n").map((line, j) => (
            <tspan key={j} x={x} dy={j === 0 ? 0 : 7}>
              {line}
            </tspan>
          ))}
        </text>
      ))}
    </svg>
  );
}

export default CinematicHero;
