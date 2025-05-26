"use client";

import { HeroUIProvider } from "@heroui/react";

export default function CustomHeroUIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
