import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-primary)] text-white hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]",

  secondary:
    "bg-[var(--color-secondary)] text-black hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-secondary)]",

  ghost:
    "bg-transparent border border-[var(--color-border)] hover:bg-[var(--color-surface)]"
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-base",
  lg: "h-14 px-8 text-lg"
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  startIcon,
  endIcon,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={[
        "inline-flex items-center justify-center gap-2",
        "rounded-xl",
        "font-medium",
        "transition-all duration-200",
        "cursor-pointer",
        variantClasses[variant],
        sizeClasses[size],
        className
      ].join(" ")}
      {...props}
    >
      {startIcon}

      <span>{children}</span>

      {endIcon}
    </button>
  );
}
