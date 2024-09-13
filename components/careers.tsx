"use client";
import React from "react";
import { CircleDot } from "lucide-react";
import { Footer } from "./footer";
import { HeroTitle } from "./hero-title";

export function CareersSection() {
  return (
    <div
      id="startContactUs"
      className="h-full w-full rounded-md mt-[15rem]  relative flex flex-col items-center justify-center antialiased"
    >
      <div className="max-w-2xl mx-auto p-4">
        <HeroTitle title="Careers"></HeroTitle>
        <p className="text-white mt-8 text-center max-w-lg mx-auto my-2  flex justify-center  w-full  gap-2 relative z-10">
          <CircleDot></CircleDot>
          Front End SDE | - Sept start - applications closed
        </p>
      </div>

      <div className="flex text-neutral-500  justify-center items-center gap-2">
        We do not have any open positions but will be expanding our team soon
        and will post new job openings here. Stay tuned!
      </div>
      <div className="w-full h-[1px] bg-white/50 mt-[20rem]"></div>
      <Footer></Footer>
    </div>
  );
}
