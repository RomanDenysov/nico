import { Container } from "@/components/container";
import { FadeContainer, FadeDiv } from "@/components/ui/fade";
import { Spotlight } from "@/components/ui/spotlight";
import { Tilt } from "@/components/ui/tilt";
import { cn } from "@/lib/utils";
import { ComboMenuCard } from "./combo-menu-card";
import { Extras } from "./extras";

const breakfastMenu = {
  menu: [
    {
      name: "Raňajkové Menu",
      price: "+€2,89",
      description:
        "jedno + teplý nápoj + džús. Espresso, Cappuccino, Batch Brew, Kakao, Ovocný alebo Čierny Čaj. Pomarančový džús, Jablcový džús",
    },
  ],
  main: [
    {
      name: "Blackstone Toast",
      price: "€7,90",
      description:
        "Kváskový toast, slanina, volské oko, paradajka, petržlenová pesto, parmezán, byľinky - 280g (1,3,7)",
    },
    {
      name: "Palacinky Jahody & Tvaroh",
      price: "€7,90",
      description:
        "Domáce palacinky, s jahodovým rozvarem, tvarohová pena, mrazený tvaroh, mandľový crumble - 340g (1,3,7,8)",
    },
    {
      name: "Shokupan Egg & Pulled Pork",
      price: "€8,50",
      description:
        "Trhané bbq bravčové mäso, miešané vajíčka, karamelizovaná cibuľa, chipotle mayo, koriander, sezam, pickles - 360g (1,3,7,10,11)",
    },
    {
      name: "French Toast & Choco Mousse, Banán a Ovocie",
      price: "€7,90",
      description:
        "Francúzsky toast, čokoládový mousse, banán & sezónne ovocie, mandľový crumble, maple sirup, olivový olej, soľ - 360g (1,7,8)",
    },
    {
      name: "Omeleta s Goudou a Slaninou",
      price: "€6,90",
      description:
        "Omeleta z troch vajíčok, šťavnaté maslo, gouda, slanina, byľinky, rohlík z krömky - 220g (1,3,7,10)",
    },
  ],
  sides: [
    {
      name: "Croissant & Miešané Vajíčka",
      price: "€7,50",
      description:
        "Maslový croissant, krémová praženica s maslom, parmezán, slanina, pažítka - 180g (1,3,7)",
    },
    {
      name: "Praženica Maslo & Parmezán",
      price: "€6,20",
      description:
        "Miešané vajíčka (2ks), pažítka, šťahané maslo, kváskový chlieb - 190g (1,3,7)",
    },
    {
      name: "Praženica Slanina & Cibuľa",
      price: "€6,20",
      description:
        "Miešané vajíčka (2ks), slanina, cibuľa, pažítka, šťahané maslo, kváskový chlieb, byľinky - 240g (1,3,7)",
    },
    {
      name: "Ham & Eggs",
      price: "€6,20",
      description:
        "Tri volské oká, šunka od kosti, šalátový dresing, šťahané maslo, byľinky, rohlík z krömky - 210g (1,3,7,10)",
    },
    {
      name: 'Raňajky "Kombo"',
      price: "€7,60",
      description:
        "Kváskový chlieb z krömky, maslo, praženica s pažítkou, chrumkavé horčica, párky z ferme (2ks) - 230g (1,3,7,10)",
    },
  ],
  seconds: [
    {
      name: 'Raňajky "Losos & Avokádo"',
      price: "€8,50",
      description:
        "Rázny kváskový chlieb, vajíčka na hrtláčko, avokádo, uhorkový šalát, údený losos, sýrová nádevka, byľinky - 260g (1,3,4,7)",
    },
    {
      name: "Avotoasty Feta & Sušené Paradajky",
      price: "€7,90",
      description:
        "Avokádo, spread zo sušených paradajok, rukola, feta, sezam - 270g (1,3,7)",
    },
    {
      name: "Avotoasty Praženica & Parmezán",
      price: "€7,90",
      description:
        "Avokádo, kváskový chlieb, maslo, praženica, rukola, cherry paradajky, sezam, byľinky - 280g (1,3,7)",
    },
    {
      name: "Pikantné Párky s Ohrenom",
      price: "€6,50",
      description:
        "3 párky z ferme, naša horčica, chren, kváskový chlieb - 160g (1,10)",
    },
    {
      name: "Toasty Šunka & Syr",
      price: "€6,90",
      description:
        'Zapečené toasty v našom chlebe, "anglicari" so šunkou a 2 druhmi syra, rukolový šalát so cherry paradajky, kečup - 380g (1,3,7,10,11)',
    },
    {
      name: "Ovsená Kaša s Ovocím",
      price: "€6,90",
      description:
        "Sezónne ovocie, mix ovocia, orieškovémäslo, vymačkaný med, crumble, orechy - 280g (1,7,8)",
    },
  ],
};

export default function RanajkyPage() {
  return (
    <Container className="min-h-screen py-12">
      <FadeContainer className="space-y-5 md:space-y-10">
        <Tilt
          className={cn("group relative size-full")}
          isRevese
          rotationFactor={2}
          springOptions={{
            stiffness: 26.7,
            damping: 4.1,
            mass: 0.2,
          }}
          style={{
            transformOrigin: "center center",
          }}
        >
          <FadeDiv className="flex items-center justify-between rounded-4xl border-2 border-transparent bg-gradient-to-b from-brand-foreground/30 to-brand-foreground/10 p-6 shadow-2xl drop-shadow-2xl">
            <h1 className="font-bold text-3xl text-brand tracking-tight md:text-5xl">
              Ranajky
            </h1>
            <div className="rounded-4xl border-2 border-transparent bg-brand/10 px-2 py-2 md:px-3 md:py-2">
              <p className="font-medium text-base md:text-xl">07:00 - 11:00</p>
            </div>
          </FadeDiv>
        </Tilt>
        <div className="columns-1 md:columns-2">
          <FadeDiv className="mb-5 size-fit md:mb-10">
            <MenuItem items={breakfastMenu.main} />
          </FadeDiv>
          <FadeDiv className="mb-5 size-fit md:mb-10">
            <MenuItem items={breakfastMenu.sides} />
          </FadeDiv>
          <FadeDiv className="mb-5 size-fit md:mb-10">
            <MenuItem items={breakfastMenu.seconds} />
          </FadeDiv>
          <FadeDiv className="mb-5 size-fit md:mb-10">
            <ComboMenuCard className="size-fit" item={breakfastMenu.menu[0]} />
          </FadeDiv>
        </div>
        <FadeDiv>
          <Extras />
        </FadeDiv>
      </FadeContainer>
    </Container>
  );
}

function MenuItem({
  title,
  items,
  className,
}: {
  title?: string;
  items: { name: string; price: string; description: string }[];
  className?: string;
}) {
  return (
    <Tilt
      className={cn(
        "group relative size-full rounded-4xl border-2 border-transparent bg-gradient-to-b from-brand-foreground/30 to-brand-foreground/10 p-6 shadow-2xl drop-shadow-2xl",
        className
      )}
      isRevese
      rotationFactor={4}
      springOptions={{
        stiffness: 26.7,
        damping: 4.1,
        mass: 0.2,
      }}
      style={{
        transformOrigin: "center center",
      }}
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
      <div className="flex flex-col gap-5">
        {title ? (
          <h3 className="font-bold text-brand text-xl tracking-tight">
            {title}
          </h3>
        ) : null}
        <ul className="flex flex-col gap-3">
          {items.map((item) => (
            <li className="font-medium text-lg tracking-tight" key={item.name}>
              <div className="flex items-start justify-between gap-4">
                <h4 className="font-semibold text-lg leading-tight">
                  {item.name}
                </h4>
                <span className="font-medium text-base leading-tight">
                  {item.price}
                </span>
              </div>
              <p className="max-w-[80%] text-muted-foreground text-sm leading-none">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Tilt>
  );
}
