"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show banner only if user hasn't made a choice yet
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay so it doesn't flash on first paint
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    // ↓ Initialize analytics here once consent is given
    // e.g. window.gtag?.("consent", "update", { analytics_storage: "granted" });
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Cookie consent"
          aria-live="polite"
          initial={{ y: 32, opacity: 0 }}
          animate={{ y: 0,  opacity: 1 }}
          exit={{   y: 32, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 left-5 right-5 md:left-auto md:right-8 z-[9980]"
          style={{
            maxWidth:   440,
            background: "var(--surface)",
            border:     "1px solid var(--border)",
            padding:    "24px 28px",
          }}
        >
          {/* Top row */}
          <div className="flex items-start justify-between gap-4">
            <p className="font-bold uppercase" style={{ fontSize: 10, letterSpacing: "0.25em", color: "var(--accent)" }}>
              🍪 Cookies
            </p>
            <button
              onClick={decline}
              aria-label="Close"
              className="font-bold transition-opacity hover:opacity-50"
              style={{ fontSize: 16, color: "var(--muted-2)", lineHeight: 1 }}
            >
              ×
            </button>
          </div>

          {/* Body */}
          <p className="mt-3" style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.7 }}>
            We use cookies to analyse traffic and improve your experience.
            By clicking <strong style={{ color: "var(--text)" }}>Accept</strong>, you consent to our use of cookies.{" "}
            <Link
              href="/privacy"
              className="underline transition-opacity hover:opacity-70"
              style={{ color: "var(--accent)" }}
            >
              Privacy Policy
            </Link>
          </p>

          {/* Actions */}
          <div className="mt-5 flex gap-3">
            <button
              onClick={accept}
              className="font-bold uppercase transition-all duration-200 hover:opacity-90"
              style={{
                padding:       "10px 24px",
                background:    "var(--accent)",
                color:         "#0D0D0D",
                fontSize:      10,
                letterSpacing: "0.2em",
                border:        "1px solid transparent",
              }}
            >
              Accept All
            </button>
            <button
              onClick={decline}
              className="font-bold uppercase transition-all duration-200 hover:border-[var(--muted-2)]"
              style={{
                padding:       "10px 24px",
                border:        "1px solid var(--border)",
                color:         "var(--muted-2)",
                fontSize:      10,
                letterSpacing: "0.2em",
                background:    "transparent",
              }}
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
