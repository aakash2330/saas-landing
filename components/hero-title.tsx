"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const HeroTitle = ({
  title,
  size,
  animation = true,
}: {
  title: string;
  size?: "large" | "small";
  animation?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // `once: true` ensures it only triggers the first time

  return (
    <div className="text-center">
      <div className="inline-block">
        <h1
          className={`relative z-10 ${
            size == "small"
              ? "text-2xl md:text-3xl lg:text-4xl"
              : "text-4xl md:text-5xl lg:text-6xl"
          } bg-clip-text text-white font-bold tracking-tight`}
        >
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
          initial={{ scaleX: animation ? 0 : 1 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};
