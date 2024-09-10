"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./magicui/hero-highlight";

export function HeroHighlightDemo() {
  return (
    <motion.h1 className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
      EasyAnalysis.ai
      <Highlight className="text-white ">Extract insights with AI</Highlight>
    </motion.h1>
  );
}
