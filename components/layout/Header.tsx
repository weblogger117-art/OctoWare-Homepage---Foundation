import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <Container className="flex h-[92px] items-center justify-between">
        <Logo />

        <Navigation />

        <Button variant="secondary">
          Kontakt
        </Button>
      </Container>
    </header>
  );
}
