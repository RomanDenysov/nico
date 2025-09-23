"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function DialogView({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <Dialog onOpenChange={router.back} open={true}>
      <DialogContent>
        <DialogHeader className="sr-only">
          <DialogTitle>Menu</DialogTitle>
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
}
