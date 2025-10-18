import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight";
import { Tilt } from "./ui/tilt";

export function MenuItem({
  title,
  items,
  className,
}: {
  title?: string;
  items: { name: string; price: string; description: string }[];
  className?: string;
}) {
  return (
    <Tilt
      className={cn(
        "group relative size-full rounded-4xl border-2 border-transparent bg-gradient-to-b from-brand-foreground/30 to-brand-foreground/10 p-6 shadow-2xl drop-shadow-2xl",
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
        className="bg-brand-foreground/70"
        size={80}
        springOptions={{
          stiffness: 26.7,
          damping: 4.1,
          mass: 0.2,
        }}
      />
      <div className="flex flex-col gap-5">
        {title ? (
          <h3 className="font-bold text-brand text-xl tracking-tight">
            {title}
          </h3>
        ) : null}
        <ul className="flex flex-col gap-3">
          {items.map((item) => (
            <li className="font-medium text-lg tracking-tight" key={item.name}>
              <div className="flex items-start justify-between gap-4">
                <h4 className="font-semibold text-lg leading-tight">
                  {item.name}
                </h4>
                <span className="font-medium text-base leading-tight">
                  {item.price}
                </span>
              </div>
              <p className="max-w-[80%] text-muted-foreground text-sm leading-none">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Tilt>
  );
}
