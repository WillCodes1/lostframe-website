"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export default function ReportContact() {
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
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Research Report Inquiry from ${formData.name}`,
          from_name: formData.name,
          ...formData,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setError("Something went wrong. Please try again or email will@lostframe.ai directly.");
      }
    } catch {
      setError("Network error. Please try again or email will@lostframe.ai directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 md:px-8 pt-8 pb-8">
      <FadeIn>
        <div className="text-center mb-10">
          <div className="w-12 h-px bg-[#b8860b] mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-3">Get In Touch</h2>
          <p className="text-sm text-[#7a7a85] max-w-xl mx-auto">
            Have questions about the research? Want to discuss how these findings apply to your business or portfolio? Reach out directly.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="bg-white border border-[#e5e2d9] rounded-xl p-6 md:p-8 shadow-sm">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-14 h-14 rounded-full bg-[#b8860b]/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-7 h-7 text-[#b8860b]" />
              </div>
              <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">Message Sent</h3>
              <p className="text-sm text-[#7a7a85] mb-6">
                Thanks for reaching out. I will get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-sm text-[#7a7a85] hover:text-[#1a1a2e] underline transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="report-name" className="block text-xs font-medium text-[#7a7a85] mb-1.5">
                    Name *
                  </label>
                  <input
                    id="report-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#e5e2d9] bg-white text-[#1a1a2e] text-sm placeholder:text-[#7a7a85]/40 focus:outline-none focus:ring-2 focus:ring-[#b8860b]/30 focus:border-[#b8860b] transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="report-email" className="block text-xs font-medium text-[#7a7a85] mb-1.5">
                    Email *
                  </label>
                  <input
                    id="report-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#e5e2d9] bg-white text-[#1a1a2e] text-sm placeholder:text-[#7a7a85]/40 focus:outline-none focus:ring-2 focus:ring-[#b8860b]/30 focus:border-[#b8860b] transition-all"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="report-company" className="block text-xs font-medium text-[#7a7a85] mb-1.5">
                  Company / Organization
                </label>
                <input
                  id="report-company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData((d) => ({ ...d, company: e.target.value }))}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#e5e2d9] bg-white text-[#1a1a2e] text-sm placeholder:text-[#7a7a85]/40 focus:outline-none focus:ring-2 focus:ring-[#b8860b]/30 focus:border-[#b8860b] transition-all"
                  placeholder="Your company (optional)"
                />
              </div>

              <div>
                <label htmlFor="report-message" className="block text-xs font-medium text-[#7a7a85] mb-1.5">
                  Message *
                </label>
                <textarea
                  id="report-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#e5e2d9] bg-white text-[#1a1a2e] text-sm placeholder:text-[#7a7a85]/40 focus:outline-none focus:ring-2 focus:ring-[#b8860b]/30 focus:border-[#b8860b] transition-all resize-none"
                  placeholder="What would you like to discuss?"
                />
              </div>

              {error && (
                <p className="text-sm text-red-500">{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#b8860b] text-white text-sm font-semibold hover:bg-[#a07a0a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
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
      </FadeIn>

      <FadeIn>
        <div className="mt-6 text-center">
          <p className="text-xs text-[#7a7a85]">
            Prefer email? Reach me directly at{" "}
            <a href="mailto:will@lostframe.ai" className="text-[#b8860b] hover:underline">will@lostframe.ai</a>
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
