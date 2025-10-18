import { extras } from "@/app/config";
import { Badge } from "@/components/ui/badge";
import { Spotlight } from "@/components/ui/spotlight";
import { Tilt } from "@/components/ui/tilt";
import { cn } from "@/lib/utils";

export function Extras({ className }: { className?: string }) {
  return (
    <Tilt
      className={cn(
        "group relative size-full rounded-4xl border-2 border-transparent bg-gradient-to-b from-brand-foreground/30 to-brand-foreground/10 p-6 shadow-2xl drop-shadow-2xl",
        className
      )}
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
      <Spotlight
        className="bg-brand-foreground/70"
        size={80}
        springOptions={{
          stiffness: 26.7,
          damping: 4.1,
          mass: 0.2,
        }}
      />
      <h3 className="mb-4 font-bold text-2xl text-brand tracking-tight">
        Niečo naviac
      </h3>
      <ul className="flex flex-row flex-wrap items-start gap-1.5">
        {extras.map((extra) => (
          <li key={extra.name + extra.price}>
            <Badge className="z-10 gap-1" variant="brand">
              <span className="font-medium text-sm text-white leading-tight">
                {extra.name}
              </span>
              <span className="ml-2 font-medium text-sm text-white leading-tight">
                {extra.price}
              </span>
            </Badge>
          </li>
        ))}
      </ul>
    </Tilt>
  );
}
