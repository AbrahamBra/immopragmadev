"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { TECHNOLOGIES } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Technologies() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTech, setActiveTech] = useState<string | null>(null);

  const activeData = TECHNOLOGIES.find((t) => t.name === activeTech);

  return (
    <section ref={ref} id="technologies" className="relative py-20 md:py-32">
      <div className="absolute inset-0 gradient-mesh-2 pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black tracking-tight mb-4">
            Built on international standards.
          </h2>
          <p className="text-text-secondary text-lg">
            Not proprietary lock-in. ITU-T, OMG, and ETSI standards compliance.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {TECHNOLOGIES.map((tech) => (
            <motion.button
              key={tech.name}
              variants={fadeInUp}
              onClick={() =>
                setActiveTech(activeTech === tech.name ? null : tech.name)
              }
              className={`relative px-5 py-3 rounded-xl font-mono text-sm font-medium border transition-all duration-300 cursor-pointer ${
                activeTech === tech.name
                  ? "bg-accent-primary/15 border-accent-primary/40 text-accent-primary shadow-[0_0_20px_rgba(0,212,255,0.15)]"
                  : "bg-bg-card border-border text-text-secondary hover:border-accent-primary/30 hover:text-text-primary"
              }`}
            >
              {tech.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Description panel */}
        <AnimatePresence mode="wait">
          {activeTech && activeData && (
            <motion.div
              key={activeTech}
              initial={{ opacity: 0, y: 10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8 text-center"
            >
              <div className="glass-card rounded-xl p-6 inline-block max-w-lg text-left">
                <p className="text-accent-primary font-mono font-bold text-sm mb-1">
                  {activeTech}
                </p>
                <p className="text-text-muted font-mono text-xs mb-3">
                  {activeData.fullName}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-3">
                  {activeData.description}
                </p>
                <a
                  href={activeData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent-primary text-xs font-mono hover:underline"
                >
                  Learn more on pragmadev.com
                  <ExternalLink size={11} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
