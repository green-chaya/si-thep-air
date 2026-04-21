import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Next.js 14 จะสร้าง /robots.txt อัตโนมัติจากไฟล์นี้
 * เปิดให้บ็อทเข้า index ได้ทุกหน้า และชี้ไปที่ sitemap.xml
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
