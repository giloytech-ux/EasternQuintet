"use client";

import { Music, Star, Calendar, ChevronRight } from "lucide-react";
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
    <SectionWrapper id="about" className="bg-onyx-900">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="grid gap-8 md:grid-cols-3"
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
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-ruby/50"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-ruby/20 text-ruby transition-colors duration-300 group-hover:bg-ruby group-hover:text-white">
                  <Icon size={24} />
                </div>
                <h3 className="mb-4 font-heading text-2xl text-white">
                  {service.title}
                </h3>
                <p className="mb-6 leading-relaxed text-smoke">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white transition-colors duration-300 group-hover:text-ruby"
                >
                  LEARN MORE <ChevronRight size={14} />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
