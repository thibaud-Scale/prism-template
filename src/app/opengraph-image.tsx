import { ImageResponse } from "next/og";

export const size        = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt         = "Prism — Creative Digital Agency Template";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width:           1200,
          height:          630,
          background:      "#0D0D0D",
          display:         "flex",
          flexDirection:   "column",
          justifyContent:  "flex-end",
          padding:         80,
          fontFamily:      "sans-serif",
          position:        "relative",
          overflow:        "hidden",
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position:        "absolute",
            inset:           0,
            backgroundImage: "linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)",
            backgroundSize:  "80px 80px",
            opacity:         0.5,
            display:         "flex",
          }}
        />

        {/* Accent squares — deconstructed */}
        <div style={{ position: "absolute", top: 60, right: 80, width: 80, height: 80, background: "#CDFF3B", transform: "rotate(15deg)", display: "flex" }} />
        <div style={{ position: "absolute", top: 100, right: 140, width: 40, height: 40, background: "#CDFF3B", opacity: 0.3, transform: "rotate(30deg)", display: "flex" }} />

        {/* Big 01 background */}
        <div
          style={{
            position:    "absolute",
            top:         -40,
            right:       60,
            fontSize:    400,
            fontWeight:  900,
            color:       "#111",
            lineHeight:  1,
            display:     "flex",
          }}
        >
          01
        </div>

        {/* Agency name */}
        <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: 4, color: "#555", textTransform: "uppercase", marginBottom: 24, display: "flex" }}>
          Creative Digital Agency Template
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize:      160,
            fontWeight:    900,
            color:         "#F2EFE7",
            lineHeight:    0.88,
            letterSpacing: -6,
            display:       "flex",
          }}
        >
          PRISM
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: 1, background: "#1A1A1A", marginTop: 32, marginBottom: 32, display: "flex" }} />

        {/* Tags */}
        <div style={{ display: "flex", gap: 24 }}>
          {["Next.js 16", "Tailwind v4", "Framer Motion", "TypeScript"].map((tag) => (
            <div
              key={tag}
              style={{
                fontSize:      11,
                fontWeight:    700,
                letterSpacing: 3,
                color:         "#444",
                textTransform: "uppercase",
                display:       "flex",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
