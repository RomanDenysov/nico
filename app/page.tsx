import { Facebook, Instagram } from "lucide-react";
import { AboutSection } from "@/components/about-section";
import { ContactCard } from "@/components/contact-card";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { MenuSection } from "@/components/menu-section";
import { SiteFooter } from "@/components/site-footer";
import { WorkingHoursCard } from "@/components/working-hours-card";

export default function Home() {
  return (
    <Container className="space-y-10">
      <Hero />
      <AboutSection />
      <MenuSection />
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
        <CtaSection className="col-span-2 md:row-span-2" />
        <ContactCard />
        <WorkingHoursCard />
      </div>
      <SiteFooter
        address="Prešov"
        email="hello@nico.example"
        phone="+420 123 456 789"
        socials={[
          { icon: Instagram, href: "#" },
          { icon: Facebook, href: "#" },
        ]}
      />
    </Container>
  );
}
