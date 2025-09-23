import { PlusIcon } from "lucide-react";
import { type Category, categories } from "@/lib/menu";
import { Container } from "./container";

export function MenuSection() {
  return (
    <section aria-label="Menu" className="py-20" id="menu">
      <Container>
        <h2 className="font-semibold text-3xl md:text-4xl">Menu</h2>
        <div className="space-y-4">
          {categories.map((category) => (
            <MenuCategory category={category} key={category.id} />
          ))}
        </div>
      </Container>
    </section>
  );
}

const MenuItem = ({ item }: { item: Category["items"][number] }) => (
  <li className="flex items-center justify-between">
    <span className="font-medium text-base">{item.name}</span>
    {item.price ? (
      <span className="font-medium text-base">{item.price}</span>
    ) : null}
  </li>
);

const MenuCategory = ({ category }: { category: Category }) => (
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
