"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      // The hard offset shadows recolour when the theme flips; animating that
      // produces a visible smear across every card on the page.
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
