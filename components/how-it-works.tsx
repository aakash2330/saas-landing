"use client";
import { FeatureCard } from "./ui/feature-card";

export interface Feature {
  id: string;
  title: string;
  description: string;
  color: string;
}

export const featuresList: Feature[] = [
  {
    id: "1",
    title: "Upload Your Data",
    description:
      "Simply upload your Excel file. No need for any additional input from you.",
    color: "#F4771C",
  },
  {
    id: "2",
    title: "Automated Analysis",
    description:
      "Our advanced algorithms handle all the statistical analysis and data processing automatically.",
    color: "#1764FC",
  },
  {
    id: "3",
    title: "Download Your Report",
    description:
      "Get a comprehensive report with detailed insights, correlations, statistics, and graphs, all without lifting a finger.",
    color: "#9F1BB5",
  },
];

export function Features() {
  return (
    <div className="bg-black py-[72px] space-y-16 mt-[5rem] text-white sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl">
          How it works ?
        </h2>
        <div className="mx-auto max-w-xl">
          <p className="mt-5 text-center text-xl text-white/70">Placeholder</p>
        </div>
        <div className="mt-16 flex flex-col gap-4 sm:flex-row">
          {featuresList.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
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
  );
}
