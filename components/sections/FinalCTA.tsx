"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-40 overflow-hidden">
      {/* Dramatic gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.12) 0%, transparent 60%), radial-gradient(ellipse at 50% 100%, rgba(123,97,255,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-tight leading-tight">
            Your systems are too critical
            <br />
            <span className="text-accent-primary">for ambiguity.</span>
          </h2>

          <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
            Join Airbus, ESA, and the French Army. See what PragmaDev can do for
            your organization.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              variant="primary"
              size="lg"
              href="mailto:contact@pragmadev.com"
            >
              Request a Demo
            </Button>
            <Button
              variant="ghost"
              size="lg"
              href="https://www.pragmadev.com"
            >
              Download Free Edition
            </Button>
          </div>

          <p className="text-text-muted text-sm font-mono">
            PragmaDev Process editor is free. PragmaDev Studio is free for small
            projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
