import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aurelius Nguyen - ML Engineer & AI Researcher",
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
    <html lang="en" className="use-custom-cursor">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
