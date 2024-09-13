"use client";
import React from "react";
import { MailIcon } from "lucide-react";

export function BackgroundBeamsDemo() {
  return (
    <div
      id="startContactUs"
      className="h-[20rem] mt-[15rem] w-full rounded-md  relative flex flex-col items-center justify-center antialiased"
    >
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl text-center font-sans font-bold">
          Contact Us
        </h1>
        <p className="text-white max-w-lg mx-auto my-2 text-center relative z-10">
          Reach out to us at info@easyanalysis.ai
        </p>
      </div>

      <div className="flex justify-center items-center gap-2">
        <MailIcon></MailIcon>
        <div className="text-neutral-300 text-lg"> info@easyanalysis.ai</div>
      </div>
    </div>
  );
}
