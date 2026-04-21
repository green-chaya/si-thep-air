"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, Snowflake, X } from "lucide-react";
import { SITE } from "@/lib/site";

const NAV_LINKS = [
  { href: "#services", label: "บริการ" },
  { href: "#why", label: "ทำไมต้องเรา" },
  { href: "#process", label: "ขั้นตอน" },
  { href: "#works", label: "ผลงาน" },
  { href: "#btu-calculator", label: "คำนวณ BTU" },
  { href: "#faq", label: "คำถาม" },
  { href: "#contact", label: "ติดต่อ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-100 bg-white/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-xy flex h-16 items-center justify-between sm:h-20">
        <a href="#home" className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-white shadow-glow">
            <Snowflake className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <div className="leading-tight">
            <div className="text-base font-bold tracking-tight text-ink-950 sm:text-lg">
              ศรีเทพแอร์
            </div>
            <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-brand-600 sm:text-xs">
              Si Thep Air Service
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-700 transition hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="hidden items-center gap-2 rounded-full bg-ink-50 px-4 py-2 text-sm font-semibold text-ink-900 transition hover:bg-ink-100 sm:inline-flex"
          >
            <Phone className="h-4 w-4 text-brand-600" />
            {SITE.phone}
          </a>
          <a href="#contact" className="btn-primary hidden sm:inline-flex">
            ขอใบเสนอราคา
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-ink-200 text-ink-800 lg:hidden"
            aria-label="เปิดเมนู"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`lg:hidden ${
          open ? "max-h-[480px]" : "max-h-0"
        } overflow-hidden bg-white/95 backdrop-blur transition-[max-height] duration-300`}
      >
        <div className="container-xy flex flex-col gap-1 border-t border-ink-100 py-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-800 hover:bg-ink-50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 w-full"
          >
            ขอใบเสนอราคา
          </a>
        </div>
      </div>
    </header>
  );
}
