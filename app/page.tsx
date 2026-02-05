import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import Solutions from "@/components/sections/Solutions";
import Sectors from "@/components/sections/Sectors";
import CaseStudy from "@/components/sections/CaseStudy";
import Credibility from "@/components/sections/Credibility";
import Technologies from "@/components/sections/Technologies";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <PainPoints />
      <Solutions />
      <Sectors />
      <CaseStudy />
      <Credibility />
      <Technologies />
      <FinalCTA />
      <Footer />
    </main>
  );
}
