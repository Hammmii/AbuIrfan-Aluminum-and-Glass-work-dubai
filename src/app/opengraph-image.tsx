import { ImageResponse } from "next/og";

export const alt = "Abu Irfan — Glass & Aluminum Specialists, Dubai";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Auto-generated Open Graph image (next/og ImageResponse).
 * Served site-wide as og:image; no static asset to maintain.
 */
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
          alignItems: "flex-start",
          background: "#143B49",
          padding: "80px",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "44px",
          }}
        >
          <svg width="68" height="68" viewBox="0 0 40 40">
            <rect
              x="6"
              y="6"
              width="28"
              height="28"
              rx="4"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
            <line
              x1="20"
              y1="6.5"
              x2="20"
              y2="33.5"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              opacity="0.5"
            />
            <line
              x1="6"
              y1="34"
              x2="34"
              y2="6"
              stroke="#B0894F"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: "22px",
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: "#DCE6EC",
            }}
          >
            Glass &amp; Aluminum
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "104px",
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: "-3px",
          }}
        >
          ABU IRFAN
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "34px",
            color: "#DCE6EC",
            marginTop: "20px",
          }}
        >
          Precision glass &amp; aluminum, engineered for Dubai.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "44px",
            width: "120px",
            height: "5px",
            background: "#B0894F",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
