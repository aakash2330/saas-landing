"use client";

import Image from "next/image";
import { useRef } from "react";
import heroImage from "../public/assets/Assets/Slide_purple.png";

export default function HeroSection() {
  const ref = useRef(null);
  return (
    <section
      id="hero"
      className="relative mx-auto  px-6 md:px-8 max-w-[80rem] text-center"
    >
      <div
        ref={ref}
        className="relative -translate-y-32 after:[background:linear-gradient(to_top,hsl(var(--background))_2%,transparent)] after:z-50 after:absolute after:inset-0   animate-fade-up [--animation-delay:400ms] [perspective:2000px]"
      >
        <div
          className={`rounded-xl  before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] `}
        >
          <Image
            width={800}
            height={800}
            src={heroImage}
            alt="Hero Image"
            className="block  relative dark:hidden border rounded-[inherit] w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
            {` Don't waste Hours analysing data `}
          </h2>

          <p className="mt-6 text-xl leading-8 text-white">
            Let us crunch the <strong>numbers</strong>, plot the{" "}
            <strong>graphs</strong> and generate a <strong>presentation</strong>{" "}
            <br />
            so that you can focus on what truely matters
          </p>
        </div>

        <div className="flex justify-center items-center">
          <button
            className="text-white z-[999]  py-2 px-4 rounded-xl transform transition-transform duration-200 hover:scale-105"
            style={{
              background:
                "linear-gradient(130deg, #1764FC 0%, #9F1BB5 50%, #F4771C 100%)",
            }}
          >
            Upload your Excel file
          </button>
        </div>
      </div>
    </section>
  );
}
