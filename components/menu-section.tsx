import Image from "next/image";
import Link from "next/link";

import { Card, CardHeader, CardTitle } from "./ui/card";

type Category = {
  id: string;
  title: string;
  image: string;
};

const categories = [
  {
    id: "summer",
    title: "Letné menu (sezónne)",
    image: "/images/summer.jpg",
  },

  {
    id: "breakfast",
    title: "Raňajkové menu",
    image: "/images/breakfast.jpg",
  },

  {
    id: "bistro",
    title: "Bistro menu",
    image: "/images/bistro.jpg",
  },

  {
    id: "drinks",
    title: "Nápojový lístok",
    image: "/images/drinks.jpg",
  },
];

export function MenuSection({ className }: { className?: string }) {
  return (
    <section aria-label="Menu" className={className} id="menu">
      <h2 className="mb-6 px-6 font-semibold text-3xl md:text-4xl">Menu</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        {categories.map((category) => (
          <Link href={`/menu#${category.id}`} key={category.id}>
            <CategoryCard category={category} />
          </Link>
        ))}
      </div>
    </section>
  );
}

const CategoryCard = ({ category }: { category: Category }) => (
  <Card className="group/category relative min-h-60 cursor-pointer overflow-hidden border-brand-foreground border-none bg-brand-foreground">
    <CardHeader className="z-10">
      <CardTitle className="text-balance text-white leading-none tracking-tighter">
        {category.title}
      </CardTitle>
    </CardHeader>
    <Image
      alt={category.title}
      className="size-full cursor-pointer object-cover object-center transition-transform duration-200 group-hover/category:scale-[1.02]"
      fill
      src={category.image}
    />
    <div className="absolute inset-0 cursor-pointer bg-black/10 opacity-0 backdrop-blur-[1px] transition-opacity duration-200 group-hover/category:opacity-100" />
  </Card>
);

// const MenuItem = ({ item }: { item: Category["items"][number] }) => (
//   <li className="flex items-center justify-between">
//     <span className="font-medium text-base">{item.name}</span>
//     {item.price ? (
//       <span className="font-medium text-base">{item.price}</span>
//     ) : null}
//   </li>
// );

// const _MenuCategory = ({ category }: { category: Category }) => (
//   <details className="group rounded-4xl border-2 border-brand p-4 transition-all duration-200">
//     <summary className="flex items-center justify-between gap-2 font-medium text-lg">
//       <h4 className="font-semibold text-lg uppercase">{category.title}</h4>
//       <PlusIcon className="ml-auto size-6 transition-transform duration-200 group-open:rotate-45" />
//     </summary>
//     <ul className="mt-4 space-y-2 border-brand border-t pt-4 text-muted-foreground text-sm">
//       {category.items.map((item) => (
//         <MenuItem item={item} key={item.name} />
//       ))}
//     </ul>
//   </details>
// );
