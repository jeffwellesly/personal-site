import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jeff Wellesly, Product Manager";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F7F5EF",
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
              background: "#3F5D45",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#F7F5EF",
              fontSize: 32,
              fontWeight: 900,
            }}
          >
            JW
          </div>
          <span style={{ fontSize: 44, fontWeight: 700, color: "#1C1B18" }}>
            Jeff Wellesly
          </span>
        </div>
        <p
          style={{
            fontSize: 24,
            color: "#54523E",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          Product Manager with 9 years of experience building 0-to-1 products
          across startups and big tech.
        </p>
      </div>
    ),
    { ...size }
  );
}
