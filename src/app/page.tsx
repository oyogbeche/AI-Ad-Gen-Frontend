import FeaturesSection from "@/app/sections/key-features";
import HeroSection from "@/app/sections/hero";
import Pricing from "./sections/pricing";
import Footer from "@/app/sections/footer";
import NewsletterForm from "./sections/news-letter";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <Pricing />
      <NewsletterForm />
      <Footer />
    </main>
  );
}
