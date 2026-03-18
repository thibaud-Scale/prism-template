"use client";

import Link   from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen flex flex-col justify-end px-6 md:px-16 pb-16 pt-36 relative overflow-hidden"
      >
        {/* Decorative accent dot */}
        <div
          className="absolute top-40 right-16 rounded-full hidden md:block"
          style={{ width: 8, height: 8, background: "var(--accent)", boxShadow: "0 0 20px var(--accent)", animation: "pulse-glow 2s ease-in-out infinite" }}
        />

        {/* 404 */}
        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-black"
            style={{
              fontSize: "clamp(7rem, 25vw, 28rem)",
              lineHeight: 0.85,
              letterSpacing: "-0.04em",
              color: "var(--text)",
            }}
          >
            404
          </motion.h1>
        </div>

        {/* Line */}
        <motion.div
          className="my-8"
          style={{ height: 1, background: "var(--border)" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Message + CTA */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p
            className="font-bold uppercase"
            style={{ fontSize: 12, letterSpacing: "0.2em", color: "var(--muted-2)" }}
          >
            This page doesn&apos;t exist.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-3 font-bold uppercase transition-colors hover:text-[var(--accent)]"
            style={{ fontSize: 11, letterSpacing: "0.2em", color: "var(--text)" }}
          >
            ← Back Home
          </Link>
        </motion.div>
      </main>
    </>
  );
}
