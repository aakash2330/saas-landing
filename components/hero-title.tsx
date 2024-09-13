"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const HeroTitle = ({ title }: { title: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // `once: true` ensures it only triggers the first time

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ delay: 0.1, duration: 1 }}
    >
      <div className="inline-block">
        <h1 className="relative z-10 text-lg md:text-6xl bg-clip-text text-white font-bold">
          {title}
        </h1>
        <motion.div
          className="bg-white h-1 mt-2 origin-center"
          style={{ width: "100%" }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1 }}
        />
      </div>
    </motion.div>
  );
};
