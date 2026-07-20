import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = ""
}: CardProps) {
  return (
    <div
      className={[
        "rounded-[24px]",
        "border",
        "border-[var(--color-border)]",
        "bg-white",
        "p-8",
        "shadow-sm",
        "transition-all",
        "duration-300",
        "hover:-translate-y-1",
        "hover:shadow-md",
        className
      ].join(" ")}
    >
      {children}
    </div>
  );
}
