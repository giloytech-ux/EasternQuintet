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

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const cursorSize = useSpring(12, { stiffness: 300, damping: 25 });
  const cursorOpacity = useSpring(0.6, { stiffness: 300, damping: 25 });

  useEffect(() => {
    if (!isPointerFine) return;

    document.documentElement.classList.add("custom-cursor-active");

    function handleMouseMove(e: MouseEvent) {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    }

    function handleMouseOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button'], input, textarea, select, [data-magnetic-hovered]");
      const isHovering = !!interactive;
      if (isHovering !== hoveringRef.current) {
        hoveringRef.current = isHovering;
        cursorSize.set(isHovering ? 44 : 12);
        cursorOpacity.set(isHovering ? 0.2 : 0.6);
      }
    }

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isPointerFine, cursorX, cursorY, cursorSize, cursorOpacity]);

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
        className="rounded-full border border-ruby/80 bg-ruby/5"
      />
    </motion.div>
  );
}
