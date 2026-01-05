import { AboutSection } from "@/components/about-section";
import { containerVariants } from "@/components/container";
import { Hero } from "@/components/hero";
import { MenuSection } from "@/components/menu-section";
import { PartnersSection } from "@/components/partners-section";
import { FadeContainer, FadeDiv } from "@/components/ui/fade";
import { getWebPageJsonLd, safeJsonLdStringify } from "@/lib/seo";
import { cn } from "@/lib/utils";

export default function Home() {
  const jsonLd = getWebPageJsonLd();
  return (
    <FadeContainer
      className={cn(
        containerVariants({ variant: "default" }),
        "space-y-20 pb-40"
      )}
    >
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Using safeJsonLdStringify to safely stringify the JSON-LD data
        dangerouslySetInnerHTML={{ __html: safeJsonLdStringify(jsonLd) }}
        type="application/ld+json"
      />
      <FadeDiv>
        <Hero />
      </FadeDiv>
      <FadeDiv>
        <MenuSection />
      </FadeDiv>
      <FadeDiv className="flex-1">
        <AboutSection />
      </FadeDiv>
      <FadeDiv>
        <PartnersSection />
      </FadeDiv>
    </FadeContainer>
  );
}
