"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, GraduationCap, Handshake } from "lucide-react";
import { CREDIBILITY } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const sections = [
  {
    icon: Trophy,
    data: CREDIBILITY.awards,
    color: "text-accent-warning",
    bgColor: "bg-accent-warning/10",
  },
  {
    icon: GraduationCap,
    data: CREDIBILITY.academic,
    color: "text-accent-primary",
    bgColor: "bg-accent-primary/10",
  },
  {
    icon: Handshake,
    data: CREDIBILITY.industry,
    color: "text-accent-secondary",
    bgColor: "bg-accent-secondary/10",
  },
];

export default function Credibility() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="credibility" className="relative py-20 md:py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black tracking-tight mb-4">
            Recognized and{" "}
            <span className="text-accent-secondary">trusted.</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            25 years of building tools for the industries where
            precision matters most.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {sections.map(({ icon: Icon, data, color, bgColor }) => (
            <motion.div
              key={data.title}
              variants={fadeInUp}
              className="glass-card rounded-2xl p-6 md:p-8"
            >
              <div className={`inline-flex p-3 rounded-xl ${bgColor} ${color} mb-5`}>
                <Icon size={24} />
              </div>

              <h3 className="text-xl font-bold mb-6">{data.title}</h3>

              <ul className="space-y-3">
                {data.items.map((item) => (
                  <li
                    key={item}
                    className="text-text-secondary text-sm leading-relaxed flex items-start gap-2"
                  >
                    <span className={`${color} mt-1.5 shrink-0`}>&#8226;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
