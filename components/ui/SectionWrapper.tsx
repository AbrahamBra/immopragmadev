"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bgClassName?: string;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  bgClassName = "",
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id={id}
      className={`relative py-20 md:py-32 ${bgClassName}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
      >
        {children}
      </motion.div>
    </section>
  );
}
