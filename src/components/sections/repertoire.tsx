"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { REPERTOIRE_ITEMS } from "@/lib/constants";
import { staggerContainer, staggerItem, slideFromLeft, slideFromRight } from "@/lib/animations";

export function Repertoire() {
  return (
    <SectionWrapper id="media" className="bg-black">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-16 md:flex-row">
          {/* Left: Text + Playlist */}
          <motion.div
            className="md:w-1/2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              variants={slideFromLeft}
              className="mb-6 font-heading text-4xl font-bold leading-tight text-white md:text-5xl"
            >
              A Playlist for <br />
              <span className="text-ruby">Every Atmosphere</span>
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="mb-10 text-lg leading-relaxed text-smoke"
            >
              We don&apos;t just play songs; we curate moods. Whether you need
              Bridgerton-style covers of modern hits, or timeless jazz standards.
            </motion.p>

            <motion.div
              className="space-y-4"
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
                  className="flex cursor-pointer items-center gap-4 rounded-lg border border-white/5 bg-white/5 p-4 transition-colors duration-300 hover:bg-white/10"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-ruby">
                    <Play size={10} className="ml-0.5 text-white" fill="white" />
                  </div>
                  <span className="font-medium text-white">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            className="md:w-1/2"
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 shadow-2xl md:aspect-[4/5]">
              {/* Gradient overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

              {/* Image */}
              <Image
                src="/hero-bg.jpg"
                alt="Eastern Quintet Performing"
                fill
                className="object-cover transition-all duration-700 grayscale hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Label overlay */}
              <div className="absolute bottom-8 left-8 z-20">
                <p className="mb-2 text-sm font-bold tracking-widest text-ruby">
                  LATEST PERFORMANCE
                </p>
                <h3 className="font-heading text-2xl text-white">
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
