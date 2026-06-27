"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in seconds before the reveal plays. */
  delay?: number;
};

/** Single element fade-up on enter. The default scroll reveal. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Parent that staggers its <StaggerItem> children by 60ms. */
export function StaggerGroup({
  children,
  className,
  stagger = 0.06,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(stagger)}
    >
      {children}
    </motion.div>
  );
}

/** Child of <StaggerGroup> — inherits the stagger timing. */
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
