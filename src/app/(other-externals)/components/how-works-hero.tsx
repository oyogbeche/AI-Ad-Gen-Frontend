import React, { FC } from "react";
import Image from "next/image";

interface HowWorksHeroProps {
  // Add any props you might need here
}

const HowWorksHero: FC<HowWorksHeroProps> = () => {
  return (
    <section className="w-full bg-white">
      {/* Hero Title & Subtitle */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">HOW IT WORKS</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Creating high-impact image ads has never been easier. With genz.ad,
          you can generate professional-quality ads in just a few clicks. Follow
          these simple steps and watch your brand take off.
        </p>
      </div>

      {/* StepOne: "Click on Generate Ad" side-by-side layout */}
    </section>
  );
};

export default HowWorksHero;
