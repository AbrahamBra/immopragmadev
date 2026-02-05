import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import PainPoints from "@/components/sections/PainPoints";
import Solutions from "@/components/sections/Solutions";
import DemoVideos from "@/components/sections/DemoVideos";
import Sectors from "@/components/sections/Sectors";
import CaseStudy from "@/components/sections/CaseStudy";
import Testimonials from "@/components/sections/Testimonials";
import Timeline from "@/components/sections/Timeline";
import Pricing from "@/components/sections/Pricing";
import Credibility from "@/components/sections/Credibility";
import Technologies from "@/components/sections/Technologies";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Stats />
      <PainPoints />
      <Solutions />
      <DemoVideos />
      <Sectors />
      <CaseStudy />
      <Testimonials />
      <Timeline />
      <Pricing />
      <Credibility />
      <Technologies />
      <FinalCTA />
      <Footer />
    </main>
  );
}
