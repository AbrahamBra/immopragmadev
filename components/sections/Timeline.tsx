"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TIMELINE_EVENTS } from "@/lib/constants";

export default function Timeline() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="timeline" className="relative py-20 md:py-32 bg-bg-secondary/50">
      {/* Top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-accent-primary tracking-wide uppercase mb-4">
            Since 2001
          </p>
          <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black tracking-tight mb-4">
            25 years of{" "}
            <span className="text-accent-secondary">continuous innovation.</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From a French Ministry of Research award to co-presenting with Airbus at ERTS 2026 — a steady path of R&D excellence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary/30 via-accent-secondary/30 to-accent-primary/30" aria-hidden="true" />

          <div className="space-y-8 md:space-y-12">
            {TIMELINE_EVENTS.map((event, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ml-10 md:ml-0 ${
                      isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                    }`}
                  >
                    <div
                      className={`glass-card rounded-xl p-5 inline-block transition-all duration-300 hover:scale-[1.02] ${
                        event.highlight
                          ? "border-accent-primary/30 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]"
                          : ""
                      }`}
                    >
                      <span
                        className={`font-mono text-xs font-bold ${
                          event.highlight
                            ? "text-accent-primary"
                            : "text-text-muted"
                        }`}
                      >
                        {event.year}
                      </span>
                      <h3 className="text-base font-bold mt-1 mb-1.5">
                        {event.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Dot on the line */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-5">
                    <div
                      className={`w-3 h-3 rounded-full border-2 ${
                        event.highlight
                          ? "bg-accent-primary border-accent-primary shadow-[0_0_12px_rgba(0,212,255,0.4)]"
                          : "bg-bg-card border-border"
                      }`}
                    />
                  </div>

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Link to full history */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.pragmadev.com/20_years.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-primary font-mono text-sm hover:underline"
          >
            See the full innovation timeline &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
