import { createFileRoute } from "@tanstack/react-router";
import { Search, Heart, Share2, Plus } from "lucide-react";
import heroRed from "@/assets/hero-red.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LAYER-X // Neural Interface" },
      {
        name: "description",
        content:
          "LAYER-X Neural Interface — engineered with high-res optics and a zero-gravity frame for next-generation perception.",
      },
      { property: "og:title", content: "LAYER-X // Neural Interface" },
      {
        property: "og:description",
        content:
          "Engineered with high-res optics and a zero-gravity frame. Discover the MS-01 Neural Core.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@300;400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main
      className="relative min-h-screen w-full overflow-hidden bg-black text-white"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroRed}
          alt="LAYER-X Neural Interface portrait — figure with red-tinted optical headgear"
          className="h-full w-full object-cover"
        />
        {/* Vignette / readability overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      </div>

      {/* Content layer */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col px-8 py-8 md:px-12 md:py-10">
        {/* Top bar */}
        <header className="flex items-start justify-between">
          <div
            className="text-[11px] tracking-[0.3em] text-white/70"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            LAYER-X<span className="text-[#ff3a3a]"> //</span> NEURAL.SYS
          </div>
          <div className="flex items-center gap-4">
            <div
              className="text-[11px] tracking-[0.3em] text-white/70"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              EST. 2049
            </div>
          </div>
        </header>

        {/* Main hero row */}
        <section className="mt-10 flex flex-1 flex-col justify-between gap-12 md:mt-16 md:flex-row">
          {/* Left column: headline */}
          <div className="max-w-xl">
            <div
              className="text-[11px] tracking-[0.4em] text-[#ff3a3a]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              LAYER-X //
            </div>
            <h1
              className="mt-4 text-6xl font-light leading-[0.95] tracking-[0.02em] text-white md:text-8xl"
              style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 300 }}
            >
              NEURAL
              <br />
              INTERFACE
            </h1>

            <p className="mt-8 max-w-md text-sm leading-relaxed text-white/70">
              Engineered with high-res optics and a zero-gravity frame, the LAYER-X
              series redefines perception. Built for operators who move between
              signal and shadow.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <button
                aria-label="Search catalog"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors hover:border-[#ff3a3a] hover:text-[#ff3a3a]"
              >
                <Search className="h-4 w-4" />
              </button>
              <button
                aria-label="Save to wishlist"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors hover:border-[#ff3a3a] hover:text-[#ff3a3a]"
              >
                <Heart className="h-4 w-4" />
              </button>
              <button
                aria-label="Share"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors hover:border-[#ff3a3a] hover:text-[#ff3a3a]"
              >
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right column: pagination + tech specs */}
          <div className="flex w-full max-w-xs flex-col items-end gap-12">
            {/* Pagination */}
            <div className="flex w-full flex-col items-end">
              <div
                className="flex items-baseline gap-2 text-white"
                style={{ fontFamily: "'Chakra Petch', sans-serif" }}
              >
                <span className="text-5xl font-light">1</span>
                <span className="text-2xl font-light text-white/40">/26</span>
              </div>
              <div className="mt-3 h-px w-32 bg-[#ff3a3a]/60" />
              <div
                className="mt-3 text-[11px] tracking-[0.3em] text-white/60"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                NEXT PRODUCT →
              </div>
            </div>

            {/* Technical Specs */}
            <div className="w-full">
              <div
                className="text-[11px] tracking-[0.3em] text-[#ff3a3a]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                TECHNICAL SPECS
              </div>
              <div className="mt-4 flex flex-col">
                {[
                  { label: "OPTICS", value: "8K / 240Hz" },
                  { label: "LOGIC", value: "Q-CORE v3" },
                  { label: "MOTION", value: "0.2ms LAT" },
                  { label: "BUILD", value: "TI-MESH" },
                ].map((row, i) => (
                  <div
                    key={row.label}
                    className={`flex items-center justify-between py-3 ${
                      i !== 0 ? "border-t border-[#ff3a3a]/25" : ""
                    }`}
                  >
                    <span
                      className="text-[11px] tracking-[0.25em] text-white/60"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {row.label}
                    </span>
                    <span
                      className="text-sm tracking-wider text-white"
                      style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom row: product card + tags */}
        <section className="mt-12 flex flex-col items-stretch justify-between gap-6 md:flex-row md:items-end">
          {/* Frosted glass product card */}
          <div
            className="flex w-full max-w-md items-center gap-4 rounded-2xl border border-white/10 p-4 backdrop-blur-xl"
            style={{
              backgroundColor: "rgba(40, 8, 8, 0.45)",
            }}
          >
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-[#ff3a3a]/40"
              style={{
                backgroundImage: `url(${heroRed})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="flex-1">
              <div
                className="text-[10px] tracking-[0.3em] text-[#ff3a3a]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                MS-01
              </div>
              <div
                className="mt-0.5 text-base text-white"
                style={{ fontFamily: "'Chakra Petch', sans-serif" }}
              >
                NEURAL CORE
              </div>
              <div className="mt-1 text-xs text-white/60">
                Cortex-linked vision module · single unit
              </div>
            </div>
            <button
              className="flex items-center gap-2 rounded-full bg-[#ff3a3a] px-4 py-2 text-xs font-medium tracking-wider text-white transition-colors hover:bg-[#ff5555]"
              style={{ fontFamily: "'Chakra Petch', sans-serif" }}
            >
              <Plus className="h-3.5 w-3.5" />
              ADD TO CART
            </button>
          </div>

          {/* Pill tags */}
          <div className="flex flex-wrap items-center justify-end gap-2">
            {["8K RAW", "A+", "ULTRA-WIDE", "NEURAL-SYNC"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/25 bg-black/30 px-4 py-1.5 text-[11px] tracking-[0.25em] text-white/85 backdrop-blur-md"
                style={{ fontFamily: "'Chakra Petch', sans-serif" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
