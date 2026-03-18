"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/data";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

// Asymmetric 12-col grid spans & aspect ratios
const SPANS   = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7", "md:col-span-6", "md:col-span-6"];
const ASPECTS = ["aspect-[16/10]", "aspect-[3/4]",  "aspect-[3/4]",  "aspect-[16/10]", "aspect-[4/3]",  "aspect-[4/3]" ];

export default function Projects() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-16">

      {/* Eyebrow */}
      <AnimateOnScroll>
        <div className="flex items-center gap-6 mb-16">
          <span className="font-bold uppercase shrink-0" style={{ fontSize: 10, letterSpacing: "0.25em", color: "var(--muted-2)" }}>
            — Selected Works
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
          <span className="font-bold uppercase shrink-0" style={{ fontSize: 10, letterSpacing: "0.25em", color: "var(--muted-2)" }}>
            {projects.length} Projects
          </span>
        </div>
      </AnimateOnScroll>

      {/* Asymmetric grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
        {projects.map((project, i) => {
          const accent    = project.color;
          const isHovered = hovered === project.id;

          return (
            <AnimateOnScroll
              key={project.id}
              delay={i * 0.07}
              className={`${SPANS[i] ?? "md:col-span-6"} ${ASPECTS[i] ?? "aspect-[4/3]"}`}
            >
              <Link href={`/projects/${project.id}`} className="block h-full w-full">
                <div
                  className="relative h-full w-full overflow-hidden group"
                  style={{ border: "1px solid var(--border)" }}
                  onMouseEnter={() => setHovered(project.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Gradient BG */}
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ background: `linear-gradient(135deg, ${accent}18 0%, var(--bg) 55%, ${accent}0A 100%)` }}
                  />

                  {/* Dot grid */}
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage: `radial-gradient(circle, ${accent}35 1px, transparent 1px)`,
                      backgroundSize:  "32px 32px",
                    }}
                  />

                  {/* Accent border reveal */}
                  <div
                    className="absolute inset-0 transition-opacity duration-400"
                    style={{ border: `1px solid ${accent}`, opacity: isHovered ? 1 : 0 }}
                  />

                  {/* Center shape */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="border"
                      style={{ width: 56, height: 56, borderColor: `${accent}40` }}
                      animate={{ rotate: isHovered ? 45 : 0, scale: isHovered ? 1.3 : 1, borderColor: isHovered ? accent : `${accent}40` }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>

                  {/* Background index number */}
                  <div className="absolute top-4 left-5 pointer-events-none">
                    <span
                      className="font-black"
                      style={{
                        fontSize:   "clamp(3rem, 6vw, 6rem)",
                        lineHeight: 1,
                        color:      isHovered ? `${accent}25` : "var(--faint)",
                        transition: "color 0.4s",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Bottom info */}
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <span className="font-bold uppercase" style={{ fontSize: 9, letterSpacing: "0.25em", color: accent }}>
                      {project.tags[0]} · {project.year}
                    </span>

                    <motion.div
                      animate={{ y: isHovered ? 0 : 16, opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="mt-2"
                    >
                      <h3
                        className="font-bold"
                        style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--text)" }}
                      >
                        {project.title}
                      </h3>
                      <p className="mt-1.5 leading-relaxed hidden sm:block" style={{ fontSize: 12, color: "var(--muted)", maxWidth: 320 }}>
                        {project.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-bold uppercase"
                            style={{ fontSize: 8, letterSpacing: "0.2em", padding: "3px 8px", border: `1px solid ${accent}44`, color: accent }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    className="absolute top-5 right-5 font-bold"
                    style={{ color: accent, fontSize: 18 }}
                    animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    ↗
                  </motion.div>
                </div>
              </Link>
            </AnimateOnScroll>
          );
        })}
      </div>
    </section>
  );
}
