"use client";

import { useMemo } from "react";
import { motion, Variants } from "framer-motion";
import { charReveal, wordReveal } from "@/lib/animations";

interface TextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  mode?: "char" | "word";
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

const motionTags = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
};

export function TextReveal({
  text,
  as = "span",
  mode = "char",
  className = "",
  delay = 0,
  staggerDelay,
}: TextRevealProps) {
  const MotionTag = motionTags[as];

  const words = useMemo(() => text.split(" "), [text]);

  const defaultStagger = mode === "char" ? 0.03 : 0.08;
  const stagger = staggerDelay ?? defaultStagger;

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = mode === "char" ? charReveal : wordReveal;

  return (
    <MotionTag
      className={className}
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", perspective: mode === "char" ? "800px" : undefined }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {mode === "char"
        ? words.map((word, wi) => (
            <span
              key={`word-${wi}`}
              style={{ display: "inline-flex", whiteSpace: "nowrap" }}
              aria-hidden="true"
            >
              {word.split("").map((char, ci) => (
                <motion.span
                  key={`${char}-${wi}-${ci}`}
                  variants={itemVariants}
                  style={{
                    display: "inline-block",
                    transformOrigin: "bottom center",
                    willChange: "transform, opacity, filter",
                  }}
                >
                  {char}
                </motion.span>
              ))}
              {wi < words.length - 1 && (
                <motion.span variants={itemVariants} style={{ display: "inline-block" }}>
                  {"\u00A0"}
                </motion.span>
              )}
            </span>
          ))
        : words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              variants={itemVariants}
              style={{
                display: "inline-block",
                transformOrigin: "bottom center",
                willChange: "transform, opacity, filter",
              }}
              aria-hidden="true"
            >
              {i < words.length - 1 ? word + "\u00A0" : word}
            </motion.span>
          ))}
    </MotionTag>
  );
}
