"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

const workingHoursData = {
  title: "OTVÁRAČKY",
  week: {
    title: "PONDELOK — PIATOK",
    hours: "7 — 22",
    brunch: "7 — 11",
    bistro: "11 - 20",
    coffee: "Coffee and Cake all day",
  },
  weekend: {
    title: "VÍKEND",
    hours: "9 — 20",
    brunch: "9 — 12",
    bistro: "12 - 20",
    coffee: "Coffee and Cake all day",
  },
};

export const WorkingHoursCard = ({ className }: { className?: string }) => (
  <Card
    className={cn(
      "group bg-brand-foreground text-white shadow-none drop-shadow-none transition-all duration-200 hover:shadow-2xl hover:drop-shadow-2xl hover:backdrop-blur-sm",
      className
    )}
  >
    <CardHeader>
      <CardTitle className="text-lg md:text-lg lg:text-xl xl:text-2xl">
        {workingHoursData.title}
      </CardTitle>
    </CardHeader>
    <CardContent className="h-full shrink-0 transition-all duration-200 md:min-w-sm">
      <div className="grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 font-medium text-sm tracking-tight">
        <b className="">{workingHoursData.week.title}</b>
        <b className="text-right">{workingHoursData.week.hours}</b>
        <p>Brunch</p>
        <b className="text-right">{workingHoursData.week.brunch}</b>
        <p>Bistro menu</p>
        <b className="text-right">{workingHoursData.week.bistro}</b>

        <Separator className="col-span-2" />
        <b className="">{workingHoursData.weekend.title}</b>
        <b className="text-right">{workingHoursData.weekend.hours}</b>
        <p>Brunch</p>
        <b className="text-right">{workingHoursData.weekend.brunch}</b>
        <p>Bistro menu</p>
        <b className="text-right">{workingHoursData.weekend.bistro}</b>
        <Separator className="col-span-2" />
        <b className="col-span-2 text-center">
          {workingHoursData.weekend.coffee}
        </b>
      </div>
    </CardContent>
  </Card>
);
