import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { CaseStudies } from "../components/CaseStudies";

export function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <CaseStudies />
    </div>
  );
}