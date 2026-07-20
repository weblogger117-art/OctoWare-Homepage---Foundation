import {
  Search,
  Rocket,
  GraduationCap,
  Headphones,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Beratung",
    text: "Gemeinsam analysieren wir Ihre Anforderungen und entwickeln ein passendes Digitalisierungskonzept.",
  },
  {
    number: "02",
    icon: Rocket,
    title: "Einführung",
    text: "Wir begleiten die Installation, Migration und Konfiguration Ihrer neuen Lösung.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Schulung",
    text: "Praxisnahe Schulungen sorgen für einen sicheren und erfolgreichen Einsatz im Arbeitsalltag.",
  },
  {
    number: "04",
    icon: Headphones,
    title: "Support",
    text: "Auch nach der Einführung begleiten wir Sie mit persönlichem Support und kontinuierlichen Weiterentwicklungen.",
  },
];

export default function Process() {
  return (
    <Section background="surface" spacing="xl">
      <Heading
        eyebrow="Projektablauf"
        title="So begleiten wir Ihr Projekt."
        description="Von der ersten Beratung bis zur langfristigen Betreuung – wir stehen Ihnen in jeder Phase als verlässlicher Partner zur Seite."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-4">
        {steps.map(({ number, icon: Icon, title, text }) => (
          <Card key={number} className="relative">
            <div className="absolute right-8 top-8 text-5xl font-bold text-[var(--color-primary-light)]">
              {number}
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary)]">
              <Icon size={28} />
            </div>

            <h3 className="mt-8 text-xl font-semibold">
              {title}
            </h3>

            <p className="mt-4 leading-7 text-[var(--color-text-light)]">
              {text}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
