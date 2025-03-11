"use client";

import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle } from "@/components/ui/card";
import BackButton from "@/domains/ads-gen/components/back-button";
import { useImageContext } from "@/domains/ads-gen/context/ImageContext";

const prompts = [
  {
    text: "Generate Runway fashion model showcasing a vibrant dress",
    images: [
      "/images/prompt2-1.jpg",
      "/images/prompt2-2.jpg",
      "/images/prompt2-3.jpg",
      "/images/prompt2-4.jpg",
      "/images/prompt2-5.jpg",
    ],
  },
  {
    text: "Generate Runway fashion model showcasing a vibrant dress",
    images: [
      "/images/prompt2-1.jpg",
      "/images/prompt2-2.jpg",
      "/images/prompt2-3.jpg",
      "/images/prompt2-4.jpg",
      "/images/prompt2-5.jpg",
    ],
  },
  {
    text: "Generate Runway fashion model showcasing a vibrant dress",
    images: [
      "/images/prompt2-1.jpg",
      "/images/prompt2-2.jpg",
      "/images/prompt2-3.jpg",
      "/images/prompt2-4.jpg",
      "/images/prompt2-5.jpg",
    ],
  },
  {
    text: "Generate Runway fashion model showcasing a vibrant dress",
    images: [
      "/images/prompt2-1.jpg",
      "/images/prompt2-2.jpg",
      "/images/prompt2-3.jpg",
      "/images/prompt2-4.jpg",
      "/images/prompt2-5.jpg",
    ],
  },
  {
    text: "Generate Runway fashion model showcasing a vibrant dress",
    images: [
      "/images/prompt2-1.jpg",
      "/images/prompt2-2.jpg",
      "/images/prompt2-3.jpg",
      "/images/prompt2-4.jpg",
      "/images/prompt2-5.jpg",
    ],
  },
  {
    text: "Generate Runway fashion model showcasing a vibrant dress",
    images: [
      "/images/prompt2-1.jpg",
      "/images/prompt2-2.jpg",
      "/images/prompt2-3.jpg",
      "/images/prompt2-4.jpg",
      "/images/prompt2-5.jpg",
    ],
  },
];

interface PromptSelectionProps {
  selectedPromptIndex: number | null;
  onSelectPrompt: (index: number) => void;
  onGenerateAd: () => void;
}

const PromptSelection: React.FC<PromptSelectionProps> = ({
  selectedPromptIndex,
  onSelectPrompt,
  onGenerateAd,
}) => {
  const { setImageUrl } = useImageContext();

  const handleSelectPrompt = (index: number) => {
    onSelectPrompt(index);
    const selectedPrompt = prompts[index];
    const randomImage =
      selectedPrompt.images[
        Math.floor(Math.random() * selectedPrompt.images.length)
      ];
    setImageUrl(randomImage);
  };

  return (
    <div className="flex flex-col gap-10">
      <BackButton />
      <CardHeader className="text-center px-0 mt-[15px]">
        <CardTitle className="text-[28px] leading-[36px] text-[#121316] font-semibold">
          Generate Your Image Ad for Free
        </CardTitle>
        <p className="text-[#667185] text-sm md:text-[18px] font-normal mt-1">
          Choose from Predefined AI Prompts
        </p>
      </CardHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-6">
        {prompts.map((prompt, index) => (
          <div
            onClick={() => handleSelectPrompt(index)}
            key={index}
            className={`flex gap-2.5 items-center border  py-3 px-6 rounded-[20px] text-base font-medium leading-5 text-[#5F5F5F] cursor-pointer ${
              selectedPromptIndex === index
                ? "border-[#1671D9]"
                : "border-[#E3E3E3]"
            }`}
          >
            {prompt.text}
            <div className="w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5.8335 14.1666L14.1668 5.83325"
                  stroke="#63A0E6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.8335 5.83325H14.1668V14.1666"
                  stroke="#63A0E6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={selectedPromptIndex === null}
          onClick={onGenerateAd}
          className={`px-6 py-3 h-12 text-base rounded-md transition-colors text-white shadow-none md:mt-[13px] w-full md:w-fit ${
            selectedPromptIndex !== null
              ? "bg-[#B800B8] hover:bg-[#960096] cursor-pointer"
              : "bg-[#EAC8F0] cursor-not-allowed"
          }`}
        >
          Generate Ad
        </Button>
      </div>
    </div>
  );
};

export default PromptSelection;
