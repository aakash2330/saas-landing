"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { BarChartExample } from "./bar-chart";
import { BackgroundGradientAnimation } from "./ui/gradiant-background";

const DynamicLineDrawingAnimation = dynamic(
  () => import("../components/graph-animation"),
  {
    ssr: false,
  },
);

export function Aurora() {
  const cursoImageAnimateControls = useAnimation();
  const messageImageAnimateControls = useAnimation();

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const startFloating = (controls: AnimationControls) => {
    controls.start(floatAnimation);
  };

  useEffect(() => {
    startFloating(cursoImageAnimateControls);
    startFloating(messageImageAnimateControls);
  }, [cursoImageAnimateControls, messageImageAnimateControls]);

  return (
    <BackgroundGradientAnimation>
      <div className="flex mt-[10%] gap-5  p-20  justify-center items-center">
        <div className="z-[999]">
          <BarChartExample></BarChartExample>
        </div>
        <div className="flex flex-col justify-center gap-14 items-center">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="z-[999]">
              <motion.div
                className="text-3xl z-[999] text-white md:text-7xl font-bold dark:text-white text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                EasyAnalysis.ai
              </motion.div>
              <motion.div
                className="font-extralight z-[999] text-white text-base md:text-4xl dark:text-neutral-200 py-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
              >
                Extract insights from data with AI
              </motion.div>
            </div>
          </motion.div>
          <button
            className="text-white z-[999] py-2 px-4 rounded-xl transform transition-transform duration-200 hover:scale-105"
            style={{
              background:
                "linear-gradient(130deg, #1764FC 0%, #9F1BB5 50%, #F4771C 100%)",
            }}
          >
            Upload your Excel file
          </button>
        </div>
        <div className="size-[15rem] z-[999] flex justify-center items-center">
          <DynamicLineDrawingAnimation></DynamicLineDrawingAnimation>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
