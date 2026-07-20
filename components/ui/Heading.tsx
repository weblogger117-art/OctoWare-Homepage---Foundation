import type { ReactNode } from "react";

type HeadingProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
};

export default function Heading({
  title,
  subtitle,
  align = "left"
}: HeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-text-light)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
