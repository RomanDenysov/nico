import { Container } from "@/components/container";
import { MenuList } from "@/components/menu-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories } from "@/lib/menu";
export default function MenuPage() {
  return (
    <Container className="h-full min-h-[calc(100vh-var(--header-height))] space-y-6 py-12">
      <div className="rounded-4xl border-2 border-brand-foreground p-6 shadow-2xl drop-shadow-2xl">
        <h1 className="font-bold text-4xl text-brand-foreground tracking-tight">
          Naše menu
        </h1>
        <p className="mt-2 text-muted-foreground">
          Tradičné jedlá v modernom šate, streetfood aj pan asia
        </p>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="inline-flex h-12 w-full items-center justify-start gap-2 rounded-4xl border-2 border-brand-foreground">
          {categories.map((category) => (
            <TabsTrigger
              className="rounded-4xl font-medium text-xl"
              key={category.id}
              value={category.id}
            >
              {category.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {/* <div className="inline-flex items-center justify-start gap-2">
          {categories.map((category) => (
            <Link
              className={cn(buttonVariants({ variant: "secondary" }))}
              href={`/menu#${category.id}`}
              key={category.id}
            >
              {category.title}
            </Link>
          ))}
        </div> */}
        <TabsContent value="all">
          <MenuList categories={categories} />
        </TabsContent>
      </Tabs>
    </Container>
  );
}
