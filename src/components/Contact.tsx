"use client";

import { useState } from "react";
import { ArrowRight, Send, CheckCircle2, Calendar, Loader2 } from "lucide-react";
import { AnimateOnScroll } from "./useScrollAnimation";
import BookingModal from "./BookingModal";

export default function Contact() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "295f31a1-14b8-49a6-81b9-6a280ce2c1ea",
          subject: `New inquiry from ${formData.name} — ${formData.company || "No company"}`,
          from_name: formData.name,
          ...formData,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Network error. Please try again or email will@lostframe.ai directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className="py-24 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="gold-shimmer-text">Ready to Build?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Let&apos;s discuss how we can architect your next strategic advantage.
                Start with a{" "}
                <span className="gold-gradient-text font-semibold">free</span>{" "}
                consultation.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Form */}
            <AnimateOnScroll animation="fade-left" delay={100}>
              <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-sm text-muted-foreground hover:text-foreground underline transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      Send Us a Message
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Tell us about your project and we&apos;ll respond within 24 hours.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-1.5">
                          Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-white text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-1.5">
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-white text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData((d) => ({ ...d, company: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-white text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                        placeholder="Your company (optional)"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-white text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all resize-none"
                        placeholder="Tell us about your project, industry, and what you're looking to build..."
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-red-500">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="magnetic-btn glass-btn w-full inline-flex items-center justify-center gap-2 bg-transparent backdrop-blur-md text-foreground border border-foreground/30 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                      {submitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </AnimateOnScroll>

            {/* Book a Meeting Card */}
            <AnimateOnScroll animation="fade-right" delay={200}>
              <div className="flex flex-col gap-6">
                <div className="tilt-card bg-white/40 backdrop-blur-2xl border border-white/60 rounded-2xl p-8 shadow-xl shadow-foreground/5 flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-foreground/5 border border-foreground/10">
                      <Calendar className="w-5 h-5 text-foreground" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">Book a Consultation</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Skip the form — schedule a free 30-minute strategy call
                    directly. We&apos;ll discuss your project, show you what&apos;s
                    possible, and outline a plan to get you to MVP.
                  </p>

                  <ul className="space-y-3 mb-8">
                    {[
                      "Free — no commitment required",
                      "30-min focused strategy session",
                      "Walk away with an actionable plan",
                      "Talk directly to the founder",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground/70">
                        <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setBookingOpen(true)}
                    className="magnetic-btn glass-btn animate-pulse-glow w-full inline-flex items-center justify-center gap-2 bg-transparent backdrop-blur-md text-foreground border border-foreground/30 px-6 py-3.5 rounded-xl text-base font-semibold hover:scale-[1.02] transition-all duration-300 group"
                  >
                    Book a Meeting
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                <div className="rounded-2xl border border-border p-6 bg-muted/30">
                  <p className="text-sm text-muted-foreground mb-1">
                    Prefer email?
                  </p>
                  <a
                    href="mailto:will@lostframe.ai"
                    className="animated-underline text-foreground font-medium text-sm"
                  >
                    will@lostframe.ai
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
