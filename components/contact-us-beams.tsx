"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { MailIcon } from "lucide-react";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] mt-[10rem] w-full rounded-md  relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Contact us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          We are always looking for ways to improve our products and services.
          Contact us and let us know how we can help you.
        </p>
      </div>

      <div className="flex justify-center items-center gap-2">
        <MailIcon></MailIcon>
        <div className="text-neutral-300 text-lg"> info@easyanalysis.ai</div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
