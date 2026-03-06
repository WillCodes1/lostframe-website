"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

export default function BookingModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in-up"
        style={{ animationDuration: "200ms" }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-3xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up"
        style={{ animationDuration: "300ms" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div>
            <h2 className="text-xl font-bold text-foreground">
              Schedule a Consultation
            </h2>
            <p className="text-sm text-muted-foreground">
              Book a free call to discuss your AI-powered project
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Calendar iframe */}
        <div className="p-4 md:p-6 min-h-[600px] max-h-[80vh] overflow-y-auto">
          <div className="w-full min-h-[600px] rounded-lg">
            <iframe
              src="https://calendar.google.com/calendar/appointments/AcZssZ3LfRPbwX4nzuvLDsYX4sDjtW1audppPCjgaMU=?gv=true"
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              className="rounded-lg"
              title="Schedule a meeting with Lost Frame Ventures"
              allow="payment"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-border bg-muted/30 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            Or visit the{" "}
            <a
              href="/meeting"
              className="text-foreground underline hover:text-gold transition-colors"
            >
              full scheduling page
            </a>
          </p>
          <button
            onClick={onClose}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
