import {
  Award,
  Building2,
  Headphones,
  ShieldCheck,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const trustItems = [
  {
    icon: Award,
    value: "30+",
    title: "Jahre Erfahrung",
    text: "Seit mehr als drei Jahrzehnten entwickeln wir Softwarelösungen für den öffentlichen Gesundheitsdienst.",
  },
  {
    icon: Building2,
    value: "ÖGD",
    title: "Spezialisierung",
    text: "Unser gesamter Fokus liegt auf den Anforderungen von Gesundheitsämtern und öffentlichen Einrichtungen.",
  },
  {
    icon: ShieldCheck,
    value: "100 %",
    title: "Zukunftssicher",
    text: "Kontinuierliche Weiterentwicklung und moderne Technologien schaffen langfristige Investitionssicherheit.",
  },
  {
    icon: Headphones,
    value: "Persönlich",
    title: "Support",
    text: "Beratung, Schulung und Support erfolgen direkt durch unser Team in Dresden.",
  },
];

export default function Trust() {
  return (
    <Section spacing="xl">
      <Heading
        eyebrow="Vertrauen"
        title="Vertrauen entsteht durch Erfahrung."
        description="Seit über 30 Jahren begleiten wir den öffentlichen Gesundheitsdienst bei der Digitalisierung. Unser Anspruch ist es, moderne Software mit persönlicher Betreuung zu verbinden."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {trustItems.map(({ icon: Icon, value, title, text }) => (
          <Card key={title}>
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary)]">
              <Icon size={28} />
            </div>

            <div className="mt-8 text-3xl font-bold text-[var(--color-primary)]">
              {value}
            </div>

            <h3 className="mt-3 text-xl font-semibold">
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
