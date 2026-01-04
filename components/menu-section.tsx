import type { Route } from "next";
import Link from "next/link";
import { getPublicMenuTypes } from "@/features/public-menu/queries";
import { CategoryCard } from "./category-card";
import { FadeContainer, FadeDiv } from "./ui/fade";

export async function MenuSection({ className }: { className?: string }) {
  const menuTypes = await getPublicMenuTypes();

  return (
    <section aria-label="Menu" className={className} id="menu">
      <FadeContainer className="grid grid-cols-2 gap-5 md:gap-10">
        {menuTypes.map((menuType) => (
          <Link href={`/${menuType.slug}` as Route} key={menuType.id}>
            <FadeDiv>
              <CategoryCard
                category={{
                  id: menuType.id,
                  title: menuType.name,
                  image: menuType.image ?? "/images/bistro.jpg",
                  slug: menuType.slug,
                }}
              />
            </FadeDiv>
          </Link>
        ))}
      </FadeContainer>
    </section>
  );
}
