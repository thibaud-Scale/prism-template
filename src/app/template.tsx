"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Next.js template.tsx — remounts on every navigation,
 * triggering the page-entry sweep transition.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Layer 1 — bg color (slower, reveals underneath) */}
      <motion.div
        className="fixed inset-0 z-[9990] pointer-events-none"
        style={{ background: "var(--bg)", transformOrigin: "right" }}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
      />
      {/* Layer 2 — accent (faster, front) */}
      <motion.div
        className="fixed inset-0 z-[9991] pointer-events-none"
        style={{ background: "var(--accent)", transformOrigin: "right" }}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1], delay: 0.08 }}
      />

      {/* Page content fades in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.45 }}
      >
        {children}
      </motion.div>
    </>
  );
}
