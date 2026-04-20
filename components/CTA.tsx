import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export default function CTA() {
  return (
    <section className="section pt-0">
      <div className="container-xy">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 px-6 py-14 text-white sm:px-14 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-16 -left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                แอร์ไม่เย็น? ติดตั้งใหม่? ย้ายบ้าน?
              </h3>
              <p className="mt-4 text-white/80 sm:text-lg">
                แจ้งปัญหาเข้ามาได้ตลอด เราประเมินเบื้องต้นให้ฟรี พร้อมเข้าหน้างานในวันเดียวกัน*
              </p>
              <p className="mt-2 text-xs text-white/60">*ภายในพื้นที่บริการและตามคิวหน้างาน</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-50"
              >
                <Phone className="h-4 w-4" />
                โทร {SITE.phone}
              </a>
              <a
                href={SITE.lineUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                <MessageCircle className="h-4 w-4" />
                แชท LINE
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
