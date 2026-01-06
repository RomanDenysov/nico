"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "../actions";

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(
    async (_: { error?: string } | null, formData: FormData) => {
      const password = formData.get("password");
      if (typeof password === "string") {
        return await login(password);
      }
      return null;
    },
    null
  );

  return (
    <form
      action={formAction}
      className="w-full max-w-md space-y-4 rounded-none border bg-background p-6 shadow-lg"
    >
      <h1 className="font-semibold text-2xl">Admin Login</h1>
      <div className="space-y-2">
        <Label htmlFor="password">Heslo</Label>
        <Input
          autoFocus
          className="rounded-none"
          disabled={isPending}
          id="password"
          name="password"
          required
          type="password"
        />
      </div>
      {state?.error && (
        <p className="text-destructive text-sm">{state.error}</p>
      )}
      <Button
        className="w-full rounded-none"
        disabled={isPending}
        type="submit"
      >
        {isPending ? "Prihlasujem..." : "Prihlásiť sa"}
      </Button>
    </form>
  );
}
