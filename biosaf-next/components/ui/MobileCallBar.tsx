"use client";

import { Phone, MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";

export function MobileCallBar() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin") || pathname === "/login") {
    return null;
  }

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
      <div className="grid grid-cols-2 gap-px bg-gray-200">
        <a
          href="tel:+923422766482"
          className="flex items-center justify-center gap-2 py-3.5 bg-brand-primary text-white text-xs font-bold"
        >
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <a
          href="https://wa.me/923422766482"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 py-3.5 bg-emerald-600 text-white text-xs font-bold"
        >
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
