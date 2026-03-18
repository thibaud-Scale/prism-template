"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

interface Props {
  value: string;
  duration?: number;
}

/** Renders animated counter if value is numeric (e.g. "80+", "2019"), otherwise plain text. */
export default function CountUp({ value, duration = 1.8 }: Props) {
  const match = value.match(/^(\d+)(.*)$/);

  // Non-numeric — just render as-is
  if (!match) return <span>{value}</span>;

  const to     = parseInt(match[1], 10);
  const suffix = match[2]; // e.g. "+" or ""

  return <AnimatedNumber to={to} suffix={suffix} duration={duration} />;
}

function AnimatedNumber({ to, suffix, duration }: { to: number; suffix: string; duration: number }) {
  const ref     = useRef<HTMLSpanElement>(null);
  const inView  = useInView(ref, { once: true, margin: "-60px" });
  const count   = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, to, duration, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
