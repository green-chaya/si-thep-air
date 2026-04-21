"use client";

import { useMemo, useState } from "react";
import {
  Bed,
  Briefcase,
  Building2,
  Calculator,
  ChefHat,
  MessageCircle,
  Minus,
  Phone,
  Plus,
  Ruler,
  Sofa,
  Sun,
  SunDim,
  SunMedium,
  type LucideIcon,
} from "lucide-react";
import { SITE } from "@/lib/site";

/** ประเภทห้อง */
type RoomType = "bedroom" | "living" | "office" | "kitchen" | "commercial";
type SunExposure = "low" | "medium" | "high";

const ROOM_TYPES: Array<{
  id: RoomType;
  label: string;
  sub: string;
  btuPerSqm: number;
  baselinePeople: number;
  icon: LucideIcon;
}> = [
    {
      id: "bedroom",
      label: "ห้องนอน",
      sub: "ใช้พักผ่อน ไม่มีคนเยอะ",
      btuPerSqm: 700,
      baselinePeople: 2,
      icon: Bed,
    },
    {
      id: "living",
      label: "ห้องนั่งเล่น",
      sub: "รวมญาติ ดูทีวี",
      btuPerSqm: 800,
      baselinePeople: 4,
      icon: Sofa,
    },
    {
      id: "office",
      label: "สำนักงาน",
      sub: "ทำงาน มีอุปกรณ์",
      btuPerSqm: 850,
      baselinePeople: 4,
      icon: Briefcase,
    },
    {
      id: "kitchen",
      label: "ครัว",
      sub: "ความร้อนสูง",
      btuPerSqm: 1000,
      baselinePeople: 2,
      icon: ChefHat,
    },
    {
      id: "commercial",
      label: "ร้านค้า/ร้านอาหาร",
      sub: "คนเข้า-ออกบ่อย",
      btuPerSqm: 900,
      baselinePeople: 6,
      icon: Building2,
    },
  ];

const SUN_OPTIONS: Array<{
  id: SunExposure;
  label: string;
  hint: string;
  factor: number;
  icon: LucideIcon;
}> = [
    {
      id: "low",
      label: "น้อย",
      hint: "ทิศเหนือ / มีเงาตลอดวัน",
      factor: 0.9,
      icon: SunDim,
    },
    {
      id: "medium",
      label: "ปานกลาง",
      hint: "แสงเข้าบางช่วงเวลา",
      factor: 1.0,
      icon: SunMedium,
    },
    {
      id: "high",
      label: "มาก",
      hint: "ทิศใต้-ตะวันตก แดดบ่ายเต็ม",
      factor: 1.15,
      icon: Sun,
    },
  ];

/** ขนาดแอร์มาตรฐานในตลาดไทย (BTU) */
const STANDARD_SIZES = [
  9000, 12000, 13000, 15000, 18000, 20000, 24000, 30000, 36000, 40000, 48000,
  60000,
];

function recommend(btu: number): number {
  const found = STANDARD_SIZES.find((s) => s >= btu);
  return found ?? STANDARD_SIZES[STANDARD_SIZES.length - 1];
}

function formatBtu(n: number) {
  return n.toLocaleString("en-US");
}

export default function BtuCalculator() {
  // inputs
  const [roomType, setRoomType] = useState<RoomType>("bedroom");
  const [width, setWidth] = useState<string>("4");
  const [length, setLength] = useState<string>("5");
  const [ceilingHigh, setCeilingHigh] = useState(false);
  const [sun, setSun] = useState<SunExposure>("medium");
  const [topFloor, setTopFloor] = useState(false);
  const [people, setPeople] = useState(2);
  const [devices, setDevices] = useState(1);

  const w = parseFloat(width) || 0;
  const l = parseFloat(length) || 0;
  const area = Math.max(0, w * l);

  const room = ROOM_TYPES.find((r) => r.id === roomType)!;
  const sunOpt = SUN_OPTIONS.find((s) => s.id === sun)!;

  const result = useMemo(() => {
    if (area <= 0) {
      return { base: 0, total: 0, recommended: 0 };
    }
    const ceilingFactor = ceilingHigh ? 1.2 : 1.0;
    const floorFactor = topFloor ? 1.1 : 1.0;
    const extraPeople = Math.max(0, people - room.baselinePeople);

    const base = area * room.btuPerSqm;
    const adjusted = base * ceilingFactor * sunOpt.factor * floorFactor;
    const total = Math.round(
      adjusted + extraPeople * 600 + devices * 500,
    );
    return {
      base: Math.round(base),
      total,
      recommended: recommend(total),
    };
  }, [
    area,
    room.btuPerSqm,
    room.baselinePeople,
    sunOpt.factor,
    ceilingHigh,
    topFloor,
    people,
    devices,
  ]);

  const hasResult = area > 0;

  return (
    <section
      id="btu-calculator"
      className="section relative overflow-hidden bg-gradient-to-b from-white via-brand-50/40 to-white"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-brand-200/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-20 -z-10 h-72 w-72 rounded-full bg-brand-300/40 blur-3xl"
      />

      <div className="container-xy">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">
            <Calculator className="h-3.5 w-3.5" />
            เครื่องมือคำนวณ
          </span>
          <h2 className="heading-lg mt-4">คำนวณ BTU ที่เหมาะกับห้องคุณ</h2>
          <p className="muted mx-auto mt-4 max-w-2xl">
            กรอกขนาดและสภาพห้องของคุณ
            ระบบจะคำนวณ BTU ที่เหมาะสมและแนะนำขนาดแอร์ตามมาตรฐานให้ทันที
            — ช่วยเลือกให้เย็นพอดี ไม่ต้องจ่ายเกินจริง
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft sm:p-8">
              {/* Room type */}
              <FieldGroup
                label="ประเภทห้อง"
                hint="ความต้องการทำความเย็นต่างกันตามการใช้งาน"
              >
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
                  {ROOM_TYPES.map((r) => {
                    const Icon = r.icon;
                    const active = r.id === roomType;
                    return (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => setRoomType(r.id)}
                        className={`flex flex-col items-start gap-1 rounded-xl border p-3 text-left transition ${active
                            ? "border-brand-500 bg-brand-50 text-brand-700 ring-1 ring-brand-200"
                            : "border-ink-100 bg-white text-ink-700 hover:border-brand-200 hover:bg-brand-50/40"
                          }`}
                      >
                        <span
                          className={`grid h-8 w-8 place-items-center rounded-lg ${active
                              ? "bg-brand-600 text-white"
                              : "bg-ink-50 text-ink-500"
                            }`}
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="text-sm font-semibold">{r.label}</span>
                        <span className="text-[11px] leading-tight text-ink-500">
                          {r.sub}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </FieldGroup>

              {/* Size */}
              <FieldGroup label="ขนาดห้อง" hint="กว้าง × ยาว (เมตร)">
                <div className="grid grid-cols-2 gap-3">
                  <NumberField
                    label="กว้าง (ม.)"
                    value={width}
                    onChange={setWidth}
                  />
                  <NumberField
                    label="ยาว (ม.)"
                    value={length}
                    onChange={setLength}
                  />
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-ink-500">
                  <Ruler className="h-3.5 w-3.5" />
                  พื้นที่ห้อง:{" "}
                  <strong className="text-ink-800">
                    {area > 0 ? `${area.toFixed(1)} ตร.ม.` : "-"}
                  </strong>
                </div>
              </FieldGroup>

              {/* Sun exposure */}
              <FieldGroup
                label="แสงแดดที่กระทบห้อง"
                hint="ห้องรับแดดมาก แอร์ต้องทำงานหนักขึ้น"
              >
                <div className="grid grid-cols-3 gap-2">
                  {SUN_OPTIONS.map((s) => {
                    const Icon = s.icon;
                    const active = s.id === sun;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSun(s.id)}
                        className={`flex flex-col items-center gap-1 rounded-xl border p-3 text-center transition ${active
                            ? "border-brand-500 bg-brand-50 text-brand-700 ring-1 ring-brand-200"
                            : "border-ink-100 bg-white text-ink-700 hover:border-brand-200 hover:bg-brand-50/40"
                          }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="text-sm font-semibold">{s.label}</span>
                        <span className="text-[11px] leading-tight text-ink-500">
                          {s.hint}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </FieldGroup>

              {/* Toggles: ceiling, top floor */}
              <FieldGroup label="ลักษณะห้อง">
                <div className="grid gap-3 sm:grid-cols-2">
                  <ToggleRow
                    title="เพดานสูงกว่า 3 เมตร"
                    hint="เช่น บ้านเพดานโปร่ง / double volume"
                    value={ceilingHigh}
                    onChange={setCeilingHigh}
                  />
                  <ToggleRow
                    title="ห้องอยู่ชั้นบนสุด / โดนหลังคา"
                    hint="รับความร้อนจากหลังคาโดยตรง"
                    value={topFloor}
                    onChange={setTopFloor}
                  />
                </div>
              </FieldGroup>

              {/* People / devices */}
              <FieldGroup label="การใช้งาน">
                <div className="grid gap-3 sm:grid-cols-2">
                  <Stepper
                    label="จำนวนคนในห้อง (ปกติ)"
                    value={people}
                    onChange={setPeople}
                    min={1}
                    max={30}
                  />
                  <Stepper
                    label="อุปกรณ์ให้ความร้อน (TV/PC/เตา)"
                    value={devices}
                    onChange={setDevices}
                    min={0}
                    max={20}
                  />
                </div>
              </FieldGroup>

              <p className="mt-4 text-xs text-ink-500">
                * ผลลัพธ์เป็นการประเมินเบื้องต้นตามมาตรฐานทั่วไป
                หน้างานจริงอาจมีปัจจัยอื่น ควรให้ช่างตรวจยืนยันอีกครั้ง
              </p>
            </div>
          </div>

          {/* Result */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 space-y-4">
              <div className="overflow-hidden rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 p-6 text-white shadow-glow sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  BTU ที่คำนวณได้
                </p>
                <div className="mt-2 flex items-end gap-2">
                  <span className="text-5xl font-extrabold leading-none sm:text-6xl">
                    {hasResult ? formatBtu(result.total) : "—"}
                  </span>
                  <span className="pb-1 text-sm font-medium text-white/80">
                    BTU/hr
                  </span>
                </div>

                <div className="my-6 h-px bg-white/15" />

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  ขนาดแอร์ที่แนะนำ
                </p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-bold sm:text-4xl">
                    {hasResult ? formatBtu(result.recommended) : "—"}
                  </span>
                  <span className="text-sm text-white/80">BTU</span>
                </div>
                <p className="mt-1 text-xs text-white/80">
                  {hasResult
                    ? `เลือกรุ่นที่มี BTU ใกล้เคียง ${formatBtu(
                      result.recommended,
                    )} ขึ้นไป`
                    : "กรอกขนาดห้องเพื่อคำนวณ"}
                </p>

                {/* factor breakdown */}
                {hasResult && (
                  <dl className="mt-6 space-y-2 text-xs text-white/85">
                    <Row
                      k="ประเภทห้อง"
                      v={`${room.label} (${room.btuPerSqm} BTU/ตร.ม.)`}
                    />
                    <Row k="พื้นที่" v={`${area.toFixed(1)} ตร.ม.`} />
                    <Row k="แดด" v={`${sunOpt.label} (×${sunOpt.factor})`} />
                    {ceilingHigh && <Row k="เพดานสูง" v="×1.2" />}
                    {topFloor && <Row k="ชั้นบนสุด" v="×1.1" />}
                    {people > room.baselinePeople && (
                      <Row
                        k="คนเพิ่ม"
                        v={`+${(people - room.baselinePeople) * 600
                          } BTU`}
                      />
                    )}
                    {devices > 0 && (
                      <Row
                        k="อุปกรณ์ให้ความร้อน"
                        v={`+${devices * 500} BTU`}
                      />
                    )}
                  </dl>
                )}
              </div>

              {/* CTA */}
              <div className="rounded-2xl border border-ink-100 bg-white p-5 shadow-soft">
                <p className="text-sm font-semibold text-ink-900">
                  อยากให้ช่างยืนยัน BTU และเสนอราคา?
                </p>
                <p className="mt-1 text-xs text-ink-500">
                  ปรึกษาฟรี ประเมินหน้างานในพื้นที่บริการ
                </p>
                {/* เปลี่ยน flex-wrap เป็น flex-col sm:flex-row */}
                <div className="mt-3 flex flex-col sm:flex-row gap-2">
                  <a
                    href={`tel:${SITE.phoneRaw}`}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ink-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-ink-800"
                  >
                    <Phone className="h-4 w-4" />
                    โทร {SITE.phone}
                  </a>
                  <a
                    href={SITE.lineUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2.5 text-sm font-semibold text-ink-900 transition hover:border-brand-300 hover:text-brand-700"
                  >
                    <MessageCircle className="h-4 w-4 text-green-600" />
                    แชท LINE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- UI helpers ---------------------- */

function FieldGroup({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <h3 className="text-sm font-semibold text-ink-900">{label}</h3>
        {hint && <span className="text-xs text-ink-500">{hint}</span>}
      </div>
      {children}
    </div>
  );
}

function NumberField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-ink-600">
        {label}
      </span>
      <input
        type="number"
        inputMode="decimal"
        min="0"
        step="0.1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-ink-200 bg-white px-3 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
      />
    </label>
  );
}

function ToggleRow({
  title,
  hint,
  value,
  onChange,
}: {
  title: string;
  hint?: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!value)}
      className={`flex items-start justify-between gap-3 rounded-xl border p-3 text-left transition ${value
          ? "border-brand-500 bg-brand-50 ring-1 ring-brand-200"
          : "border-ink-100 bg-white hover:border-brand-200 hover:bg-brand-50/40"
        }`}
    >
      <div className="min-w-0">
        <div
          className={`text-sm font-semibold ${value ? "text-brand-700" : "text-ink-800"
            }`}
        >
          {title}
        </div>
        {hint && (
          <div className="mt-0.5 text-[11px] leading-snug text-ink-500">
            {hint}
          </div>
        )}
      </div>
      <span
        className={`mt-0.5 grid h-6 w-10 flex-shrink-0 place-items-start rounded-full p-0.5 transition ${value ? "bg-brand-600" : "bg-ink-200"
          }`}
      >
        <span
          className={`block h-5 w-5 rounded-full bg-white shadow transition-transform ${value ? "translate-x-4" : "translate-x-0"
            }`}
        />
      </span>
    </button>
  );
}

function Stepper({
  label,
  value,
  onChange,
  min = 0,
  max = 99,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
}) {
  const clamp = (n: number) => Math.min(max, Math.max(min, n));
  return (
    <div className="rounded-xl border border-ink-100 bg-white p-3">
      <div className="mb-2 text-xs font-medium text-ink-600">{label}</div>
      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => onChange(clamp(value - 1))}
          className="grid h-9 w-9 place-items-center rounded-lg bg-ink-50 text-ink-700 transition hover:bg-ink-100"
          aria-label="ลด"
        >
          <Minus className="h-4 w-4" />
        </button>
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          onChange={(e) =>
            onChange(clamp(parseInt(e.target.value || "0", 10)))
          }
          className="w-full rounded-lg border border-ink-200 bg-white px-3 py-1.5 text-center text-base font-semibold text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
        />
        <button
          type="button"
          onClick={() => onChange(clamp(value + 1))}
          className="grid h-9 w-9 place-items-center rounded-lg bg-ink-50 text-ink-700 transition hover:bg-ink-100"
          aria-label="เพิ่ม"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt>{k}</dt>
      <dd className="font-semibold text-white">{v}</dd>
    </div>
  );
}
