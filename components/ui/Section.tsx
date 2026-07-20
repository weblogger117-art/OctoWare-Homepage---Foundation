import type { ReactNode } from "react";

import Container from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export default function Section({
  children,
  className = ""
}: SectionProps) {
  return (
    <section className={`section ${className}`.trim()}>
      <Container>{children}</Container>
    </section>
  );
}
