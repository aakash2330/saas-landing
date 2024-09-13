"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import { Feature } from "../how-it-works";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({
  feature: { description, id, title, color, icon },
}: FeatureCardProps) {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);

  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

  const border = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) {
        return;
      }

      const borderRect = border.current.getBoundingClientRect();
      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [offsetX, offsetY]);

  return (
    <div
      key={id}
      className="relative w-[30rem]  rounded-xl border border-white/30 px-5 py-10 text-center"
    >
      <motion.div
        ref={border}
        className="absolute inset-0 rounded-xl border-2 border-purple-400"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
      />
      <div className="flex justify-center items-center">
        <Image
          src={icon}
          alt=""
          height={50}
          width={50}
          className="object-cover"
        ></Image>
      </div>
      <h3 className="mt-6 text-xl font-bold" style={{ color: color }}>
        {title}
      </h3>
      <p className="mt-2 font-light text-white/90">{description}</p>
    </div>
  );
}
