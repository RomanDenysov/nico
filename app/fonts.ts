import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const knerdOutline = localFont({
  src: [
    {
      path: "./fonts/knerd-outline.woff2",
      style: "italic",
    },
  ],
});

export const fonts = cn(
  geistSans.variable,
  geistMono.variable,
  "font-sans antialiased"
);
