import FeaturesSection from "@/app/sections/key-features";
import HeroSection from "@/app/sections/hero";
import Pricing from "./sections/pricing";
import Footer from "@/app/sections/footer";
import CreateAds from "./sections/create-ads";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <CreateAds />
      <Pricing />
      <Footer />
    </main>
  );
}
