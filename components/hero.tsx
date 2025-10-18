import Image from "next/image";
import { addresses } from "@/app/config";
import logoPnb from "@/public/logos/logo-pnb.png";
import { AddressFields } from "./address-fields";
import { FadeDiv } from "./ui/fade";
import { WorkingHoursCard } from "./working-hours-card";

export function Hero() {
  return (
    <section
      aria-label="Hero section"
      className="relative mx-auto flex size-full min-h-[calc(100vh-var(--header-height)-var(--content-margin-top))] flex-col"
      id="hero"
    >
      <div className="flex h-full flex-1 flex-grow items-center">
        <Image
          alt="Exterier nico caffé"
          className="size-full object-cover object-center"
          height={1200}
          priority
          src={logoPnb}
          width={1800}
        />
      </div>
      <div className="mt-auto flex w-full shrink-0 items-start justify-between gap-8">
        {addresses.map((address) => (
          <FadeDiv className="shrink-0" key={address.city + address.street}>
            <AddressFields address={address} />
          </FadeDiv>
        ))}
        <FadeDiv className="flex flex-1 items-start justify-end">
          <WorkingHoursCard />
        </FadeDiv>
      </div>
    </section>
  );
}
