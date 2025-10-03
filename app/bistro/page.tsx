import { Container } from "@/components/container";
import { FadeContainer, FadeDiv } from "@/components/ui/fade";
import { Spotlight } from "@/components/ui/spotlight";
import { Tilt } from "@/components/ui/tilt";
import { cn } from "@/lib/utils";
import { Extras } from "../ranajky/extras";

const bistroMenu = {
  menu: [
    {
      name: "Bistro Menu",
      slug: "bistro-menu",
      price: "+€3,30",
      description:
        "1. nápoj 0.3L (malinovka/ľadový čaj) + 2. hranolky + dip (aioli/mayo/kečup)",
    },
  ],
  soups: [
    {
      name: "Kokosová Tom Kha",
      price: "€6,50 / €8,90",
      description:
        "Pikantná thajská polievka s voňavou citrónovou trávou a rýžovými rezancami (2,4,11). KURACIA alebo S UDENOM TOFU. malá 360ml / veľká 660ml. S KREVETAMI +2,00",
    },
    {
      name: "Pho Bo (Hovädzie)",
      price: "€6,50 / €8,90",
      description:
        "Voňavý vývar so zeleninou, koriander, ryžové rezance, lime, uhorka, chilli - 360ml (3,4,6,11). S THASKÝM HOVÄDZÍM alebo S VAJÍČKOM. malá 360ml / veľká 660ml",
    },
  ],
  bowls: [
    {
      name: "Teriyaki Sticky Pork",
      price: "€10,90",
      description:
        "Bowl s kúskami pečeného bôčika v teriyaki omáčke, sushi ryža, redkovka, avokádo, wakame, jarná cibuľka, wasabi, papriková mayo, uhorky, kimči - 360g (1,3,6,11)",
    },
    {
      name: "Umami Chicken",
      price: "€10,90",
      description:
        "Bowl s kúskami glazovaného kuraťa, sushi ryža, redkovka, wakame, edamame, jarná cibuľka, papriková mayo, uhorky, kimči - 360g (1,3,6,11)",
    },
    {
      name: "Avo Salmon",
      price: "€10,90",
      description:
        "Bowl s gravlaxom z lososa, sushi ryža, mrkva, uhorka, avokádo, edamame, červená kapusta, nakladaný zázvor, redkvičky, wasabi mayo, chrumkavá cibuľa - 360g (1,3,6,11). TOFU +0,90 KREVETY +2,50",
    },
    {
      name: 'Šalát "Green Mojo"',
      price: "€9,90",
      description:
        "Mix šalátov, avokádo, edamame, uhorka, redkovka, tekvicové semienka, bazalka, mäta, koriander, citrúsový vinaigrette, pomer naan chlieb - 280g (1,3,7). KURA +2,50 ÚDENÝ LOSOS +3,60",
    },
  ],
  panAsia: [
    {
      name: "Chrumkavý Bôčik & Wok Rezance",
      price: "€10,90",
      description:
        "Bôčik pečený v sojnej kruste, wok rezance, limes, koriander, sezam - 160g (1,3,6,10,11)",
    },
    {
      name: "Bun Bo Nam Bo",
      price: "€10,90",
      description:
        "Vietnamský šalát s teplým hovädzím mäsom, cesnakový dressing, čerstvá zelenina, mäta, cibuľka, uhorka, mrkva, arašidy, koriander, keljský dressing - 360g (1,3,4,7,6,11). KURA +4,50 TOFU +3,90",
    },
    {
      name: "Kuracie Kung Pao",
      price: "€9,90",
      description:
        "Kura, zeleninový mix, jasmínová ryža, mrkva, paprika, pór, ananás, sezam, koriander - 360g (1,6,11)",
    },
    {
      name: "Smažené Rezance & Zelenina",
      price: "€9,90",
      description:
        "Ryžové rezance, mix zelenina, huby, umetka, koriander, byľinky, chilli - 390g (1,6,11). KURA +5,60 TOFU +2,60 HOVÄDZIE +12,60",
    },
    {
      name: "Butter Chicken & Naan",
      price: "€10,90",
      description:
        "Korenitá ryža, jogurt, byľinky, chilli, koriander, naan chlieb, sezam - 360g (7,11)",
    },
    {
      name: "Zelené Kari",
      price: "€9,90",
      description:
        "S jasmínovou ryžou, brokolica, hrášok, huby pak choi, chilli, koriander, sezam - 180g (1,3,7,11). KURA +4,90 TOFU +3,90 KREVETY +11,90",
    },
  ],
  classics: [
    {
      name: "Údené Kura & Cheddar",
      price: "€9,90",
      description:
        "Chrumkavé cuketa, karóta, pak choi, pohánka, baby mrkva, cheddar, údená pena - 160g (1,3,7)",
    },
    {
      name: "Prívarok na Kyslo & Fašírka",
      price: "€8,90",
      description:
        "Prívarok podľa dennej ponuky, koprováfašírky, kyslá kapusta, chlieb, tygrančekový olej - 330g (1,7,10). S VAJÍČKOM +3,90",
    },
  ],
  sweets: [
    {
      name: "French Toast s Čokoládou Banánom a Ovocím",
      price: "€7,90",
      description:
        "Francúzsky toast, čokoládový mousse, banán & sezónne ovocie, mandľový crumble, maple sirup, olivový olej, soľ - 360g (1,7,8)",
    },
    {
      name: "Palacinky Jahody & Tvaroh",
      price: "€7,90",
      description:
        "Domáce palacinky, s jahodovým rozvarem, tvarohová pena, mrazený tvaroh, mandľový crumble - 340g (1,3,7)",
    },
  ],
  streetFood: [
    {
      name: "Avotoast Feta & Sušené Paradajky",
      price: "€7,90",
      description:
        "Avokádo, spread zo sušených paradajok, rukola, feta, sezam - 270g (1,3,7)",
    },
    {
      name: "Langoš s Kečupom & Parmezánom",
      price: "€5,90",
      description:
        "Fermentovaný kečup, cesnak, soľ, pažítka, parmezán - 180g (1,3,7)",
    },
    {
      name: "Pulled Pork Langoš",
      price: "€7,90",
      description:
        "Thai hovädzí mäso, papriková mayo, pažítka, jalapenos, koriander, chilli - 220g (1,3,7)",
    },
    {
      name: "Smash Burger",
      price: "€9,90",
      description:
        "Dvojité hovädzie mäso, cheddar, šalát, staruľna, zemská omáčky, big mac omáčka - 300g (1,3,7). HRANOLKY & DIP +2,30",
    },
    {
      name: "BBQ Loaded Fries",
      price: "€8,90",
      description:
        "Hranolky, tmavé pražové mäso, bbq omáčka, jalapenos, coleslaw šalát, papriková mayo, jarná cibuľka - 350g (1,3,7)",
    },
  ],
};

export default function BistroPage() {
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
              Bistro
            </h1>
            <div className="rounded-4xl border-2 border-transparent bg-brand/10 px-2 py-2 md:px-3 md:py-2">
              <p className="font-medium text-base md:text-xl">11:00 - 20:00</p>
            </div>
          </FadeDiv>
        </Tilt>
        <div className="columns-1 md:columns-2">
          <FadeDiv className="mb-5 size-fit md:mb-10">
            <MenuItem items={bistroMenu.soups} title="Polievky" />
          </FadeDiv>
          <FadeDiv className="mb-5 size-fit md:mb-10">
            <MenuItem items={bistroMenu.bowls} title="Bowls & Salad" />
          </FadeDiv>
          <FadeDiv className="mb-5 size-fit md:mb-10">
            <MenuItem items={bistroMenu.panAsia} title="Pan Asia" />
          </FadeDiv>
          <FadeDiv className="mb-5 size-fit md:mb-10">
            <MenuItem items={bistroMenu.classics} title="Klasiky" />
          </FadeDiv>
          <FadeDiv className="mb-5 size-fit md:mb-10">
            <MenuItem items={bistroMenu.sweets} title="Sladké" />
          </FadeDiv>
          <FadeDiv className="mb-5 size-fit md:mb-10">
            <MenuItem items={bistroMenu.streetFood} title="Street Food" />
          </FadeDiv>
          <FadeDiv className="mb-5 size-fit md:mb-10">
            <MenuItem className="size-fit" items={bistroMenu.menu} />
          </FadeDiv>
        </div>
        <FadeDiv className="">
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
