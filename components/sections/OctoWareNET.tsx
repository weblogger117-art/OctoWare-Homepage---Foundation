import {
  Cloud,
  Smartphone,
  ShieldCheck,
  Workflow,
  ArrowRight
} from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const features = [
  {
    icon: Cloud,
    title: "Cloudfähig"
  },
  {
    icon: Workflow,
    title: "Modulare Plattform"
  },
  {
    icon: Smartphone,
    title: "Mobile Anwendungen"
  },
  {
    icon: ShieldCheck,
    title: "DSGVO-konform"
  }
];

export default function OctoWareNET() {
  return (
    <Section spacing="xl">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <Heading
            eyebrow="OctoWare®NET"
            title="Die nächste Generation für den öffentlichen Gesundheitsdienst."
            description="Modern, modular und zukunftssicher – OctoWare®NET vereint alle Fachverfahren auf einer gemeinsamen Plattform und schafft die Grundlage für digitale Verwaltungsprozesse."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {features.map(({ icon: Icon, title }) => (
              <Card key={title} hover={false}>
                <div className="flex items-center gap-3">
                  <Icon
                    size={22}
                    className="text-[var(--color-primary)]"
                  />

                  <span className="font-medium">
                    {title}
                  </span>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10">
            <Button
              size="lg"
              iconRight={<ArrowRight size={18} />}
            >
              Mehr über OctoWare®NET
            </Button>
          </div>
        </div>

        <Card
          variant="outlined"
          className="flex min-h-[520px] items-center justify-center"
        >
          <span className="text-lg text-[var(--color-text-light)]">
            Produktvisualisierung folgt
          </span>
        </Card>
      </div>
    </Section>
  );
}
