import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import Sectors from "@/components/Sectors";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import Technology from "@/components/Technology";
import Standards from "@/components/Standards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <Sectors />
      <Stats />
      <Projects />
      <Clients />
      <Technology />
      <Standards />
      <Contact />
      <Footer />
    </main>
  );
}
