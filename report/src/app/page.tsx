import ProgressBar from "@/components/ProgressBar";
import HeroSection from "@/components/sections/HeroSection";
import TableOfContents from "@/components/sections/TableOfContents";
import HumanCost from "@/components/sections/HumanCost";
import SoftwareEarthquake from "@/components/sections/SoftwareEarthquake";
import HiddenBill from "@/components/sections/HiddenBill";
import SiliconChokepoint from "@/components/sections/SiliconChokepoint";
import PowerCrisis from "@/components/sections/PowerCrisis";
import Convergence from "@/components/sections/Convergence";
import Thesis from "@/components/sections/Thesis";
import Sources from "@/components/sections/Sources";
import { EmailSlideIn, InlineEmailCapture } from "@/components/EmailCapture";
import ShareBriefing from "@/components/ShareBriefing";
import StudentCTA from "@/components/StudentCTA";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <main className="relative font-[family-name:var(--font-geist-sans)]">
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
        <ShareBriefing />
        <Sources />
      </main>
      <EmailSlideIn />
    </>
  );
}
