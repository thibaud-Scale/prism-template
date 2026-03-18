"use client";

import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import type { Project } from "@/types";
import { projects }     from "@/lib/data";
import Navbar           from "@/components/layout/Navbar";
import Footer           from "@/components/layout/Footer";
import ScrambleText     from "@/components/ui/ScrambleText";
import AnimateOnScroll  from "@/components/ui/AnimateOnScroll";

/* ── Page ───────────────────────────────────────────────────── */
export default function ProjectPage() {
  const params  = useParams();
  const slug    = params?.slug as string;
  const project = projects.find((p) => p.id === slug);
  if (!project) return notFound();

  const idx  = projects.findIndex((p) => p.id === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <Navbar />
      <main>
        <ProjectHero project={project} />
        <ProjectBody project={project} />
        <NextProjectSection project={next} />
      </main>
      <Footer />
    </>
  );
}

/* ── Hero ───────────────────────────────────────────────────── */
function ProjectHero({ project }: { project: Project }) {
  const { scrollY } = useScroll();
  const titleY      = useTransform(scrollY, [0, 500], [0, -80]);
  const overlayO    = useTransform(scrollY, [0, 400], [0.5, 0.85]);

  return (
    <section className="relative min-h-screen flex flex-col justify-end px-6 md:px-16 pb-16 pt-36 overflow-hidden">
      {/* Gradient BG */}
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, ${project.color}20 0%, var(--bg) 60%, ${project.color}0A 100%)` }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, ${project.color}30 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Scroll-based overlay */}
      <motion.div className="absolute inset-0" style={{ background: "var(--bg)", opacity: overlayO }} />

      {/* Back link */}
      <motion.div
        className="absolute top-28 left-6 md:left-16 z-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-bold uppercase transition-colors hover:text-[var(--accent)]"
          style={{ fontSize: 10, letterSpacing: "0.25em", color: "var(--muted-2)" }}
        >
          ← All Projects
        </Link>
      </motion.div>

      {/* Parallax title block */}
      <motion.div className="relative z-10" style={{ y: titleY }}>
        <motion.span
          className="block font-bold uppercase mb-4"
          style={{ fontSize: 10, letterSpacing: "0.25em", color: project.color }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {project.role} · {project.year}
        </motion.span>

        <h1 style={{ fontSize: "clamp(3rem, 10vw, 12rem)", fontWeight: 800, lineHeight: 0.88, letterSpacing: "-0.03em", color: "var(--text)" }}>
          <div style={{ overflow: "hidden" }}>
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <ScrambleText text={project.title} />
            </motion.div>
          </div>
        </h1>

        <motion.div
          className="mt-6 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-bold uppercase"
              style={{ fontSize: 9, letterSpacing: "0.2em", padding: "4px 10px", border: `1px solid ${project.color}55`, color: project.color }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Accent line sweeps across bottom */}
      <motion.div
        className="absolute bottom-0 left-0"
        style={{ height: 2, background: project.color }}
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />
    </section>
  );
}

/* ── Body ───────────────────────────────────────────────────── */
function ProjectBody({ project }: { project: Project }) {
  const idx = projects.findIndex((p) => p.id === project.id);

  return (
    <section className="py-24 md:py-32 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">

        {/* Long description */}
        <AnimateOnScroll className="md:col-span-7">
          <p className="font-bold uppercase mb-6" style={{ fontSize: 10, letterSpacing: "0.25em", color: "var(--muted-2)" }}>
            — Overview
          </p>
          <p style={{ fontSize: "clamp(1rem, 1.8vw, 1.35rem)", color: "var(--text)", lineHeight: 1.75 }}>
            {project.longDescription ?? project.description}
          </p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-10 font-bold uppercase transition-colors hover:text-[var(--accent)]"
              style={{ fontSize: 11, letterSpacing: "0.2em", color: project.color }}
            >
              Visit Project ↗
            </a>
          )}
        </AnimateOnScroll>

        {/* Metadata sidebar */}
        <AnimateOnScroll delay={0.15} className="md:col-span-5">
          <div className="space-y-0">
            {[
              { label: "Role",  value: project.role  ?? "—" },
              { label: "Year",  value: String(project.year ?? "—") },
              { label: "Stack", value: project.tags.join(", ") },
            ].map(({ label, value }) => (
              <div key={label} className="py-5" style={{ borderTop: "1px solid var(--border)" }}>
                <p className="font-bold uppercase mb-2" style={{ fontSize: 9, letterSpacing: "0.25em", color: "var(--muted-2)" }}>
                  {label}
                </p>
                <p className="font-semibold" style={{ fontSize: 15, color: "var(--text)" }}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>

      {/* Project visual placeholder */}
      <AnimateOnScroll delay={0.2} className="mt-20">
        <div className="w-full aspect-[16/9] relative overflow-hidden" style={{ border: "1px solid var(--border)" }}>
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${project.color}15, var(--surface), ${project.color}08)` }} />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-black select-none" style={{ fontSize: "clamp(6rem, 18vw, 18rem)", color: `${project.color}15`, lineHeight: 1 }}>
              {String(idx + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}

/* ── Next Project ───────────────────────────────────────────── */
function NextProjectSection({ project }: { project: Project }) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{ borderTop: "1px solid var(--border)" }}>
      <Link href={`/projects/${project.id}`} className="block group px-6 md:px-16 py-16 md:py-24">
        <div ref={ref} className="relative">
          <p className="font-bold uppercase mb-4" style={{ fontSize: 10, letterSpacing: "0.25em", color: "var(--muted-2)" }}>
            — Next Project
          </p>

          <div style={{ overflow: "hidden" }}>
            <motion.h2
              initial={{ y: "110%" }}
              animate={{ y: inView ? 0 : "110%" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-black uppercase transition-colors duration-500 group-hover:text-[var(--accent)]"
              style={{ fontSize: "clamp(3rem, 9vw, 11rem)", lineHeight: 0.88, letterSpacing: "-0.03em", color: "var(--text)" }}
            >
              {project.title}
            </motion.h2>
          </div>

          <motion.div
            className="mt-6 flex items-center gap-3"
            animate={{ x: inView ? 0 : -20, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="font-bold uppercase" style={{ fontSize: 10, letterSpacing: "0.25em", color: project.color }}>
              {project.tags[0]} · {project.year}
            </span>
            <span style={{ color: project.color }}>↗</span>
          </motion.div>
        </div>
      </Link>
    </section>
  );
}
