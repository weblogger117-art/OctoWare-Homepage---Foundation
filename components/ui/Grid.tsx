import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type GridColumns = 1 | 2 | 3 | 4;

type GridProps = HTMLAttributes<HTMLDivElement> & {
  cols?: GridColumns;
};

const columnClasses: Record<GridColumns, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 lg:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
};

export default function Grid({
  cols = 2,
  className,
  ...props
}: GridProps) {
  return (
    <div
      className={cn(
        "grid gap-8",
        columnClasses[cols],
        className
      )}
      {...props}
    />
  );
}
