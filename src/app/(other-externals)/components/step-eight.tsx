import React from "react";
import Image from "next/image";
import OnboardingStep from "./onboarding-step";

const StepEight = () => {
  return (
    <OnboardingStep
      number={8}
      title="Click on Generate Ad"
      content={
        <ul className="list-disc list-inside space-y-1 text-gray-700 leading-relaxed">
          <li>Tap the &ldquo;Generate Ad&rdquo; button to get started</li>
          <li>No experience needed! Just follow the easy steps!</li>
        </ul>
      }
      image={
        <Image
          src="/howitworks1.svg"
          alt="Step 1 illustration"
          width={1200}
          height={800}
          className="object-cover"
          priority
        />
      }
      imagePosition="left"
    />
  );
};

export default StepEight;
