import { LogoTicker } from "@/components/logo-ticker";
import { Aurora } from "@/components/aurora";
import { TimelineDemo } from "@/components/time-line";
import { UseCasesCaraousal } from "@/components/use-cases-bento-grid";
import { AccordionDemo } from "@/components/faq-accordion";
import { BackgroundBeamsDemo } from "@/components/contact-us-beams";
import { StickyScrollRevealDemo } from "@/components/ui/sticky-scroll-features";
import { Features } from "@/components/how-it-works";
import HeroSection from "@/components/hero-section";
import { CareersSection } from "@/components/careers";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen  flex flex-col justify-center items-center  antialiased">
      <Aurora></Aurora>
      <HeroSection></HeroSection>
      <LogoTicker></LogoTicker>
      <TimelineDemo></TimelineDemo>
      <StickyScrollRevealDemo></StickyScrollRevealDemo>
      <Features></Features>
      <UseCasesCaraousal></UseCasesCaraousal>
      <AccordionDemo></AccordionDemo>
      <BackgroundBeamsDemo></BackgroundBeamsDemo>
      <CareersSection></CareersSection>
    </div>
  );
}
