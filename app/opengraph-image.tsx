import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 90px",
          background: "#0a0a0c",
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(215,255,63,0.22), transparent 45%), radial-gradient(circle at 85% 100%, rgba(255,77,46,0.22), transparent 45%)",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "monospace",
            fontSize: 28,
            color: "#d7ff3f",
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          PORTFOLIO
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            color: "#f2f1f4",
            lineHeight: 1.02,
            letterSpacing: -2,
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            fontWeight: 600,
            marginTop: 28,
            color: "#ff4d2e",
            maxWidth: 980,
          }}
        >
          {profile.title} — {profile.tagline}
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            left: 90,
            right: 90,
            bottom: 70,
            height: 10,
            borderRadius: 6,
            backgroundImage: "linear-gradient(90deg, #d7ff3f 0%, #ff4d2e 100%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
