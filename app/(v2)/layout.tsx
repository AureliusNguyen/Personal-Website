import type { Metadata } from "next";
import { Archivo, Public_Sans } from "next/font/google";
import "../globals.css";
import { SiteNav } from "@/components/v2/site-nav";
import { SiteFooter } from "@/components/v2/site-footer";
import { profile } from "@/lib/content/profile";

// Root layout for the current site. The archived v1 site has its own root
// layout under app/(v1) with its own <html>, fonts, and scroll engine.

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: {
    default: `${profile.name} - ${profile.role}`,
    template: `%s - ${profile.name}`,
  },
  description: profile.positioning,
  keywords: [
    "Machine Learning",
    "AI Research",
    "Federated Learning",
    "Zero-Knowledge Proofs",
    "Formal Verification",
    "CTF",
    "University of Minnesota",
    "Aurelius Nguyen",
  ],
  authors: [{ name: profile.name, url: profile.site }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: profile.site,
    siteName: profile.name,
    title: `${profile.name} - ${profile.role}`,
    description: profile.positioning,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-site="v2"
      className={`${archivo.variable} ${publicSans.variable}`}
    >
      <body className="antialiased min-h-[100dvh] flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-base focus:border-2 focus:border-border focus:bg-main focus:px-4 focus:py-2 focus:font-heading focus:shadow-shadow"
        >
          Skip to content
        </a>
        <SiteNav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
