import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <a
        href={SITE.lineUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="แชทผ่าน LINE"
        className="group flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-green-600"
      >
        <MessageCircle className="h-4 w-4" />
        <span className="hidden sm:inline">LINE</span>
      </a>
      <a
        href={`tel:${SITE.phoneRaw}`}
        aria-label="โทรหาเรา"
        className="flex items-center gap-2 rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-700"
      >
        <Phone className="h-4 w-4" />
        <span className="hidden sm:inline">โทรเลย</span>
      </a>
    </div>
  );
}
