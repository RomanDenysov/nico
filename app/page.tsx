import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { CTA } from "@/components/cta";
import { MenuSection } from "@/components/menu-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
   <>
    <Hero />
    <About />
    <CTA
      title="CTA TEXT"
      description="Some information about this year in 3 raw Some information about this year in 3 raw"
      buttonLabel="Rezervovat"
      href="#"
    />
    <MenuSection
      categories={[
        {
          id: "drinky",
          title: "Drinky",
          items: [
            { name: "Kava", price: "2,50" },
            { name: "Pivo", price: "2,50" },
            { name: "Kveijo", price: "2,50" },
            { name: "Bombalajto", price: "2,50" },
          ],
        },
        {
          id: "jidlo",
          title: "Jídlo",
          items: [
            { name: "Polévka dne", price: "3,50" },
            { name: "Snídaně bowl", price: "4,90" },
          ],
        },
      ]}
    />
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
