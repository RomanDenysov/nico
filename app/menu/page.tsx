import { Container } from "@/components/container";
import { MenuList } from "@/components/menu-list";
import { categories } from "@/lib/menu";

export default function MenuPage() {
  return (
    <Container className="h-full min-h-[calc(100vh-var(--header-height))] py-10">
      <div className="mb-8">
        <h1 className="font-bold text-4xl text-brand-foreground tracking-tight">
          Naše menu
        </h1>
        <p className="mt-2 text-muted-foreground">
          Tradičné jedlá v modernom šate, streetfood aj pan asia
        </p>
      </div>
      <MenuList categories={categories} />
    </Container>
  );
}
