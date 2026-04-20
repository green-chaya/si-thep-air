import {
  ArrowRight,
  BadgeCheck,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-white pt-28 sm:pt-32 lg:pt-36"
    >
      {/* decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-dotted opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 -z-10 h-96 w-96 rounded-full bg-brand-200 blur-3xl opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-60 -z-10 h-96 w-96 rounded-full bg-brand-300/60 blur-3xl opacity-50"
      />

      <div className="container-xy grid items-center gap-12 pb-16 lg:grid-cols-12 lg:gap-16 lg:pb-24">
        <div className="lg:col-span-7">
          <span className="eyebrow animate-fade-up">
            <Sparkles className="h-3.5 w-3.5" />
            ช่างมืออาชีพ · รับประกันทุกงาน
          </span>

          <h1 className="heading-xl mt-5 animate-fade-up [animation-delay:80ms]">
            แอร์เย็นฉ่ำ สบายบ้าน
            <br />
            ดูแลโดย{" "}
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              ศรีเทพแอร์
            </span>
          </h1>

          <p className="muted mt-6 max-w-xl text-base leading-relaxed animate-fade-up [animation-delay:160ms] sm:text-lg">
            บริการครบวงจร — <strong className="text-ink-800">ติดตั้ง ล้าง ซ่อม ย้ายแอร์</strong>{" "}
            ทุกยี่ห้อ โดยทีมช่างที่ผ่านงานจริงกว่า 20+ ปี
            ตอบเร็ว ประเมินหน้างานฟรี ไม่มีค่าใช้จ่ายแอบแฝง
          </p>

          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up [animation-delay:240ms]">
            <a href={`tel:${SITE.phoneRaw}`} className="btn-primary">
              <Phone className="h-4 w-4" />
              โทรเลย {SITE.phone}
            </a>
            <a
              href={SITE.lineUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <MessageCircle className="h-4 w-4 text-green-600" />
              แชทผ่าน LINE
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-ink-100 pt-8 animate-fade-up [animation-delay:320ms]">
            {[
              { k: "20+", v: "ปีประสบการณ์" },
              { k: "5,000+", v: "งานที่ส่งมอบ" },
              { k: "ฟรี", v: "ประเมินหน้างาน" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-2xl font-bold text-ink-950 sm:text-3xl">{s.k}</dt>
                <dd className="text-xs text-ink-500 sm:text-sm">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Hero Visual */}
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto w-full max-w-md animate-fade-up [animation-delay:180ms]">
            {/* Card stack */}
            <div className="absolute -left-6 -top-6 hidden h-72 w-72 rounded-[32px] bg-brand-100/80 sm:block" />
            <div className="absolute -right-4 bottom-8 hidden h-40 w-40 rounded-[24px] bg-brand-200/80 sm:block" />

            <div className="relative overflow-hidden rounded-[28px] border border-ink-100 bg-white p-7 shadow-glow">
              {/* AC unit illustration */}
              <div className="rounded-2xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-medium uppercase tracking-wider opacity-80">
                    Indoor Unit
                  </div>
                  <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-medium backdrop-blur">
                    ONLINE
                  </span>
                </div>
                <div className="mt-8 flex items-end justify-between">
                  <div>
                    <div className="text-5xl font-bold leading-none">24°</div>
                    <div className="mt-1 text-xs opacity-80">อุณหภูมิห้อง</div>
                  </div>
                  <div className="space-y-1 text-right text-xs opacity-90">
                    <div>Cool Mode</div>
                    <div>Fan • Auto</div>
                    <div>Eco: On</div>
                  </div>
                </div>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/20">
                  <div className="h-full w-2/3 rounded-full bg-white/80 animate-pulse-slow" />
                </div>
              </div>

              {/* feature pills */}
              <div className="mt-6 space-y-3">
                <FeatureRow
                  icon={<ShieldCheck className="h-4 w-4" />}
                  title="รับประกันงานติดตั้ง"
                  detail="6 เดือน"
                />
                <FeatureRow
                  icon={<Wrench className="h-4 w-4" />}
                  title="ประเมินหน้างานฟรี"
                  detail="ในพื้นที่บริการ"
                />
                <FeatureRow
                  icon={<BadgeCheck className="h-4 w-4" />}
                  title="ช่างผ่านการรับรอง"
                  detail="มาตรฐานอุตสาหกรรม"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureRow({
  icon,
  title,
  detail,
}: {
  icon: React.ReactNode;
  title: string;
  detail: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-ink-50 px-4 py-3">
      <div className="flex items-center gap-3">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-100 text-brand-700">
          {icon}
        </span>
        <span className="text-sm font-medium text-ink-800">{title}</span>
      </div>
      <span className="text-xs font-semibold text-ink-500">{detail}</span>
    </div>
  );
}
