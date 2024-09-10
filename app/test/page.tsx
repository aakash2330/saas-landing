"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import heroImage from "../../public/assets/Hero.png";

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section
      id="hero"
      className="relative mx-auto mt-32 px-6 md:px-8 max-w-[80rem] text-center"
    >
      <h1 className="bg-clip-text text-white bg-gradient-to-br from-30% from-black dark:from-white to-black/40 dark:to-white/40  py-6 font-medium text-5xl text-balance text-transparent sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tighter translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
        Intuitive interface
      </h1>
      <p className=" mb-12 text-balance text-gray-400 text-lg md:text-xl tracking-tight translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]">
        Celebrate the joy of accomplishment with an app designed to track your
        progress, motivate your efforts, and celebrate your successes, one task
        at a time.
      </p>
      <div className="flex justify-center items-center">
        <Link href="/signup" className="">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="flex items-center space-x-2 bg-white dark:bg-black text-black dark:text-white"
          >
            Get Started
            <ChevronRight className="ml-1 transition-all group-hover:translate-x-1 duration-300 ease-out size-4" />
          </HoverBorderGradient>
        </Link>
      </div>

      <div
        ref={ref}
        className="relative after:[background:linear-gradient(to_top,hsl(var(--background))_10%,transparent)] after:z-50 after:absolute after:inset-0  mt-[8rem] animate-fade-up [--animation-delay:400ms] [perspective:2000px]"
      >
        <div
          className={`rounded-xl border border-white/10 bg-white  before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] ${
            inView ? "before:animate-image-glow" : ""
          }`}
        >
          <BorderBeam
            size={900}
            duration={12}
            delay={11}
            colorFrom="var(--color-two)"
            colorTo="var(--color-three)"
          />

          <Image
            width={1000}
            height={1000}
            src={heroImage}
            alt="Hero Image"
            className="block  relative dark:hidden border rounded-[inherit] w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
