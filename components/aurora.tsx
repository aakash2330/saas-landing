"use client";

import { AnimationControls, motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { BarChartExample } from "./bar-chart";
import { BackgroundGradientAnimation } from "./ui/gradiant-background";
import { Navbar } from "./navbar";
import { DrawerDialogDemo } from "./ui/responsiveDrawerDialog";
import { DrawerDialogFeedback } from "./ui/responsiveDrawerDialogFeedback";

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
      <Navbar></Navbar>
      <div className="flex mt-[10%] py-20 flex-col sm:flex-row justify-center items-center">
        <div className="z-[900] ">
          <BarChartExample></BarChartExample>
        </div>
        <div className="flex flex-col justify-center gap-14 items-center">
          <div className="z-[900]">
            <motion.div
              className="text-6xl z-[900] text-white font-bold text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Get insights from your data
            </motion.div>
            <motion.div
              className="text-center z-[900] text-xl leading-8 text-white py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              Get a free easy-to-interpret report with key insights including
              correlations, statistics and graphs
            </motion.div>
          </div>
          <div className="flex gap-5">
            <DrawerDialogDemo></DrawerDialogDemo>
            <DrawerDialogFeedback></DrawerDialogFeedback>
          </div>
        </div>
        <div className="size-[15rem] hidden md:flex -translate-y-10 justify-center items-center">
          <DynamicLineDrawingAnimation></DynamicLineDrawingAnimation>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
