/**
 * โลโก้ยี่ห้อแอร์ 8 แบรนด์ — ใช้ไฟล์รูปจริงใน public/brands/
 * วิธีแก้: วางไฟล์โลโก้เพิ่ม/เปลี่ยน แล้วแก้ `src` ในรายการด้านล่าง
 */
type Brand = { name: string; src: string };

const BRANDS: Brand[] = [
  { name: "Daikin", src: "/brands/daikin.png" },
  { name: "Mitsubishi", src: "/brands/mitsubishi.png" },
  { name: "Panasonic", src: "/brands/panasonic.png" },
  { name: "LG", src: "/brands/lg.png" },
  { name: "Samsung", src: "/brands/samsung.png" },
  { name: "Carrier", src: "/brands/carrier.png" },
  { name: "Haier", src: "/brands/haier.png" },
  { name: "Central Air", src: "/brands/central-air.jpg" },
];

export default function Brands() {
  return (
    <section className="border-y border-ink-100 bg-white py-14 sm:py-16">
      <div className="container-xy">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-ink-500">
            Trusted Brands
          </p>
          <h2 className="mt-2 text-xl font-semibold text-ink-800 sm:text-2xl">
            รองรับแอร์ทุกยี่ห้อที่นิยมในตลาด
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-ink-200" />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5 lg:grid-cols-4 xl:grid-cols-8">
          {BRANDS.map((b) => (
            <div
              key={b.name}
              title={b.name}
              className="group flex h-24 items-center justify-center rounded-xl border border-ink-100 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-ink-200 hover:shadow-sm"
            >
              <img
                src={b.src}
                alt={b.name}
                loading="lazy"
                className="max-h-full max-w-full object-contain opacity-85 transition duration-300 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-ink-500">
          * โลโก้ทั้งหมดเป็นเครื่องหมายการค้าของเจ้าของแบรนด์
          แสดงเพื่อระบุประเภทของแอร์ที่ให้บริการเท่านั้น
        </p>
      </div>
    </section>
  );
}
