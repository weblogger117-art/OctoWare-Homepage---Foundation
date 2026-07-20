import {
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  ShieldCheck,
 Clock3,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const advantages = [
  {
    icon: CheckCircle2,
    title: "Bewährte Fachverfahren",
  },
  {
    icon: RefreshCw,
    title: "Kontinuierliche Weiterentwicklung",
  },
  {
    icon: ShieldCheck,
    title: "Langfristige Investitionssicherheit",
  },
  {
    icon: Clock3,
    title: "Nahtloser Übergang zu OctoWare®NET",
  },
];

export default function OctoWareTN() {
  return (
    <Section background="surface" spacing="xl">
      <div className="grid gap-16 items-center lg:grid-cols-2">

        <Card
          variant="outlined"
          className="flex min-h-[460px] items-center justify-center"
        >
          <span className="text-lg text-[var(--color-text-light)]">
            Produktvisualisierung folgt
          </span>
        </Card>

        <div>

          <Heading
            eyebrow="OctoWare®TN"
            title="Bewährt. Stabil. Zukunftssicher."
            description="OctoWare®TN unterstützt Gesundheitsämter seit vielen Jahren zuverlässig im täglichen Einsatz. Gleichzeitig schaffen wir einen klaren und sicheren Übergang zur nächsten Softwaregeneration."
          />

          <div className="mt-10 space-y-4">

            {advantages.map(({ icon: Icon, title }) => (

              <Card
                key={title}
                hover={false}
              >
                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                    <Icon size={22} />
                  </div>

                  <span className="font-medium">
                    {title}
                  </span>

                </div>
              </Card>

            ))}

          </div>

          <div className="mt-10">

            <Button
              variant="outline"
              size="lg"
              iconRight={<ArrowRight size={18} />}
            >
              Mehr über OctoWare®TN
            </Button>

          </div>

        </div>

      </div>
    </Section>
  );
}
