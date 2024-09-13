"use client";

import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";

type LogoTicker = { id: string; alt: string };

const logosTickers: LogoTicker[] = [
  {
    id: "1",
    alt: "Easy to understand reports",
  },
  {
    id: "2",
    alt: "Statistics made easy",
  },
  {
    id: "3",
    alt: "Data Analysis in seconds",
  },
  {
    id: "4",
    alt: "Linear Regression Analysis",
  },
  {
    id: "5",
    alt: "Chi square Analysis",
  },
  {
    id: "6",
    alt: "Kruskal Wallis Analysis",
  },
  {
    id: "7",
    alt: "Anova Analysis",
  },
  {
    id: "8",
    alt: "Bar graphs",
  },
  {
    id: "9",
    alt: "Means",
  },
  {
    id: "10",
    alt: "Medians",
  },
  {
    id: "11",
    alt: "Variance",
  },
  {
    id: "12",
    alt: "Standard Deviation",
  },
];

export function LogoTicker() {
  const { isMobile } = useMediaQuery();

  return (
    <div className="bg-black py-24  text-white">
      <div className="container">
        <div className="relative mt-9 flex overflow-hidden before:left-0 before:top-0 before:z-10 before:h-full before:w-5 before:bg-[linear-gradient(to_right,#000,rgba(0,0,0,0))] after:right-0 after:top-0 after:h-full after:w-5 after:bg-[linear-gradient(to_left,#000,rgba(0,0,0,0))] sm:before:absolute sm:before:content-[''] sm:after:absolute sm:after:content-['']">
          {/* {isMobile? : } */}
          <motion.div
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            className="grid grid-cols-2 items-start justify-items-center gap-x-4 gap-y-4 sm:flex sm:flex-none sm:justify-center sm:gap-16 sm:pr-16"
            initial={isMobile ? {} : { translateX: 0 }}
            animate={isMobile ? {} : { translateX: "-50%" }}
          >
            {Array.from({ length: 2 }).map(() =>
              logosTickers.map((logo) => (
                <div
                  className="text-neutral-600 font-bold text-xl"
                  key={logo.id}
                >
                  {logo.alt}
                </div>
              )),
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
