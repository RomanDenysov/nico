import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import env from "@/env";

const SESSION_COOKIE_NAME = "admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export async function verifySession(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE_NAME);
  return !!session?.value;
}

export async function requireAuth(): Promise<void> {
  const isAuthenticated = await verifySession();
  if (!isAuthenticated) {
    redirect("/admin/login");
  }
}

export async function createSession(): Promise<string> {
  const token = crypto.randomUUID();
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_MAX_AGE,
    path: "/",
  });
  return token;
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}

// biome-ignore lint/suspicious/useAwait: <explanation>
export async function verifyPassword(password: string): Promise<boolean> {
  const adminPassword = env.ADMIN_PASSWORD;
  if (!adminPassword) {
    throw new Error("ADMIN_PASSWORD not configured");
  }
  return password === adminPassword;
}
