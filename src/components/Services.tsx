"use client";

import { Building2, Rocket, Shield, Database } from "lucide-react";
import { AnimateOnScroll } from "./useScrollAnimation";

const services = [
  {
    icon: Building2,
    title: "Intelligent Enterprise Architecture",
    description:
      "We architect intelligent enterprises from concept to deployment, providing technical expertise and strategic guidance.",
    tags: ["Partnership", "Strategy", "Technical Leadership"],
  },
  {
    icon: Rocket,
    title: "Mission-Critical Product Engineering",
    description:
      "From MVP to market-ready solutions, we engineer cutting-edge AI systems that solve critical industry challenges.",
    tags: ["Rapid Prototyping", "AI Integration", "Product Strategy"],
  },
  {
    icon: Shield,
    title: "Strategic AI Implementation",
    description:
      "Full-stack development and AI consulting services for organizations deploying AI into mission-critical operations.",
    tags: ["Consulting", "Engineering", "AI Deployment"],
  },
  {
    icon: Database,
    title: "Advanced Data Intelligence",
    description:
      "Dedicated team for extracting the hardest-to-reach data, paired with custom AI systems to analyze and transform it for your specific use case.",
    tags: ["Data Extraction", "Custom AI Analysis", "Intelligence Solutions"],
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gold-shimmer-text">What We Architect</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From intelligent startups to enterprise-scale solutions, we partner
              with visionaries to architect the next generation of AI-native
              ventures and mission-critical systems.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.title} animation="fade-up" delay={i * 100}>
              <div className="tilt-card group bg-white rounded-2xl border border-border p-6 hover:shadow-lg hover:shadow-gold/5 hover:border-gold/20 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-muted group-hover:bg-gold/10 transition-colors duration-300">
                    <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm leading-tight">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground hover:border-gold/30 hover:text-foreground hover:bg-gold/5 transition-all duration-200 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
