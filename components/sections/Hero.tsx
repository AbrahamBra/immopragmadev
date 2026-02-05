"use client";

import { useRef, useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { heroWordStagger, heroWord, fadeIn } from "@/lib/animations";
import Button from "@/components/ui/Button";
import LogoBanner from "@/components/ui/LogoBanner";

const NetworkGraph = dynamic(
  () => import("@/components/three/NetworkGraph"),
  { ssr: false }
);

const HERO_WORDS = ["Find", "critical", "flaws", "before", "they", "cost", "millions."];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  }, []);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Cursor glow effect */}
      {isMounted && (
        <div
          className="pointer-events-none absolute z-0 hidden md:block"
          style={{
            left: mousePos.x - 200,
            top: mousePos.y - 200,
            width: 400,
            height: 400,
            background:
              "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
            transition: "left 0.1s, top 0.1s",
          }}
          aria-hidden="true"
        />
      )}

      {/* Background gradient mesh */}
      <div
        className="absolute inset-0 gradient-mesh-1 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 md:pt-32">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Text content — 3/5 */}
          <div className="lg:col-span-3 space-y-8">
            {/* Trust tag */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono text-sm text-accent-primary tracking-wide"
            >
              Trusted by Airbus, ESA &amp; the French Army since 2001
            </motion.p>

            {/* Main headline */}
            <motion.h1
              variants={heroWordStagger}
              initial="hidden"
              animate="visible"
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.05] tracking-tight"
            >
              {HERO_WORDS.map((word, i) => (
                <motion.span
                  key={i}
                  variants={heroWord}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1 }}
              className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-xl"
            >
              PragmaDev gives defense, aerospace, and railway engineers the
              tools to verify, simulate, and bulletproof their systems — before
              a single line of code is deployed.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                href="mailto:info@pragmadev.com"
              >
                Request a Demo
              </Button>
              <Button variant="ghost" size="lg" href="#demos">
                See How It Works
              </Button>
            </motion.div>
          </div>

          {/* 3D Network — 2/5 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="lg:col-span-2 h-[300px] md:h-[450px] lg:h-[500px]"
          >
            <NetworkGraph />
          </motion.div>
        </div>

        {/* Logo banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 md:mt-24 pb-8"
        >
          <LogoBanner />
        </motion.div>
      </div>
    </section>
  );
}
