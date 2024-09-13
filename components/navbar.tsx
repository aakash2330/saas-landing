"use client";
import { Button } from "./ui/button";
export function Navbar() {
  function scrollTo(id: string) {
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <div className="absolute flex justify-around items-center top-0 left-0 w-full h-[5rem] z-50">
      <div className="flex space-x-1 text-5xl justify-center items-center">
        <span className="font-gaegu text-[#0EADCF]">E</span>
        <span className="font-gaegu text-[#94C23E]">a</span>
        <span className="font-gaegu text-[#E075CF]">s</span>
        <span className="font-gaegu text-[#FEA914]">y</span>
        <span className="font-jetBrainsMono text-[1.875rem] text-white">
          Analysis.Ai
        </span>
      </div>
      <div className="flex gap-10 justify-center items-center">
        <div
          className="hover:cursor-pointer"
          onClick={() => {
            scrollTo("#startFeatures");
          }}
        >
          Features
        </div>
        <div
          onClick={() => {
            scrollTo("#startContactUs");
          }}
          className="hover:cursor-pointer"
        >
          Contact Us
        </div>
        <Button className="bg-transparent border-white" variant={"outline"}>
          Get Started
        </Button>
      </div>
    </div>
  );
}
