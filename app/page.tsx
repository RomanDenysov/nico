import { About } from "@/components/about";
import { CTA } from "@/components/cta";
import { Hero } from "@/components/hero";
import { MenuSection } from "@/components/menu-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CTA />
      <MenuSection />
      <SiteFooter
        address="123 Bistro Street, Praha"
        email="hello@nico.example"
        phone="+420 123 456 789"
        socials={[
          { label: "Instagram", href: "#" },
          { label: "Facebook", href: "#" },
        ]}
      />
    </>
  );
}
