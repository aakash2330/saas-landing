"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { HoverBorderGradientButton } from "./gradiant-button";
import dynamic from "next/dynamic";

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
    <AuroraBackground>
      <div className="flex gap-10 pt-[5rem] flex-col justify-center items-center">
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
          <div className="text-3xl text-white md:text-7xl font-bold dark:text-white text-center">
            EasyAnalysis.ai
          </div>
          <div className="font-extralight text-white text-base md:text-4xl dark:text-neutral-200 py-4">
            Extract insights with AI
          </div>
        </motion.div>
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white bg-transparent">
            Try now for free
          </div>
        </button>
        <motion.div
          drag
          dragSnapToOrigin
          initial={{ y: 0 }}
          animate={cursoImageAnimateControls}
        >
          <DynamicLineDrawingAnimation></DynamicLineDrawingAnimation>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}
