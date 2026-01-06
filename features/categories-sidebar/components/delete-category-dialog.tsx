"use client";

import { Trash2Icon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { deleteMenuCategoryAction } from "../actions";

export function DeleteCategoryDialog({ categoryId }: { categoryId: number }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="size-7 rounded-none"
          size="icon"
          type="button"
          variant="ghost"
        >
          <Trash2Icon className="size-3" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="rounded-none">
        <AlertDialogHeader>
          <AlertDialogTitle>Ste si istí?</AlertDialogTitle>
          <AlertDialogDescription>
            Táto akcia nemôže byť vrátená späť. Toto natrvalo vymaže kategóriu a
            všetky položky v nej.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Zrušiť</AlertDialogCancel>
          <form action={deleteMenuCategoryAction}>
            <input name="id" type="hidden" value={categoryId} />
            <AlertDialogAction asChild>
              <Button
                className="rounded-none"
                type="submit"
                variant="destructive"
              >
                Zmazať
              </Button>
            </AlertDialogAction>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
