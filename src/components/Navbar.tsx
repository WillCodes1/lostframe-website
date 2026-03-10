"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center group hover:opacity-80 transition-opacity">
          <Image
            src="/logo.png"
            alt="Lost Frame Ventures Logo"
            width={140}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="/research"
            className="animated-underline text-sm font-medium text-[#b8860b] hover:text-[#a07a0a] transition-colors"
          >
            Research
          </a>
          <a
            href="/#ai-demo"
            className="animated-underline text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            AI Demo
          </a>
          <a
            href="/#portfolio"
            className="animated-underline text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Portfolio
          </a>
          <a
            href="/#contact"
            className="animated-underline text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a
              href="/research"
              className="text-sm font-medium text-[#b8860b] hover:text-[#a07a0a] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Research
            </a>
            <a
              href="/#ai-demo"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              AI Demo
            </a>
            <a
              href="/#portfolio"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="/#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
