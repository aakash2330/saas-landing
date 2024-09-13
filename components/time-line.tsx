import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import img3 from "../public/assets/Image3.png";
import darkMode from "../public/assets/new/AI_categorisation_dark_mode.png";
import customReports from "../public/assets/new/Custom_reports.png";

export function TimelineDemo() {
  const data = [
    {
      title: "Unstructured Text Analysis",
      content: (
        <div>
          <p className=" font-light mb-8">
            For the first time ever, our product can leverage AI to deeply
            analyse unstructured text data at scale .
          </p>
          <div className="grid grid-cols-4 gap-4">
            <Image
              src={darkMode}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg col-start-2 col-span-2 object-fit h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },

    {
      title: "Advanced Hypothesis",
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
      title: "Custom Reports",
      content: (
        <div>
          <p className=" font-light mb-8">
            {` We can even conduct custom statistical analysis based on your use cases & Can generate fully bespoke reports with your company's branding to seamlessly fit with your workflows .
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
              className="rounded-lg col-start-2 col-span-2 object-fit h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
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
