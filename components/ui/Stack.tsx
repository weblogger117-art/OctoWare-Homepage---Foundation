import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type StackSpacing = "sm" | "md" | "lg" | "xl";

type StackProps = HTMLAttributes<HTMLDivElement> & {
  spacing?: StackSpacing;
};

const spacingClasses: Record<StackSpacing, string> = {
  sm: "space-y-2",
  md: "space-y-4",
  lg: "space-y-6",
  xl: "space-y-8",
};

export default function Stack({
  spacing = "lg",
  className,
  ...props
}: StackProps) {
  return (
    <div
      className={cn(
        spacingClasses[spacing],
        className
      )}
      {...props}
    />
  );
}
