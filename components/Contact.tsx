"use client";

import {
  Clock,
  Facebook,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { SITE } from "@/lib/site";

export default function Contact() {
  const [state, setState] = useState<
    "idle" | "submitting" | "sent" | "error"
  >("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    // ในเวอร์ชันนี้เราเปิดลิงก์ mailto เพื่อให้ deploy ได้ทันทีโดยไม่ต้องมี backend
    const form = new FormData(e.currentTarget);
    const name = encodeURIComponent(String(form.get("name") ?? ""));
    const phone = encodeURIComponent(String(form.get("phone") ?? ""));
    const service = encodeURIComponent(String(form.get("service") ?? ""));
    const message = encodeURIComponent(String(form.get("message") ?? ""));
    const body = `ชื่อ: ${name}%0Aเบอร์: ${phone}%0Aบริการ: ${service}%0Aข้อความ: ${message}`;
    window.location.href = `mailto:${SITE.email}?subject=สอบถามบริการจากเว็บไซต์&body=${body}`;
    setTimeout(() => setState("sent"), 300);
  }

  return (
    <section id="contact" className="section bg-ink-950 text-white">
      <div className="container-xy">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Info */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/80">
              ติดต่อเรา
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              พร้อมดูแลเรื่องแอร์ของคุณ
              <br />
              <span className="text-brand-300">ตลอดทั้งสัปดาห์</span>
            </h2>
            <p className="mt-5 text-white/70">
              โทรเข้ามาปรึกษา หรือแชทผ่าน LINE เพื่อขอใบเสนอราคาได้ทันที
              ทีมงานพร้อมตอบอย่างเป็นกันเอง
            </p>

            <div className="mt-10 grid gap-4">
              <InfoRow
                icon={<Phone className="h-5 w-5" />}
                label="โทรศัพท์"
                value={SITE.phone}
                href={`tel:${SITE.phoneRaw}`}
              />
              <InfoRow
                icon={<MessageCircle className="h-5 w-5" />}
                label="LINE Official"
                value={SITE.lineId}
                href={SITE.lineUrl}
              />
              <InfoRow
                icon={<Mail className="h-5 w-5" />}
                label="อีเมล"
                value={SITE.email}
                href={`mailto:${SITE.email}`}
              />
              <InfoRow
                icon={<MapPin className="h-5 w-5" />}
                label="ที่ตั้งร้าน"
                value={SITE.address}
              />
              <InfoRow
                icon={<Clock className="h-5 w-5" />}
                label="เวลาทำการ"
                value={SITE.hours}
              />
              <InfoRow
                icon={<Facebook className="h-5 w-5" />}
                label="Facebook"
                value="ศรีเทพแอร์ Fanpage"
                href={SITE.facebookUrl}
              />
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Map"
                src={SITE.mapsEmbed}
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur sm:p-10"
            >
              <h3 className="text-2xl font-semibold">ขอใบเสนอราคาออนไลน์</h3>
              <p className="mt-2 text-sm text-white/60">
                กรอกข้อมูลเบื้องต้น ทีมงานจะติดต่อกลับภายในเวลาทำการ
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field label="ชื่อ-นามสกุล">
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="เช่น คุณสมชาย"
                    className="field"
                  />
                </Field>
                <Field label="เบอร์โทรศัพท์">
                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="08X-XXX-XXXX"
                    className="field"
                  />
                </Field>
                <Field label="บริการที่สนใจ" full>
                  <select name="service" required defaultValue="" className="field">
                    <option value="" disabled>
                      เลือกบริการ
                    </option>
                    <option value="install">ติดตั้งแอร์ใหม่</option>
                    <option value="clean">ล้างแอร์</option>
                    <option value="repair">ซ่อมแอร์</option>
                    <option value="relocate">ย้ายแอร์ / รื้อถอน</option>
                    <option value="other">อื่น ๆ</option>
                  </select>
                </Field>
                <Field label="รายละเอียดเพิ่มเติม" full>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="บอกขนาดห้อง จำนวนตัวแอร์ หรืออาการที่พบ"
                    className="field resize-y"
                  />
                </Field>
              </div>

              <button
                type="submit"
                disabled={state === "submitting"}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-400 disabled:opacity-60 sm:w-auto"
              >
                <Send className="h-4 w-4" />
                {state === "submitting" ? "กำลังส่ง..." : "ส่งคำขอ"}
              </button>

              {state === "sent" && (
                <p className="mt-4 text-sm text-brand-300">
                  ขอบคุณครับ เราได้เปิดโปรแกรมอีเมลของคุณ กรุณากดส่งอีกครั้งเพื่อยืนยัน
                </p>
              )}

              <style jsx>{`
                .field {
                  width: 100%;
                  border-radius: 12px;
                  background: rgba(255, 255, 255, 0.04);
                  border: 1px solid rgba(255, 255, 255, 0.1);
                  color: white;
                  padding: 12px 14px;
                  font-size: 14px;
                  outline: none;
                  transition: border-color 0.2s, background 0.2s;
                }
                .field::placeholder {
                  color: rgba(255, 255, 255, 0.4);
                }
                .field:focus {
                  border-color: rgba(96, 179, 249, 0.6);
                  background: rgba(255, 255, 255, 0.06);
                }
              `}</style>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  full,
  children,
}: {
  label: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/50">
        {label}
      </span>
      {children}
    </label>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-white/5 text-brand-300 ring-1 ring-white/10">
        {icon}
      </span>
      <div>
        <div className="text-xs uppercase tracking-wider text-white/50">
          {label}
        </div>
        <div className="mt-0.5 text-sm text-white">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="transition hover:opacity-80"
    >
      {content}
    </a>
  ) : (
    content
  );
}
