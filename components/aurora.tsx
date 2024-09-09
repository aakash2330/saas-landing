"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import img from "../public/assets/Image1.png";
import Image from "next/image";
import { HoverBorderGradientButton } from "./gradiant-button";

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
      <div className="flex gap-20 flex-col justify-center items-center">
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
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            EasyAnalysis.ai
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            Extract insights with AI
          </div>
        </motion.div>
        <HoverBorderGradientButton title="Try now for free"></HoverBorderGradientButton>
        <motion.div
          drag
          dragSnapToOrigin
          initial={{ y: 0 }}
          animate={cursoImageAnimateControls}
        >
          <Image
            src={img}
            alt=""
            height={300}
            width={300}
            className="max-w-none"
            draggable="false"
          />
        </motion.div>
      </div>
    </AuroraBackground>
  );
}
