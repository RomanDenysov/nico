import { Container } from "@/components/container";
import { MenuSection } from "@/components/menu-section";
import { FadeContainer, FadeDiv } from "@/components/ui/fade";

export default function MenuPage() {
  return (
    <Container className="min-h-screen space-y-5 py-12 md:space-y-10">
      <FadeContainer>
        <FadeDiv className="rounded-4xl border-2 border-transparent bg-gradient-to-b from-brand-foreground/40 to-brand-foreground/20 p-6 shadow-2xl drop-shadow-2xl">
          <h1 className="font-bold text-4xl text-brand tracking-tight">
            Naše menu
          </h1>
          <p className="mt-2 font-medium">
            Tradičné jedlá v modernom šate, streetfood aj pan asia
          </p>
        </FadeDiv>
      </FadeContainer>
      <MenuSection />
    </Container>
  );
}
