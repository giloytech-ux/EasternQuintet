"use client";

import { Music, Star, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SERVICES } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

const iconMap: Record<string, React.FC<{ size: number; className?: string }>> = {
  music: Music,
  star: Star,
  calendar: Calendar,
};

export function Services() {
  return (
    <SectionWrapper id="about" className="bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ruby">
            What We Do
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold text-ink md:text-5xl">
            Crafted for Every Occasion
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Music;
            return (
              <motion.div
                key={service.title}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="group relative overflow-hidden rounded-3xl border border-cloud bg-snow p-8 transition-all duration-300 hover:border-silver hover:shadow-lg"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ruby/10 text-ruby transition-colors duration-300 group-hover:bg-ruby group-hover:text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-ink">
                  {service.title}
                </h3>
                <p className="mb-6 text-[15px] leading-relaxed text-muted">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors duration-300 group-hover:text-ruby"
                >
                  Learn more <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
