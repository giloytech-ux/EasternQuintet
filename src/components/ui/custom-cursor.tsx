"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function subscribeToPointerFine(callback: () => void) {
  const mql = window.matchMedia("(pointer: fine)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getPointerFine() {
  return window.matchMedia("(pointer: fine)").matches;
}

function getPointerFineServer() {
  return false;
}

export function CustomCursor() {
  const isPointerFine = useSyncExternalStore(
    subscribeToPointerFine,
    getPointerFine,
    getPointerFineServer,
  );
  const hoveringRef = useRef(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Snappy spring-follow on position — tight enough to feel responsive, soft enough to trail
  const cursorX = useSpring(rawX, { stiffness: 800, damping: 40, mass: 0.2 });
  const cursorY = useSpring(rawY, { stiffness: 800, damping: 40, mass: 0.2 });

  // Fast, crisp size/opacity transitions
  const cursorSize = useSpring(10, { stiffness: 600, damping: 30 });
  const cursorOpacity = useSpring(0.5, { stiffness: 600, damping: 30 });

  useEffect(() => {
    if (!isPointerFine) return;

    document.documentElement.classList.add("custom-cursor-active");

    function handleMouseMove(e: MouseEvent) {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    }

    function handleMouseOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button'], input, textarea, select, [data-magnetic-hovered]");
      const isHovering = !!interactive;
      if (isHovering !== hoveringRef.current) {
        hoveringRef.current = isHovering;
        cursorSize.set(isHovering ? 40 : 10);
        cursorOpacity.set(isHovering ? 0.15 : 0.5);
      }
    }

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isPointerFine, rawX, rawY, cursorSize, cursorOpacity]);

  if (!isPointerFine) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        style={{
          width: cursorSize,
          height: cursorSize,
          opacity: cursorOpacity,
        }}
        className="rounded-full border border-ruby bg-ruby/10"
      />
    </motion.div>
  );
}
