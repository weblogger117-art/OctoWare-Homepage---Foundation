import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const navigation = [
  { label: "Start", href: "/" },
  { label: "Plattform", href: "/plattform" },
  { label: "Lösungen", href: "/loesungen" },
  { label: "easy-Academy", href: "/academy" },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Unternehmen", href: "/unternehmen" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <Container className="flex h-[92px] items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
          aria-label="Zur Startseite"
        >
          <span className="italic">OctoWare</span>®Gesundheit
        </Link>

        <nav aria-label="Hauptnavigation">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-[var(--color-primary)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button variant="secondary">
          Kontakt
        </Button>
      </Container>
    </header>
  );
}
