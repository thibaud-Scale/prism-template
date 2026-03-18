"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      className="hidden md:flex items-center gap-2 group"
      aria-label="Toggle theme"
    >
      {/* Track */}
      <div
        className="relative flex items-center"
        style={{
          width: 32,
          height: 16,
          border: "1px solid var(--muted-2)",
          borderRadius: 2,
          background: "transparent",
          transition: "border-color 0.3s",
        }}
      >
        {/* Dot */}
        <motion.div
          animate={{ x: isDark ? 2 : 14 }}
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
          style={{
            position: "absolute",
            width: 10,
            height: 10,
            background: "var(--accent)",
            borderRadius: 1,
          }}
        />
      </div>

      {/* Label */}
      <span
        className="font-bold uppercase transition-colors duration-300"
        style={{ fontSize: 9, letterSpacing: "0.25em", color: "var(--muted-2)" }}
      >
        {isDark ? "DARK" : "LIGHT"}
      </span>
    </button>
  );
}
