import type { Category } from "@/lib/menu";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

type MenuListProps = {
  categories: Category[];
  className?: string;
};

export function MenuList({ categories, className }: MenuListProps) {
  return (
    <div className={className}>
      <div className="space-y-8">
        {categories.map((category) => (
          <MenuCategory category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
}

function MenuCategory({ category }: { category: Category }) {
  return (
    <Card className="border-brand-foreground" id={category.id}>
      <CardHeader>
        <CardTitle className="text-2xl text-brand-foreground">
          {category.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-6">
          {category.items.map((item, index) => (
            <li key={`${item.name}-${index}`}>
              <MenuItem item={item} />
              {index < category.items.length - 1 && (
                <Separator className="mt-6" />
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function MenuItem({ item }: { item: Category["items"][number] }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-start justify-between gap-4">
        <h4 className="font-semibold text-brand-foreground text-lg">
          {item.name}
        </h4>
        {item.price ? (
          <Badge className="shrink-0 font-medium text-base" variant="outline">
            {item.price}
          </Badge>
        ) : null}
      </div>
      {item.description ? (
        <p className="text-muted-foreground text-sm leading-relaxed">
          {item.description}
        </p>
      ) : null}
    </div>
  );
}
