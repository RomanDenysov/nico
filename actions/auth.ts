"use server";

import { redirect } from "next/navigation";
import { createSession, destroySession, verifyPassword } from "@/lib/auth";

export async function login(password: string) {
  const isValid = await verifyPassword(password);
  if (!isValid) {
    return { error: "Nesprávne heslo" };
  }

  await createSession();
  redirect("/admin");
}

export async function logout() {
  await destroySession();
  redirect("/admin/login");
}
