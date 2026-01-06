import type { Metadata } from "next";
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
import { getMenuJsonLd, safeJsonLdStringify, siteConfig } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Raňajky",
  description:
    "Dlhý brunch v NICO CAFFÉ - výberová káva, kváskový chlieb a raňajkové menu. Denne 07:00 - 11:00.",
  alternates: {
    canonical: "/ranajky",
  },
  openGraph: {
    title: `Raňajky | ${siteConfig.name}`,
    description:
      "Dlhý brunch v NICO CAFFÉ - výberová káva, kváskový chlieb a raňajkové menu.",
    url: `${siteConfig.url}/ranajky`,
    images: [
      {
        url: `${siteConfig.url}/images/breakfast.jpg`,
        width: 1200,
        height: 630,
        alt: "NICO CAFFÉ Raňajky",
      },
    ],
  },
};

export default async function RanajkyPage() {
  const menuData = await getPublicMenuByTypeSlug("ranajky");
  const extras = await getPublicExtras();

  // Filter out combo menu category from regular categories
  const regularCategories = menuData.categories.filter(
    (cat) => !cat.items.some((item) => item.isComboMenu)
  );

  const jsonLd = getMenuJsonLd(
    `${menuData.type.name} - ${siteConfig.name}`,
    "Raňajkové menu - dlhý brunch, výberová káva a kváskový chlieb",
    menuData.categories
  );

  return (
    <Container className="min-h-screen py-12">
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Using safeJsonLdStringify to safely stringify the JSON-LD data
        dangerouslySetInnerHTML={{ __html: safeJsonLdStringify(jsonLd) }}
        type="application/ld+json"
      />
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
          <div className="flex items-center justify-between rounded-4xl border-2 border-transparent bg-linear-to-b from-brand-foreground/30 to-brand-foreground/10 p-6 shadow-2xl drop-shadow-2xl">
            <h1
              className="font-bold text-3xl text-brand tracking-tight md:text-5xl"
              style={{ viewTransitionName: "ranajky" }}
            >
              {menuData.type.name}
            </h1>
            <div className="rounded-4xl border-2 border-transparent bg-brand/10 px-2 py-2 md:px-3 md:py-2">
              <p className="font-medium text-base md:text-xl">07:00 - 11:00</p>
            </div>
          </div>
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
        <FadeDiv>
          <Extras extras={extras} />
        </FadeDiv>
      </FadeContainer>
    </Container>
  );
}
