import { Facebook, MessageCircle, Phone, Snowflake } from "lucide-react";
import { SITE } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink-950 text-white/70">
      <div className="container-xy grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 text-white">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-white">
              <Snowflake className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <div>
              <div className="text-lg font-bold">{SITE.name}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                Si Thep Air Service
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed">
            {SITE.tagline} โดยทีมช่างมืออาชีพ รับประกันทุกงาน
            ครอบคลุมพื้นที่ {SITE.serviceArea}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:bg-white/10"
              aria-label="โทรหาเรา"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href={SITE.lineUrl}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:bg-white/10"
              aria-label="LINE"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href={SITE.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:bg-white/10"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-white">
            บริการ
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#services" className="hover:text-white">ติดตั้งแอร์</a></li>
            <li><a href="#services" className="hover:text-white">ล้างแอร์</a></li>
            <li><a href="#services" className="hover:text-white">ซ่อมแอร์</a></li>
            <li><a href="#services" className="hover:text-white">ย้ายแอร์ / รื้อถอน</a></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-white">
            ติดต่อ
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{SITE.phone}</li>
            <li>{SITE.email}</li>
            <li>{SITE.hours}</li>
            <li>{SITE.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-xy flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <span>© {year} {SITE.name}. All rights reserved.</span>
          <span>Built with ❤ on Next.js + Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
