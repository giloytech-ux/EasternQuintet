"use client";

import { useState, FormEvent } from "react";
import { Send, MessageCircle, Phone, Video } from "lucide-react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EVENT_TYPES } from "@/lib/constants";
import { BookingFormData } from "@/types";
import { staggerContainer, staggerItem, lineExpand } from "@/lib/animations";

export function Contact() {
  const [form, setForm] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    venue: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Booking inquiry submitted:", form);
    alert("Thank you! Your inquiry has been received. We'll be in touch soon.");
    setForm({
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      venue: "",
      eventType: "",
      message: "",
    });
  };

  const inputClass =
    "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-ivory placeholder:text-muted focus:border-ruby/50 focus:outline-none focus:ring-1 focus:ring-ruby/30 transition-all duration-300 backdrop-blur-sm";

  return (
    <SectionWrapper id="contact" className="bg-onyx-900">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            variants={staggerItem}
            className="text-xs font-medium tracking-[0.3em] uppercase text-ruby"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="mt-6 font-heading text-4xl font-bold text-white md:text-5xl"
          >
            Book Your Event
          </motion.h2>
          <motion.div
            variants={lineExpand}
            className="mt-6 mx-auto h-px w-16 origin-center bg-ruby/40"
          />
        </motion.div>

        <div className="mt-20 grid gap-16 lg:grid-cols-2">
          {/* Booking Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={staggerItem} className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name *"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
              <input
                type="email"
                placeholder="Email Address *"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
            </motion.div>
            <motion.div variants={staggerItem} className="grid gap-5 sm:grid-cols-2">
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
              />
              <input
                type="date"
                required
                value={form.eventDate}
                onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
                className={inputClass}
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <input
                type="text"
                placeholder="Venue / Location"
                value={form.venue}
                onChange={(e) => setForm({ ...form, venue: e.target.value })}
                className={inputClass}
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <select
                required
                value={form.eventType}
                onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                className={inputClass}
              >
                <option value="" disabled>
                  Select Event Type *
                </option>
                {EVENT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </motion.div>
            <motion.div variants={staggerItem}>
              <textarea
                placeholder="Tell us about your event..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={inputClass + " resize-none"}
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <button
                type="submit"
                className="ruby-glow-heavy inline-flex items-center gap-2 rounded-full bg-ruby px-8 py-4 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:bg-ruby-dark"
              >
                <Send size={14} />
                SEND INQUIRY
              </button>
            </motion.div>
          </motion.form>

          {/* Direct Connect */}
          <motion.div
            className="flex flex-col justify-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3
              variants={staggerItem}
              className="font-heading text-2xl font-bold text-white md:text-3xl"
            >
              Prefer to talk directly?
            </motion.h3>
            <motion.p variants={staggerItem} className="mt-3 text-smoke">
              Reach out via your preferred messaging platform and we&apos;ll
              respond within the hour.
            </motion.p>
            <div className="mt-10 flex flex-col gap-4">
              <motion.a
                variants={staggerItem}
                whileHover={{ y: -2 }}
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:border-whatsapp/50 hover:bg-white/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp/20 text-whatsapp">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">WhatsApp</p>
                  <p className="text-xs text-muted">Chat with us instantly</p>
                </div>
              </motion.a>
              <motion.a
                variants={staggerItem}
                whileHover={{ y: -2 }}
                href="viber://chat?number=1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:border-viber/50 hover:bg-white/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-viber/20 text-viber">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Viber</p>
                  <p className="text-xs text-muted">Message us on Viber</p>
                </div>
              </motion.a>
              <motion.a
                variants={staggerItem}
                whileHover={{ y: -2 }}
                href="https://zoom.us"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:border-messenger/50 hover:bg-white/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-messenger/20 text-messenger">
                  <Video size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Zoom</p>
                  <p className="text-xs text-muted">Schedule a video call</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
