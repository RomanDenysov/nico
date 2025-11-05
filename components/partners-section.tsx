import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import kromkaPhoto from "@/public/images/galery.jpg";
import spojkaPhoto from "@/public/images/spojka-photo.jpg";
import { Spotlight } from "./ui/spotlight";

type Partner = {
  title: string;
  description: string;
  url: string;
};

const partners: Record<string, Partner> = {
  spojka: {
    title: "Spojka",
    description:
      "Dlhodobo spolupracujeme s lokálnou pražiarňou kávy Spojka roastery. Na espresso aj filter vznikla naša vlastná rada kávy Ouki Douki. Na pulte máme vždy limited edition batch brew a balenia kávy na doma.",
    url: "https://spojkaroastery.com/",
  },
  kromka: {
    title: "Kromka",
    description:
      "Na našom menu nájdete vždy čerstvé kváskové chleby zo sesterskej pekárne Kromka.",
    url: "https://www.pekarenkromka.sk/",
  },
};

export function PartnersSection({ className }: { className?: string }) {
  return (
    <section
      aria-label="Partners section"
      aria-labelledby="partners-title"
      className={cn("size-fit", className)}
      id="partners"
    >
      <div className="space-y-5 md:space-y-10">
        <SpojkaCard partner={partners.spojka} />
        <KromkaCard partner={partners.kromka} />
      </div>
    </section>
  );
}

const SpojkaCard = ({ partner }: { partner: Partner }) => (
  <div
    className={cn(
      "relative overflow-hidden rounded-4xl border border-transparent p-4 shadow-2xl shadow-black/25 drop-shadow-2xl md:p-6",
      "transition-all duration-300",
      "bg-gradient-to-l from-brand/20 to-brand/15 backdrop-blur-sm"
    )}
  >
    <Spotlight
      className="bg-brand/50"
      size={80}
      springOptions={{
        stiffness: 26.7,
        damping: 4.1,
        mass: 0.2,
      }}
    />
    <div className="flex flex-col gap-5 md:flex-row md:gap-10">
      <div className="flex-1 overflow-hidden rounded-3xl">
        <Image
          alt="Spojka"
          className="size-full object-cover object-center transition-all duration-300 hover:scale-105"
          height={576}
          src={spojkaPhoto}
          width={960}
        />
      </div>
      <div className="flex flex-1 flex-col items-start justify-center gap-1.5 md:gap-3">
        <Link
          className="group flex items-center justify-between gap-1 transition-all duration-300 hover:underline"
          href={partner.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <h3 className="font-bold text-3xl md:text-5xl">{partner.title}</h3>
          <ArrowUpRightIcon className="size-6" />
        </Link>
        <p className="font-medium text-lg leading-none md:text-2xl">
          {partner.description}
        </p>
      </div>
    </div>
  </div>
);

const KromkaCard = ({ partner }: { partner: Partner }) => (
  <div
    className={cn(
      "group relative size-full rounded-4xl border-2 border-transparent bg-gradient-to-b from-brand-foreground/30 to-brand-foreground/10 p-4 shadow-2xl drop-shadow-2xl md:p-6"
    )}
  >
    <Spotlight
      className="bg-brand-foreground/70"
      size={80}
      springOptions={{
        stiffness: 26.7,
        damping: 4.1,
        mass: 0.2,
      }}
    />
    <div className="flex flex-col-reverse gap-5 md:flex-row md:gap-10">
      <div className="flex flex-1 flex-col items-start justify-center gap-1.5 md:gap-3">
        <Link
          className="group flex items-center justify-between gap-1 transition-all duration-300 hover:underline"
          href={partner.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <h3 className="font-bold text-3xl md:text-5xl">{partner.title}</h3>
          <ArrowUpRightIcon className="size-6" />
        </Link>
        <p className="font-medium text-lg leading-none md:text-2xl">
          {partner.description}
        </p>
      </div>
      <div className="flex-1 overflow-hidden rounded-3xl">
        <Image
          alt="Kromka"
          className="size-full object-cover object-center transition-all duration-300 hover:scale-105"
          height={576}
          src={kromkaPhoto}
          width={960}
        />
      </div>
    </div>
  </div>
);
