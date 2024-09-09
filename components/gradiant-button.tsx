"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { ArrowRight } from "lucide-react";

export function HoverBorderGradientButton({ title }: { title: string }) {
  return (
    <div className=" flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black text-white flex items-center space-x-2"
      >
        <span className="flex gap-1">
          {title}
          <ArrowRight></ArrowRight>
        </span>
      </HoverBorderGradient>
    </div>
  );
}
