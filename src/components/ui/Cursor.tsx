"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse   = useRef({ x: 0, y: 0 });
  const ring    = useRef({ x: 0, y: 0 });
  const raf     = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.1);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.1);
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf.current = requestAnimationFrame(tick);

    const applyHover = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", () => {
          if (!dotRef.current || !ringRef.current) return;
          dotRef.current.style.width      = "0px";
          dotRef.current.style.height     = "0px";
          ringRef.current.style.width     = "60px";
          ringRef.current.style.height    = "60px";
          ringRef.current.style.borderColor = "#CDFF3B";
          ringRef.current.style.background  = "rgba(205,255,59,0.05)";
        });
        el.addEventListener("mouseleave", () => {
          if (!dotRef.current || !ringRef.current) return;
          dotRef.current.style.width      = "8px";
          dotRef.current.style.height     = "8px";
          ringRef.current.style.width     = "40px";
          ringRef.current.style.height    = "40px";
          ringRef.current.style.borderColor = "rgba(205,255,59,0.3)";
          ringRef.current.style.background  = "transparent";
        });
      });
    };

    const timer = setTimeout(applyHover, 600);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block rounded-full bg-[#CDFF3B]"
        style={{
          width: 8,
          height: 8,
          willChange: "transform",
          transition: "width 0.25s, height 0.25s",
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block rounded-full"
        style={{
          width: 40,
          height: 40,
          border: "1px solid rgba(205,255,59,0.3)",
          willChange: "transform",
          transition: "width 0.3s, height 0.3s, border-color 0.3s, background 0.3s",
        }}
      />
    </>
  );
}
