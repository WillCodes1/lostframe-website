import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Schedule a Consultation - Lost Frame Ventures",
  description:
    "Book a free consultation to discuss how AI can transform your business. Partner with NASA prize-winning engineers to build mission-critical AI solutions.",
  robots: "noindex, nofollow",
  openGraph: {
    title: "Schedule a Consultation - Lost Frame Ventures",
    description:
      "Book a free consultation to discuss how AI can transform your business. Partner with NASA prize-winning engineers to build mission-critical AI solutions.",
    type: "website",
    url: "https://lostframe.ai/meeting",
    images: [{ url: "https://lostframe.ai/lostframeventures.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schedule a Consultation - Lost Frame Ventures",
    description:
      "Book a free consultation to discuss how AI can transform your business. Partner with NASA prize-winning engineers.",
    images: ["https://lostframe.ai/lostframeventures.png"],
  },
};

export default function MeetingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar with centered logo */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-white/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-center">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png"
              alt="Lost Frame Ventures Logo"
              width={140}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Schedule a Consultation</h1>
          <p className="text-muted-foreground text-lg">
            Let&apos;s discuss how we can partner to build your AI-powered
            business
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg border border-white/40 p-6 min-h-[700px] max-h-[95vh] overflow-y-auto">
          <div className="w-full min-h-[700px] rounded-lg">
            <iframe
              src="https://calendar.google.com/calendar/appointments/AcZssZ3LfRPbwX4nzuvLDsYX4sDjtW1audppPCjgaMU=?gv=true"
              style={{ border: 0 }}
              width="100%"
              height="700"
              frameBorder="0"
              className="rounded-lg"
              title="Schedule a meeting with Lost Frame Ventures"
              allow="payment"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
