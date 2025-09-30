import { cn } from "@/lib/utils";

export function TitleCard({
  title = "NICO",
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "size-fit rounded-[40px] bg-brand px-4 py-2 shadow-2xl drop-shadow-2xl",
        className
      )}
    >
      <h1
        className="w-full font-black text-8xl text-white leading-none sm:text-[160px] md:text-[200px] lg:text-[240px] xl:text-[280px]"
        style={{
          WebkitTextFillColor: "transparent",
          WebkitTextStroke: "4px currentColor",
          paintOrder: "stroke fill",
        }}
      >
        {title}
      </h1>
    </div>
  );
}
