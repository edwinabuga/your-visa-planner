import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Your Visa Planner — Visa Consultancy in Nairobi, Kenya";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "rgba(194, 126, 84, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            ✈
          </div>
          <span style={{ fontSize: "24px", fontWeight: 700, opacity: 0.9 }}>
            Your Visa Planner
          </span>
        </div>
        <div
          style={{
            fontSize: "56px",
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: "24px",
            maxWidth: "800px",
          }}
        >
          Visa Applications, Mastered from the Inside.
        </div>
        <div
          style={{
            fontSize: "24px",
            opacity: 0.85,
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          Professional guidance for UK, Schengen, US, UAE & other international
          visas. Based in Nairobi, Kenya.
        </div>
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              background: "linear-gradient(to right, #b46646, #ce9b77)",
              padding: "14px 32px",
              borderRadius: "999px",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            Free Eligibility Check
          </div>
          <div
            style={{
              border: "2px solid rgba(206, 155, 119, 0.5)",
              padding: "14px 32px",
              borderRadius: "999px",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            yourvisaplanner.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
