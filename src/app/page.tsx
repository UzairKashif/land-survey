import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import Sectors from "@/components/Sectors";
import Capabilities from "@/components/Capabilities";
import Approach from "@/components/Approach";
import TrackRecord from "@/components/TrackRecord";
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
      <About />
      <Services />
      <Sectors />
      <Capabilities />
      <Approach />
      <TrackRecord />
      <Technology />
      <Standards />
      <Contact />
      <Footer />
    </main>
  );
}
