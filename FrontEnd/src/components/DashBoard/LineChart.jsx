"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", reels: 186, carousel: 80, image: 120 },
  { month: "February", reels: 160, carousel: 200, image: 250 },
  { month: "March", reels: 237, carousel: 120, image: 150 },
  { month: "April", reels: 73, carousel: 190, image: 120 },
  { month: "May", reels: 209, carousel: 130, image: 80 },
  { month: "June", reels: 214, carousel: 140, image: 300 },
];

const chartConfig = {
  carousel: {
    label: "Carousel",
    color: "hsl(var(--chart-1))",
  },
  image: {
    label: "Image",
    color: "hsl(var(--chart-2))",
  },
  reels: {
    label: "Reels",
    color: "hsl(var(--chart-4))",
  },
};

export function LineChart() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Area Chart</CardTitle>
        <CardDescription>Showing total engagement rate</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillCarousel" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-carousel)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-carousel)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillReels" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-reels)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-reels)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillImage" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-image)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-image)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="reels"
              type="natural"
              fill="url(#fillReels)"
              fillOpacity={0.4}
              stroke="var(--color-reels)"
              stackId="a"
            />
            <Area
              dataKey="carousel"
              type="natural"
              fill="url(#fillCarousel)"
              fillOpacity={0.4}
              stroke="var(--color-carousel)"
              stackId="a"
            />
            <Area
              dataKey="image"
              type="natural"
              fill="url(#fillImage)"
              fillOpacity={0.4}
              stroke="var(--color-image)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
