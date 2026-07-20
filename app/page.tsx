import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import WhyOctoWare from "@/components/sections/WhyOctoWare";
import Statistics from "@/components/sections/Statistics";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Statistics />
        <WhyOctoWare />
      </main>

      <Footer />
    </>
  );
}
