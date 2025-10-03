import Image from "next/image";
import { cn } from "@/lib/utils";
import heroImage from "@/public/images/hero.jpg";
import { Icons } from "./icons";
import { FadeDiv, FadeSpan } from "./ui/fade";
import { ProgressiveBlur } from "./ui/progressive-blur";
import { WorkingHoursCard } from "./working-hours-card";

const heroData = {
  title: "NICO",
  description:
    "Dlhý brunch, výberová káva, kváskový chlieb a menu, na ktorom ochutnáte zo všetkého trochu - tradičné jedlá v modernom šate, streetfood aj pan asiu. Byť svetoví aj v Prešove, to je heslo, ktorým sa snažíme neustále posúvať vpred.",
  image: "/images/hero.jpg",
};

export function Hero() {
  return (
    <section
      aria-describedby="hero-description"
      aria-label="Hero section"
      aria-labelledby="hero-title"
      id="hero"
    >
      <div className="flex w-full flex-col flex-wrap gap-5 md:flex-row md:items-stretch md:gap-10">
        <div className="flex w-full flex-1 flex-col gap-5 md:gap-10">
          <FadeDiv className="w-full">
            <Icons.line className="h-auto w-full text-brand" />
          </FadeDiv>

          <div className="flex w-full items-center justify-center gap-2.5 md:justify-start md:gap-5">
            <FadeSpan className="font-black text-brand text-xl leading-tight tracking-tight md:text-4xl">
              PRUDKO
            </FadeSpan>
            <FadeSpan className="font-black text-brand text-xl leading-tight tracking-tight md:text-4xl">
              NÁVYKOVÉ
            </FadeSpan>
            <FadeSpan className="font-black text-brand text-xl leading-tight tracking-tight md:text-4xl">
              BISTRO!
            </FadeSpan>
          </div>
        </div>
        <FadeDiv>
          <WorkingHoursCard className="h-full" />
        </FadeDiv>
      </div>
    </section>
  );
}

const _OldHero = () => {
  return (
    <section
      aria-describedby="hero-description"
      aria-label="Hero section"
      aria-labelledby="hero-title"
      className="h-[calc(100vh-var(--header-height))] py-10"
      id="hero"
    >
      <div className="relative h-full overflow-hidden rounded-4xl bg-brand shadow-2xl drop-shadow-2xl">
        <Image
          alt={`${heroData.title} hero image`}
          className="size-full object-cover object-center"
          priority
          src={heroImage}
        />
        <ProgressiveBlur
          blurIntensity={3}
          className="pointer-events-none absolute bottom-0 left-0 h-[30%] w-full"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-start justify-between gap-4 p-6">
          <h1
            className={cn(
              "font-black text-8xl text-white leading-none sm:text-[160px] md:text-[200px] lg:text-[240px] xl:text-[280px]",
              "w-full"
            )}
            style={{
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "4px currentColor",
              paintOrder: "stroke fill",
            }}
          >
            {heroData.title}
          </h1>

          {/* <p className="text-left text-lg text-white leading-none sm:max-w-[90%] sm:text-2xl md:max-w-[80%] md:text-xl lg:max-w-[70%] lg:text-2xl xl:max-w-[60%] xl:text-3xl"> */}
          <div className="flex items-end justify-between gap-4">
            <p className="text-balance font-medium text-2xl text-white leading-none lg:text-3xl">
              {heroData.description}
            </p>
            <WorkingHoursCard className="hidden md:flex" />
          </div>
        </div>
      </div>
    </section>
  );
};
