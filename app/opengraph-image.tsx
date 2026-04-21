import { ImageResponse } from "next/og";

/**
 * Next.js 14 จะสร้างรูป Open Graph ขนาด 1200×630 อัตโนมัติจากไฟล์นี้
 * ใช้ตอนที่เว็บถูก share บน Facebook, LINE, Twitter/X
 * URL: https://www.sithepair.com/opengraph-image
 */

export const runtime = "edge";
export const alt = "ศรีเทพแอร์ – ร้านแอร์ครบวงจร อ.ศรีเทพ จ.เพชรบูรณ์";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundImage:
            "linear-gradient(135deg, #0369a1 0%, #0284c7 40%, #0ea5e9 100%)",
          position: "relative",
          fontFamily: "sans-serif",
          color: "#fff",
        }}
      >
        {/* decorative blobs */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: "rgba(255,255,255,0.10)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: -100,
            width: 480,
            height: 480,
            borderRadius: 9999,
            background: "rgba(255,255,255,0.08)",
            display: "flex",
          }}
        />

        {/* content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "72px 80px",
            height: "100%",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          {/* top row: logo + badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 72,
                  height: 72,
                  borderRadius: 18,
                  background: "#fff",
                  color: "#0ea5e9",
                  fontSize: 48,
                  fontWeight: 800,
                }}
              >
                ❄
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ fontSize: 32, fontWeight: 700, lineHeight: 1 }}>
                  ศรีเทพแอร์
                </div>
                <div
                  style={{
                    fontSize: 18,
                    marginTop: 4,
                    letterSpacing: 3,
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  SI THEP AIR SERVICE
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 20px",
                borderRadius: 9999,
                background: "rgba(255,255,255,0.15)",
                fontSize: 20,
                fontWeight: 500,
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              ประสบการณ์ 20+ ปี
            </div>
          </div>

          {/* main headline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 40,
            }}
          >
            <div
              style={{
                fontSize: 76,
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: -1,
              }}
            >
              ร้านแอร์ครบวงจร
            </div>
            <div
              style={{
                fontSize: 76,
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: -1,
                color: "#fef3c7",
                marginTop: 6,
              }}
            >
              อ.ศรีเทพ จ.เพชรบูรณ์
            </div>

            <div
              style={{
                fontSize: 30,
                marginTop: 24,
                color: "rgba(255,255,255,0.9)",
                fontWeight: 500,
              }}
            >
              ติดตั้ง · ล้าง · ซ่อม · ย้ายแอร์ ทุกยี่ห้อ
            </div>
          </div>

          {/* bottom row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 48,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 24,
                color: "rgba(255,255,255,0.95)",
              }}
            >
              <div style={{ display: "flex", fontWeight: 600 }}>
                โทร 093-419-4553
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 20,
                  marginTop: 4,
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                www.sithepair.com
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 28px",
                borderRadius: 9999,
                background: "#fff",
                color: "#0369a1",
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              ประเมินหน้างานฟรี
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
