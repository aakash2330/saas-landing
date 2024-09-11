import { LogoTicker } from "@/components/logo-ticker";
import { Aurora } from "@/components/aurora";
import { FeaturesSectionDemo } from "@/components/bento-grid";
import { TimelineDemo } from "@/components/time-line";
import { BentoGridDemo } from "@/components/use-cases-bento-grid";
import { ContactUsSection } from "@/components/contact-us-section";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen  flex flex-col justify-center items-center  antialiased">
      <Aurora></Aurora>
      <LogoTicker></LogoTicker>
      <FeaturesSectionDemo></FeaturesSectionDemo>
      <TimelineDemo></TimelineDemo>
      <BentoGridDemo></BentoGridDemo>
      <ContactUsSection></ContactUsSection>
    </div>
  );
}
