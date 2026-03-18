"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { siteConfig } from "@/lib/data";
import ScrambleText from "@/components/ui/ScrambleText";
import CountUp      from "@/components/ui/CountUp";

const STATS = [
  { label: "Founded",  value: "2019"      },
  { label: "Projects", value: "80+"       },
  { label: "Location", value: "Paris, FR" },
  { label: "Status",   value: "Open"      },
];

const LINES = [
  { text: "WE BUILD", color: "var(--text)",   delay: 0.2  },
  { text: "DIGITAL",  color: "var(--accent)", delay: 0.35 },
  { text: "FUTURES",  color: "var(--text)",   delay: 0.5  },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Mouse spotlight
  const mouseX = useMotionValue(9999);
  const mouseY = useMotionValue(9999);
  const bg     = useMotionTemplate`radial-gradient(700px circle at ${mouseX}px ${mouseY}px, rgba(205,255,59,0.06), transparent 70%)`;

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Parallax on decorative number
  const { scrollY } = useScroll();
  const parallaxY   = useTransform(scrollY, [0, 600], [0, -140]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden select-none"
      onMouseMove={onMouseMove}
    >
      {/* Mouse spotlight */}
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: bg }} />

      {/* Deconstructed vertical grid lines */}
      <div className="pointer-events-none absolute inset-0 flex justify-between px-6 md:px-16">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-px" style={{ background: "var(--faint)" }} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col justify-between px-6 md:px-16 pt-36 pb-12">

        {/* Top strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-between"
        >
          <span className="font-bold uppercase" style={{ fontSize: 10, letterSpacing: "0.25em", color: "var(--muted-2)" }}>
            § Creative Digital Agency — Est. 2019
          </span>
          <div className="flex items-center gap-2">
            <span
              className="inline-block rounded-full"
              style={{ width: 6, height: 6, background: "var(--accent)", animation: "pulse-glow 2s ease-in-out infinite" }}
            />
            <span className="font-bold uppercase" style={{ fontSize: 10, letterSpacing: "0.25em", color: "var(--accent)" }}>
              Available
            </span>
          </div>
        </motion.div>

        {/* GIANT HEADLINE */}
        <div className="relative mt-8 lg:mt-0">

          {/* Parallax decorative number */}
          <motion.span
            className="pointer-events-none absolute -top-12 right-0 font-black leading-none select-none hidden xl:block"
            style={{ fontSize: "26vw", color: "var(--faint)", lineHeight: 1, y: parallaxY }}
          >
            01
          </motion.span>

          <h1
            className="relative z-10"
            style={{ fontSize: "clamp(4.5rem, 14vw, 16rem)", fontWeight: 800, lineHeight: 0.88, letterSpacing: "-0.03em" }}
          >
            {LINES.map(({ text, color, delay }) => (
              <div key={text} style={{ overflow: "hidden" }}>
                <motion.div
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
                  style={{ color }}
                >
                  <ScrambleText text={text} />
                </motion.div>
              </div>
            ))}
          </h1>

          {/* Offset description block */}
          <motion.div
            className="absolute bottom-2 right-0 hidden lg:flex flex-col items-end gap-4 text-right"
            style={{ maxWidth: 240 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              {siteConfig.description}
            </p>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 font-bold uppercase transition-opacity hover:opacity-60"
              style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--accent)" }}
            >
              View Work
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Bottom stats bar — with animated counters */}
        <motion.div
          className="mt-12 pt-6 grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ borderTop: "1px solid var(--border)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {STATS.map(({ label, value }) => (
            <div key={label}>
              <p className="font-bold uppercase" style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--muted-2)" }}>
                {label}
              </p>
              <p className="mt-1 text-lg font-bold" style={{ color: "var(--text)" }}>
                <CountUp value={value} />
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Vertical scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-6 md:right-16 hidden md:flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
      >
        <span className="font-bold uppercase" style={{ fontSize: 9, letterSpacing: "0.35em", writingMode: "vertical-lr", color: "var(--dim)" }}>
          Scroll
        </span>
        <div className="w-px" style={{ height: 64, background: "linear-gradient(to bottom, var(--dim), transparent)" }} />
      </motion.div>
    </section>
  );
}
