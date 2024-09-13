"use client";
import React from "react";
import { MailIcon } from "lucide-react";
import { HeroTitle } from "./hero-title";
import { HeroEmail } from "./hero-email";

export function BackgroundBeamsDemo() {
  return (
    <div
      id="startContactUs"
      className="h-[20rem] mt-[15rem] w-full rounded-md  relative flex flex-col items-center justify-center antialiased"
    >
      <div className="max-w-2xl mx-auto p-4">
        <HeroTitle title="Contact Us"></HeroTitle>
        <p className="text-white max-w-lg mx-auto my-2 mt-8 text-center relative z-10">
          Reach out to us at <HeroEmail />
        </p>
      </div>
    </div>
  );
}
