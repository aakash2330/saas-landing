"use client";

import Image from "next/image";
import { Aurora } from "./aurora";
import img from "../public/assets/Image3.png";

export function Hero() {
  return (
    <div className="gradient-secondary w-full flex justify-center items-center relative overflow-clip bg-gradient-to-b  text-white ">
      <div className="absolute left-1/2 top-[calc(100%-96px)] h-[375px] w-[750px] -translate-x-1/2 rounded-[100%] border border-[#B48CDE] bg-black bg-[radial-gradient(closest-side,#000_82%,#9560EB)] sm:top-[calc(100%-120px)] sm:h-[728px] sm:w-[1536px] lg:h-[700px] lg:w-[2380px]" />
      <div className="w-full">
        <div className="flex items-center justify-center"></div>
        <Aurora></Aurora>
        <div className="flex justify-center items-center ">
          <Image
            width={700}
            height={700}
            src={img}
            alt=""
            className="z-[999]"
          ></Image>
        </div>
      </div>
    </div>
  );
}
