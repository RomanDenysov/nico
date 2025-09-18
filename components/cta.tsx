import Image from "next/image";
import { Button } from "./ui/button";

export function CTA() {
  return (
    <section
      aria-describedby="cta-description"
      aria-label="Call to action"
      aria-labelledby="cta-title"
      className="h-screen w-full px-4 py-20"
      id="cta"
    >
      <div className="relative h-full overflow-hidden rounded-4xl bg-brand">
        <Image
          alt={"Call to action image"}
          className="object-cover object-center"
          fill
          priority
          src={"/images/cta.jpg"}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-start justify-between gap-4 p-6">
          <h2 className="text-4xl text-white md:text-5xl">Rezervovat</h2>
          <p className="text-lg text-white md:text-xl">
            Some information about this year in 3 raw Some information about
            this year in 3 raw
          </p>
          <Button size="lg">Rezervovat</Button>
        </div>
      </div>
    </section>
  );
}
