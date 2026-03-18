import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 py-8" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <a
          href="#"
          className="font-black uppercase hover:text-[var(--accent)] transition-colors duration-300"
          style={{ fontSize: 12, letterSpacing: "0.2em", color: "var(--text)" }}
        >
          {siteConfig.name}
        </a>

        <div className="flex flex-wrap gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-bold uppercase transition-colors duration-300 hover:text-[var(--text)]"
              style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--muted-2)" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="/legal"
            className="font-bold uppercase transition-colors duration-300 hover:text-[var(--text)]"
            style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--dim)" }}
          >
            Legal
          </Link>
          <Link
            href="/privacy"
            className="font-bold uppercase transition-colors duration-300 hover:text-[var(--text)]"
            style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--dim)" }}
          >
            Privacy
          </Link>
          <p className="font-bold uppercase" style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--dim)" }}>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
