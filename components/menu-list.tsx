import type { MenuCategory } from "@/app/actions/menu";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

type MenuListProps = {
  categories: MenuCategory[];
  className?: string;
};

export function MenuList({ categories, className }: MenuListProps) {
  const allItems = categories.flatMap((category: MenuCategory) =>
    category.items.map((item) => ({ ...item, categoryId: category.id }))
  );

  return (
    <div className={className}>
      <div className="grid gap-4 md:gap-6">
        {allItems.map((item, index: number) => (
          <MenuItem item={item} key={`${item.name}-${index}`} />
        ))}
      </div>
    </div>
  );
}

function MenuItem({
  item,
}: {
  item: MenuCategory["items"][number] & { categoryId: string };
}) {
  return (
    <Card className="group cursor-pointer border-brand-foreground/20 transition-all hover:border-brand-foreground/40 hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-semibold text-brand-foreground text-lg leading-tight">
              {item.name}
            </h3>
            {item.price ? (
              <Badge
                className="shrink-0 font-semibold text-base"
                variant="outline"
              >
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
      </CardContent>
    </Card>
  );
}
