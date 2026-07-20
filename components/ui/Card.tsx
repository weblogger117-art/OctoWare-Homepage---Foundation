import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardVariant = "default" | "outlined" | "glass";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: CardVariant;
  hover?: boolean;
};

const variants: Record<CardVariant, string> = {
  default:
    "bg-white border border-[var(--color-border)] shadow-[var(--shadow-sm)]",

  outlined:
    "bg-white border-2 border-[var(--color-primary-light)]",

  glass:
    "border border-white/20 bg-white/70 backdrop-blur-xl shadow-[var(--shadow-md)]"
};

export default function Card({
  children,
  className,
  variant = "default",
  hover = true,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] p-8 transition-all duration-300",
        variants[variant],
        hover &&
          "hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
