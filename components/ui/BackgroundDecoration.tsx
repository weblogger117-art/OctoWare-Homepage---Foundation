import { cn } from "@/lib/utils";

import type { SectionDecoration } from "./Section";

type BackgroundDecorationProps = {
  variant: Exclude<SectionDecoration, "none">;
  className?: string;
};

export default function BackgroundDecoration({
  variant,
  className,
}: BackgroundDecorationProps) {
  return (
    <div
      aria-hidden="true"
      data-variant={variant}
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {variant === "glow" && (
      <>
      {/* linke Lichtfläche */}

      <div
        className="
        absolute
        -left-40
        top-20
        h-96
        w-96
        rounded-full
        bg-[var(--color-primary-light)]
        opacity-40
        blur-3xl
        "
      />

      {/* rechte Lichtfläche */}

      <div
        className="
        absolute
        right-0
        bottom-0
        h-[28rem]
        w-[28rem]
        rounded-full
        bg-[var(--color-secondary-light)]
        opacity-30
        blur-3xl
        "
      />
  </>
)}

    
      {/* Raster */}

      <div
        className="
        absolute
        inset-0
        bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)]
        bg-[size:48px_48px]
        opacity-20
        "
      />
    </div>
  );
}
