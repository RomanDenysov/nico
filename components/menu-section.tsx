import Link from "next/link";
import { categories } from "@/app/config";
import { CategoryCard } from "./category-card";
import { FadeContainer, FadeDiv } from "./ui/fade";

export function MenuSection({ className }: { className?: string }) {
  return (
    <section aria-label="Menu" className={className} id="menu">
      <FadeContainer className="grid grid-cols-2 gap-5 md:gap-10">
        {categories.map((category) => (
          <Link href={`/${category.slug}`} key={category.id}>
            <FadeDiv>
              <CategoryCard category={category} />
            </FadeDiv>
          </Link>
        ))}
      </FadeContainer>
    </section>
  );
}
