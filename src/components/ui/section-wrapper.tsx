"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { sectionReveal } from "@/lib/animations";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function SectionWrapper({ children, id, className = "" }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`px-6 py-24 md:px-12 md:py-32 lg:px-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}
