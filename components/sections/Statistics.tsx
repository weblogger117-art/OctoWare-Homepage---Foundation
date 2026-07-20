import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

const statistics = [
  {
    value: "35+",
    label: "Jahre Erfahrung",
    description: "Entwicklung spezialisierter Softwarelösungen für den öffentlichen Gesundheitsdienst."
  },
  {
    value: "100 %",
    label: "Fokus ÖGD",
    description: "Unsere Lösungen werden ausschließlich für Einrichtungen des öffentlichen Gesundheitsdienstes entwickelt."
  },
  {
    value: "Modular",
    label: "Plattform",
    description: "Alle Fachverfahren basieren auf einer gemeinsamen technologischen Plattform."
  },
  {
    value: "Made in Germany",
    label: "Standort Dresden",
    description: "Entwicklung, Support und Beratung erfolgen vollständig durch unser Team in Deutschland."
  }
];

export default function Statistics() {
  return (
    <Section className="pt-0">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {statistics.map((item) => (
          <Card key={item.label}>
            <div className="text-4xl font-bold text-[var(--color-primary)]">
              {item.value}
            </div>

            <h3 className="mt-4 text-lg font-semibold">
              {item.label}
            </h3>

            <p className="mt-3 text-sm leading-7 text-[var(--color-text-light)]">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
