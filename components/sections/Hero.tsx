import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <span className="mb-4 inline-flex rounded-full bg-[var(--color-primary-light)] px-4 py-2 text-sm font-medium text-[var(--color-primary)]">
            Digitale Plattform für den Öffentlichen Gesundheitsdienst
          </span>

          <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-tight tracking-tight lg:text-6xl">
            Digitalisierung für den öffentlichen Gesundheitsdienst.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-text-light)]">
            <span className="italic">OctoWare</span>®Gesundheit vereint moderne
            Fachverfahren, digitale Bürgerdienste und mobile Prozesse auf einer
            zentralen Plattform.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button>
              Plattform entdecken
            </Button>

            <Button variant="ghost">
              OctoWare®NET kennenlernen
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex aspect-[4/3] w-full max-w-[640px] items-center justify-center rounded-[32px] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-lg">
            <p className="text-center text-[var(--color-text-light)]">
              Platzhalter für Laptop- und Tablet-Visualisierung
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
