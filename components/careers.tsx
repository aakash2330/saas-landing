"use client";
import React from "react";
import { CircleDot, MailIcon } from "lucide-react";
import { Footer } from "./footer";

export function CareersSection() {
  return (
    <div
      id="startContactUs"
      className="h-full w-full rounded-md  relative flex flex-col items-center justify-center antialiased"
    >
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl text-center font-sans font-bold">
          Careers
        </h1>
        <p className="text-white text-center max-w-lg mx-auto my-2 text-sm flex justify-center  w-full  gap-2 relative z-10">
          <CircleDot></CircleDot>
          We are always looking for ways to improve our products and services.
          Contact us and let us know how we can help you.
        </p>
      </div>

      <div className="flex text-neutral-500  justify-center items-center gap-2">
        We do not have any open positions but will be expanding our team soon
        and will post new job openings here. Stay tuned!
      </div>
      <br />
      <br />
      <br />
      <div className="w-full h-[1px] bg-white/50"></div>
      <Footer></Footer>
    </div>
  );
}
