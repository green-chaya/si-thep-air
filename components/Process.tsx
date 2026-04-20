const STEPS = [
  {
    n: "01",
    title: "โทร / แชทเข้ามา",
    desc: "แจ้งอาการหรือความต้องการ เราประเมินเบื้องต้นและแนะนำแนวทางทันที",
  },
  {
    n: "02",
    title: "สำรวจหน้างาน",
    desc: "นัดวัน/เวลา ช่างเข้าไปดูพื้นที่จริงและเสนอราคาตามหน้างานที่เหมาะสม",
  },
  {
    n: "03",
    title: "เริ่มงานโดยทีมช่าง",
    desc: "ใช้อุปกรณ์ครบชุด ทำงานเรียบร้อย ปลอดภัย ตรงเวลา และสื่อสารทุกขั้นตอน",
  },
  {
    n: "04",
    title: "ตรวจรับ + รับประกัน",
    desc: "ทดสอบการทำงานของแอร์ ตรวจความเรียบร้อยร่วมกัน พร้อมใบรับประกันงาน",
  },
];

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container-xy">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">ขั้นตอนการทำงาน</span>
          <h2 className="heading-lg mt-4">โปร่งใส เข้าใจง่าย ใน 4 ขั้นตอน</h2>
          <p className="muted mt-4">
            ตั้งแต่ทักแชทครั้งแรก จนถึงวันที่ส่งมอบงาน ทุกขั้นตอนถูกออกแบบให้ลูกค้าสบายใจ
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.n} className="relative">
              <div className="card h-full">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-brand-600">
                    {s.n}
                  </span>
                  <span className="h-px flex-1 bg-ink-100" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink-950">
                  {s.title}
                </h3>
                <p className="muted mt-2 text-sm leading-relaxed">{s.desc}</p>
              </div>
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-brand-300 to-transparent lg:block"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
