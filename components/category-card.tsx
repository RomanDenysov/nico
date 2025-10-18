import Image, { type StaticImageData } from "next/image";
import { unstable_ViewTransition as ViewTransition } from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";

type CategoryWithImage = {
  id: string;
  title: string;
  image: StaticImageData;
  slug: string;
};

export const CategoryCard = ({ category }: { category: CategoryWithImage }) => (
  <Card className="group/category relative min-h-74 cursor-pointer overflow-hidden rounded-4xl border-brand-foreground border-none bg-brand-foreground">
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
);
