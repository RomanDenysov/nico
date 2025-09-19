import { Facebook, Instagram } from "lucide-react";
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
        address="Prešov"
        email="hello@nico.example"
        phone="+420 123 456 789"
        socials={[
          { icon: Instagram, href: "#" },
          { icon: Facebook, href: "#" },
        ]}
      />
    </>
  );
}
