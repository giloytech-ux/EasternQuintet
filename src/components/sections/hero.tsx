"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Play } from "lucide-react";
import { TextReveal } from "@/components/ui/text-reveal";
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
  const glowScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.3]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5], [0.2, 0.05]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="film-grain relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* Layer 1: Abstract radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#2a0a0f_0%,_#0f0f0f_50%,_#000000_100%)]" />

      {/* Layer 2: Ruby glow orb — the "jewel" */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-ruby blur-[150px]"
        style={{ scale: glowScale, opacity: glowOpacity }}
      />

      {/* Layer 3: Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Subtitle */}
        <TextReveal
          text="PREMIUM LIVE ENTERTAINMENT"
          as="p"
          mode="word"
          delay={0.3}
          className="mb-5 tracking-[0.3em] text-[11px] text-ruby md:text-xs"
        />

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: duration.dramatic,
            delay: 0.8,
            ease: easing.luxuryOut,
          }}
          className="mb-6 font-heading text-5xl font-bold leading-tight text-white md:text-7xl"
        >
          Elevating Moments <br />
          Through{" "}
          <span className="bg-gradient-to-r from-white to-smoke bg-clip-text italic text-transparent">
            Harmony.
          </span>
        </motion.h1>

        {/* Supporting paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: duration.slow,
            delay: 1.4,
            ease: easing.smooth,
          }}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-smoke md:text-lg"
        >
          Experience the sophisticated blend of classical mastery and modern
          elegance. The perfect soundtrack for your most important events.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: duration.normal,
            delay: 1.8,
            ease: easing.luxuryOut,
          }}
          className="flex flex-col items-center justify-center gap-4 md:flex-row"
        >
          <Magnetic strength={6}>
            <a
              href="#contact"
              className="ruby-glow-heavy inline-flex items-center gap-2 rounded-full bg-ruby px-8 py-4 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:bg-ruby-dark"
            >
              <Calendar size={18} />
              CHECK AVAILABILITY
            </a>
          </Magnetic>

          <Magnetic strength={6}>
            <a
              href="#media"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            >
              <Play size={18} />
              WATCH LIVE
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: duration.slow }}
        className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: easing.gentle,
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-muted">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-ruby/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
