import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kanit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sithep-air.example.com"),
  title: {
    default: "ศรีเทพแอร์ – ร้านแอร์ครบวงจร ติดตั้ง ล้าง ซ่อม ย้ายแอร์",
    template: "%s | ศรีเทพแอร์",
  },
  description:
    "ศรีเทพแอร์ บริการติดตั้งแอร์ ล้างแอร์ ซ่อมแอร์ ย้ายแอร์ ครบวงจรโดยช่างมืออาชีพ ราคาเป็นธรรม รับประกันทุกงาน ครอบคลุมพื้นที่บริการรอบเมือง",
  keywords: [
    "ศรีเทพแอร์",
    "ร้านแอร์",
    "ติดตั้งแอร์",
    "ล้างแอร์",
    "ซ่อมแอร์",
    "ย้ายแอร์",
    "ช่างแอร์",
  ],
  authors: [{ name: "ศรีเทพแอร์" }],
  openGraph: {
    type: "website",
    locale: "th_TH",
    title: "ศรีเทพแอร์ – ร้านแอร์ครบวงจร",
    description:
      "บริการติดตั้ง ล้าง ซ่อม ย้ายแอร์ ครบวงจร โดยทีมช่างมืออาชีพ รับประกันทุกงาน",
    siteName: "ศรีเทพแอร์",
  },
  twitter: {
    card: "summary_large_image",
    title: "ศรีเทพแอร์ – ร้านแอร์ครบวงจร",
    description:
      "ติดตั้ง ล้าง ซ่อม ย้ายแอร์ โดยช่างมืออาชีพ รับประกันทุกงาน",
  },
  robots: {
    index: true,
    follow: true,
  },
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
