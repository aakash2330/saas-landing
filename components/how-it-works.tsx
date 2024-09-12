"use client";
import { FeatureCard } from "./ui/feature-card";
import purple from "../public/Save_time.svg";
import blue from "../public/Zero_stat.svg";
import yellow from "../public/Easy to use.svg";
import green from "../public/Custom_sol.svg";
import { HeroTitle } from "./hero-title";

export interface Feature {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: any;
}

export const featuresList: Feature[] = [
  {
    id: "1",
    title: "User-Friendly Interface",
    description:
      "Our platform is designed to be intuitive and easy to use, so you can get started quickly without any technical expertise.",
    color: "#F4771C",
    icon: yellow,
  },
  {
    id: "2",
    title: "Zero statistical knowledge required",
    description:
      "Our state-of-the-art algorithm understands your data at depth, automatically applies the relevant statistics, and interprets the results for you.",
    color: "#1764FC",
    icon: blue,
  },
  {
    id: "3",
    title: "Save Time and Effort",
    description:
      "Don’t waste hours analyzing data in Excel or R. Let us crunch the numbers, plot the graphs, and generate a presentation so you can focus on what matters.",
    color: "#9F1BB5",
    icon: purple,
  },
  {
    id: "4",
    title: "Custom Solutions",
    description:
      "Tailored solutions to meet the unique needs of your business, ensuring you get the most relevant insights.Reach out to us at info@easyanalysis.ai",
    color: "green",
    icon: green,
  },
];

export function Features() {
  return (
    <div className="bg-black py-[72px] mt-[5rem] space-y-16  text-white sm:py-24">
      <div className="container">
        <HeroTitle title="Why choose Us ?"></HeroTitle>
        <div className="mx-auto max-w-xl">
          <p className="mt-5 text-center text-xl text-white/70">Placeholder</p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-4 sm:flex-row">
          {featuresList.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>

    </div>
  );
}
