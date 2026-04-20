# โฟลเดอร์สำหรับไฟล์โลโก้ยี่ห้อแอร์

วางไฟล์โลโก้ของแต่ละแบรนด์ในโฟลเดอร์นี้ (`public/brands/`)

## ชื่อไฟล์ที่แนะนำ

ใช้ตัวพิมพ์เล็ก คั่นด้วย `-` และเลือกนามสกุลเดียวกันทุกไฟล์ (แนะนำ `.svg`)

```
daikin.svg
mitsubishi.svg
panasonic.svg
lg.svg
samsung.svg
carrier.svg
haier.svg
central-air.svg
```

## ข้อแนะนำเรื่องไฟล์

- **นามสกุล**: ควรใช้ `.svg` (คมชัดทุกขนาด พื้นหลังโปร่งใส) ถ้าไม่มี ใช้ `.png` หรือ `.webp` แบบพื้นหลังโปร่งใส (transparent) ก็ได้
- **ขนาด**: ถ้าเป็น PNG ความสูงอย่างน้อย ~80px ขึ้นไปเพื่อให้คมเวลาแสดง
- **พื้นหลัง**: โปร่งใส (ไม่มีพื้นขาว) จะวางลงบนเว็บได้สวยที่สุด

## วิธีเรียกใช้

หลังวางไฟล์แล้ว เปิดไฟล์ `components/Brands.tsx` แล้วแก้ให้ใช้ `<img>` ชี้มาที่ไฟล์ เช่น:

```tsx
<img src="/brands/daikin.svg" alt="Daikin" className="h-10 w-auto" />
```

> Next.js จะ serve ทุกไฟล์ใน `public/` ที่ URL ระดับราก เช่น
> `public/brands/daikin.svg` → `https://.../brands/daikin.svg`

## แหล่งดาวน์โหลดไฟล์โลโก้

- เว็บทางการของแต่ละแบรนด์ (Brand Resources / Press Kit)
- Wikimedia Commons (มีไฟล์ SVG หลายแบรนด์ — ตรวจสอบ license ก่อนใช้)
- ถ่ายภาพจริง/สแกน แล้วตัดพื้นหลังออก
