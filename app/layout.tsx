import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ScrollRail } from "@/components/scroll-rail";

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
  title: "Aurelius Nguyen — ML Engineer & AI Researcher",
  description:
    "Honors Master's student in Computer Science at UMN, specializing in Machine Learning and AI. Passionate about cybersecurity, quantum computing, and competitive programming.",
  keywords: [
    "Machine Learning",
    "AI",
    "Computer Science",
    "CTF",
    "Hackathon",
    "UMN",
    "Aurelius Nguyen",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable} antialiased`}
        suppressHydrationWarning
      >
        <SmoothScroll>{children}</SmoothScroll>
        <ScrollRail />
      </body>
    </html>
  );
}
