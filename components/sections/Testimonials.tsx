"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Badge from "@/components/ui/Badge";

const badgeVariantMap: Record<string, "cyan" | "violet" | "success" | "warning"> = {
  "accent-primary": "cyan",
  "accent-secondary": "violet",
  "accent-success": "success",
  "accent-warning": "warning",
};

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="testimonials" className="relative py-20 md:py-32">
      <div className="absolute inset-0 gradient-mesh-2 pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black tracking-tight mb-4">
            What our clients{" "}
            <span className="text-accent-primary">actually say.</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Real quotes from engineering teams who use PragmaDev in production — from Airbus cockpits to Renault factories.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.company}
              variants={fadeInUp}
              className="glass-card rounded-2xl p-6 md:p-8 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-text-muted/20 group-hover:text-accent-primary/20 transition-colors duration-300">
                <Quote size={40} />
              </div>

              {/* Quote text */}
              <blockquote className="relative z-10 mb-6">
                <p className="text-text-primary leading-relaxed italic text-base md:text-lg">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>

              {/* Attribution */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-text-primary font-semibold text-sm">
                    {testimonial.company}
                  </p>
                  <p className="text-text-muted text-xs mt-0.5">
                    {testimonial.context}
                  </p>
                </div>
                <Badge variant={badgeVariantMap[testimonial.accentColor]}>
                  {testimonial.sector}
                </Badge>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Source attribution */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-text-muted text-xs font-mono mt-8"
        >
          Source: pragmadev.com/successStories.html — verified customer statements
        </motion.p>
      </div>
    </section>
  );
}
