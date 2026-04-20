"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS = [
  {
    q: "ล้างแอร์ควรทำบ่อยแค่ไหน?",
    a: "แนะนำให้ล้างแอร์ทุก 6 เดือน สำหรับบ้านทั่วไป และทุก 3–4 เดือนสำหรับร้านค้า/สำนักงานที่ใช้งานหนัก เพื่อลดฝุ่น กลิ่นอับ และช่วยให้แอร์เย็นเร็ว ประหยัดไฟ",
  },
  {
    q: "บริการครอบคลุมพื้นที่ไหนบ้าง?",
    a: "ให้บริการในเขตอำเภอศรีเทพและอำเภอใกล้เคียง หากอยู่นอกพื้นที่ สามารถสอบถามค่าเดินทางก่อนได้ เรายินดีให้บริการครับ",
  },
  {
    q: "ติดตั้งแอร์ใหม่รอนานกี่วัน?",
    a: "โดยทั่วไปสามารถเข้าไปดูหน้างานและนัดติดตั้งได้ภายใน 1–3 วันทำการ กรณีเร่งด่วนแจ้งล่วงหน้าได้ เราจะพยายามจัดคิวให้เร็วที่สุด",
  },
  {
    q: "รับประกันงานอย่างไร?",
    a: "งานติดตั้งแอร์ใหม่รับประกันการติดตั้ง 6 เดือน งานล้าง/ซ่อมรับประกันตามประเภทของอาการและอะไหล่ที่ใช้ มีเอกสารรับประกันให้ลูกค้าชัดเจน",
  },
  {
    q: "ชำระเงินอย่างไรได้บ้าง?",
    a: "รับชำระได้ทั้งเงินสด และโอนผ่านธนาคาร/พร้อมเพย์ ออกใบเสร็จ/ใบกำกับภาษีได้ตามต้องการ",
  },
  {
    q: "ถ้ามีปัญหาหลังติดตั้งต้องทำอย่างไร?",
    a: "แจ้งกลับมาทาง LINE หรือโทรศัพท์ได้ทันที เรามีทีมช่างติดตามงานหลังการขาย หากอยู่ในระยะรับประกันไม่มีค่าใช้จ่ายเพิ่มเติมครับ",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <div className="container-xy grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="eyebrow">คำถามที่พบบ่อย</span>
          <h2 className="heading-lg mt-4">มีคำถาม? เรามีคำตอบ</h2>
          <p className="muted mt-5 leading-relaxed">
            ไม่ว่าคุณจะสงสัยเรื่องการบริการ ราคา หรือรับประกัน
            เราได้รวบรวมคำถามยอดฮิตไว้ด้านนี้ ถ้าไม่เจอคำตอบ
            ทักมาคุยกับเราได้ทุกช่องทางครับ
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7"
                  >
                    <span className="text-base font-semibold text-ink-900 sm:text-lg">
                      {f.q}
                    </span>
                    <span
                      className={`grid h-8 w-8 flex-none place-items-center rounded-full border border-ink-200 text-ink-600 transition ${
                        isOpen ? "rotate-180 border-brand-300 text-brand-700" : ""
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-ink-600 sm:px-7 sm:text-base">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
