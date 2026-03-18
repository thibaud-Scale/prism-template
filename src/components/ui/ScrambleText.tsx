"use client";

import { useRef, useState } from "react";
import type { JSX } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";

interface Props {
  text: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function ScrambleText({ text, className, as: Tag = "span" }: Props) {
  const [display, setDisplay] = useState(text);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);

  const scramble = () => {
    let iteration = 0;
    if (interval.current) clearInterval(interval.current);

    interval.current = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < Math.floor(iteration / 2)) return text[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length * 2) {
        clearInterval(interval.current!);
        setDisplay(text);
      }
      iteration++;
    }, 35);
  };

  return <Tag className={className} onMouseEnter={scramble}>{display}</Tag>;
}
