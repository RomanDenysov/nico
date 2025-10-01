"use client";

import type { ComponentProps, ComponentPropsWithoutRef } from "react";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type UseDotButtonResult = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export function useDotButton(
  emblaApi: CarouselApi | undefined,
  onAfterClick?: (api: CarouselApi) => void
): UseDotButtonResult {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) {
        return;
      }
      emblaApi.scrollTo(index);
      onAfterClick?.(emblaApi);
    },
    [emblaApi, onAfterClick]
  );

  const onInit = useCallback((api: CarouselApi) => {
    setScrollSnaps(api?.scrollSnapList() ?? []);
  }, []);

  const onSelect = useCallback((api: CarouselApi) => {
    setSelectedIndex(api?.selectedScrollSnap() ?? 0);
  }, []);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    onInit(emblaApi);
    onSelect(emblaApi);

    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("reInit", onInit);
    };
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
}

type DotYearButtonProps = {
  index: number;
  isSelected: boolean;
  year: string | number;
  onClick: (index: number) => void;
  className?: string;
  yearButtonProps?: Omit<
    ComponentProps<typeof Button>,
    "onClick" | "children" | "type"
  >;
  dotButtonProps?: Omit<
    ComponentPropsWithoutRef<"button">,
    "onClick" | "children" | "type"
  >;
};

export function DotYearButton({
  index,
  isSelected,
  year,
  onClick,
  className,
  yearButtonProps,
  dotButtonProps,
}: DotYearButtonProps) {
  if (isSelected) {
    return (
      <Button
        aria-current="true"
        className={cn("rounded-full px-2 py-1 font-semibold", className)}
        onClick={() => onClick(index)}
        size="sm"
        type="button"
        variant="secondary"
        {...yearButtonProps}
      >
        {String(year)}
      </Button>
    );
  }

  return (
    <button
      aria-current={isSelected ? "true" : undefined}
      aria-label={`Go to ${String(year)} slide`}
      className={cn(
        "relative inline-flex size-3 rounded-full bg-secondary transition-colors hover:bg-foreground/60 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
        className
      )}
      onClick={() => onClick(index)}
      type="button"
      {...dotButtonProps}
    />
  );
}

type CarouselYearDotsProps = {
  api: CarouselApi | undefined;
  years: Array<string | number>;
  className?: string;
  onAfterClick?: (api: CarouselApi) => void;
};

export function CarouselYearDots({
  api,
  years,
  className,
  onAfterClick,
}: CarouselYearDotsProps) {
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    api,
    onAfterClick
  );

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {scrollSnaps.map((_, i) => {
        const year = years[i] ?? i + 1;
        return (
          <DotYearButton
            index={i}
            isSelected={selectedIndex === i}
            key={String(year)}
            onClick={onDotButtonClick}
            year={year}
          />
        );
      })}
    </div>
  );
}

export type { UseDotButtonResult };
