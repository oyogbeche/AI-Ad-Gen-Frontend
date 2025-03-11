"use client";

import { useState } from "react";
import { CardContent } from "@/components/ui/card";
import PromptSelection from "@/domains/ads-gen/components/prompt-selection";
import AdGenerationProgress from "@/domains/ads-gen/components/ad-generation-progress";

const Page = () => {
  const [selectedPromptIndex, setSelectedPromptIndex] = useState<number | null>(
    null
  );
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSelectPrompt = (index: number) => {
    setSelectedPromptIndex(index);
  };

  const handleGenerateAd = () => {
    setIsGenerating(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-10 px-6">
      <CardContent className="max-w-[1033px] w-full mx-auto p-6 rounded-[8px] bg-white flex flex-col gap-10">
        {isGenerating ? (
          <AdGenerationProgress />
        ) : (
          <div>
            <PromptSelection
              selectedPromptIndex={selectedPromptIndex}
              onSelectPrompt={handleSelectPrompt}
              onGenerateAd={handleGenerateAd}
            />
          </div>
        )}
      </CardContent>
    </div>
  );
};

export default Page;
