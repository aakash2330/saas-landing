import { Hero } from "@/components/hero";
import { LogoTicker } from "@/components/logo-ticker";
import HeroSection from "./test/page";
import { Aurora } from "@/components/aurora";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen  flex flex-col justify-center items-center  antialiased">
      <Aurora></Aurora>
      <LogoTicker></LogoTicker>
      <HeroSection></HeroSection>
    </div>
  );
}
