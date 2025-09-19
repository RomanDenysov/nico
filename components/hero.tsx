import Image from "next/image";
import { CONFIG } from "@/app/config";
import { cn } from "@/lib/utils";
import heroImage from "@/public/images/hero.jpg";
import { Separator } from "./ui/separator";

const OpenHoursCard = () => (
  <div className="hidden shrink-0 rounded-4xl bg-brand-foreground p-6 shadow-2xl drop-shadow-2xl md:block">
    <div className="mx-auto max-w-[560px]">
      <h3 className="mb-4 font-bold text-lg text-white tracking-tight">
        {CONFIG.openingHours.title}
      </h3>
      <div className="grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 font-normal text-sm text-white/80 tracking-tight">
        <b className="text-white">{CONFIG.openingHours.week.title}</b>
        <b className="text-right text-white">
          {CONFIG.openingHours.week.hours}
        </b>
        <p>Brunch</p>
        <b className="text-right">{CONFIG.openingHours.week.brunch}</b>
        <p>Bistro menu</p>
        <b className="text-right">{CONFIG.openingHours.week.bistro}</b>
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 font-normal text-sm text-white/80 tracking-tight">
        <b className="text-white">{CONFIG.openingHours.weekend.title}</b>
        <b className="text-right text-white">
          {CONFIG.openingHours.weekend.hours}
        </b>
        <p>Brunch</p>
        <b className="text-right">{CONFIG.openingHours.weekend.brunch}</b>
        <p>Bistro menu</p>
        <b className="text-right">{CONFIG.openingHours.weekend.bistro}</b>
      </div>
      <p className="mt-4 w-full text-center font-medium text-sm text-white">
        {CONFIG.openingHours.weekend.coffee}
      </p>
    </div>
  </div>
);

export function Hero() {
  return (
    <section
      aria-describedby="hero-description"
      aria-label="Hero section"
      aria-labelledby="hero-title"
      className="h-screen w-full px-4 py-20"
      id="hero"
    >
      <div className="relative h-full overflow-hidden rounded-4xl bg-brand shadow-2xl drop-shadow-2xl">
        <Image
          alt={`${CONFIG.hero.title} hero image`}
          className="size-full object-cover object-center"
          priority
          src={heroImage}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-start justify-between gap-4 p-6">
          <h1
            className={cn(
              "font-black text-8xl text-white leading-none sm:text-[160px] md:text-[200px] lg:text-[240px] xl:text-[280px]"
            )}
            style={{
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "4px currentColor",
              paintOrder: "stroke fill",
            }}
          >
            {CONFIG.hero.title}
          </h1>
          <div className="flex items-end justify-between gap-4">
            <p className="text-left text-lg text-white leading-none sm:max-w-[90%] sm:text-2xl md:max-w-[80%] md:text-xl lg:max-w-[70%] lg:text-2xl xl:max-w-[60%] xl:text-3xl">
              {CONFIG.hero.description}
            </p>
            <OpenHoursCard />
          </div>
        </div>
      </div>
    </section>
  );
}
