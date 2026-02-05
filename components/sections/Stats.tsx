"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { STATS } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="relative py-16 md:py-20">
      {/* Top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-black text-accent-primary mb-1">
                {stat.value}
              </p>
              <p className="text-text-primary font-semibold text-sm mb-0.5">
                {stat.label}
              </p>
              <p className="text-text-muted text-xs font-mono">
                {stat.suffix}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
