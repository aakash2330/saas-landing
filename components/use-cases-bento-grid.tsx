import React from "react";
import img3 from "../public/assets/Image3.png";
import {
  IconArrowWaveRightUp,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./ui/use-cases-bento";
import Image from "next/image";

export function BentoGridDemo() {
  return (
    <div className="mt-[10rem]">
      <div className="w-full text-center mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-6xl w-full text-white dark:text-white ">
          Use Cases
        </h2>
        <br />
        <p className="text-neutral-300 text-xl w-full">Placeholder text</p>
      </div>
      <BentoGrid className="max-w-5xl  mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 size-fit min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image
      src={img3}
      alt="hero template"
      width={500}
      height={500}
      className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    />
  </div>
);
const items = [
  {
    title: "Business Analytics",
    description: "Improve decision-making with detailed data insights.",
    header: <Skeleton />,
  },
  {
    title: "User Research",
    description: "Easily understand the outcome of surveys that you conduct. ",
    header: <Skeleton />,
  },
  {
    title: "Customer Feedback Survey Analysis",
    description: "Understand customer sentiments and improve your services. ",
    header: <Skeleton />,
  },
  {
    title: "Market Research",
    description: "Gain valuable market insights from your data. ",
    header: <Skeleton />,
  },
  {
    title: "Financial Analysis",
    description: "Conduct thorough financial data analysis with ease. ",
    header: <Skeleton />,
  },
  {
    title: "Healthcare Analytics",
    description: "Analyse patient data to improve healthcare outcomes.",
    header: <Skeleton />,
  },
];
