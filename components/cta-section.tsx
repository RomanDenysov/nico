import Image from "next/image";
import { cn } from "@/lib/utils";
import ctaImage from "@/public/images/cta.jpg";
import { Button } from "./ui/button";

export function CtaSection({ className }: { className?: string }) {
  return (
    <section
      aria-describedby="cta-description"
      aria-label="Call to action"
      aria-labelledby="cta-title"
      className={className}
      id="cta"
    >
      <div className="relative h-full overflow-hidden rounded-4xl bg-brand shadow-2xl drop-shadow-2xl">
        <Image
          alt={"Call to action image"}
          className="size-full object-cover object-center"
          priority
          src={ctaImage}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-start justify-between gap-4 p-6">
          <h2
            className={cn(
              "font-black text-6xl text-white leading-none md:text-8xl xl:text-[100px"
            )}
            style={{
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "4px currentColor",
              paintOrder: "stroke fill",
            }}
          >
            Rezervovat
          </h2>
          <p className="text-left text-lg text-white leading-none sm:max-w-[90%] sm:text-2xl md:max-w-[80%] md:text-xl lg:max-w-[70%] lg:text-2xl xl:max-w-[60%] xl:text-3xl">
            Some information about this year in 3 raw Some information about
            this year in 3 raw
          </p>
          <Button size="lg">Rezervovat</Button>
        </div>
      </div>
    </section>
  );
}
