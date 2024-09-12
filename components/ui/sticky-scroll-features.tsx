"use client";
import React from "react";
import Image from "next/image";

import img1 from "../../public/assets/Image2.png";
import img3 from "../../public/assets/Image3.png";
import img4 from "../../public/assets/Image4.png";
import { cn } from "@/lib/utils";

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
      "Get a comprehensive report with detailed insights, correlations, statistics, and graphs, all without lifting a finger.",
    content: img3,
  },
];

export const colors = ["#F4771C", "#1764FC", "#9F1BB5"];
export function StickyScrollRevealDemo() {
  return (
    <div className=" w-full px-[15%] pt-[10%]  flex justify-center items-center flex-col">
      <div className="max-w-2xl mx-auto mb-3 p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-white bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          How it works
        </h1>
      </div>
      <div className="w-full">
        {content.map((item, index) => {
          return index % 2 == 0 ? (
            <div key={index} className="grid grid-cols-8">
              <div className="col-span-3  flex flex-col justify-center items-center">
                <div className="text-2xl">{item.title}</div>
                <br />
                <div className="font-light text-center">{item.description}</div>
              </div>
              <div className=" col-span-2 flex flex-col justify-center items-center">
                <div
                  className={`h-full w-[1px] bg-${index == 0 ? "black" : "white"}`}
                ></div>
                <div
                  style={{ backgroundColor: colors[index] }}
                  className={cn(
                    `inline-flex min-h-14 min-w-14  rounded-full items-center justify-center   text-black`,
                  )}
                >
                  {index + 1}
                </div>
                <div className=" col-span-2 flex justify-center items-center"></div>
                <div
                  className={`h-full w-[1px] bg-${index !== 0 ? "black" : "white"}`}
                ></div>
              </div>
              <div className="col-span-3 h-[20rem] flex justify-center items-center">
              </div>
            </div>
          ) : (
            <div key={index} className="grid grid-cols-8">
              <div className="col-span-3  flex  justify-center items-center">
              </div>
              <div className=" col-span-2 flex flex-col justify-center items-center">
                <div className="h-full w-[1px]  bg-white"></div>
                <div
                  style={{ backgroundColor: colors[index] }}
                  className={cn(
                    `inline-flex min-h-14 min-w-14 rounded-full items-center justify-center   text-black`,
                  )}
                >
                  {index + 1}
                </div>
                <div className="h-full w-[1px] bg-white"></div>
              </div>
              <div className="col-span-3  flex flex-col justify-center items-center">
                <div className="text-2xl">{item.title}</div>
                <br />
                <div className="font-light text-center">{item.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
