"use client";
import { HeroEmail } from "./hero-email";

export function Footer() {
  function scrollTo(id: string) {
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="bg-neutral-950 w-full flex justify-center items-center">
      <div className="mb-[4rem] sm:mb-[5rem] lg:mb-[6rem] bg-neutral-950 max-w-7xl p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-[4rem] sm:mt-[5rem] lg:mt-[6rem]">
          <div className="mb-4 sm:mb-0">
            Contact us: <HeroEmail />
          </div>
          <div className="text-center sm:text-left">All rights reserved. Easyanalysis.ai 2025</div>

          <div className="flex text-4xl justify-center items-center mt-4 sm:mt-0">
            <span className="font-gaegu text-[#E075CF]">E</span>
            <span className="font-gaegu text-[#94C23E]">a</span>
            <span className="font-gaegu text-[#FEA914]">s</span>
            <span className="font-gaegu text-[#0EADCF]">y</span>
            <span className="font-jetBrainsMono text-[1.35rem] text-white">
              Analysis.Ai
            </span>
          </div>
        </div>
        <br />
        <div className="text-center sm:text-left">
          Disclaimer: Gen AI may be used for analysis of data. Easyanalysis is
          not responsible for any exposure, leaks or damages to your data.
        </div>
      </div>
    </div>
  );
}
