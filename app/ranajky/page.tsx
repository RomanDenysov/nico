import { unstable_ViewTransition as ViewTransition } from "react";
import { breakfastMenu } from "@/app/config";
import { ComboMenuCard } from "@/components/combo-menu-card";
import { Container } from "@/components/container";
import { Extras } from "@/components/extras";
import { MenuItem } from "@/components/menu-item";
import { FadeContainer, FadeDiv } from "@/components/ui/fade";
import { Tilt } from "@/components/ui/tilt";
import { cn } from "@/lib/utils";

export default function RanajkyPage() {
  return (
    <Container className="min-h-screen py-12">
      <FadeContainer className="space-y-5 md:space-y-10">
        <Tilt
          className={cn("group relative size-full")}
          isRevese
          rotationFactor={2}
          springOptions={{
            stiffness: 26.7,
            damping: 4.1,
            mass: 0.2,
          }}
          style={{
            transformOrigin: "center center",
          }}
        >
          <div className="flex items-center justify-between rounded-4xl border-2 border-transparent bg-gradient-to-b from-brand-foreground/30 to-brand-foreground/10 p-6 shadow-2xl drop-shadow-2xl">
            <ViewTransition name="ranajky">
              <h1 className="font-bold text-3xl text-brand tracking-tight md:text-5xl">
                Ranajky
              </h1>
            </ViewTransition>
            <div className="rounded-4xl border-2 border-transparent bg-brand/10 px-2 py-2 md:px-3 md:py-2">
              <p className="font-medium text-base md:text-xl">07:00 - 11:00</p>
            </div>
          </div>
        </Tilt>
        <div className="columns-1 md:columns-2">
          <FadeDiv className="mb-5 size-fit md:mb-10">
            <MenuItem items={breakfastMenu.main} />
          </FadeDiv>
          <FadeDiv className="mb-5 size-fit md:mb-10">
            <MenuItem items={breakfastMenu.sides} />
          </FadeDiv>
          <FadeDiv className="mb-5 size-fit md:mb-10">
            <MenuItem items={breakfastMenu.seconds} />
          </FadeDiv>
          <FadeDiv className="mb-5 size-fit md:mb-10">
            <ComboMenuCard className="size-fit" item={breakfastMenu.menu[0]} />
          </FadeDiv>
        </div>
        <FadeDiv>
          <Extras />
        </FadeDiv>
      </FadeContainer>
    </Container>
  );
}
