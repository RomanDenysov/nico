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
import { deleteExtraAction } from "../actions";

export function DeleteExtraDialog({ extraId }: { extraId: number }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="rounded-none"
          size="sm"
          type="button"
          variant="destructive"
        >
          Zmazať
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="rounded-none">
        <AlertDialogHeader>
          <AlertDialogTitle>Ste si istí?</AlertDialogTitle>
          <AlertDialogDescription>
            Táto akcia nemôže byť vrátená späť. Toto natrvalo vymaže extra.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Zrušiť</AlertDialogCancel>
          <form action={deleteExtraAction}>
            <input name="id" type="hidden" value={extraId} />
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
