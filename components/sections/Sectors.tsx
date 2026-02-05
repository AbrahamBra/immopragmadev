"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Plane, Shield, Train, Radio } from "lucide-react";
import { SECTORS } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Badge from "@/components/ui/Badge";

const iconMap = {
  Plane,
  Shield,
  Train,
  Radio,
} as const;

const badgeVariantMap: Record<string, "cyan" | "violet" | "success" | "warning"> = {
  "accent-primary": "cyan",
  "accent-secondary": "violet",
  "accent-success": "success",
  "accent-warning": "warning",
};

export default function Sectors() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="sectors" className="relative py-20 md:py-32">
      <div className="absolute inset-0 gradient-mesh-1 pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black tracking-tight mb-4">
            Proven in the{" "}
            <span className="text-accent-primary">most demanding</span>{" "}
            environments.
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Where failure is not an option, PragmaDev delivers certainty.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SECTORS.map((sector) => {
            const Icon = iconMap[sector.icon];
            return (
              <motion.div
                key={sector.title}
                variants={fadeInUp}
                className="glass-card rounded-2xl p-6 transition-all duration-500 hover:scale-[1.02] group"
              >
                <div className={`inline-flex p-3 rounded-xl bg-bg-secondary mb-5 text-${sector.accentColor} group-hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-shadow duration-300`}>
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-bold mb-3">{sector.title}</h3>

                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {sector.description}
                </p>

                <Badge variant={badgeVariantMap[sector.accentColor]}>
                  {sector.product}
                </Badge>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
