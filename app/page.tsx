import { AboutSection } from "@/components/about-section";
import { ContactCard } from "@/components/contact-card";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { MenuSection } from "@/components/menu-section";
import { WorkingHoursCard } from "@/components/working-hours-card";

export default function Home() {
  return (
    <Container className="flex flex-col gap-5 py-12">
      <Hero />
      {/* <div className="grid grid-cols-1 grid-rows-[masonry] items-stretch gap-5 md:grid-cols-3">
        <div className="flex flex-col gap-5 md:col-span-2">
          <Icons.square className="text-brand" />
          <TitleCard className="size-full" title="NICO" />
          <div className="flex flex-row flex-wrap items-center justify-between gap-5">
            {contactData.map((contact) => (
              <Link
                className={cn(
                  buttonVariants({ variant: "brand" }),
                  "min-h-12 flex-1 text-xl"
                )}
                href={contact.href}
                key={contact.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <contact.icon className="size-5" />
                {contact.label}
              </Link>
            ))}
          </div>
        </div>
        <WorkingHoursCard className="size-full md:col-span-2" />
        <AboutSection className="md:col-span-2" />
        <MenuSection className="md:col-span-3" />
      </div> */}
    </Container>
  );
}

const _HomePageDemo = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <MenuSection />
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
        <CtaSection className="col-span-2 md:row-span-2" />
        <ContactCard />
        <WorkingHoursCard />
      </div>
    </>
  );
};
