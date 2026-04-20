"use client";

import {
  ArrowRight,
  Calendar,
  Droplets,
  MapPin,
  Move,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type WorkCategory = "install" | "clean" | "repair" | "relocate";

type Work = {
  category: WorkCategory;
  title: string;
  detail: string;
  brand: string;
  size: string;
  location: string;
  date: string;
  /**
   * หากมีรูปถ่ายจริงให้นำมาวางใน public/works/ แล้วใส่พาธที่นี่
   * เช่น "/works/install-01.jpg"
   * ถ้าเว้นว่างไว้ ระบบจะใช้กราฟิก placeholder สวย ๆ แทน
   */
  image?: string;
};

const CATEGORY_META: Record<
  WorkCategory,
  { label: string; icon: LucideIcon; accent: string; tint: string }
> = {
  install: {
    label: "ติดตั้งใหม่",
    icon: Wrench,
    accent: "from-brand-500 to-brand-800",
    tint: "bg-brand-50 text-brand-700 ring-brand-100",
  },
  clean: {
    label: "ล้างแอร์",
    icon: Droplets,
    accent: "from-sky-400 to-cyan-700",
    tint: "bg-sky-50 text-sky-700 ring-sky-100",
  },
  repair: {
    label: "ซ่อมแอร์",
    icon: Wrench,
    accent: "from-amber-500 to-orange-700",
    tint: "bg-amber-50 text-amber-700 ring-amber-100",
  },
  relocate: {
    label: "ย้ายแอร์",
    icon: Move,
    accent: "from-emerald-500 to-teal-700",
    tint: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  },
};

/**
 * แก้รายการผลงานจริงที่นี่
 * ถ้ามีรูปถ่ายงาน ให้วางไว้ใน public/works/ แล้วใส่พาธในช่อง image
 */
const WORKS: Work[] = [
  {
    category: "install",
    title: "ติดตั้งแอร์ผนังใหม่ 2 ตัว",
    detail:
      "เดินท่อน้ำยาระยะ 6 เมตร ทำรางครอบท่อภายนอกเรียบร้อย พร้อมตั้งค่ารีโมตให้ครบ",
    brand: "Daikin Inverter",
    size: "12,000 BTU × 2",
    location: "บ้านพัก · ต.สระกรวด อ.ศรีเทพ",
    date: "มีนาคม 2568",
  },
  {
    category: "clean",
    title: "ล้างแอร์ร้านคาเฟ่ทั้งร้าน",
    detail:
      "Big Cleaning คอยล์เย็น–คอยล์ร้อน ฆ่าเชื้อ ไส้กรอง ลดกลิ่นอับและฝุ่นสะสม",
    brand: "Mitsubishi Heavy",
    size: "4 เครื่อง · 18,000–24,000 BTU",
    location: "คาเฟ่ · ต.ศรีเทพ",
    date: "กุมภาพันธ์ 2568",
  },
  {
    category: "repair",
    title: "ซ่อมแอร์น้ำรั่วจากคอยล์",
    detail:
      "ตรวจพบท่อน้ำทิ้งอุดตัน + คอยล์ตัน ล้างเคลียร์ระบบและเช็กน้ำยา R32",
    brand: "LG Dual Inverter",
    size: "18,000 BTU",
    location: "บ้านพัก · อ.วิเชียรบุรี",
    date: "กุมภาพันธ์ 2568",
  },
  {
    category: "relocate",
    title: "ย้ายแอร์ข้ามห้อง",
    detail:
      "ปั๊มน้ำยากลับก่อนถอด เดินท่อใหม่ ตรวจรั่วด้วยไนโตรเจน งานเนียน ไม่ทำลายผนัง",
    brand: "Panasonic",
    size: "12,000 BTU",
    location: "ทาวน์โฮม · อ.ศรีเทพ",
    date: "มกราคม 2568",
  },
  {
    category: "install",
    title: "ติดตั้งแอร์สำนักงาน 3 ห้อง",
    detail:
      "วางแผนตำแหน่ง BTU ให้เหมาะกับพื้นที่แต่ละห้อง เดินท่อร่วมรางเดียว เก็บงานเรียบ",
    brand: "Haier Inverter",
    size: "9,000 + 12,000 + 18,000 BTU",
    location: "สำนักงาน · อ.ศรีเทพ",
    date: "มกราคม 2568",
  },
  {
    category: "clean",
    title: "ล้างแอร์บ้านประจำปี",
    detail:
      "ล้างคอยล์ เป่าทำความสะอาด เปลี่ยนไส้กรอง ตรวจน้ำยา – เย็นกว่าเดิมทันที",
    brand: "Samsung Wind-Free",
    size: "2 เครื่อง · 13,000 BTU",
    location: "บ้านพัก · อ.บึงสามพัน",
    date: "ธันวาคม 2567",
  },
];

export default function Works() {
  return (
    <section id="works" className="section bg-ink-50/60">
      <div className="container-xy">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">ผลงานที่ผ่านมา</span>
            <h2 className="heading-lg mt-4">
              ตัวอย่างงานจริง จากทีมช่างของเรา
            </h2>
            <p className="muted mt-4">
              รวบรวมผลงานจากลูกค้าบ้านพัก ร้านค้า และสำนักงาน
              ทุกงานผ่านการตรวจสอบและส่งมอบเรียบร้อยแล้ว
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 self-start rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-semibold text-ink-900 transition hover:border-brand-300 hover:text-brand-700"
          >
            ขอดูผลงานเพิ่มเติม
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WORKS.map((w, i) => (
            <WorkCard key={i} work={w} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({ work }: { work: Work }) {
  const meta = CATEGORY_META[work.category];
  const Icon = meta.icon;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
      {/* Visual */}
      <div
        className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${meta.accent}`}
      >
        {work.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={work.image}
            alt={work.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <Placeholder icon={<Icon className="h-8 w-8" />} />
        )}

        <span
          className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 backdrop-blur ${meta.tint}`}
        >
          <Icon className="h-3.5 w-3.5" />
          {meta.label}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold leading-snug text-ink-950">
          {work.title}
        </h3>
        <p className="muted mt-2 text-sm leading-relaxed">{work.detail}</p>

        <dl className="mt-5 grid gap-2 text-xs">
          <div className="flex items-center gap-2 text-ink-700">
            <span className="font-semibold text-ink-500">แบรนด์</span>
            <span>· {work.brand}</span>
          </div>
          <div className="flex items-center gap-2 text-ink-700">
            <span className="font-semibold text-ink-500">ขนาด</span>
            <span>· {work.size}</span>
          </div>
        </dl>

        <div className="mt-auto flex items-center justify-between border-t border-ink-100 pt-4 text-xs text-ink-500">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {work.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {work.date}
          </span>
        </div>
      </div>
    </article>
  );
}

function Placeholder({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="relative h-full w-full">
      {/* decorative dots / rings */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.35) 0, transparent 40%), radial-gradient(circle at 80% 75%, rgba(255,255,255,0.2) 0, transparent 35%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(130deg, rgba(255,255,255,0.18) 0 2px, transparent 2px 22px)",
        }}
      />
      <div className="absolute inset-0 grid place-items-center">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur">
          {icon}
        </div>
      </div>
    </div>
  );
}
