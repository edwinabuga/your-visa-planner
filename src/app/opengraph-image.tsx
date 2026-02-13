import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Your Visa Planner — UK Visa Consultancy in Nairobi, Kenya";
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
          background: "linear-gradient(135deg, #0f6b6e 0%, #0a4f52 100%)",
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
              background: "rgba(255,255,255,0.2)",
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
          Expert UK Visa Consultancy in Nairobi
        </div>
        <div
          style={{
            fontSize: "24px",
            opacity: 0.85,
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          Professional guidance for Visitor, Skilled Worker, Student, Spouse &
          other UK visas. Trusted by hundreds of Kenyans.
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
              background: "#d4963a",
              padding: "14px 32px",
              borderRadius: "12px",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            Free Eligibility Check
          </div>
          <div
            style={{
              border: "2px solid rgba(255,255,255,0.5)",
              padding: "14px 32px",
              borderRadius: "12px",
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
