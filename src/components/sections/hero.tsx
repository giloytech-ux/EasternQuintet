"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Play } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";
import { easing, duration } from "@/lib/animations";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.35], [0, -80]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex h-[85vh] items-center justify-center overflow-hidden md:h-screen"
    >
      {/* Background image with parallax zoom */}
      <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[30%_center] md:object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlay — dark at bottom, lighter top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.normal, delay: 0.3, ease: easing.smooth }}
        >
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/90 backdrop-blur-sm">
            Premium Live Entertainment
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: duration.dramatic,
            delay: 0.7,
            ease: easing.luxuryOut,
          }}
          className="mt-8 font-heading text-5xl font-bold leading-[1.1] text-white md:text-8xl"
        >
          The Sound of <br />
          <span className="italic text-white/70">Unforgettable.</span>
        </motion.h1>

        {/* Supporting paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: duration.slow,
            delay: 1.2,
            ease: easing.smooth,
          }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
        >
          Classical mastery meets modern elegance. The perfect
          soundtrack for your most important moments.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: duration.normal,
            delay: 1.6,
            ease: easing.luxuryOut,
          }}
          className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row"
        >
          <Magnetic strength={6}>
            <a
              href="#contact"
              className="ruby-glow-heavy inline-flex items-center gap-2.5 rounded-full bg-ruby px-8 py-4 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-ruby-dark"
            >
              <Calendar size={16} />
              Check Availability
            </a>
          </Magnetic>

          <Magnetic strength={6}>
            <a
              href="#media"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
            >
              <Play size={16} />
              Watch Live
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: duration.slow }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: easing.gentle,
          }}
          className="flex flex-col items-center gap-3"
        >
          <div className="h-10 w-px bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
