import { Spotlight } from "@/components/ui/spotlight";
import { Tilt } from "@/components/ui/tilt";
import { cn } from "@/lib/utils";

type MenuCombo = {
  name: string;
  price: string;
  description: string;
};

export function ComboMenuCard({
  item,
  className,
}: {
  item: MenuCombo;
  className?: string;
}) {
  return (
    <Tilt
      className={cn(
        "group relative size-full rounded-4xl border-2 border-transparent bg-gradient-to-l from-brand/20 to-brand/15 p-6 shadow-2xl drop-shadow-2xl backdrop-blur-sm",
        className
      )}
      isRevese
      rotationFactor={4}
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
        className="bg-brand/50"
        size={80}
        springOptions={{
          stiffness: 26.7,
          damping: 4.1,
          mass: 0.2,
        }}
      />
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-bold text-xl tracking-tight">{item.name}</h3>
          <span className="font-medium text-base leading-tight">
            {item.price}
          </span>
        </div>
        <p className="max-w-[80%] text-muted-foreground text-sm leading-none">
          {item.description}
        </p>
      </div>
    </Tilt>
  );
}
