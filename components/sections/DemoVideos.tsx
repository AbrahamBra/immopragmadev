"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Clock, ArrowRight } from "lucide-react";
import { DEMO_VIDEOS } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Badge from "@/components/ui/Badge";

export default function DemoVideos() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="demos" className="relative py-20 md:py-32">
      <div className="absolute inset-0 gradient-mesh-1 pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black tracking-tight mb-4">
            See it{" "}
            <span className="text-accent-primary">in action.</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Short video demos — no signup required. See exactly how PragmaDev tools work before you download.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {DEMO_VIDEOS.map((video) => (
            <motion.a
              key={video.title}
              variants={fadeInUp}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,212,255,0.1)] group block"
            >
              {/* Video thumbnail placeholder */}
              <div className="relative h-44 bg-bg-secondary flex items-center justify-center overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5 group-hover:from-accent-primary/10 group-hover:to-accent-secondary/10 transition-all duration-500" />

                {/* Play button */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center group-hover:bg-accent-primary/20 group-hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] group-hover:scale-110 transition-all duration-300">
                  <Play
                    size={24}
                    className="text-accent-primary ml-1"
                    fill="rgba(0,212,255,0.3)"
                  />
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-bg-primary/80 backdrop-blur-sm rounded-lg px-2.5 py-1">
                  <Clock size={12} className="text-text-muted" />
                  <span className="text-text-secondary text-xs font-mono">
                    {video.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant={video.product === "Process" ? "cyan" : "violet"}>
                    {video.product}
                  </Badge>
                </div>
                <h3 className="text-base font-bold mb-2 group-hover:text-accent-primary transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {video.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-accent-primary text-sm font-semibold group-hover:gap-2.5 transition-all duration-300">
                  Watch demo
                  <ArrowRight size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Link to all presentations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.pragmadev.com/presentations.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-primary font-mono text-sm hover:underline"
          >
            See all 30+ video presentations &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
