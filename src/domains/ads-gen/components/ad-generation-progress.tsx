"use client";

import { useState, useEffect } from "react";
import { CheckCircle, Circle } from "lucide-react";
import BackButton from "@/domains/ads-gen/components/back-button";

const steps = [
  "Analysed your brand audience",
  "Crafting engaging copy & headlines...",
  "Add high impact visuals",
  "Optimize for performance and reach",
  "Finalize your AI-powered Ad",
];

const AdGenerationProgress: React.FC = () => {
  const [progress, setProgress] = useState(20);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setProgress((prev) => prev + 20);
        setCurrentStep((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentStep]);

  return (
    <div className="max-w-[1280px] w-full ">
      <BackButton/>
      <h2 className="text-xl font-semibold">Generating Your Image Ad... {progress}%</h2>
      <p className="text-gray-600">Our AI is working behind the scenes to craft the perfect ad for you. Sit tight, your ad is almost ready!</p>
      <div className="mt-4 space-y-2">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center space-x-2">
            {index + 1 < currentStep ? (
              <CheckCircle className="text-blue-500" size={20} />
            ) : index + 1 === currentStep ? (
              <Circle className="text-blue-500 animate-spin" size={20} />
            ) : (
              <Circle className="text-gray-400" size={20} />
            )}
            <span
              className={
                index + 1 < currentStep
                  ? "text-gray-700 font-medium"
                  : index + 1 === currentStep
                  ? "text-blue-500 font-medium"
                  : "text-gray-400"
              }
            >
              {step}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <img src="/your-image.png" alt="Ad Generation" className="w-40" />
      </div>
    </div>
  );
};

export default AdGenerationProgress;
