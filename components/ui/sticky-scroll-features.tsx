"use client";
import React from "react";
import Image from "next/image";

import img1 from "../../public/assets/Image2.png";
import img3 from "../../public/assets/Image3.png";
import img4 from "../../public/assets/Image4.png";
import { cn } from "@/lib/utils";
import { HeroTitle } from "../hero-title";
import { color } from "snapsvg";

const content = [
  {
    title: "Upload Your Data",
    description:
      "Simply upload your Excel file. No need for any additional input from you.",
    content: img1,
  },
  {
    title: "Automated Analysis",
    description:
      "Our advanced algorithms handle all the statistical analysis and data processing automatically.",
    content: img4,
  },
  {
    title: "Download Your Report",
    description:
      "Get a comprehensive report with detailed insights, correlations, statistics, and graphs all without lifting a finger.",
    content: img3,
  },
];

export const colors = ["#F4771C", "#1764FC", "#9F1BB5"];
export function StickyScrollRevealDemo() {
  return (
    <div className=" w-full px-[15%] pt-[2%]  flex justify-center items-center flex-col">
      <div className="max-w-2xl lg:translate-y-20 mx-auto  p-4">
        <HeroTitle title="How it works ?"></HeroTitle>
      </div>
      <div className="w-full">
        {content.map((item, index) => {
          return index % 2 == 0 ? (
            <div key={index} className="grid grid-cols-8">
              <div className="col-span-3 flex flex-col justify-center items-center">
                <div
                  style={{ color: colors[index] }}
                  className="text-2xl text-right w-full"
                >
                  {item.title}
                </div>
                <br />
                <div className="font-light text-right">{item.description}</div>
              </div>
              <div className=" col-span-2 flex flex-col justify-center items-center">
                <div
                  className={`h-full w-[1px] bg-${index == 0 ? "black" : "white"}`}
                ></div>
                <div
                  style={{ backgroundColor: colors[index] }}
                  className={cn(
                    `inline-flex min-h-14 min-w-14  text-white rounded-full items-center justify-center font-bold `,
                  )}
                >
                  {index + 1}
                </div>
                <div className=" col-span-2 flex justify-center items-center"></div>
                <div
                  className={`h-full w-[1px] bg-${index !== 0 ? "black" : "white"}`}
                ></div>
              </div>
              <div className="col-span-3 h-[20rem] flex justify-center items-center"></div>
            </div>
          ) : (
            <div key={index} className="grid grid-cols-8">
              <div className="col-span-3  flex  justify-center items-center"></div>
              <div className=" col-span-2 flex flex-col justify-center items-center">
                <div className="h-full w-[1px]  bg-white"></div>
                <div
                  style={{ backgroundColor: colors[index] }}
                  className={cn(
                    `inline-flex min-h-14 min-w-14  text-white rounded-full items-center justify-center font-bold `,
                  )}
                >
                  {index + 1}
                </div>
                <div className="h-full w-[1px] bg-white"></div>
              </div>
              <div className="col-span-3  flex flex-col justify-center items-center">
                <div
                  style={{ color: colors[index] }}
                  className="text-2xl text-left w-full"
                >
                  {item.title}
                </div>
                <br />
                <div className="font-light  text-left">{item.description}</div>
              </div>
            </div>
          );
        })}
      </div>

      <br />
      <br />
      <br />
      <div className="flex justify-center items-center">
        <button
          className="text-white z-[999]  py-2 px-4 rounded-xl transform transition-transform duration-200 hover:scale-105"
          style={{
            background:
              "linear-gradient(130deg, #1764FC 0%, #9F1BB5 50%, #F4771C 100%)",
          }}
        >
          Get started for free
        </button>
      </div>
    </div>
  );
}
