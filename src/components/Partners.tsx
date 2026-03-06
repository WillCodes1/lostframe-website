import Image from "next/image";

const partners = [
  { name: "NASA", src: "/nasa-logo.png", alt: "NASA - Trusted Partner of Lost Frame Ventures" },
  { name: "AVFX", src: "/avfx-logo.png", alt: "AVFX - Trusted Partner of Lost Frame Ventures" },
  { name: "NAWC", src: "/nawc-logo.png", alt: "Naval Air Warfare Center - Trusted Partner of Lost Frame Ventures" },
  { name: "TeraSynth", src: "/terasynth-logo.png", alt: "TeraSynth - Trusted Partner of Lost Frame Ventures" },
  { name: "UCF", src: "/ucf-logo.png", alt: "University of Central Florida - Trusted Partner of Lost Frame Ventures" },
  { name: "NAVSEA", src: "/navsea-logo.png", alt: "NAVSEA - Trusted Partner of Lost Frame Ventures" },
  { name: "Pool Optics", src: "/pool-optics-logo.png", alt: "Pool Optics - Trusted Partner of Lost Frame Ventures" },
  { name: "Revolv", src: "/revolv-logo.png", alt: "Revolv Investment Group - Trusted Partner of Lost Frame Ventures" },
];

export default function Partners() {
  return (
    <section className="w-full pt-8 pb-16 bg-gradient-to-r from-white via-muted/30 to-white overflow-hidden border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Partnered &amp; Trusted by Industry Leaders
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling logos - duplicated for seamless loop */}
        <div className="flex animate-scroll whitespace-nowrap">
          {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex items-center justify-center mx-8 min-w-[120px] h-16 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={120}
                height={48}
                className="h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
