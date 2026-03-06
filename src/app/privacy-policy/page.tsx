import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy - Lost Frame Ventures",
  description: "Privacy Policy for Lost Frame Ventures",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm">
            <strong className="text-foreground">Last Updated:</strong> March 6,
            2026
          </p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              1. Information We Collect
            </h2>
            <p>
              Lost Frame Ventures (&quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) collects information you voluntarily provide when
              you contact us, book a meeting, or use our AI demo feature. This
              may include your name, email address, company name, and industry
              information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              2. How We Use Your Information
            </h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Respond to your inquiries and consultation requests</li>
              <li>Provide and improve our services</li>
              <li>Send relevant communications about our offerings</li>
              <li>Analyze website usage to enhance user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              3. Data Protection
            </h2>
            <p>
              We implement industry-standard security measures to protect your
              personal information. We do not sell, trade, or otherwise transfer
              your personal information to third parties without your consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              4. Analytics
            </h2>
            <p>
              We use Google Analytics and Cloudflare Web Analytics to understand
              how visitors interact with our website. These services may collect
              anonymized usage data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              5. Contact
            </h2>
            <p>
              For questions about this privacy policy, contact us at{" "}
              <a
                href="mailto:will@lostframe.ai"
                className="text-foreground underline hover:text-gold transition-colors"
              >
                will@lostframe.ai
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
