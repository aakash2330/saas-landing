import { LogoTicker } from "@/components/logo-ticker";
import { Aurora } from "@/components/aurora";
import { FeaturesSectionDemo } from "@/components/bento-grid";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen  flex flex-col justify-center items-center  antialiased">
      <Aurora></Aurora>
      <LogoTicker></LogoTicker>
      <FeaturesSectionDemo></FeaturesSectionDemo>
    </div>
  );
}
