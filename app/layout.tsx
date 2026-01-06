/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: Using safeJsonLdStringify to safely stringify the JSON-LD data */
import { Analytics } from "@vercel/analytics/next";

import type { CSSProperties, ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { AuroraBackground } from "@/components/ui/aurora-background";
import {
  defaultMetadata,
  getOrganizationJsonLd,
  getWebSiteJsonLd,
  safeJsonLdStringify,
} from "@/lib/seo";
import { cn } from "@/lib/utils";

import { fonts } from "./fonts";

import "./globals.css";

export const metadata = {
  ...defaultMetadata,
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: safeJsonLdStringify(getOrganizationJsonLd()),
          }}
          type="application/ld+json"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: safeJsonLdStringify(getWebSiteJsonLd()),
          }}
          type="application/ld+json"
        />
      </head>
      <body
        className="scroll-snap-y-mandatory relative min-h-screen snap-center bg-background"
        style={
          {
            "--header-height": "calc(var(--spacing) * 12)",
            "--content-margin-top": "calc(var(--spacing) * 4)",
          } as CSSProperties
        }
      >
        <AuroraBackground>
          <Header />
          <main className="@container/main relative">{children}</main>
          <Footer />
        </AuroraBackground>
        <Analytics />
      </body>
    </html>
  );
}
