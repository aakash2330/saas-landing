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
    <div>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
      <ChartContainer
        key={Math.random()}
        config={chartConfig}
        className="size-[15rem]"
      >
        <BarChart accessibilityLayer data={chartData}>
          <Bar
            animationDuration={3000}
            isAnimationActive={true}
            animationBegin={0}
            dataKey="desktop"
            strokeWidth={1}
            stroke="url(#strokeGradient)"
            fill="none"
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
