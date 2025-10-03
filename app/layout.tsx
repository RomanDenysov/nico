import type { Metadata } from "next";

import "./globals.css";
import type { CSSProperties, ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import { fonts } from "./fonts";

export const metadata: Metadata = {
  title: "NICO CAFFÉ | Prešov",
  description:
    "Dlhý brunch, výberová káva, kváskový chlieb a menu, na ktorom ochutnáte zo všetkého trochu - tradičné jedlá v modernom šate, streetfood aj pan asiu. Byť svetoví aj v Prešove, to je heslo, ktorým sa snažíme neustále posúvať vpred.",
  alternates: {
    canonical: "https://nico.sk",
    languages: {
      sk: "sk-SK",
    },
    media: {
      "image/png": "https://nico.sk/images/logo.png",
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html className={cn(fonts)} lang="sk">
      <body
        className="relative min-h-screen bg-brand-foreground/20"
        style={
          {
            "--header-height": "calc(var(--spacing) * 12)",
          } as CSSProperties
        }
      >
        <Header />
        <main className="@container/main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
