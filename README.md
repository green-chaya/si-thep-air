# ศรีเทพแอร์ — Si Thep Air Service

เว็บไซต์บริษัทสำหรับร้าน **ศรีเทพแอร์** สร้างด้วย **Next.js 14 (App Router) + TypeScript + Tailwind CSS**
ดีไซน์แนว Modern & Clean เน้นความน่าเชื่อถือสำหรับธุรกิจบริการแอร์

## ✨ Features

- หน้าเดียวครบทุกส่วน: Hero, บริการ (ติดตั้ง/ล้าง/ซ่อม/ย้าย), ทำไมต้องเรา, ขั้นตอนงาน, แบรนด์, รีวิว, FAQ, CTA, ฟอร์มติดต่อ, Footer
- ปุ่มลอย "โทร / LINE" ตลอดหน้าจอ
- SEO พร้อมใช้: metadata, OpenGraph, JSON-LD (LocalBusiness)
- Responsive ทุกขนาดหน้าจอ โหลดเร็ว รองรับฟอนต์ไทย `Kanit`
- แก้ข้อมูลร้าน (เบอร์, LINE, ที่อยู่) ได้ที่ไฟล์เดียว: `lib/site.ts`

## 🧰 Tech Stack

| ส่วน | เทคโนโลยี |
| --- | --- |
| Framework | Next.js 14 (App Router) |
| ภาษา | TypeScript |
| สไตล์ | Tailwind CSS 3 |
| ไอคอน | lucide-react |
| ฟอนต์ | Google Fonts — Kanit (รองรับภาษาไทย) |

## 🚀 เริ่มต้นใช้งาน (Local Development)

ต้องการ Node.js **18.17+** ขึ้นไป

```bash
# 1) ติดตั้ง dependencies
npm install

# 2) รัน dev server
npm run dev

# เปิดเบราว์เซอร์ไปที่ http://localhost:3000
```

## 🏗 Build สำหรับ Production

```bash
npm run build
npm start
```

## ☁️ Deploy (แนะนำ: Vercel)

วิธีที่ง่ายที่สุด:

1. สร้างบัญชีที่ <https://vercel.com> แล้วเชื่อมต่อ GitHub
2. Push โค้ดนี้ขึ้น repository ของคุณ
3. กด **Import Project** บน Vercel แล้วเลือก repo → กด Deploy
4. Vercel จะตรวจจับเป็น Next.js อัตโนมัติ ไม่ต้องตั้งค่าใดเพิ่ม

หรือใช้ CLI:

```bash
npm i -g vercel
vercel
```

แพลตฟอร์มอื่นที่รองรับ Next.js ได้ทันที: **Netlify**, **Cloudflare Pages**, **Railway**, **Render**

### Deploy แบบ Static (Optional)

ถ้าต้องการไฟล์ HTML ธรรมดาเพื่อโฮสต์บน GitHub Pages / S3:
เพิ่ม `output: "export"` ใน `next.config.mjs` แล้วสั่ง `npm run build`
ระบบจะสร้างโฟลเดอร์ `out/` ที่อัปโหลดไปไหนก็ได้

## 🔧 แก้ไขข้อมูลร้าน

แก้ไฟล์เดียว: [`lib/site.ts`](./lib/site.ts)

```ts
export const SITE = {
  name: "ศรีเทพแอร์",
  phone: "089-000-0000",         // ← ใส่เบอร์จริง
  phoneRaw: "+66890000000",       // ← เบอร์ในรูป tel: (ไม่ต้องมี 0 นำ)
  lineId: "@sithepair",          // ← LINE OA
  lineUrl: "https://line.me/R/ti/p/@sithepair",
  facebookUrl: "https://facebook.com/...",
  email: "contact@sithepair.com",
  address: "...",
  hours: "...",
  serviceArea: "...",
  mapsEmbed: "https://www.google.com/maps?q=...&output=embed",
};
```

## 📁 โครงสร้างโปรเจกต์

```
sithep-air/
├── app/
│   ├── globals.css       # Tailwind + custom styles
│   ├── layout.tsx        # Root layout + ฟอนต์ Kanit + SEO metadata
│   └── page.tsx          # หน้าแรก (ประกอบทุก section)
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── WhyUs.tsx
│   ├── Process.tsx
│   ├── Brands.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── CTA.tsx
│   ├── Contact.tsx       # ฟอร์มติดต่อ + แผนที่
│   ├── Footer.tsx
│   └── FloatingContact.tsx
├── lib/
│   └── site.ts           # 👉 แก้ข้อมูลติดต่อที่นี่
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🖼 เพิ่มรูปจริงของร้าน

1. นำรูป (JPG/PNG/WebP) ไปวางไว้ในโฟลเดอร์ `public/` เช่น `public/gallery/ac-1.jpg`
2. เรียกใช้ใน component ด้วย `<img src="/gallery/ac-1.jpg" alt="..." />`
   หรือใช้ `next/image`:
   ```tsx
   import Image from "next/image";
   <Image src="/gallery/ac-1.jpg" alt="งานติดตั้งแอร์" width={800} height={600} />
   ```

## 📬 ฟอร์มติดต่อ

ฟอร์มที่ `components/Contact.tsx` ใช้ `mailto:` เพื่อให้ deploy ได้ทันทีโดยไม่ต้องมี backend
หากต้องการให้ส่งเข้า **LINE / Email / Google Sheets** จริง แนะนำทางเลือก:

- **Formspree** ([formspree.io](https://formspree.io)) — แก้ `onSubmit` ให้ POST ไปที่ endpoint
- **Resend** + Next.js API Route — ส่งอีเมลอัตโนมัติ
- **Google Sheets** ผ่าน Apps Script Webhook

## 📄 License

MIT — แก้ไข/ใช้งานในเชิงพาณิชย์ได้
