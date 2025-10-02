import { notFound } from "next/navigation";
import { unstable_ViewTransition as ViewTransition } from "react";
import { Container } from "@/components/container";
import { categories } from "@/lib/menu";

export default async function MenuPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const decodedSlug = decodeURIComponent((await params).slug);
  const getCategorySlug = (name: string) =>
    name.toLowerCase().replace(/ /g, "-");
  const category = categories.find(
    (c) => getCategorySlug(c.title) === decodedSlug
  );
  if (!category) {
    return notFound();
  }
  return (
    <Container className="min-h-screen py-12">
      <div className="rounded-4xl border-2 border-transparent bg-gradient-to-b from-brand-foreground/40 to-brand-foreground/20 p-6 shadow-2xl drop-shadow-2xl">
        <ViewTransition name={decodedSlug}>
          <h1 className="font-bold text-4xl text-brand tracking-tight">
            {category.title}
          </h1>
        </ViewTransition>
      </div>
    </Container>
  );
}
