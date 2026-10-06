import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import PressBar from "@/components/PressBar";
import Manifesto from "@/components/Manifesto";
import About from "@/components/About";
import Media from "@/components/Media";
import Method from "@/components/Method";
import Services from "@/components/Services";
import Journey from "@/components/Journey";
import Recipes from "@/components/Recipes";
import Transformari from "@/components/Transformari";
import Testimonials from "@/components/Testimonials";
import QuoteBand from "@/components/QuoteBand";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <PressBar />
        <Manifesto />
        <About />
        <Media />
        <Method />
        <Services />
        <Journey />
        <Recipes />
        <Transformari />
        <Testimonials />
        <QuoteBand />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
