"use client";

import { useState } from "react";
import { MessageCircle, X, Phone, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Magnetic } from "@/components/ui/magnetic";
import { easing, duration } from "@/lib/animations";

const CHAT_OPTIONS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/1234567890",
    icon: MessageCircle,
    color: "text-whatsapp",
    bg: "bg-whatsapp/20",
  },
  {
    label: "Viber",
    href: "viber://chat?number=1234567890",
    icon: Phone,
    color: "text-viber",
    bg: "bg-viber/20",
  },
  {
    label: "Messenger",
    href: "https://m.me/easternquintet",
    icon: MessageSquare,
    color: "text-messenger",
    bg: "bg-messenger/20",
  },
];

export function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: duration.fast, ease: easing.smooth }}
            className="glass mb-2 flex flex-col gap-3 rounded-2xl p-4"
          >
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted">Chat with us</p>
            {CHAT_OPTIONS.map((opt) => (
              <a
                key={opt.label}
                href={opt.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-300 hover:bg-snow"
              >
                <div className={`flex h-8 w-8 items-center justify-center rounded-full ${opt.bg}`}>
                  <opt.icon size={14} className={opt.color} />
                </div>
                <span className="text-sm text-charcoal">{opt.label}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <Magnetic strength={6}>
        <button
          onClick={() => setOpen(!open)}
          className="ruby-glow flex h-12 w-12 items-center justify-center rounded-full bg-ruby transition-all duration-300 hover:bg-ruby-dark hover:scale-105 active:scale-95"
          aria-label="Open chat options"
        >
          {open ? (
            <X size={20} className="text-white" />
          ) : (
            <MessageCircle size={20} className="text-white" />
          )}
        </button>
      </Magnetic>
    </div>
  );
}
