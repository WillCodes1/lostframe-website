"use client";

import { Zap, Award, Handshake } from "lucide-react";
import { AnimateOnScroll } from "./useScrollAnimation";

const reasons = [
  {
    icon: Zap,
    title: "48-Hour MVP Framework",
    description:
      "Rapid deployment of proof-of-concepts and mission-ready prototypes",
  },
  {
    icon: Award,
    title: "Proven Elite Performance",
    description:
      "Award-winning engineering team with DoD and NASA credentials",
  },
  {
    icon: Handshake,
    title: "Strategic Technology Partner",
    description:
      "We become your strategic technology partner, not just a contractor",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Why Choose{" "}
          <span className="gold-gradient-text">Lost Frame Ventures</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <AnimateOnScroll key={reason.title} animation="fade-up" delay={i * 150}>
              <div className="tilt-card text-center group p-6 rounded-2xl hover:bg-white transition-all duration-300">
                <div className="inline-flex p-3 rounded-xl bg-white border border-border group-hover:border-gold/30 group-hover:shadow-lg group-hover:shadow-gold/10 transition-all duration-300 mb-4">
                  <reason.icon className="w-6 h-6 text-muted-foreground group-hover:text-gold transition-colors duration-300" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {reason.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
