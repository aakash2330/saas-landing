"use client"
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
  }
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
      <div className="flex flex-col md:flex-row mt-[10%] p-5 md:p-20 justify-center items-center">
        <div className="z-[900] w-full md:w-1/3 mb-8 md:mb-0">
          <BarChartExample />
        </div>

        <div className="flex flex-col justify-center gap-10 items-center w-full md:w-1/3">
          <div className="z-[900] text-center">
            <motion.div
              className="text-2xl md:text-5xl font-bold text-white dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Get insights from your data
            </motion.div>
            <motion.div
              className="font-extralight text-sm md:text-lg text-white dark:text-neutral-200 py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              Get a free easy-to-interpret report with key insights including
              correlations, statistics and graphs
            </motion.div>
          </div>
          <DrawerDialogDemo />
        </div>

        <div className="w-full md:w-1/3 flex justify-center items-center -translate-y-10">
          <DynamicLineDrawingAnimation />
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
