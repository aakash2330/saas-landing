import { LogoTicker } from "@/components/logo-ticker";
import { Aurora } from "@/components/aurora";
import { TimelineDemo } from "@/components/time-line";
import { UseCasesCaraousal } from "@/components/use-cases-bento-grid";
import { AccordionDemo } from "@/components/faq-accordion";
import { BackgroundBeamsDemo } from "@/components/contact-us-beams";
import HeroSection from "./test/page";
import { StickyScrollRevealDemo } from "@/components/ui/sticky-scroll-features";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen  flex flex-col justify-center items-center  antialiased">
      <Aurora></Aurora>
      <HeroSection></HeroSection>
      <LogoTicker></LogoTicker>
      <StickyScrollRevealDemo></StickyScrollRevealDemo>
      <TimelineDemo></TimelineDemo>
      <UseCasesCaraousal></UseCasesCaraousal>
      <AccordionDemo></AccordionDemo>
      <BackgroundBeamsDemo></BackgroundBeamsDemo>
    </div>
  );
}
