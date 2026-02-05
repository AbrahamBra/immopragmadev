"use client";

import { motion } from "framer-motion";
import { CLIENT_LOGOS } from "@/lib/constants";
import { staggerContainer, fadeIn } from "@/lib/animations";

export default function LogoBanner() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      <motion.p
        variants={fadeIn}
        className="text-text-muted text-xs font-mono uppercase tracking-widest text-center mb-8"
      >
        Trusted by industry leaders
      </motion.p>
      <motion.div
        variants={staggerContainer}
        className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12"
      >
        {CLIENT_LOGOS.map((logo) => (
          <motion.span
            key={logo}
            variants={fadeIn}
            className="text-text-muted text-sm md:text-base font-semibold opacity-40 hover:opacity-100 hover:text-text-primary transition-all duration-300 cursor-default select-none"
            whileHover={{ scale: 1.05 }}
          >
            {logo}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
