import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Führt beliebige Tailwind-Klassen intelligent zusammen.
 *
 * Beispiel:
 *
 * cn("px-4", "px-8")
 * => "px-8"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
