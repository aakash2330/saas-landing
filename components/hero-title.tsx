"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const HeroTitle = ({ title }: { title: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // `once: true` ensures it only triggers the first time

  return (
    <motion.div
      ref={ref}
      className="text-3xl z-[999] text-white md:text-7xl font-bold dark:text-white text-center"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}} // Trigger only when in view
      transition={{ delay: 0.3, duration: 1.5 }}
    >
      <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-white bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        {title}
      </h1>
    </motion.div>
  );
};
