import { Suspense } from "react";
import { AboutSection } from "@/components/about-section";
import { Container } from "@/components/container";
import { GoogleMapComponent } from "@/components/google-map-component";
import { Hero } from "@/components/hero";
import { MenuSection } from "@/components/menu-section";
import { FadeContainer, FadeDiv } from "@/components/ui/fade";

export default function Home() {
  return (
    <Container className="py-12">
      <FadeContainer className="flex flex-col gap-5 md:gap-10">
        <Hero />
        <div className="flex flex-col gap-10 md:flex-row">
          <FadeDiv className="hidden flex-1 md:block md:min-w-sm">
            <Suspense>
              <GoogleMapComponent />
            </Suspense>
          </FadeDiv>
          <FadeDiv>
            <AboutSection />
          </FadeDiv>
        </div>
        <MenuSection />
      </FadeContainer>
    </Container>
  );
}
