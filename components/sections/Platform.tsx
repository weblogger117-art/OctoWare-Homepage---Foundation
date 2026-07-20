import {
  Building2,
  Smartphone,
  Database,
  FileText,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const modules = [
  {
    title: "Zentrale Plattform",
    description:
      "Alle Fachverfahren greifen auf dieselbe moderne Plattform zu. Das reduziert Komplexität und schafft eine einheitliche Benutzererfahrung.",
    icon: Building2,
    large: true,
  },
  {
    title: "Bürgerportal",
    description: "Digitale Anträge und Kommunikation.",
    icon: Smartphone,
  },
  {
    title: "Schnittstellen",
    description: "Nahtlose Integration externer Systeme.",
    icon: Database,
  },
  {
    title: "Dokumentenmanagement",
    description: "Zentrale Verwaltung aller Dokumente.",
    icon: FileText,
  },
  {
    title: "Reporting",
    description: "Kennzahlen und Auswertungen auf Knopfdruck.",
    icon: BarChart3,
  },
  {
    title: "Sicherheit",
    description: "DSGVO-konforme Architektur und Rollenverwaltung.",
    icon: ShieldCheck,
  },
];

export default function Platform() {
  return (
    <Section background="surface">
      <Heading
        eyebrow="Plattform"
        title="Eine Plattform. Viele Möglichkeiten."
        description="OctoWare®Gesundheit verbindet Fachverfahren, digitale Bürgerdienste und mobile Anwendungen auf einer gemeinsamen technologischen Basis."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-3 auto-rows-[220px]">
        {modules.map((module) => {
          const Icon = module.icon;

          return (
            <Card
              key={module.title}
              className={
                module.large
                  ? "md:col-span-2 flex flex-col justify-between"
                  : "flex flex-col justify-between"
              }
            >
              <div>
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-semibold">
                  {module.title}
                </h3>

                <p className="mt-4 text-[var(--color-text-light)] leading-7">
                  {module.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
