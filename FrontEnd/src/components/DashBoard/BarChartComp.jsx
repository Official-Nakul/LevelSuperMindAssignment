"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
  { metric: "comments", carousel: 1263.35, image: 1364.619048, reels: 1142 },
  { metric: "likes", carousel: 1630.8, image: 1234.452381, reels: 1401.131579 },
  { metric: "shares", carousel: 57.7, image: 42.833333, reels: 47.815789 },
  {
    metric: "views",
    carousel: 2872.95,
    image: 2509.761905,
    reels: 2646.815789,
  },
];

const chartConfig = {
  carousel: {
    label: "Carousel",
    color: "hsl(var(--chart-1))",
  },
  images: {
    label: "Iamges",
    color: "hsl(var(--chart-2))",
  },
  reels: {
    label: "Reels",
    color: "hsl(var(--chart-3))",
  },
};

export function BarChartComp() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Bar Chart</CardTitle>
        <CardDescription>
          Distribution of likes, shares, and views across different post types.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="metric"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="carousel" fill="var(--color-carousel)" radius={4} />
            <Bar dataKey="image" fill="var(--color-images)" radius={4} />
            <Bar dataKey="reels" fill="var(--color-reels)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  );
}
