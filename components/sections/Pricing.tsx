"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";
import { PRICING } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Badge from "@/components/ui/Badge";

export default function Pricing() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="pricing" className="relative py-20 md:py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black tracking-tight mb-4">
            Start free.{" "}
            <span className="text-accent-success">Scale when ready.</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Every product has a free tier. No credit card required. Floating licenses work across Windows, Linux, and macOS.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {PRICING.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              className={`glass-card rounded-2xl p-6 md:p-8 transition-all duration-500 relative ${
                plan.popular
                  ? "border-accent-secondary/30 hover:shadow-[0_0_60px_rgba(123,97,255,0.12)]"
                  : "hover:shadow-[0_0_40px_rgba(0,212,255,0.08)]"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="violet">Most Popular</Badge>
                </div>
              )}

              {/* Header */}
              <div className="mb-6 pt-2">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-text-muted text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-border">
                {plan.paid !== "0" ? (
                  <>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl font-black text-${plan.accentColor}`}>
                        {plan.paid}
                      </span>
                      <span className="text-text-muted text-sm">
                        {plan.paidLabel}
                      </span>
                    </div>
                    <p className="text-accent-success text-xs font-mono mt-2">
                      {plan.free}
                    </p>
                  </>
                ) : (
                  <div>
                    <span className={`text-4xl font-black text-${plan.accentColor}`}>
                      Free
                    </span>
                    <p className="text-text-secondary text-xs font-mono mt-2">
                      {plan.free}
                    </p>
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-text-secondary text-sm"
                  >
                    <Check
                      size={15}
                      className="text-accent-success mt-0.5 shrink-0"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="space-y-3 mt-auto">
                <a
                  href={plan.ctaFreeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 bg-${plan.accentColor} text-bg-primary hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] hover:scale-[1.02]`}
                >
                  {plan.ctaFree}
                  <ArrowRight size={14} />
                </a>
                {plan.ctaPaid && (
                  <a
                    href={plan.ctaPaidLink}
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg font-semibold text-sm border border-border text-text-secondary hover:border-accent-primary/40 hover:text-text-primary transition-all duration-300"
                  >
                    {plan.ctaPaid}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10 space-y-2"
        >
          <p className="text-text-muted text-sm">
            Minimum rental: 3 months. Permanent licenses available.
          </p>
          <a
            href="https://www.pragmadev.com/prices.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-primary text-sm font-mono hover:underline"
          >
            See detailed feature comparison &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
