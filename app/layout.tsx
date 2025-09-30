import type { Metadata } from "next";

import "./globals.css";
import { Facebook, Instagram } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
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
  modal,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
}>) {
  return (
    <html className={cn(fonts)} lang="sk">
      <body
        className="relative min-h-screen"
        style={
          {
            "--header-height": "calc(var(--spacing) * 12)",
          } as CSSProperties
        }
      >
        <Header />
        <main className="@container/main">{children}</main>
        <SiteFooter
          address="Prešov"
          email="hello@nico.example"
          phone="+420 123 456 789"
          socials={[
            { icon: Instagram, href: "#" },
            { icon: Facebook, href: "#" },
          ]}
        />
        {modal}
      </body>
    </html>
  );
}
