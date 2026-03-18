import { ImageResponse } from "next/og";

export const size        = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width:          32,
          height:         32,
          background:     "#0D0D0D",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
        }}
      >
        {/* P letter made of accent squares */}
        <div
          style={{
            width:      16,
            height:     16,
            background: "#CDFF3B",
            transform:  "rotate(45deg)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
