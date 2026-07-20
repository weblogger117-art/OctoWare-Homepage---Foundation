import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import WhyOctoWare from "@/components/sections/WhyOctoWare";
import Statistics from "@/components/sections/Statistics";
import Platform from "@/components/sections/Platform";
import OctoWareNET from "@/components/sections/OctoWareNET";
import OctoWareTN from "@/components/sections/OctoWareTN";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Statistics />
        <WhyOctoWare />
         <Platform />
        <OctoWareNET />
        <OctoWareTN />
      </main>

      <Footer />
    </>
  );
}
