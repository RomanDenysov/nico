import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const containerVariants = cva("mx-auto px-4", {
  variants: {
    variant: {
      default: "max-w-7xl",
    },
  },
});
export const Container = ({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof containerVariants>) => (
  <div className={cn(containerVariants({ variant }), className)} {...props} />
);
