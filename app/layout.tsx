import type { Metadata, Viewport } from "next";
import { Kanit } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kanit",
  display: "swap",
});

const SITE_TITLE =
  "ศรีเทพแอร์ – ร้านแอร์ ช่างแอร์ อ.ศรีเทพ จ.เพชรบูรณ์ | ติดตั้ง ล้าง ซ่อม ย้ายแอร์";
const SITE_DESCRIPTION =
  "ศรีเทพแอร์ ร้านแอร์ครบวงจรใน อ.ศรีเทพ จ.เพชรบูรณ์ บริการ ติดตั้งแอร์ ล้างแอร์ ซ่อมแอร์ ย้ายแอร์ โดยช่างมืออาชีพ ประสบการณ์ 20+ ปี รับประกันทุกงาน ครอบคลุม ศรีเทพ วิเชียรบุรี บึงสามพัน หนองไผ่ ชัยบาดาล และพื้นที่ใกล้เคียง";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE_TITLE,
    template: "%s | ศรีเทพแอร์",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    // brand & core
    "ศรีเทพแอร์",
    "Si Thep Air",
    "ร้านแอร์",
    "ร้านแอร์ครบวงจร",
    "ช่างแอร์",
    // services
    "ติดตั้งแอร์",
    "ล้างแอร์",
    "ซ่อมแอร์",
    "ย้ายแอร์",
    "แอร์บ้าน",
    "แอร์สำนักงาน",
    "คำนวณ BTU",
    // local — อำเภอ/ตำบล
    "ร้านแอร์ศรีเทพ",
    "ช่างแอร์ศรีเทพ",
    "ติดตั้งแอร์ศรีเทพ",
    "ล้างแอร์ศรีเทพ",
    "ซ่อมแอร์ศรีเทพ",
    "ย้ายแอร์ศรีเทพ",
    "ร้านแอร์ ต.สระกรวด",
    "ช่างแอร์ อ.ศรีเทพ",
    // local — จังหวัด
    "ร้านแอร์เพชรบูรณ์",
    "ช่างแอร์เพชรบูรณ์",
    "ติดตั้งแอร์เพชรบูรณ์",
    "ล้างแอร์เพชรบูรณ์",
    "ซ่อมแอร์เพชรบูรณ์",
    // อำเภอใกล้เคียง
    "ช่างแอร์วิเชียรบุรี",
    "ช่างแอร์บึงสามพัน",
    "ช่างแอร์หนองไผ่",
    "ช่างแอร์ชัยบาดาล",
    // brands
    "แอร์ Daikin",
    "แอร์ Mitsubishi",
    "แอร์ Panasonic",
    "แอร์ LG",
    "แอร์ Samsung",
    "แอร์ TCL",
    "แอร์ Haier",
  ],
  authors: [{ name: "ศรีเทพแอร์", url: SITE.url }],
  creator: "ศรีเทพแอร์",
  publisher: "ศรีเทพแอร์",
  applicationName: "ศรีเทพแอร์",
  category: "บริการเครื่องปรับอากาศ",
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: SITE.url,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "ศรีเทพแอร์",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ศรีเทพแอร์ – ร้านแอร์ครบวงจร อ.ศรีเทพ จ.เพชรบูรณ์",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    // Geo meta tags — ช่วยให้ search engine รู้ว่าเว็บเกี่ยวกับพื้นที่ไหน
    "geo.region": "TH-67",
    "geo.placename": "ศรีเทพ, เพชรบูรณ์",
    "geo.position": `${SITE.geo.latitude};${SITE.geo.longitude}`,
    ICBM: `${SITE.geo.latitude}, ${SITE.geo.longitude}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#0ea5e9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={kanit.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
