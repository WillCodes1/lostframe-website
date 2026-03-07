"use client";

import { Cpu, TrendingUp, Clock, Globe } from "lucide-react";
import { AnimateOnScroll } from "./useScrollAnimation";

const stats = [
  { icon: Cpu, value: "10+", label: "AI Systems Deployed", hasAsterisk: false },
  { icon: TrendingUp, value: "180%+", label: "Typical ROI", hasAsterisk: true },
  { icon: Clock, value: "2-8", label: "Weeks to MVP", hasAsterisk: false },
  { icon: Globe, value: "5+", label: "Industries Served", hasAsterisk: false },
];

export default function Stats() {
  return (
    <section className="py-12 border-y border-border bg-muted/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} animation="scale" delay={i * 150}>
            <div
              className="text-center group transition-all duration-300 hover:scale-110 cursor-default"
            >
              <div className="flex justify-center mb-2 md:mb-3">
                <stat.icon className="h-5 w-5 md:h-6 md:w-6 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-1">
                {stat.value}
                {stat.hasAsterisk && (
                  <span className="text-muted-foreground text-xs md:text-base ml-0.5">
                    *
                  </span>
                )}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground px-1">
                {stat.label}
              </div>
            </div>
            </AnimateOnScroll>
          ))}
        </div>
        <div className="mt-6 md:mt-8 text-center px-4">
          <p className="text-[10px] md:text-xs text-muted-foreground/70 leading-relaxed">
            * Internal estimates based on client reporting and project outcomes.
            Individual results may vary. MRR reflects recurring revenue from
            software we&apos;ve commercialized after initial build.
          </p>
        </div>
      </div>
    </section>
  );
}
