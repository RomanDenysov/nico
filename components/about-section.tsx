"use client";

import Fade from "embla-carousel-fade";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { aboutItems } from "@/app/config";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import { CarouselYearDots } from "./ui/dot-year-button";
import { ProgressiveBlur } from "./ui/progressive-blur";

type AboutItem = {
  year: number;
  title: string;
  description: string;
  image: string;
};

export function AboutSection({ className }: { className?: string }) {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <section
      aria-label="About section"
      aria-labelledby="about-title"
      className={cn("size-fit", className)}
      id="about"
    >
      <Carousel
        className="relative w-full overflow-hidden rounded-4xl shadow-2xl drop-shadow-2xl"
        opts={{
          loop: true,
          duration: 30,
          containScroll: false,
        }}
        plugins={[Fade()]}
        setApi={setApi}
      >
        <CarouselControllers
          api={api}
          className="absolute top-4 right-4 z-20"
        />

        <CarouselContent className="-ml-0 size-full">
          {aboutItems.map((item) => (
            <CarouselItem className="basis-full pl-0" key={item.year}>
              <AboutItem item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

const AboutItem = ({ item }: { item: AboutItem }) => (
  <div className="relative size-full min-h-80 md:min-h-full">
    <Image
      alt={item.title}
      className="size-full object-cover object-center"
      height={800}
      src={item.image}
      width={1400}
    />
    <ProgressiveBlur
      blurIntensity={3}
      className="pointer-events-none absolute bottom-0 left-0 h-[30%] w-full"
    />
    <div className="absolute inset-0 flex flex-col items-start justify-between gap-4 p-4 md:p-6">
      <h3 className="font-black text-5xl text-white leading-none md:text-6xl lg:text-7xl xl:text-8xl">
        {item.title}
      </h3>
      <p className="text-balance text-lg text-white leading-none md:text-xl lg:text-2xl xl:text-3xl">
        {item.description}
      </p>
    </div>
  </div>
);

const CarouselControllers = ({
  className,
  api,
}: {
  className?: string;
  api?: CarouselApi;
}) => (
  <div
    className={cn("flex w-fit items-center justify-between gap-1.5", className)}
  >
    <Button
      className="size-7 md:size-9"
      onClick={() => api?.scrollPrev()}
      size="icon"
      variant="secondary"
    >
      <ChevronLeftIcon />
    </Button>
    <CarouselYearDots
      api={api}
      className="mx-1"
      years={aboutItems.map((i) => i.year)}
    />
    <Button
      className="size-7 md:size-9"
      onClick={() => api?.scrollNext()}
      size="icon"
      variant="secondary"
    >
      <ChevronRightIcon />
    </Button>
  </div>
);
