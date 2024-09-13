"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const HeroTitle = ({ title }: { title: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // `once: true` ensures it only triggers the first time

  return (
    <div className="text-center">
      <div className="inline-block">
        <h1 className="relative z-10 text-lg md:text-6xl bg-clip-text text-white font-bold">
          {title}
        </h1>
        <motion.div
          ref={ref}
          className="h-1 mt-2 origin-center"
          style={{
            width: "100%",
            background:
              "linear-gradient(130deg, #1764FC 0%, #9F1BB5 50%, #F4771C 100%)",
          }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};
