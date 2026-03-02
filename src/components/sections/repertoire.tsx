"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { REPERTOIRE_ITEMS } from "@/lib/constants";
import { staggerContainer, staggerItem, slideFromLeft, slideFromRight } from "@/lib/animations";

export function Repertoire() {
  return (
    <SectionWrapper id="media" className="bg-snow">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* Left: Text + Playlist */}
          <motion.div
            className="lg:w-1/2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span
              variants={staggerItem}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-ruby"
            >
              Repertoire
            </motion.span>
            <motion.h2
              variants={slideFromLeft}
              className="mt-4 font-heading text-4xl font-bold leading-tight text-ink md:text-5xl"
            >
              A Playlist for <br />
              Every Atmosphere
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="mt-6 text-[15px] leading-relaxed text-muted md:text-base"
            >
              We don&apos;t just play songs — we curate moods. From
              Bridgerton-style covers of modern hits to timeless jazz standards.
            </motion.p>

            <motion.div
              className="mt-10 space-y-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {REPERTOIRE_ITEMS.map((item, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  whileHover={{ x: 4 }}
                  className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-cloud bg-white p-4 transition-all duration-300 hover:border-silver hover:shadow-sm"
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-ruby text-white transition-transform duration-300 group-hover:scale-105">
                    <Play size={12} className="ml-0.5" fill="white" />
                  </div>
                  <span className="text-[15px] font-medium text-ink">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            className="lg:w-1/2"
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
              {/* Gradient overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Image */}
              <Image
                src="/hero-bg.jpg"
                alt="Eastern Quintet Performing"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Label overlay */}
              <div className="absolute bottom-8 left-8 z-20">
                <span className="inline-block rounded-full bg-ruby px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                  Latest
                </span>
                <h3 className="mt-3 font-heading text-2xl text-white">
                  Live at The Peninsula
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
