"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import { SOLUTIONS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Badge from "@/components/ui/Badge";

export default function Solutions() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="solutions" className="relative py-20 md:py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black tracking-tight mb-4">
            Two products.{" "}
            <span className="text-accent-primary">One mission.</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Whether you manage business operations or engineer critical systems,
            PragmaDev eliminates ambiguity before it becomes costly.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {/* Process Card */}
          <motion.div
            variants={fadeInUp}
            className="glass-card rounded-2xl p-8 md:p-10 transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,212,255,0.1)]"
          >
            <Badge variant="cyan" className="mb-6">
              {SOLUTIONS.process.tag}
            </Badge>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              {SOLUTIONS.process.title}
            </h3>

            <p className="text-text-secondary leading-relaxed mb-8">
              {SOLUTIONS.process.description}
            </p>

            <ul className="space-y-3 mb-8">
              {SOLUTIONS.process.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-text-secondary"
                >
                  <Check
                    size={18}
                    className="text-accent-success mt-0.5 shrink-0"
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.pragmadev.com/product/process.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-primary font-semibold hover:gap-3 transition-all duration-300"
              >
                {SOLUTIONS.process.cta}
                <ArrowRight size={16} />
              </a>
              <Badge variant="success">{SOLUTIONS.process.badge}</Badge>
            </div>
          </motion.div>

          {/* Studio Card */}
          <motion.div
            variants={fadeInUp}
            className="glass-card rounded-2xl p-8 md:p-10 transition-all duration-500 hover:shadow-[0_0_60px_rgba(123,97,255,0.1)]"
          >
            <Badge variant="violet" className="mb-6">
              {SOLUTIONS.studio.tag}
            </Badge>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              {SOLUTIONS.studio.title}
            </h3>

            <p className="text-text-secondary leading-relaxed mb-6">
              {SOLUTIONS.studio.description}
            </p>

            {/* Pipeline visualization */}
            <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
              {SOLUTIONS.studio.pipeline.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-accent-secondary/10 text-accent-secondary font-mono text-xs whitespace-nowrap border border-accent-secondary/20">
                    {step}
                  </span>
                  {i < SOLUTIONS.studio.pipeline.length - 1 && (
                    <ArrowRight size={14} className="text-text-muted shrink-0" />
                  )}
                </div>
              ))}
            </div>

            <ul className="space-y-3 mb-8">
              {SOLUTIONS.studio.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-text-secondary"
                >
                  <Check
                    size={18}
                    className="text-accent-success mt-0.5 shrink-0"
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.pragmadev.com/product/studio.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-secondary font-semibold hover:gap-3 transition-all duration-300"
              >
                {SOLUTIONS.studio.cta}
                <ArrowRight size={16} />
              </a>
              <Badge variant="success">{SOLUTIONS.studio.badge}</Badge>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
