"use client";

import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { logout } from "../actions";

export function LogoutButton() {
  return (
    <form action={logout}>
      <Button
        className="gap-2 rounded-none"
        size="sm"
        type="submit"
        variant="ghost"
      >
        <LogOut className="size-4" />
        Odhlásiť
      </Button>
    </form>
  );
}
