"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "./sticky-scroll";

import img1 from "../../public/assets/Image2.png";
import img3 from "../../public/assets/Image3.png";
import img4 from "../../public/assets/Image4.png";

const content = [
  {
    title: "Unstructured Text Analysis",
    description:
      "For the first time ever, our product can leverage AI to deeply analyse unstructured text data at scale",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={img1}
          width={300}
          height={300}
          className="h-full w-full object-fit"
          alt=""
        />
      </div>
    ),
  },
  {
    title: "Custom Reports",
    description:
      "We can even conduct custom statistical analysis based on your use cases & Can generate fully bespoke reports with your company's branding to seamlessly fit in .",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={img4}
          width={300}
          height={300}
          className="h-full w-full object-fit"
          alt=""
        />
      </div>
    ),
  },
  {
    title: "Advance Hypothesis",
    description:
      "Based on your data, we will pick the most relevant statistical method and test if 2 columns are correlated. Don’t worry, we know statistics are scary which is why we’ll interpret everything for you :)",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={img3}
          width={300}
          height={300}
          className="h-full w-full object-fit"
          alt=""
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="mt-[10rem] w-full">
      <div className="max-w-2xl mx-auto mb-3 p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-white bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Features
        </h1>
      </div>
      <StickyScroll content={content} />
    </div>
  );
}
