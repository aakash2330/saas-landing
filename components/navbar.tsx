"use client";
import { Button } from "./ui/button";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function scrollTo(id: string) {
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="absolute top-0 left-0 w-full  bg-transparent">
      <div className="flex justify-between items-center h-[5rem] px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="flex text-[2rem] sm:text-[2.5rem] z-[999] md:text-[3rem] justify-center items-center">
          <span className="font-gaegu text-[#E075CF]">E</span>
          <span className="font-gaegu text-[#94C23E]">a</span>
          <span className="font-gaegu text-[#FEA914]">s</span>
          <span className="font-gaegu text-[#0EADCF]">y</span>
          <span className="font-jetBrainsMono text-[1.5rem] sm:text-[1.775rem] text-white">
            Analysis.Ai
          </span>
        </div>
        <div className="hidden lg:flex gap-6 sm:gap-10 z-[900] justify-center items-center text-sm sm:text-base">
          <div
            className="hover:cursor-pointer"
            onClick={() => {
              scrollTo("#startFeatures");
            }}
          >
            Features
          </div>
          <div
            className="hover:cursor-pointer"
            onClick={() => {
              scrollTo("#startContactUs");
            }}
          >
            Contact Us
          </div>
          <Button
            className="bg-transparent border-white rounded-[6px] hover:bg-transparent"
            variant={"outline"}
          >
            Get Started
          </Button>
        </div>
        {/* Hamburger menu for small screens */}
        <div className="lg:hidden flex items-center z-[999]">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Icon for the hamburger menu */}
            <svg
              className="w-6 h-6 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
