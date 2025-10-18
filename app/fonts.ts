import { Exo_2, Geist, Geist_Mono } from "next/font/google";

import { cn } from "@/lib/utils";

const _geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const _geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const exo2 = Exo_2({
  variable: "--font-exo-2-regular",
  subsets: ["latin"],
});

export const fonts = cn(
  // geistSans.variable,
  // geistMono.variable,
  exo2.variable,
  "font-sans antialiased"
);
