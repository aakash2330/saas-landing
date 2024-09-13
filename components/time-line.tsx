import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import img3 from "../public/assets/Image3.png";
import darkMode from "../public/assets/new/AI_categorisation_dark_mode.png";
import customReports from "../public/assets/new/Custom_reports.png";

export function TimelineDemo() {
  const data = [
    {
      title: (
        <div>
          <span className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold  bg-gradient-to-r from-[#1764FC] via-[#9F1BB5] to-[#F4771C] bg-clip-text text-transparent ">
            Unstructured
          </span>
          <span className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold  bg-gradient-to-r from-[#1764FC] via-[#9F1BB5] to-[#F4771C] bg-clip-text text-white ">
            Text Analysis
          </span>
        </div>
      ),
      content: (
        <div>
          <p className=" font-light mb-8">
            For the first time ever, our product can leverage AI to deeply
            analyse unstructured text data at scale.
          </p>
          <div className="grid grid-cols-4 gap-4">
            <Image
              src={darkMode}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg col-start-2 col-span-2  h-full  w-full"
            />
          </div>
        </div>
      ),
    },

    {
      title: (
        <div>
          <span className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold  bg-gradient-to-r from-[#1764FC] via-[#9F1BB5] to-[#F4771C] bg-clip-text text-white ">
            Advanced
          </span>
          <span className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold  bg-gradient-to-r from-[#1764FC] via-[#9F1BB5] to-[#F4771C] bg-clip-text text-transparent ">
            Hypothesis Tests
          </span>
        </div>
      ),
      content: (
        <div>
          <p className=" font-light mb-8">
            Based on your data, we will pick the most relevant statistical
            method and test if 2 columns are correlated.
            <br />
            Don’t worry, we know statistics are scary which is why we’ll
            interpret everything for you :)
          </p>
          <div className="grid grid-cols-4 gap-4">
            <Image
              src={img3}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg col-start-2 col-span-2  h-full  w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: (
        <div>
          <span className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold  bg-gradient-to-r from-[#1764FC] via-[#9F1BB5] to-[#F4771C] bg-clip-text text-transparent ">
            Custom
          </span>
          <span className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold  bg-gradient-to-r from-[#1764FC] via-[#9F1BB5] to-[#F4771C] bg-clip-text text-white ">
            Reports
          </span>
        </div>
      ),
      content: (
        <div>
          <p className=" font-light mb-8">
            {` We can even conduct custom statistical analysis based on your use cases & Can generate fully bespoke reports with your company's branding to seamlessly fit with your workflows.
`}
            <br />
            Reach out to info@easyanalysis.ai
          </p>
          <div className="grid grid-cols-4 gap-4">
            <Image
              src={customReports}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg col-start-2 col-span-2  h-full  w-full"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
