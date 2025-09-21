"use client";

import { motion } from "motion/react";
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

const variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  closed: {
    opacity: 0,
    y: 25,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

export const WorkingHoursCard = ({ open = true }: { open: boolean }) => (
  <motion.div animate="open" exit="closed" initial="closed" variants={variants}>
    <div className="hidden shrink-0 rounded-4xl bg-brand-foreground p-6 shadow-2xl drop-shadow-2xl md:block">
      <div className="mx-auto max-w-[560px]">
        <h3 className="mb-4 font-bold text-lg text-white tracking-tight">
          {workingHoursData.title}
        </h3>
        <div className="grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 font-normal text-sm text-white/80 tracking-tight">
          <b className="text-white">{workingHoursData.week.title}</b>
          <b className="text-right text-white">{workingHoursData.week.hours}</b>
          <p>Brunch</p>
          <b className="text-right">{workingHoursData.week.brunch}</b>
          <p>Bistro menu</p>
          <b className="text-right">{workingHoursData.week.bistro}</b>
        </div>
        <Separator className="my-4" />
        <div className="grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 font-normal text-sm text-white/80 tracking-tight">
          <b className="text-white">{workingHoursData.weekend.title}</b>
          <b className="text-right text-white">
            {workingHoursData.weekend.hours}
          </b>
          <p>Brunch</p>
          <b className="text-right">{workingHoursData.weekend.brunch}</b>
          <p>Bistro menu</p>
          <b className="text-right">{workingHoursData.weekend.bistro}</b>
        </div>
        <p className="mt-4 w-full text-center font-medium text-sm text-white">
          {workingHoursData.weekend.coffee}
        </p>
      </div>
    </div>
  </motion.div>
);
