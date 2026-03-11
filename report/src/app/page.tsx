import ProgressBar from "@/components/ProgressBar";
import HeroSection from "@/components/sections/HeroSection";
import TableOfContents from "@/components/sections/TableOfContents";
import HumanCost from "@/components/sections/HumanCost";
import HiddenBill from "@/components/sections/HiddenBill";
import SiliconChokepoint from "@/components/sections/SiliconChokepoint";
import PowerCrisis from "@/components/sections/PowerCrisis";
import Convergence from "@/components/sections/Convergence";
import SoftwareEarthquake from "@/components/sections/SoftwareEarthquake";
import Thesis from "@/components/sections/Thesis";
import WhatYouShouldDo from "@/components/sections/WhatYouShouldDo";
import Sources from "@/components/sections/Sources";
import ReportContact from "@/components/sections/ReportContact";
import { EmailSlideIn, InlineEmailCapture } from "@/components/EmailCapture";
import Synopsis from "@/components/sections/Synopsis";
import ShareBriefing from "@/components/ShareBriefing";
import StudentCTA from "@/components/StudentCTA";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <main className="relative font-[family-name:var(--font-geist-sans)]">
        <HeroSection />
        <Synopsis />
        <TableOfContents />
        <HumanCost />
        <HiddenBill />
        <SiliconChokepoint />
        <PowerCrisis />
        <Convergence />
        <InlineEmailCapture />
        <SoftwareEarthquake />
        <Thesis />
        <WhatYouShouldDo />
        <StudentCTA />
        <ShareBriefing />
        <Sources />
        <ReportContact />
      </main>
      <EmailSlideIn />
    </>
  );
}
