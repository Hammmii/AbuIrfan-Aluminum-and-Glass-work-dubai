"use client";

import { useRef } from "react";
import { useMotionValue, useSpring, type MotionStyle } from "framer-motion";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Magnetic hover — the element drifts toward the cursor (max ±strength px)
 * and springs back on leave. Used on primary CTAs and project cards.
 * Tension 300 / friction 25 per the spec. No-op when reduced motion is set.
 *
 * Usage:
 *   const { ref, motionStyle, onMouseMove, onMouseLeave } = useMagnetic<HTMLButtonElement>();
 *   <motion.button ref={ref} style={motionStyle} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} />
 */
export function useMagnetic<T extends HTMLElement = HTMLElement>(strength = 12) {
  const reduce = useReducedMotion();
  const ref = useRef<T | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 25, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 25, mass: 0.5 });

  const onMouseMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set((relX / (rect.width / 2)) * strength);
    y.set((relY / (rect.height / 2)) * strength);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    ref,
    motionStyle: { x: springX, y: springY } as MotionStyle,
    onMouseMove,
    onMouseLeave,
  };
}
