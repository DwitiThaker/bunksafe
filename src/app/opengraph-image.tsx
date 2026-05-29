import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "BunkSafe — Attendance Calculator for Smart Bunk Planning"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #eef2ff 0%, #ffffff 50%, #eff6ff 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 16 }}>📚</div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#1f2937",
            marginBottom: 16,
            letterSpacing: "-2px",
          }}
        >
          BunkSafe
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#4f46e5",
            fontWeight: 600,
            marginBottom: 24,
            textAlign: "center",
          }}
        >
          Attendance Calculator for Smart Bunk Planning
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#6b7280",
            textAlign: "center",
          }}
        >
          Know exactly how many classes you can skip. Free, no login.
        </div>
      </div>
    ),
    { ...size }
  )
}
