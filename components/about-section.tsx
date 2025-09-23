"use client";

import Fade from "embla-carousel-fade";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
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

const aboutItems: AboutItem[] = [
  {
    year: 2013,
    title: "2013",
    description:
      "Bistro, kaviareň, dlhý brunch aj večerné vínko na terase. Naše “prudko návykové bistro” vzniklo v roku 2013. Začínali sme v jednej miestnosti s asi desiatimi stolmi a postupne rástli, ako rástol aj počet našich štamgastov.",
    image: "/images/about/1.jpg",
  },
  {
    year: 2023,
    title: "2023",
    description:
      "V roku 2023 sme naše priestory pretvorili do dnešnej podoby. Nico, to sú drevené stoličky, veľké presklenné okná a ružovo-fialové neóny.",
    image: "/images/about/2.jpg",
  },

  {
    year: 2025,
    title: "2025",
    description:
      "V roku 2025 nás Gault & Millau zaradili do svojho celosvetovo uznávaného sprievodcu najlepšími gastro spotmi: “NICO CAFFÉ je rušným miestom pre milovníkov života, ktorým pojmy ako smash, cold brew či exotická kuchyňa nie sú cudzie.”",
    image: "/images/about/3.jpg",
  },
];

export function AboutSection({ className }: { className?: string }) {
  const [api, setApi] = useState<CarouselApi>();
  const [_selected, setSelected] = useState(0);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const _onSelect = useCallback((embla: CarouselApi) => {
    setSelected(embla?.selectedScrollSnap() ?? 0 + 1);
  }, []);

  return (
    <section
      aria-label="About section"
      aria-labelledby="about-title"
      className={className}
      id="about"
    >
      <Carousel
        opts={{
          loop: true,
          duration: 30,
          containScroll: false,
        }}
        plugins={[Fade()]}
        setApi={setApi}
      >
        <Card className="border-brand bg-brand">
          <CardHeader>
            <CardTitle className="text-white">About</CardTitle>
            <CardAction>
              <CarouselControllers api={api} count={count} current={current} />
            </CardAction>
          </CardHeader>
          <CardContent>
            <CarouselContent className="w-full">
              {aboutItems.map((item, _index) => (
                <CarouselItem className="basis-full" key={item.year}>
                  <AboutItem item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </CardContent>
        </Card>
      </Carousel>
    </section>
  );
}

const AboutItem = ({ item }: { item: AboutItem }) => (
  <div className="relative aspect-video w-full overflow-hidden rounded-4xl">
    <Image
      alt={item.title}
      className="absolute inset-0 object-cover object-center"
      fill
      src={item.image}
    />
    <ProgressiveBlur
      blurIntensity={3}
      className="pointer-events-none absolute bottom-0 left-0 h-[30%] w-full"
    />
    <div className="absolute inset-0 flex flex-col items-start justify-between gap-4 p-6">
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
  current,
  count,
}: {
  className?: string;
  api?: CarouselApi;
  current: number;
  count: number;
}) => (
  <div
    className={cn(
      "flex items-center justify-between gap-1.5 rounded-4xl bg-brand-foreground p-0.5 shadow-2xl drop-shadow-2xl md:p-1.5",
      className
    )}
  >
    <Button
      className="size-7 md:size-9"
      onClick={() => api?.scrollPrev()}
      size="icon"
      variant="brand"
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
      variant="brand"
    >
      <ChevronRightIcon />
    </Button>
  </div>
);
