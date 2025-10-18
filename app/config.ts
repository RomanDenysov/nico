import {
  Facebook,
  Instagram,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import bistroImage from "@/public/images/bistro.jpg";
import breakfastImage from "@/public/images/breakfast.jpg";
import kosiceExterierImage from "@/public/images/nico-kosice-ext.jpg";
import presovExterierImage from "@/public/images/nico-presov-ext.jpg";

export const bistroMenu = {
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

export const breakfastMenu = {
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

export const extras = [
  {
    name: "Extra Vajce",
    price: "€1,00",
  },
  {
    name: "Rohlík z Krömky",
    price: "€0,50",
  },
  {
    name: "Chlieb",
    price: "€1,00",
  },
  {
    name: "1/2 Avokáda",
    price: "€2,00",
  },
  {
    name: "Maslo",
    price: "€1,00",
  },
  {
    name: "Slanina",
    price: "€2,50",
  },
  {
    name: "Mayo",
    price: "€1,00",
  },
  {
    name: "Údený Losos",
    price: "€3,60",
  },
  {
    name: "Kečup",
    price: "€1,00",
  },
  {
    name: "Šunka",
    price: "€2,00",
  },
];

export const addresses = [
  {
    street: "17. novembra 106",
    city: "Prešov",
    postalCode: "080 01",
    phone: {
      label: "+421 905 830 548",
      href: "tel:+421905830548",
    },
    email: {
      label: "nicopresov@kavejo.sk",
      href: "mailto:nicopresov@kavejo.sk",
    },
    image: presovExterierImage,
  },
  {
    street: "Kuzmányho 1",
    city: "Košice",
    postalCode: "040 01",
    phone: {
      label: "+421 917 478 034",
      href: "tel:+421917478034",
    },
    email: {
      label: "nicokosice@kavejo.sk",
      href: "mailto:nicokosice@kavejo.sk",
    },
    image: kosiceExterierImage,
  },
];

export const aboutItems = [
  {
    year: 2013,
    title: "2013",
    description:
      "Naše “prudko návykové bistro” vzniklo v roku 2013. Začínali sme v jednej miestnosti s asi desiatimi stolmi a postupne rástli, ako rástol aj počet našich štamgastov.",
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

export const workingHoursData = {
  week: {
    title: "PON · PIA",
    hours: "7 · 22",
    brunch: "7 · 11",
    bistro: "11 · 20",
  },
  weekend: {
    title: "SOB · NED",
    hours: "9 · 20",
    brunch: "9 · 12",
    bistro: "12 · 20",
  },
};

export const categories = [
  {
    id: "ranajky",
    title: "Raňajky",
    slug: "ranajky",
    image: breakfastImage,
  },
  {
    id: "bistro",
    title: "Bistro",
    slug: "bistro",
    image: bistroImage,
  },
];

export const footerSections = {
  contacts: {
    title: "Kontakt",
    items: [
      {
        label: "Napište nám",
        icon: MailIcon,
        href: "mailto:nicopresov@kavejo.sk",
      },
      {
        label: "Zavolajte nám",
        icon: PhoneIcon,
        href: "tel:+421905830548",
      },
      {
        label: "Najdite nás",
        icon: MapPinIcon,
        href: "https://maps.app.goo.gl/VHsNeTAPYMs2ohPD9",
      },
    ],
  },
  links: {
    title: "Odkazy",
    items: [
      // { label: "O nás", href: "#about" },
      { label: "Menu", href: "/#menu" },
      { label: "Kontakt", href: "#footer" },
      { label: "O nas", href: "/#about" },
      { label: "Podmienky používania", href: "/#terms" },
      { label: "Ochrana osobných údajov", href: "/#privacy" },
    ],
  },
  socials: {
    title: "Sledujte nás",
    items: [
      { label: "Instagram", href: "#instagram", icon: Instagram },
      { label: "Facebook", href: "#facebook", icon: Facebook },
    ],
  },
};
