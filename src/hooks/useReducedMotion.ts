"use client";

import { useEffect, useState } from "react";

/**
 * Tracks the user's prefers-reduced-motion setting.
 * Every animated component / provider MUST consult this and disable
 * non-essential motion when it returns true.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}
