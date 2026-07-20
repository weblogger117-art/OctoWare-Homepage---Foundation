import {
  Blocks,
  Building2,
  ShieldCheck,
  Smartphone
} from "lucide-react";

import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const features = [
  {
    icon: Blocks,
    title: "Modulare Plattform",
    text: "Alle Fachverfahren arbeiten auf einer gemeinsamen technologischen Basis und wachsen flexibel mit Ihren Anforderungen."
  },
  {
    icon: Smartphone,
    title: "Digitale Prozesse",
    text: "Von Bürgerportalen bis zu mobilen Anwendungen – sämtliche Abläufe werden medienbruchfrei digital unterstützt."
  },
  {
    icon: ShieldCheck,
    title: "Sicher & zukunftsfähig",
    text: "Moderne Architektur, hohe Sicherheitsstandards und kontinuierliche Weiterentwicklung schaffen Investitionssicherheit."
  },
  {
    icon: Building2,
    title: "Speziell für den ÖGD",
    text: "Entwickelt gemeinsam mit Gesundheitsämtern – für die täglichen Anforderungen des öffentlichen Gesundheitsdienstes."
  }
];

export default function WhyOctoWare() {
  return (
    <Section>
      <Heading
        align="center"
        title={
          <>
            Warum <span className="italic">OctoWare</span>®Gesundheit?
          </>
        }
        subtitle="Eine Plattform, die speziell für den öffentlichen Gesundheitsdienst entwickelt wurde und Menschen, Prozesse und Informationen intelligent miteinander verbindet."
      />

      <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {features.map(({ icon: Icon, title, text }) => (
          <Card key={title}>
            <Icon
              size={36}
              className="text-[var(--color-primary)]"
            />

            <h3 className="mt-6 text-xl font-semibold">
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
