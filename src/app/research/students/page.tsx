import type { Metadata } from "next";
import StudentContent from "@/components/report/StudentContent";

export const metadata: Metadata = {
  title: "The AI Reality Check for College Students | Will Taubenheim",
  description:
    "What every college student needs to know about AI in 2026. Your degree is being devalued in real time. Here is what to learn, what to ignore, and how to position yourself. By Will Taubenheim, Lost Frame Ventures.",
  robots: { index: false, follow: false },
};

export default function StudentsPage() {
  return <StudentContent />;
}
