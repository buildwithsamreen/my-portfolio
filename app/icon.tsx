import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0c",
          borderRadius: 14,
          border: "3px solid #d7ff3f",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 34,
            fontWeight: 700,
            color: "#d7ff3f",
            fontFamily: "monospace",
          }}
        >
          &gt;
        </div>
      </div>
    ),
    { ...size }
  );
}
