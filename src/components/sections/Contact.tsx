"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useMotionTemplate, useInView } from "framer-motion";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import ScrambleText    from "@/components/ui/ScrambleText";
import { siteConfig }  from "@/lib/data";

/* ─── Replace with your Formspree endpoint ─────────────────────
   1. Go to https://formspree.io → New Form
   2. Copy your form ID (e.g. "xpwzgkqr")
   3. Replace YOUR_FORM_ID below                               */
const FORMSPREE_ID = "YOUR_FORM_ID";

const BIG_LINES = [
  { text: "READY TO",   color: "var(--text)",   delay: 0    },
  { text: "BUILD",      color: "var(--accent)", delay: 0.12 },
  { text: "SOMETHING?", color: "var(--dim)",    delay: 0.24 },
];

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  const mouseX = useMotionValue(9999);
  const mouseY = useMotionValue(9999);
  const bg     = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(205,255,59,0.04), transparent 70%)`;

  const [status, setStatus] = useState<Status>("idle");

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (FORMSPREE_ID === "YOUR_FORM_ID") {
      // Demo mode — just show sent state
      setStatus("sending");
      setTimeout(() => setStatus("sent"), 1000);
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method:  "POST",
        body:    new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden py-24 md:py-40 px-6 md:px-16"
      style={{ borderTop: "1px solid var(--border)" }}
      onMouseMove={onMouseMove}
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: bg }} />

      <div className="relative z-10">
        {/* Eyebrow */}
        <AnimateOnScroll>
          <span className="font-bold uppercase" style={{ fontSize: 10, letterSpacing: "0.25em", color: "var(--muted-2)" }}>
            — Get in Touch
          </span>
        </AnimateOnScroll>

        {/* BIG TYPOGRAPHIC CTA */}
        <div className="mt-8" style={{ fontSize: "clamp(3.5rem, 12vw, 14rem)", fontWeight: 800, lineHeight: 0.88, letterSpacing: "-0.03em" }}>
          {BIG_LINES.map(({ text, color, delay }) => (
            <div key={text} style={{ overflow: "hidden" }}>
              <motion.div
                initial={{ y: "110%" }}
                animate={{ y: inView ? 0 : "110%" }}
                transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
                style={{ color }}
              >
                <ScrambleText text={text} />
              </motion.div>
            </div>
          ))}
        </div>

        {/* Form + Info grid */}
        <AnimateOnScroll delay={0.2}>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24" style={{ borderTop: "1px solid var(--border)", paddingTop: 48 }}>

            {/* Left — info */}
            <div className="flex flex-col justify-between gap-10">
              <div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group inline-flex items-center gap-3 font-bold transition-colors duration-300 hover:text-[var(--accent)]"
                  style={{ fontSize: "clamp(1rem, 2.5vw, 1.8rem)", color: "var(--text)", letterSpacing: "-0.01em" }}
                >
                  {siteConfig.email}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                </a>

                <div className="mt-6 flex items-center gap-3">
                  <span className="inline-block rounded-full" style={{ width: 6, height: 6, background: "var(--accent)", animation: "pulse-glow 2s ease-in-out infinite" }} />
                  <span className="font-bold uppercase" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--muted)" }}>
                    {siteConfig.availability}
                  </span>
                </div>
              </div>

              {/* Socials */}
              <div className="flex flex-wrap gap-6">
                {Object.entries(siteConfig.social).map(([name, url]) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold uppercase transition-colors duration-300 hover:text-[var(--accent)]"
                    style={{ fontSize: 10, letterSpacing: "0.25em", color: "var(--dim)" }}
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Name"    name="name"    type="text"  placeholder="Your name"         required />
                <Field label="Email"   name="email"   type="email" placeholder="you@example.com"   required />
              </div>
              <Field   label="Subject" name="subject" type="text"  placeholder="Project type" />
              <TextareaField label="Message" name="message" placeholder="Tell us about your project..." required />

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="self-start font-bold uppercase transition-all duration-300"
                style={{
                  fontSize:      11,
                  letterSpacing: "0.2em",
                  padding:       "14px 32px",
                  border:        "1px solid var(--accent)",
                  color:         status === "sent" ? "#0D0D0D" : "var(--accent)",
                  background:    status === "sent" ? "var(--accent)" : "transparent",
                  opacity:       status === "sending" ? 0.6 : 1,
                }}
              >
                {status === "idle"    && "Send Message →"}
                {status === "sending" && "Sending..."}
                {status === "sent"    && "Message Sent ✓"}
                {status === "error"   && "Error — Try Again"}
              </button>
            </form>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ─── Form field components ─────────────────────────────────── */
function Field({ label, name, type, placeholder, required }: {
  label: string; name: string; type: string; placeholder: string; required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-bold uppercase mb-2"
        style={{ fontSize: 9, letterSpacing: "0.25em", color: "var(--muted-2)" }}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent font-medium transition-all duration-200 outline-none"
        style={{
          padding:     "12px 0",
          borderBottom: "1px solid var(--border)",
          color:        "var(--text)",
          fontSize:     14,
        }}
        onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--accent)")}
        onBlur={(e)  => (e.currentTarget.style.borderBottomColor = "var(--border)")}
      />
    </div>
  );
}

function TextareaField({ label, name, placeholder, required }: {
  label: string; name: string; placeholder: string; required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-bold uppercase mb-2"
        style={{ fontSize: 9, letterSpacing: "0.25em", color: "var(--muted-2)" }}
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={4}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent font-medium transition-all duration-200 outline-none resize-none"
        style={{
          padding:     "12px 0",
          borderBottom: "1px solid var(--border)",
          color:        "var(--text)",
          fontSize:     14,
        }}
        onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--accent)")}
        onBlur={(e)  => (e.currentTarget.style.borderBottomColor = "var(--border)")}
      />
    </div>
  );
}
