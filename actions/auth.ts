"use server";

import { createSession, destroySession, verifyPassword } from "@/lib/auth";
import { redirect } from "next/navigation";

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
