import ProgressBar from "@/components/report/ProgressBar";
import HeroSection from "@/components/report/sections/HeroSection";
import TableOfContents from "@/components/report/sections/TableOfContents";
import HumanCost from "@/components/report/sections/HumanCost";
import HiddenBill from "@/components/report/sections/HiddenBill";
import SiliconChokepoint from "@/components/report/sections/SiliconChokepoint";
import PowerCrisis from "@/components/report/sections/PowerCrisis";
import Convergence from "@/components/report/sections/Convergence";
import SoftwareEarthquake from "@/components/report/sections/SoftwareEarthquake";
import Thesis from "@/components/report/sections/Thesis";
import WhatYouShouldDo from "@/components/report/sections/WhatYouShouldDo";
import Sources from "@/components/report/sections/Sources";
import ReportContact from "@/components/report/sections/ReportContact";
import { EmailSlideIn, InlineEmailCapture } from "@/components/report/EmailCapture";
import Synopsis from "@/components/report/sections/Synopsis";
import ShareBriefing from "@/components/report/ShareBriefing";
import StudentCTA from "@/components/report/StudentCTA";

export default function ResearchPage() {
  return (
    <>
      <ProgressBar />
      <main className="relative">
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
