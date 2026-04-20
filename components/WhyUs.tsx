import {
  BadgeCheck,
  Clock,
  HeartHandshake,
  ShieldCheck,
  ThumbsUp,
  Wallet,
} from "lucide-react";

const REASONS = [
  {
    icon: BadgeCheck,
    title: "ช่างผ่านมาตรฐาน",
    desc: "ทีมช่างผ่านการอบรมและสะสมประสบการณ์จริง รู้จริงทั้งแอร์บ้านและแอร์พาณิชย์",
  },
  {
    icon: Wallet,
    title: "ราคาเป็นธรรม",
    desc: "เสนอราคาชัดเจนก่อนเริ่มงาน ไม่มีค่าใช้จ่ายแอบแฝง บอกหน้างานได้หากมีจุดเพิ่มเติม",
  },
  {
    icon: Clock,
    title: "ตรงเวลา ตอบไว",
    desc: "ติดต่อตอบกลับภายในไม่กี่นาที นัดหมายเป๊ะ ทำงานเสร็จตามเวลาที่ตกลงกัน",
  },
  {
    icon: ShieldCheck,
    title: "รับประกันทุกงาน",
    desc: "งานติดตั้งรับประกัน 6 เดือน งานซ่อมรับประกันตามประเภทการซ่อม หมดกังวลหลังส่งมอบ",
  },
  {
    icon: HeartHandshake,
    title: "ใส่ใจรายละเอียด",
    desc: "เก็บงานหลังทำทุกครั้ง ไม่ทิ้งขยะ คุยง่าย สุภาพ เห็นใจลูกค้าเสมอ",
  },
  {
    icon: ThumbsUp,
    title: "ลูกค้ารีวิวจริง",
    desc: "มีรีวิวจากลูกค้าจริงมากมายใน Google และ Facebook เปิดเผยได้เต็มที่",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="section bg-ink-50/60">
      <div className="container-xy">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow">ทำไมต้องเรา</span>
            <h2 className="heading-lg mt-4">
              คุณภาพงานที่ลูกค้ากลับมาใช้บริการซ้ำ
            </h2>
            <p className="muted mt-5 text-base leading-relaxed">
              เราเชื่อว่าการดูแลแอร์ที่ดี ไม่ได้วัดแค่วันที่ติดตั้งเสร็จ
              แต่คือวันที่ลูกค้ายังยิ้มทุกครั้งที่เปิดเครื่อง
              ศรีเทพแอร์จึงเน้นงานละเอียด ซื่อตรง และอยู่เคียงข้างลูกค้าในระยะยาว
            </p>

            <a href="#contact" className="btn-primary mt-8">
              ปรึกษาฟรี ไม่มีค่าใช้จ่าย
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {REASONS.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-ink-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <r.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink-950">
                  {r.title}
                </h3>
                <p className="muted mt-2 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
