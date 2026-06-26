import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PersonalSite — Your Name";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f9fafb",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 14,
              background: "#4f46e5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: 36,
              fontWeight: 900,
            }}
          >
            P
          </div>
          <span style={{ fontSize: 44, fontWeight: 700, color: "#111827" }}>
            PersonalSite
          </span>
        </div>
        <p
          style={{
            fontSize: 24,
            color: "#6b7280",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          Personal site and blog by Your Name — web development, writing, and
          open source.
        </p>
      </div>
    ),
    { ...size }
  );
}
