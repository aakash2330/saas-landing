"use client";
export function Footer() {
  function scrollTo(id: string) {
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <div className="bg-neutral-950 w-full flex justify-center items-center">
      <div className="mb-[6rem] bg-neutral-950 max-w-7xl">
        <div className=" flex justify-around items-center w-full mt-[6rem]  ">
          <div>Contact us: info@easyanalysis.ai</div>
          <div>All rights reserved. Easyanalysis.ai 2025</div>

          <div className="flex space-x-1 text-4xl justify-center items-center">
            <span className="font-gaegu text-[#0EADCF]">E</span>
            <span className="font-gaegu text-[#94C23E]">a</span>
            <span className="font-gaegu text-[#E075CF]">s</span>
            <span className="font-gaegu text-[#FEA914]">y</span>
            <span className="font-jetBrainsMono text-[1.5rem] text-white">
              Analysis.Ai
            </span>
          </div>
        </div>
        <br />
        <div>
          Disclaimer: Gen AI may be used for analysis of data. Easyanalysis is
          not responsible for any exposure, leaks or damages to your data.
        </div>
      </div>
    </div>
  );
}
