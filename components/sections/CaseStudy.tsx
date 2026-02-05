"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Quote } from "lucide-react";
import { CASE_STUDY } from "@/lib/constants";
import { timelineStep } from "@/lib/animations";
import Button from "@/components/ui/Button";

export default function CaseStudy() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="case-study"
      className="relative py-20 md:py-32 bg-bg-secondary/80"
    >
      {/* Top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-accent-warning tracking-wide uppercase mb-4">
            {CASE_STUDY.supertitle}
          </p>
          <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black tracking-tight">
            {CASE_STUDY.headline}
          </h2>
        </motion.div>

        {/* Timeline steps */}
        <div className="space-y-8 mb-16">
          {CASE_STUDY.steps.map((step, i) => (
            <motion.div
              key={step.number}
              custom={i}
              variants={timelineStep}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex items-start gap-6 group"
            >
              {/* Step number */}
              <div className="shrink-0 w-14 h-14 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center group-hover:bg-accent-primary/20 group-hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-300">
                <span className="font-mono text-accent-primary font-bold text-sm">
                  {step.number}
                </span>
              </div>

              {/* Step content */}
              <div className="pt-1">
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass-card rounded-2xl p-8 md:p-10 mb-10 relative overflow-hidden"
        >
          <div className="absolute top-4 left-4 text-accent-primary/20">
            <Quote size={48} />
          </div>
          <blockquote className="relative z-10 pl-4">
            <p className="text-xl md:text-2xl font-semibold leading-relaxed italic text-text-primary">
              &ldquo;{CASE_STUDY.quote}&rdquo;
            </p>
            <footer className="mt-4 text-text-secondary text-sm font-mono">
              &mdash; {CASE_STUDY.quoteSource}
            </footer>
          </blockquote>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <a
            href="https://www.pragmadev.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent-primary font-semibold hover:gap-3 transition-all duration-300"
          >
            {CASE_STUDY.cta}
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
