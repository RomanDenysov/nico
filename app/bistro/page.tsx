import { ComboMenuCard } from "@/components/combo-menu-card";
import { Container } from "@/components/container";
import { Extras } from "@/components/extras";
import { MenuItem } from "@/components/menu-item";
import { FadeContainer, FadeDiv } from "@/components/ui/fade";
import { Tilt } from "@/components/ui/tilt";
import {
  getPublicExtras,
  getPublicMenuByTypeSlug,
} from "@/features/public-menu/queries";
import { cn } from "@/lib/utils";

export default async function BistroPage() {
  const menuData = await getPublicMenuByTypeSlug("bistro");
  const extras = await getPublicExtras();

  // Filter out combo menu category from regular categories
  const regularCategories = menuData.categories.filter(
    (cat) => !cat.items.some((item) => item.isComboMenu)
  );

  return (
    <Container className="min-h-screen py-12">
      <FadeContainer className="space-y-5 md:space-y-10">
        <Tilt
          className={cn("group relative size-full")}
          isRevese
          rotationFactor={2}
          springOptions={{
            stiffness: 26.7,
            damping: 4.1,
            mass: 0.2,
          }}
          style={{
            transformOrigin: "center center",
          }}
        >
          <FadeDiv className="flex items-center justify-between rounded-4xl border-2 border-transparent bg-linear-to-b from-brand-foreground/30 to-brand-foreground/10 p-6 shadow-2xl drop-shadow-2xl">
            <h1 className="font-bold text-3xl text-brand tracking-tight md:text-5xl">
              {menuData.type.name}
            </h1>
            <div className="rounded-4xl border-2 border-transparent bg-brand/10 px-2 py-2 md:px-3 md:py-2">
              <p className="font-medium text-base md:text-xl">11:00 - 20:00</p>
            </div>
          </FadeDiv>
        </Tilt>
        <div className="columns-1 md:columns-2">
          {regularCategories.map(({ category, items }) => (
            <FadeDiv className="mb-5 size-fit md:mb-10" key={category.id}>
              <MenuItem
                items={items.map((item) => ({
                  name: item.name,
                  price: item.price,
                  description: item.description ?? "",
                }))}
                title={category.name}
              />
            </FadeDiv>
          ))}
          {menuData.comboItem && (
            <FadeDiv className="mb-5 size-fit md:mb-10">
              <ComboMenuCard
                className="size-fit"
                item={{
                  name: menuData.comboItem.name,
                  price: menuData.comboItem.price,
                  description: menuData.comboItem.description ?? "",
                }}
              />
            </FadeDiv>
          )}
        </div>
        <FadeDiv className="">
          <Extras extras={extras} />
        </FadeDiv>
      </FadeContainer>
    </Container>
  );
}
