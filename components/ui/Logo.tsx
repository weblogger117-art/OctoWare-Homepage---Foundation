import Link from "next/link";

type LogoProps = {
  className?: string;
};

export default function Logo({
  className = ""
}: LogoProps) {
  return (
    <Link
      href="/"
      className={[
        "text-2xl",
        "font-bold",
        "tracking-tight",
        className
      ].join(" ")}
      aria-label="Zur Startseite"
    >
      <span className="italic">OctoWare</span>®Gesundheit
    </Link>
  );
}
