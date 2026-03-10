import ProgressBar from "@/components/report/ProgressBar";
import HeroSection from "@/components/report/sections/HeroSection";
import TableOfContents from "@/components/report/sections/TableOfContents";
import HumanCost from "@/components/report/sections/HumanCost";
import SoftwareEarthquake from "@/components/report/sections/SoftwareEarthquake";
import HiddenBill from "@/components/report/sections/HiddenBill";
import SiliconChokepoint from "@/components/report/sections/SiliconChokepoint";
import PowerCrisis from "@/components/report/sections/PowerCrisis";
import Convergence from "@/components/report/sections/Convergence";
import Thesis from "@/components/report/sections/Thesis";
import Sources from "@/components/report/sections/Sources";
import { EmailSlideIn, InlineEmailCapture } from "@/components/report/EmailCapture";
import StudentCTA from "@/components/report/StudentCTA";

export default function ResearchPage() {
  return (
    <>
      <ProgressBar />
      <main className="relative">
        <HeroSection />
        <TableOfContents />
        <HumanCost />
        <SoftwareEarthquake />
        <HiddenBill />
        <SiliconChokepoint />
        <PowerCrisis />
        <Convergence />
        <InlineEmailCapture />
        <Thesis />
        <StudentCTA />
        <Sources />
      </main>
      <EmailSlideIn />
    </>
  );
}
