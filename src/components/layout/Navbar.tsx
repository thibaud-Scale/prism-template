"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/data";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background:     scrolled ? "var(--nav-overlay)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)"          : "none",
        borderBottom:   scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <nav className="flex items-center justify-between px-6 md:px-16 py-5">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-black uppercase transition-colors duration-300 hover:text-[var(--accent)]"
          style={{ letterSpacing: "0.2em", color: "var(--text)" }}
        >
          {siteConfig.name}
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-bold uppercase transition-colors duration-300 hover:text-[var(--text)]"
              style={{ fontSize: 10, letterSpacing: "0.25em", color: "var(--muted-2)" }}
            >
              {link.label}
            </a>
          ))}

          {/* Theme toggle */}
          <ThemeToggle />

          {/* CTA */}
          <a
            href="#contact"
            className="font-bold uppercase transition-all duration-300 hover:bg-[var(--accent)] hover:text-[#0D0D0D]"
            style={{
              fontSize:      10,
              letterSpacing: "0.25em",
              padding:       "10px 20px",
              border:        "1px solid var(--accent)",
              color:         "var(--accent)",
            }}
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-[6px] md:hidden"
          aria-label="Toggle menu"
        >
          {[
            mobileOpen ? "translateY(7px) rotate(45deg)"  : "none",
            undefined,
            mobileOpen ? "translateY(-7px) rotate(-45deg)" : "none",
          ].map((t, i) => i === 1 ? (
            <span key={i} className="block h-px" style={{ width: 20, background: "var(--text)", opacity: mobileOpen ? 0 : 1, transition: "opacity 0.3s" }} />
          ) : (
            <span key={i} className="block h-px" style={{ width: 28, background: "var(--text)", transform: t as string, transition: "transform 0.3s" }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight:  mobileOpen ? "360px" : "0px",
          background: "var(--bg)",
          borderTop:  mobileOpen ? "1px solid var(--border)" : "none",
        }}
      >
        <div className="flex flex-col items-center gap-8 px-6 py-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-bold uppercase transition-colors hover:text-[var(--text)]"
              style={{ fontSize: 12, letterSpacing: "0.2em", color: "var(--muted-2)" }}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-6">
            <ThemeToggle />
          </div>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="font-bold uppercase transition-all hover:bg-[var(--accent)] hover:text-[#0D0D0D]"
            style={{
              fontSize: 11, letterSpacing: "0.2em",
              padding: "12px 24px",
              border: "1px solid var(--accent)",
              color: "var(--accent)",
            }}
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </header>
  );
}
