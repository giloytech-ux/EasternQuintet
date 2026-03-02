"use client";

import { useState, FormEvent } from "react";
import { Send, MessageCircle, Phone, Video, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EVENT_TYPES } from "@/lib/constants";
import { BookingFormData } from "@/types";
import { staggerContainer, staggerItem } from "@/lib/animations";

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
    "w-full rounded-2xl border border-cloud bg-snow px-5 py-4 text-sm text-ink placeholder:text-muted-light focus:border-ruby/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ruby/10 transition-all duration-300";

  return (
    <SectionWrapper id="contact" className="bg-white">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ruby">
            Get In Touch
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold text-ink md:text-5xl">
            Book Your Event
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Tell us about your vision and we&apos;ll craft the perfect musical experience.
          </p>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Booking Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={staggerItem} className="grid gap-4 sm:grid-cols-2">
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
            <motion.div variants={staggerItem} className="grid gap-4 sm:grid-cols-2">
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
            <motion.div variants={staggerItem} className="pt-2">
              <button
                type="submit"
                className="ruby-glow-heavy inline-flex items-center gap-2.5 rounded-full bg-ruby px-8 py-4 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-ruby-dark"
              >
                <Send size={14} />
                Send Inquiry
                <ArrowRight size={14} />
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
              className="text-xl font-bold text-ink md:text-2xl"
            >
              Prefer to talk directly?
            </motion.h3>
            <motion.p variants={staggerItem} className="mt-2 text-[15px] text-muted">
              Reach out via your preferred platform — we respond within the hour.
            </motion.p>
            <div className="mt-8 flex flex-col gap-3">
              <motion.a
                variants={staggerItem}
                whileHover={{ y: -2 }}
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-cloud bg-snow px-5 py-4 transition-all duration-300 hover:border-whatsapp/30 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-whatsapp/10 text-whatsapp">
                  <MessageCircle size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-ink">WhatsApp</p>
                  <p className="text-xs text-muted">Chat with us instantly</p>
                </div>
                <ArrowRight size={16} className="text-muted-light transition-all duration-300 group-hover:translate-x-1 group-hover:text-whatsapp" />
              </motion.a>
              <motion.a
                variants={staggerItem}
                whileHover={{ y: -2 }}
                href="viber://chat?number=1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-cloud bg-snow px-5 py-4 transition-all duration-300 hover:border-viber/30 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-viber/10 text-viber">
                  <Phone size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-ink">Viber</p>
                  <p className="text-xs text-muted">Message us on Viber</p>
                </div>
                <ArrowRight size={16} className="text-muted-light transition-all duration-300 group-hover:translate-x-1 group-hover:text-viber" />
              </motion.a>
              <motion.a
                variants={staggerItem}
                whileHover={{ y: -2 }}
                href="https://zoom.us"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-cloud bg-snow px-5 py-4 transition-all duration-300 hover:border-messenger/30 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-messenger/10 text-messenger">
                  <Video size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-ink">Zoom</p>
                  <p className="text-xs text-muted">Schedule a video call</p>
                </div>
                <ArrowRight size={16} className="text-muted-light transition-all duration-300 group-hover:translate-x-1 group-hover:text-messenger" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
