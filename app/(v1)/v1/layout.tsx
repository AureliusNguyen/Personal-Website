import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "../../globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ScrollRail } from "@/components/scroll-rail";
import { V1Banner } from "@/components/v1-banner";

// This is a second root layout. The v1 site keeps its own <html>, its own
// fonts, and its own smooth-scroll engine, so nothing here reaches the
// current site. `data-site="v1"` is what scopes the noir theme tokens in
// globals.css.

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Aurelius Nguyen - ML Engineer & AI Researcher (v1)",
  description:
    "The original madarame.dev: a dark, animated single-page portfolio built around a poker-table metaphor. Kept online after the redesign.",
  // Search engines should land on the current site, not this archive.
  robots: { index: false, follow: true },
};

export default function V1Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Font variables sit on <html> rather than <body> so the `--app-*` aliases
  // in globals.css (declared on that same element) can resolve them.
  return (
    <html
      lang="en"
      data-site="v1"
      className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="antialiased" suppressHydrationWarning>
        <V1Banner />
        <SmoothScroll>{children}</SmoothScroll>
        <ScrollRail />
      </body>
    </html>
  );
}
