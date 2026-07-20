import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-36">
      {/* Hintergrund */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#f8fbff] to-white" />

      <div className="absolute left-1/2 top-0 -z-10 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[var(--color-primary-light)] opacity-30 blur-3xl" />

      <Container className="grid items-center gap-20 lg:grid-cols-2">
        {/* Textbereich */}
        <div>
          <Badge>
            Digitale Plattform für den öffentlichen Gesundheitsdienst
          </Badge>

          <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight lg:text-7xl">
            Digitalisierung
            <br />
            für den öffentlichen
            <br />
            Gesundheitsdienst.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--color-text-light)]">
            <span className="italic">OctoWare</span>®Gesundheit vereint
            moderne Fachverfahren, digitale Bürgerdienste und mobile Prozesse
            auf einer gemeinsamen Plattform.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg">
              Plattform entdecken
            </Button>

            <Button
              variant="ghost"
              size="lg"
            >
              OctoWare®NET kennenlernen
            </Button>
          </div>
        </div>

        {/* Visualisierung */}
        <div className="relative flex items-center justify-center">
          {/* Tablet */}
          <div className="absolute left-0 top-20 h-[360px] w-[260px] rounded-[28px] border border-[var(--color-border)] bg-white shadow-lg" />

          {/* Laptop */}
          <div className="relative h-[520px] w-full max-w-[700px] rounded-[32px] border border-[var(--color-border)] bg-white shadow-2xl">
            <div className="flex h-full items-center justify-center text-[var(--color-text-light)]">
              Screenshot von OctoWare®NET
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
