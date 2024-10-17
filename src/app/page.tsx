import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import BrandsSection from "./components/heroSection/BrandsSection";
import Hero from "./components/heroSection/Hero";

export default function Home() {
  return (
    <div>
      {/* Background Grid */}
      <div className="relative z-0 -top-6 inset-0 dark:bg-slate-950 bg-white bg-grid-black/[0.05] dark:bg-grid-white/[0.05] dark:sm:bg-grid-lg-white/[0.075] sm:bg-grid-lg-black/[0.075] mt-6">
        {/* Overlay Effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none dark:bg-slate-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <BackgroundBeamsWithCollision>
          <Hero />
        </BackgroundBeamsWithCollision>
          <BrandsSection />
      </div>
    </div>
  );
}
