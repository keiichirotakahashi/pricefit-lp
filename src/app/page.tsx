import Contact from "@/components/contact/contact";
import CTABanner from "@/components/cta-banner/cta-banner";
import FAQ from "@/components/faq/faq";
import Flow from "@/components/flow/flow";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import Problems from "@/components/problems/problems";
import Solutions from "@/components/solutions/solutions";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Problems />
      <Solutions />
      <Flow />
      <CTABanner />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
