"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-accent-primary text-bg-primary hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:scale-105",
    ghost:
      "border border-border text-text-primary hover:border-accent-primary hover:text-accent-primary hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]",
    outline:
      "border border-accent-primary/40 text-accent-primary hover:bg-accent-primary/10 hover:border-accent-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const combinedClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const Component = href ? "a" : "button";

  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
      <Component
        href={href}
        onClick={onClick}
        className={combinedClass}
        {...(href && href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </Component>
    </motion.div>
  );
}
