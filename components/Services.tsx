import {
  ArrowUpRight,
  Droplets,
  Move,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
  priceFrom: string;
};

const SERVICES: Service[] = [
  {
    icon: Wrench,
    tag: "Install",
    title: "ติดตั้งแอร์ใหม่",
    desc: "ติดตั้งแอร์ทั้งระบบโดยช่างผู้เชี่ยวชาญ ทั้งบ้านพัก สำนักงาน และร้านค้า รองรับทุกยี่ห้อและทุกขนาด BTU",
    bullets: [
      "วัดพื้นที่ ให้คำแนะนำ BTU ที่เหมาะสม",
      "เดินท่อน้ำยา สายไฟ และยึดโครงอย่างมาตรฐาน",
      "รับประกันการติดตั้งนาน 6 เดือน",
    ],
    priceFrom: "เริ่ม 2,500 บาท",
  },
  {
    icon: Droplets,
    tag: "Clean / Repair",
    title: "ล้างแอร์ & ซ่อมแอร์",
    desc: "ล้างทำความสะอาดคอยล์ ไส้กรอง พร้อมตรวจเช็กระบบน้ำยา วินิจฉัยและซ่อมอาการเสียทุกรูปแบบ",
    bullets: [
      "ล้างระบบ Big Cleaning ฆ่าเชื้อ ลดกลิ่นอับ",
      "เช็ก/เติมน้ำยา R32, R410A, R22",
      "ซ่อมบอร์ด คอมเพรสเซอร์ พัดลม น้ำรั่ว",
    ],
    priceFrom: "เริ่ม 500 บาท",
  },
  {
    icon: Move,
    tag: "Relocate",
    title: "ย้ายแอร์ & รื้อถอน",
    desc: "ย้ายแอร์ข้ามห้อง ข้ามบ้าน หรือรื้อถอนแอร์เก่าอย่างปลอดภัย ดูแลท่อ น้ำยา และไม่ทำลายผนัง",
    bullets: [
      "ตรวจเส้นทางท่อและตำแหน่งติดตั้งใหม่",
      "เก็บน้ำยาในคอมฯ ก่อนถอด ลดการสูญเสีย",
      "บริการรื้อถอนและนำแอร์เก่าไปจัดการ",
    ],
    priceFrom: "เริ่ม 2,500 บาท",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-xy">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">บริการของเรา</span>
          <h2 className="heading-lg mt-4">
            ครบทุกเรื่องแอร์ จบที่ศรีเทพแอร์
          </h2>
          <p className="muted mt-4 text-base sm:text-lg">
            ไม่ว่าจะติดตั้งใหม่ ล้างประจำปี หรือย้ายเครื่อง
            เราให้บริการด้วยมาตรฐานเดียวกัน คือ ใส่ใจ ตรงเวลา และคุ้มค่า
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.title} className="card group relative">
              <span className="absolute right-6 top-6 text-[10px] font-semibold uppercase tracking-wider text-brand-600">
                {s.tag}
              </span>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="heading-md mt-5 text-xl sm:text-2xl">{s.title}</h3>
              <p className="muted mt-3 text-sm leading-relaxed">{s.desc}</p>
              <ul className="mt-5 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-ink-700">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between border-t border-ink-100 pt-5">
                <span className="text-sm font-semibold text-brand-700">
                  {s.priceFrom}
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-ink-900 transition group-hover:text-brand-700"
                >
                  สอบถามราคา
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
