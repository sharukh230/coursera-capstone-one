import { HeroSection } from "../../components/HeroSection";
import { Specials } from "../../components/Specials";
import { Chicago } from "../../components/Chicago";
import { Testimonials } from "../../components/Testimonials";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <main>
        <Specials />
        <Testimonials />
        <Chicago />
      </main>
    </>
  );
};