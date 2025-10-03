import { notFound } from "next/navigation";
import { unstable_ViewTransition as ViewTransition } from "react";
import { getMenuCategoryBySlug } from "@/app/actions/menu";
import { Container } from "@/components/container";
import { MenuList } from "@/components/menu-list";
import { FadeContainer, FadeDiv } from "@/components/ui/fade";

export default async function MenuPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const decodedSlug = decodeURIComponent((await params).slug);
  const category = await getMenuCategoryBySlug(decodedSlug);
  if (!category) {
    return notFound();
  }
  return (
    <Container className="min-h-screen space-y-8 py-12">
      <FadeContainer>
        <FadeDiv className="rounded-4xl border-2 border-transparent bg-gradient-to-b from-brand-foreground/40 to-brand-foreground/20 p-6 shadow-2xl drop-shadow-2xl">
          <ViewTransition name={decodedSlug}>
            <h1 className="font-bold text-4xl text-brand tracking-tight">
              {category.title}
            </h1>
          </ViewTransition>
          {category.description ? (
            <p className="mt-2 font-medium text-brand-foreground">
              {category.description}
            </p>
          ) : null}
        </FadeDiv>
        <FadeDiv>
          <MenuList categories={[category]} />
        </FadeDiv>
      </FadeContainer>
    </Container>
  );
}
