"use client";

import { AnimationControls, motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { BarChartExample } from "./bar-chart";
import { BackgroundGradientAnimation } from "./ui/gradiant-background";
import { Navbar } from "./navbar";
import { DrawerDialogDemo } from "./ui/responsiveDrawerDialog";

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
      <Navbar />
      <div className="flex flex-col lg:flex-row mt-[10%] p-6 lg:p-20 justify-center items-center space-y-10 lg:space-y-0 lg:space-x-10">
        <div className="lg:w-1/3 z-[900] w-full">
          <BarChartExample />
        </div>
        <div className="flex flex-col justify-center gap-6 lg:gap-14 items-center lg:w-1/3 w-full text-center">
          <motion.div
            className="text-3xl lg:text-7xl z-[999] font-bold dark:text-white text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Get insights from your data
          </motion.div>
          <motion.div
            className="font-extralight z-[999] text-base lg:text-2xl dark:text-neutral-200 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            Get a free easy-to-interpret report with key insights including
            correlations, statistics and graphs
          </motion.div>
          <DrawerDialogDemo />
        </div>
        <div className="lg:w-1/3 w-full flex justify-center items-center">
          <DynamicLineDrawingAnimation />
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
