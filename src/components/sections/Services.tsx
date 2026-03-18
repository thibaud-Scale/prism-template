"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/data";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function Services() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-16">

      {/* Eyebrow */}
      <AnimateOnScroll>
        <div className="flex items-center gap-6 mb-16">
          <span className="font-bold uppercase shrink-0" style={{ fontSize: 10, letterSpacing: "0.25em", color: "var(--muted-2)" }}>
            — Services
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
          <span className="font-bold uppercase shrink-0" style={{ fontSize: 10, letterSpacing: "0.25em", color: "var(--muted-2)" }}>
            What We Do
          </span>
        </div>
      </AnimateOnScroll>

      {/* Editorial numbered list */}
      <div>
        {services.map((service, i) => {
          const isActive = active === service.id;
          return (
            <AnimateOnScroll key={service.id} delay={i * 0.04}>
              <div
                className="relative overflow-hidden"
                style={{ borderTop: "1px solid var(--border)" }}
                onMouseEnter={() => setActive(service.id)}
                onMouseLeave={() => setActive(null)}
              >
                {/* Hover bg sweep */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{ originX: 0, background: "rgba(205,255,59,0.03)" }}
                />

                <div className="relative flex items-center gap-5 md:gap-12 py-6 md:py-7">
                  {/* Number */}
                  <motion.span
                    className="font-bold uppercase shrink-0 w-8"
                    style={{ fontSize: 10, letterSpacing: "0.2em" }}
                    animate={{ color: isActive ? "var(--accent)" : "var(--dim)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>

                  {/* Title */}
                  <motion.h3
                    className="font-bold uppercase flex-1"
                    style={{ fontSize: "clamp(1.5rem, 4vw, 3.5rem)", lineHeight: 1, letterSpacing: "-0.02em" }}
                    animate={{ color: isActive ? "var(--text)" : "var(--dim)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>

                  {/* Description — slides in from right */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        className="hidden md:block shrink-0 leading-relaxed"
                        style={{ maxWidth: 280, fontSize: 13, color: "var(--muted)" }}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 24 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        {service.description}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {/* Arrow */}
                  <motion.span
                    className="shrink-0 font-bold"
                    style={{ fontSize: 18, color: "var(--accent)" }}
                    animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    →
                  </motion.span>
                </div>

                {/* Mobile: description */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className="md:hidden pb-4 pl-[52px]"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>
                        {service.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimateOnScroll>
          );
        })}
        <div className="h-px" style={{ background: "var(--border)" }} />
      </div>
    </section>
  );
}
