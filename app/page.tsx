import { Hero } from "@/components/hero";
import { LogoTicker } from "@/components/logo-ticker";
import HeroSection from "./test/page";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center  antialiased">
      <Hero></Hero>
      <LogoTicker></LogoTicker>
      {/*
       *<HeroSection></HeroSection>
       */}
    </div>
  );
}
