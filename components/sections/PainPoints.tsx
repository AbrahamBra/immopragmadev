"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Clock, DollarSign } from "lucide-react";
import { PAIN_POINTS } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import CountUp from "@/components/ui/CountUp";

const iconMap = {
  AlertTriangle,
  Clock,
  DollarSign,
} as const;

export default function PainPoints() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="pain-points" className="relative py-20 md:py-32">
      <div className="absolute inset-0 gradient-mesh-2 pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black tracking-tight mb-6">
            The cost of getting it wrong
            <br />
            <span className="text-accent-warning">in critical systems.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12"
        >
          {PAIN_POINTS.map((point) => {
            const Icon = iconMap[point.icon];
            return (
              <motion.div
                key={point.statLabel}
                variants={fadeInUp}
                className={`glass-card rounded-2xl p-8 text-center transition-all duration-500 ${point.glowClass}`}
              >
                <div className={`inline-flex p-3 rounded-xl bg-bg-secondary mb-6 ${point.color}`}>
                  <Icon size={28} />
                </div>
                <div className="mb-4">
                  <span className={`text-4xl md:text-5xl font-black ${point.color}`}>
                    <CountUp value={point.stat} />
                  </span>
                  <p className="text-text-primary font-semibold mt-1">
                    {point.statLabel}
                  </p>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          In aerospace, defense, and railway systems, &ldquo;it works on my
          machine&rdquo; is not an option. PragmaDev exists because these
          industries can&apos;t afford ambiguity.
        </motion.p>
      </div>
    </section>
  );
}
