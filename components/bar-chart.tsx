"use client";

import { Bar, BarChart } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export function BarChartExample() {
  return (
    <>
      <ChartContainer config={chartConfig} className="size-[15rem] rotate-12">
        <BarChart accessibilityLayer data={chartData}>
          <Bar
            animationDuration={3000}
            isAnimationActive={true}
            animationBegin={0}
            dataKey="desktop"
            strokeWidth={2}
            radius={8}
            stroke="white"
            fill="none"
          />
        </BarChart>
      </ChartContainer>
    </>
  );
}
