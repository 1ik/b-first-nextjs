"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export function Provider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider storageKey="b-first-theme" attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
