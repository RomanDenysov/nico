import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";
import { categories as menuCategories } from "@/lib/menu";
import { cn } from "@/lib/utils";
import bistroImage from "@/public/images/bistro.jpg";
import breakfastImage from "@/public/images/breakfast.jpg";
import coffeemachineImage from "@/public/images/coffeemachine.jpg";
import foodSaladImage from "@/public/images/food-salad.jpg";
import foodSoupImage from "@/public/images/food-soup.jpg";
import thaiBistroImage from "@/public/images/thai-bistro.jpg";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { FadeContainer, FadeDiv } from "./ui/fade";
import { Tilt } from "./ui/tilt";

type CategoryWithImage = {
  id: string;
  title: string;
  image: StaticImageData;
  slug: string;
};

const categoryImages: Record<string, StaticImageData> = {
  "ranajky-07-00-11-00": breakfastImage,
  polievky: foodSoupImage,
  "bowls-salad": foodSaladImage,
  "pan-asia": thaiBistroImage,
  klasiky: bistroImage,
  sladke: breakfastImage,
  "street-food": bistroImage,
  "menu-combos": bistroImage,
  extras: coffeemachineImage,
};

const categories: CategoryWithImage[] = menuCategories.map((cat) => ({
  id: cat.id,
  title: cat.title,
  slug: cat.title.toLowerCase().replace(/ /g, "-"),
  image: categoryImages[cat.id] || bistroImage,
}));

export function MenuSection({ className }: { className?: string }) {
  return (
    <section aria-label="Menu" className={className} id="menu">
      <FadeContainer className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 md:gap-10">
        {categories.map((category) => (
          <Link href={`/menu/${category.slug}`} key={category.id}>
            <FadeDiv>
              <CategoryCard category={category} />
            </FadeDiv>
          </Link>
        ))}
      </FadeContainer>
    </section>
  );
}

const CategoryCard = ({
  category,
  className,
}: {
  category: CategoryWithImage;
  className?: string;
}) => (
  <Tilt
    className={cn("group relative rounded-4xl", className)}
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
    <Card className="group/category relative min-h-60 cursor-pointer overflow-hidden border-brand-foreground border-none bg-brand-foreground">
      <CardHeader className="z-10">
        <ViewTransition name={category.slug}>
          <CardTitle className="text-balance text-white leading-none tracking-tighter">
            {category.title}
          </CardTitle>
        </ViewTransition>
      </CardHeader>
      <Image
        alt={category.title}
        className="size-full cursor-pointer object-cover object-center transition-transform duration-200 group-hover/category:scale-[1.02]"
        fill
        src={category.image}
      />
    </Card>
  </Tilt>
);
