import Link from "next/link";

const navigationItems = [
  {
    label: "Start",
    href: "/"
  },
  {
    label: "Plattform",
    href: "/plattform"
  },
  {
    label: "Lösungen",
    href: "/loesungen"
  },
  {
    label: "easy-Academy",
    href: "/academy"
  },
  {
    label: "Referenzen",
    href: "/referenzen"
  },
  {
    label: "Unternehmen",
    href: "/unternehmen"
  }
];

export default function Navigation() {
  return (
    <nav aria-label="Hauptnavigation">
      <ul className="flex items-center gap-8">
        {navigationItems.map((item) => (
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
  );
}
