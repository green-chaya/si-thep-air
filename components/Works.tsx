"use client";

import { useCallback, useEffect, useState } from "react";
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Images,
  MapPin,
  Move,
  Wrench,
  X,
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
   * รูปงาน 1 งานสามารถมีได้หลายรูป
   * วางไฟล์ใน public/works/ แล้วใส่พาธ เช่น ["/works/install-01-01.jpg", "/works/install-01-02.jpg"]
   * ถ้าไม่ใส่หรือเว้นว่าง ระบบจะแสดงกราฟิก placeholder สวย ๆ แทน
   *
   * หมายเหตุ: นามสกุลไฟล์ต้องตรงกับไฟล์จริง (case-sensitive บน Vercel/Linux)
   * เช่น ไฟล์ .JPG ตัวใหญ่ ต้องใส่ .JPG ในพาธเช่นกัน
   */
  images?: string[];
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
 * ถ้ามีรูปถ่ายงาน ให้วางไว้ใน public/works/ แล้วใส่พาธในช่อง images (หลายรูปได้)
 * เช่น images: ["/works/install-01-01.jpg", "/works/install-01-02.jpg"]
 */
const WORKS: Work[] = [
  {
    category: "install",
    title: "ติดตั้งแอร์ในห้องทำใหม่ 1 ตัว",
    detail:
      "เดินท่อน้ำยาและรางสายไฟอย่างเรียบร้อย ทำรางครอบท่อภายนอกเรียบร้อย พร้อมตั้งค่ารีโมตให้ครบ",
    brand: "TCL",
    size: "12,000 BTU",
    location: "บ้านพัก · ต.สระกรวด อ.ศรีเทพ",
    date: "มกราคม 2569",
    images: [
      "/works/install-01-03.jpeg",
      "/works/install-01-01.jpeg",
      "/works/install-01-02.jpeg",
    ],
  },
  {
    category: "install",
    title: "ติดตั้งแอร์ใหม่ประจำบ้านพัก",
    detail:
      "งานติดตั้งใหม่ วางตำแหน่งคอยล์เย็น-คอยล์ร้อน เดินท่อน้ำยาเรียบร้อย ตรวจรั่วด้วยไนโตรเจนและทดสอบระบบก่อนส่งมอบ",
    brand: "TCL",
    size: "12,000 BTU",
    location: "บ้านพัก · ต.พุขาม อ.ศรีเทพ",
    date: "มีนาคม 2568",
    images: [
      "/works/install-02-03.JPG",
      "/works/install-02-01.JPG",
      "/works/install-02-02.JPG",
    ],
  },
  {
    category: "install",
    title: "ติดตั้งแอร์บ้านพัก เดินท่อระยะไกล",
    detail:
      "วางแผนตำแหน่ง BTU ให้เหมาะกับพื้นที่ในห้อง เดินท่อรางเดียวระยะไกล เก็บงานเรียบ ไม่รก",
    brand: "TCL",
    size: "12,000 BTU",
    location: "บ้านพัก · ต.โคกสะอาด อ.ศรีเทพ",
    date: "มิถุนายน 2568",
    images: [
      "/works/install-03-04.JPG",
      "/works/install-03-05.JPG",
      "/works/install-03-06.JPG",
      "/works/install-03-07.JPG",
      "/works/install-03-08.JPG",
    ],
  },
  {
    category: "install",
    title: "ติดตั้งแอร์ใหม่ พร้อมจัดท่อเรียบ",
    detail:
      "ติดตั้งแอร์ใหม่พร้อมเก็บงานท่อให้ดูเป็นระเบียบ ตั้งค่าระบบและทดสอบการทำงาน สอนการใช้งานครบทุกปุ่ม",
    brand: "Mitsubishi Mr.Slim",
    size: "12,000 BTU",
    location: "บ้านพัก · อ.ศรีเทพ",
    date: "ตุลาคม 2568",
    images: [
      "/works/install-04-01.JPG",
      "/works/install-04-02.JPG",
      "/works/install-04-03.JPG",
    ],
  },
  {
    category: "install",
    title: "ติดตั้งแอร์ห้องคอมพิวเตอร์ใหม่",
    detail:
      "วางแผนตำแหน่งและทิศทางลมให้เย็นทั่วห้อง เดินท่อผ่านช่องผนังอย่างเนียน ตั้งค่าและทดสอบให้พร้อมใช้งาน",
    brand: "TCL",
    size: "18,000 BTU",
    location: "โรงเรียน · อ.ศรีเทพ",
    date: "มีนาคม 2568",
    images: [
      "/works/install-05-02.JPG",
      "/works/install-05-01.JPG",
      "/works/install-05-03.JPG",
    ],
  },
  {
    category: "clean",
    title: "ล้างแอร์บ้านพัก",
    detail:
      "Big Cleaning คอยล์เย็น–คอยล์ร้อน ฆ่าเชื้อ ไส้กรอง ลดกลิ่นอับและฝุ่นสะสม",
    brand: "Mitsubishi Mr.Slim",
    size: "4 เครื่อง · 9,000–12,000 BTU",
    location: "บ้านพัก · ต.สระกรวด อ.ศรีเทพ",
    date: "กุมภาพันธ์ 2568",
    images: [
      "/works/clean-01-01.jpg",
      "/works/clean-01-02.jpg",
      "/works/clean-01-03.jpg",
    ],
  },
];

type LightboxState = { workIdx: number; imgIdx: number };

export default function Works() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  const next = useCallback(() => {
    setLightbox((lb) => {
      if (!lb) return lb;
      const imgs = WORKS[lb.workIdx].images ?? [];
      if (imgs.length === 0) return lb;
      return { ...lb, imgIdx: (lb.imgIdx + 1) % imgs.length };
    });
  }, []);

  const prev = useCallback(() => {
    setLightbox((lb) => {
      if (!lb) return lb;
      const imgs = WORKS[lb.workIdx].images ?? [];
      if (imgs.length === 0) return lb;
      return { ...lb, imgIdx: (lb.imgIdx - 1 + imgs.length) % imgs.length };
    });
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox, close, next, prev]);

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
            <WorkCard
              key={i}
              work={w}
              onOpen={() => setLightbox({ workIdx: i, imgIdx: 0 })}
            />
          ))}
        </div>
      </div>

      {lightbox && (
        <Lightbox
          work={WORKS[lightbox.workIdx]}
          imgIdx={lightbox.imgIdx}
          onClose={close}
          onNext={next}
          onPrev={prev}
          onSelect={(i) =>
            setLightbox((lb) => (lb ? { ...lb, imgIdx: i } : lb))
          }
        />
      )}
    </section>
  );
}

function WorkCard({
  work,
  onOpen,
}: {
  work: Work;
  onOpen: () => void;
}) {
  const meta = CATEGORY_META[work.category];
  const Icon = meta.icon;
  const images = work.images ?? [];
  const hasImages = images.length > 0;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
      {/* Visual */}
      <button
        type="button"
        onClick={hasImages ? onOpen : undefined}
        disabled={!hasImages}
        className={`relative block aspect-[4/3] w-full overflow-hidden bg-gradient-to-br text-left ${meta.accent} ${
          hasImages ? "cursor-zoom-in" : "cursor-default"
        }`}
        aria-label={hasImages ? `ดูรูปผลงาน: ${work.title}` : work.title}
      >
        {hasImages ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[0]}
              alt={work.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* darken on hover */}
            <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/25" />
            {/* image count badge */}
            {images.length > 1 && (
              <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                <Images className="h-3.5 w-3.5" />
                {images.length} รูป
              </span>
            )}
            {/* "view gallery" hover hint */}
            <span className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-center pb-5 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-1.5 text-xs font-semibold text-ink-900 shadow">
                <Images className="h-4 w-4" />
                กดเพื่อดูรูปทั้งหมด
              </span>
            </span>
          </>
        ) : (
          <Placeholder icon={<Icon className="h-8 w-8" />} />
        )}

        <span
          className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 backdrop-blur ${meta.tint}`}
        >
          <Icon className="h-3.5 w-3.5" />
          {meta.label}
        </span>
      </button>

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

function Lightbox({
  work,
  imgIdx,
  onClose,
  onNext,
  onPrev,
  onSelect,
}: {
  work: Work;
  imgIdx: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelect: (i: number) => void;
}) {
  const images = work.images ?? [];
  const total = images.length;
  const current = images[imgIdx];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`รูปผลงาน: ${work.title}`}
      className="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-sm animate-fade-up"
      onClick={(e) => {
        // ปิดเมื่อคลิกพื้นที่ว่างนอกรูปหรือปุ่ม
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top bar */}
      <div className="flex flex-shrink-0 items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <div className="min-w-0 text-white">
          <div className="truncate text-sm font-semibold sm:text-base">
            {work.title}
          </div>
          <div className="truncate text-xs text-white/70">
            {imgIdx + 1} / {total} · {work.location}
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          aria-label="ปิด"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Main image area — min-h-0 สำคัญมากกับ flex-1 ให้ max-h ทำงานถูก */}
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 pb-2 sm:px-14 sm:pb-4">
        {total > 1 && (
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-4 sm:h-12 sm:w-12"
            aria-label="รูปก่อนหน้า"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        )}

        {current ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={current}
            src={current}
            alt={`${work.title} - รูปที่ ${imgIdx + 1}`}
            className="block h-auto max-h-full w-auto max-w-full rounded-lg object-contain shadow-2xl animate-fade-up sm:rounded-xl"
          />
        ) : (
          <div className="text-white/70">ไม่พบรูปภาพ</div>
        )}

        {total > 1 && (
          <button
            type="button"
            onClick={onNext}
            className="absolute right-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-4 sm:h-12 sm:w-12"
            aria-label="รูปถัดไป"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        )}
      </div>

      {/* Thumbnail strip */}
      {total > 1 && (
        <div className="flex-shrink-0 border-t border-white/10 bg-black/30 px-3 py-2 sm:px-6 sm:py-3">
          <div className="mx-auto flex max-w-full gap-2 overflow-x-auto pb-1">
            {images.map((src, i) => (
              <button
                key={src + i}
                type="button"
                onClick={() => onSelect(i)}
                className={`relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-lg ring-2 transition sm:h-16 sm:w-24 ${
                  i === imgIdx
                    ? "ring-white"
                    : "opacity-60 ring-transparent hover:opacity-90"
                }`}
                aria-label={`ดูรูปที่ ${i + 1}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Placeholder({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="relative h-full w-full">
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
