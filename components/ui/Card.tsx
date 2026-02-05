"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function Card({
  children,
  className = "",
  glowColor,
}: CardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`glass-card rounded-2xl p-6 md:p-8 transition-all duration-500 ${className}`}
      whileHover={{
        scale: 1.02,
        boxShadow: glowColor || "0 0 40px rgba(0, 212, 255, 0.08)",
      }}
    >
      {children}
    </motion.div>
  );
}
