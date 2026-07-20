import Link from "next/link";
import Logo from "@/components/ui/Logo";

import Container from "@/components/ui/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo />

            <p className="mt-4 text-sm text-[var(--color-text-light)]">
              Die moderne Plattform für den öffentlichen Gesundheitsdienst.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Navigation</h3>

            <ul className="space-y-2 text-sm">
              <li><Link href="/">Start</Link></li>
              <li><Link href="/plattform">Plattform</Link></li>
              <li><Link href="/loesungen">Lösungen</Link></li>
              <li><Link href="/academy">easy-Academy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Unternehmen</h3>

            <p className="text-sm text-[var(--color-text-light)]">
              © {year} easy-soft GmbH
              <br />
              Dresden
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
