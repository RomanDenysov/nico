import Image from "next/image";
import { CONFIG } from "@/app/config";
import { cn } from "@/lib/utils";
import heroImage from "@/public/images/hero.jpg";
import { WorkingHoursCard } from "./working-hours-card";

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
            <WorkingHoursCard open={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
