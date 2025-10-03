import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";
import { cn } from "@/lib/utils";
import bistroImage from "@/public/images/bistro.jpg";
import breakfastImage from "@/public/images/breakfast.jpg";

import { Card, CardHeader, CardTitle } from "./ui/card";
import { FadeContainer, FadeDiv } from "./ui/fade";
import { Tilt } from "./ui/tilt";

type CategoryWithImage = {
  id: string;
  title: string;
  image: StaticImageData;
  slug: string;
};

const categories = [
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

export function MenuSection({ className }: { className?: string }) {
  return (
    <section aria-label="Menu" className={className} id="menu">
      <FadeContainer className="grid grid-cols-2 gap-5 md:gap-10">
        {categories.map((category) => (
          <Link href={`/${category.slug}`} key={category.id}>
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
    <Card className="group/category relative min-h-74 cursor-pointer overflow-hidden border-brand-foreground border-none bg-brand-foreground">
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
