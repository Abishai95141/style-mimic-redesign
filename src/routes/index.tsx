import { createFileRoute } from "@tanstack/react-router";
import { Search, Heart, Share2, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import heroRed from "@/assets/hero-red.jpg";
import BlurText from "@/components/BlurText";
import { CinematicHero } from "@/components/ui/cinematic-hero";

const ease = [0.22, 1, 0.36, 1] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abishai K C // Decision Intelligence" },
      {
        name: "description",
        content:
          "Building AI systems that move from theory to impact - combining LLMs, causal inference, and agentic reasoning.",
      },
      { property: "og:title", content: "Abishai K C // Decision Intelligence" },
      {
        property: "og:description",
        content:
          "Building AI systems that move from theory to impact - combining LLMs, causal inference, and agentic reasoning.",
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
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1600], [0, 240]);
  const bgScale = useTransform(scrollY, [0, 1600], [1, 1.12]);

  return (
    <main
      className="relative w-full bg-black text-white"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Fixed parallax background — spans the entire scroll */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <motion.img
          src={heroRed}
          alt="Background portrait with red-tinted aesthetic"
          className="h-full w-full object-cover will-change-transform"
          style={{ y: bgY, scale: bgScale }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, ease }}
        />
        {/* Vignette / readability overlays */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease }}
        />
      </div>

      {/* Content layer */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col px-8 py-8 md:px-12 md:py-10">
        {/* Top bar */}
        <motion.header
          className="flex items-start justify-between"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
        >
          <div
            className="text-[11px] tracking-[0.3em] text-white/70"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Abishai K C<span className="text-[#ff3a3a]"> //</span> AIML
          </div>
          <div className="flex items-center gap-4">
            <div
              className="text-[11px] tracking-[0.3em] text-white/70"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              EST. 2024
            </div>
          </div>
        </motion.header>

        {/* Main hero row */}
        <section className="mt-10 flex flex-1 flex-col justify-between gap-12 md:mt-16 md:flex-row">
          {/* Left column: headline */}
          <div className="max-w-xl">
            <motion.div
              className="text-[11px] tracking-[0.4em] text-[#ff3a3a]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.25 }}
            >
              Abishai K C//
            </motion.div>
            <h1
              className="mt-4 text-6xl font-light leading-[0.95] tracking-[0.02em] text-white md:text-8xl"
              style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 300 }}
            >
              <BlurText
                text="Decision"
                animateBy="letters"
                direction="top"
                delay={60}
                stepDuration={0.4}
                className="block"
              />
              <BlurText
                text="Intelligence"
                animateBy="letters"
                direction="top"
                delay={60}
                stepDuration={0.4}
                className="block"
              />
            </h1>

            <BlurText
              text="Building AI systems that move from theory to impact - combining LLMs, causal inference, and agentic reasoning."
              animateBy="words"
              direction="bottom"
              delay={40}
              stepDuration={0.35}
              className="mt-8 max-w-md text-sm leading-relaxed text-white/70"
            />


            <motion.div
              className="mt-8 flex items-center gap-3"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 1.0 } },
              }}
            >
              {[
                { Icon: Search, label: "Search" },
                { Icon: Heart, label: "Save" },
                { Icon: Share2, label: "Share" },
              ].map(({ Icon, label }) => (
                <motion.button
                  key={label}
                  aria-label={label}
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors hover:border-[#ff3a3a] hover:text-[#ff3a3a]"
                >
                  <Icon className="h-4 w-4" />
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Right column: pagination + tech specs */}
          <motion.div
            className="flex w-full max-w-xs flex-col items-end gap-12"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.4 }}
          >
            {/* Pagination */}
            <motion.div
              className="flex w-full flex-col items-end"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.55 }}
            >
              <div
                className="flex items-baseline gap-2 text-white"
                style={{ fontFamily: "'Chakra Petch', sans-serif" }}
              >
                <span className="text-5xl font-light">01</span>
                <span className="text-2xl font-light text-white/40"> / SYSTEMS</span>
              </div>
              <motion.div
                className="mt-3 h-px bg-[#ff3a3a]/60"
                initial={{ width: 0 }}
                animate={{ width: "8rem" }}
                transition={{ duration: 0.8, ease, delay: 0.85 }}
              />
              <div
                className="mt-3 text-[11px] tracking-[0.3em] text-white/60"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {"\n"}
              </div>
            </motion.div>

            {/* Technical Specs */}
            <div className="w-full">
              <motion.div
                className="text-[11px] tracking-[0.3em] text-[#ff3a3a]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.9 }}
              >
                TECHNICAL SPECS
              </motion.div>
              <motion.div
                className="mt-4 flex flex-col"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.12, delayChildren: 1.05 } },
                }}
              >
                {[
                  { label: "FOCUS", value: "Causal AI / Agentic Systems" },
                  { label: "STACK", value: "Python · LLMs · RAG · FastAPI" },
                  { label: "SYSTEMS", value: "End-to-End AI Pipelines" },
                  { label: "DOMAIN", value: "Enterprise AI" },
                ].map((row, i) => (
                  <motion.div
                    key={row.label}
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
                    }}
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
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Bottom row: product card + tags */}
        <section className="mt-12 flex flex-col items-stretch justify-between gap-6 md:flex-row md:items-end">
          {/* Frosted glass product card */}
          <motion.div
            className="flex w-full max-w-md items-center gap-4 rounded-2xl border border-white/10 p-4 backdrop-blur-xl"
            style={{
              backgroundColor: "rgba(40, 8, 8, 0.45)",
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 1.3 }}
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
                PROJECT
              </div>
              <div
                className="mt-0.5 text-base text-white"
                style={{ fontFamily: "'Chakra Petch', sans-serif" }}
              >
                CAUSEWAY
              </div>
              <div className="mt-1 text-xs text-white/60">
                Agentic decision system for causal world modeling
              </div>
            </div>
            <button
              className="flex items-center gap-2 rounded-full bg-[#ff3a3a] px-4 py-2 text-xs font-medium tracking-wider text-white transition-colors hover:bg-[#ff5555]"
              style={{ fontFamily: "'Chakra Petch', sans-serif" }}
            >
              VIEW PROJECT → <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </motion.div>

          {/* Pill tags */}
          <motion.div
            className="flex flex-wrap items-center justify-end gap-2"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1, delayChildren: 1.5 } },
            }}
          >
            {["CAUSAL AI", "LLMs", "RAG Systems", "AGENTIC AI"].map((tag) => (
              <motion.span
                key={tag}
                variants={{
                  hidden: { opacity: 0, y: 10, scale: 0.95 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease } },
                }}
                className="rounded-full border border-white/25 bg-black/30 px-4 py-1.5 text-[11px] tracking-[0.25em] text-white/85 backdrop-blur-md"
                style={{ fontFamily: "'Chakra Petch', sans-serif" }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </section>
      </div>

      {/* Cinematic scroll-driven about section */}
      <CinematicHero className="relative z-10" />
    </main>
  );
}
