import FeaturesSection from "@/app/sections/key-features";
import HeroSection from "@/app/sections/hero";
import Pricing from "./sections/pricing";
import Footer from "@/app/sections/footer";
import FAQ from "@/app/sections/FAQ";
import CreateAd from "@/app/sections/createAD"; // Import the CreateAd component
import NewsletterForm from "./sections/news-letter";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <CreateAd /> {/* Add the CreateAd component here */}
      <Pricing />
      <FAQ />
      <NewsletterForm />
      <Footer />
    </main>
  );
}
