import FAQ07 from "@/components/faq-07/faq-07";
import Features02Page from "@/components/features-02/features-02";
import Features06Page from "@/components/features-06/features-06";
import Hero02 from "@/components/hero-02/hero-02";
import Navbar04Page from "@/components/navbar-04/navbar-04";
import Timeline05 from "@/components/timeline-05/timeline-05";

export default function Home() {
  return (
    <div>
      <Navbar04Page />
      <Hero02 />
      <Features02Page />
      <Features06Page />
      <Timeline05 />
      <FAQ07 />
    </div>
  );
}
