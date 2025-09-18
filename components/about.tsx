"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";

const items = [
  {
    title: "O nás",
    description: "O nás",
    image: "/images/about/1.jpg",
  },
  {
    title: "O nás",
    description: "O nás",
    image: "/images/about/2.jpg",
  },

  {
    title: "O nás",
    description: "O nás",
    image: "/images/about/3.jpg",
  },
  {
    title: "O nás",
    description: "O nás",
    image: "/images/about/1.jpg",
  },
];

export function About() {
  const [api, setApi] = useState<CarouselApi>();
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }
    const onSelect = () => {
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
    };
    onSelect();
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  const handleScroll = useCallback(
    (dir: "prev" | "next") =>
      dir === "prev" ? api?.scrollPrev() : api?.scrollNext(),
    [api]
  );

  return (
    <section
      aria-describedby="about-description"
      aria-label="About section"
      aria-labelledby="about-title"
      className="w-full snap-center px-4 py-10"
      id="about"
    >
      <Carousel opts={{ align: "start" }} setApi={setApi}>
        <div className="relative overflow-hidden rounded-4xl bg-brand pb-1">
          <div className="relative mb-6 flex items-center justify-between px-6 pt-6">
            <h2 className="font-semibold text-3xl text-white md:text-4xl">
              O nás
            </h2>
            <div className="flex items-center justify-end gap-2">
              <Button
                className="size-9 rounded-full hover:bg-brand-foreground/50"
                disabled={!canPrev}
                onClick={() => handleScroll("prev")}
                size="icon"
                type="button"
                variant="ghost"
              >
                <ChevronLeftIcon className="mr-0.5 size-6 text-white disabled:opacity-50" />
              </Button>
              <Button
                className="size-9 rounded-full hover:bg-brand-foreground/50"
                disabled={!canNext}
                onClick={() => handleScroll("next")}
                size="icon"
                type="button"
                variant="ghost"
              >
                <ChevronRightIcon className="ml-0.5 size-6 text-white" />
              </Button>
            </div>
          </div>

          <AboutContent />
        </div>
      </Carousel>
    </section>
  );
}

const AboutContent = () => (
  <CarouselContent className="-ml-2 md:-ml-4 w-full pl-1">
    {items.map((item, index) => (
      <CarouselItem
        className="pl-2 md:basis-1/2 md:pl-4"
        key={index.toString()}
      >
        <div className="relative w-full overflow-hidden rounded-4xl">
          <Image
            alt={item.title}
            className="object-cover object-center"
            height={600}
            src={item.image}
            width={900}
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex flex-col items-start justify-between gap-4 p-6">
            <h3 className="text-2xl text-white">{item.title}</h3>
            <p className="text-lg text-white">{item.description}</p>
          </div>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
);
