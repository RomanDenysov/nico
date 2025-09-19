import { PlusIcon } from "lucide-react";

const categories = [
  {
    id: "drinky",
    title: "Drinky",
    items: [
      { name: "Kava", price: "2,50" },
      { name: "Pivo", price: "2,50" },
      { name: "Kveijo", price: "2,50" },
      { name: "Bombalajto", price: "2,50" },
    ],
  },
  {
    id: "jidlo",
    title: "Jídlo",
    items: [
      { name: "Polévka dne", price: "3,50" },
      { name: "Snídaně bowl", price: "4,90" },
    ],
  },
];

export function MenuSection() {
  return (
    <section
      aria-label="Menu"
      className="h-screen w-full snap-center px-4 py-20"
      id="menu"
    >
      <div className="relative overflow-hidden rounded-[40px] border-2 border-brand p-6">
        <h2 className="mb-6 font-semibold text-3xl md:text-4xl">Menu</h2>
        <div className="space-y-4">
          {categories.map((category) => (
            <MenuCategory category={category} key={category.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

const MenuItem = ({
  item,
}: {
  item: (typeof categories)[number]["items"][number];
}) => (
  <li className="flex items-center justify-between">
    <span className="font-medium text-base">{item.name}</span>
    <span className="font-medium text-base">{item.price}</span>
  </li>
);

const MenuCategory = ({
  category,
}: {
  category: (typeof categories)[number];
}) => (
  <details className="group rounded-4xl border-2 border-brand p-4 transition-all duration-200">
    <summary className="flex items-center justify-between gap-2 font-medium text-lg">
      <h4 className="font-semibold text-lg uppercase">{category.title}</h4>
      <PlusIcon className="ml-auto size-6 transition-transform duration-200 group-open:rotate-45" />
    </summary>
    <ul className="mt-4 space-y-2 border-brand border-t pt-4 text-muted-foreground text-sm">
      {category.items.map((item) => (
        <MenuItem item={item} key={item.name} />
      ))}
    </ul>
  </details>
);
