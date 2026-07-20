import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import Container from "./Container";

type SectionBackground = "default" | "surface" | "primary";

type SectionSpacing = "md" | "lg" | "xl";

type SectionProps = {
  children: ReactNode;
  className?: string;
  background?: SectionBackground;
  spacing?: SectionSpacing;
};

const backgroundClasses: Record<SectionBackground, string> = {
  default: "bg-white",
  surface: "bg-[var(--color-surface)]",
  primary: "bg-[var(--color-primary)] text-white"
};

const spacingClasses: Record<SectionSpacing, string> = {
  md: "py-16",
  lg: "py-24",
  xl: "py-32"
};

export default function Section({
  children,
  className,
  background = "default",
  spacing = "lg"
}: SectionProps) {
  return (
    <section
      className={cn(
        backgroundClasses[background],
        spacingClasses[spacing],
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
