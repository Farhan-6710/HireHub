import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import BrandsSection from "./components/heroSection/BrandsSection";
import Hero from "./components/heroSection/Hero";
import AccordionComponent from "./components/accordionSection/AccordionComponent";
import BlurryBlobTwo from "@/components/ui/BlurryBlobTwo";

export default function Home() {
  return (
    <div>
      <BlurryBlobTwo
        className="rounded-xl opacity-45"
        firstBlobColor="bg-purple-400"
        secondBlobColor="bg-blue-400"
      />
      {/* Background Grid */}
      <div className="fixed -z-20 h-screen inset-0 dark:bg-slate-950 bg-white bg-grid-black/[0.05] dark:bg-grid-white/[0.05] dark:sm:bg-grid-lg-white/[0.075] sm:bg-grid-lg-black/[0.075] mt-[14px]">
        {/* Overlay Effect */}
      </div>
      <div className="fixed -z-10 inset-0 flex items-center justify-center pointer-events-none dark:bg-slate-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <BackgroundBeamsWithCollision>
        <Hero />
      </BackgroundBeamsWithCollision>
      <BrandsSection />
      <AccordionComponent />
    </div>
  );
}
