"use client";

import BackButton from "@/domains/ads-gen/components/back-button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import progressImage from "../../../../public/progressImage.png";
import { getRequest } from "@/lib/api";
import { toast } from "sonner";

const steps = [
  "Analyzing your brand audience",
  "Crafting engaging copy & headlines",
  "Adding high impact visuals",
  "Optimizing for performance and reach",
  "Finalizing your AI-powered Ad",
];

const ImageGenerationProgress = ({ taskId }: { taskId?: string }) => {
  const [progress, setProgress] = useState(20);
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const router = useRouter();
  const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const pollCountRef = useRef(0);

  // Set up visual progress animation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (currentStep < steps.length - 1 && !isComplete) {
        setProgress((prev) => Math.min(prev + 20, 80));
        setCurrentStep((prev) => Math.min(prev + 1, 4));
      } else if (isComplete) {
        // When generation is complete, show 100%
        setProgress(100);
        setCurrentStep(5);
        clearInterval(progressInterval);
      } else {
        clearInterval(progressInterval);
      }
    }, 1500);

    return () => clearInterval(progressInterval);
  }, [currentStep, isComplete]);

  // Set up API polling
  useEffect(() => {
    if (!taskId) {
      console.log("No taskId provided, cannot poll");
      return;
    }

    console.log("Setting up polling for task:", taskId);
    pollCountRef.current = 0;

    // Function to check task status
    const checkTaskStatus = async () => {
      pollCountRef.current += 1;
      console.log(`Poll #${pollCountRef.current} for task ${taskId}`);

      try {
        const response = await getRequest(`/image/task/${taskId}`);
        console.log(`Poll #${pollCountRef.current} response:`, response);

        // Check if this is a success response with the image details
        if (
          response.status === "success" &&
          response.status_code === 201 &&
          response.data.success === true &&
          response.data.image_id
        ) {
          console.log("Success! Image generation completed");

          // Stop polling
          if (pollingIntervalRef.current) {
            clearInterval(pollingIntervalRef.current);
            pollingIntervalRef.current = null;
          }

          // Set complete state for visual indicator
          setIsComplete(true);

          // Store campaign data
          localStorage.setItem("campaignData", JSON.stringify(response.data));
          toast.success("Image generated successfully!");

          // Wait a moment to see the completion state
          setTimeout(() => {
            console.log(
              "Redirecting to preview:",
              `/create-ad/preview/${response.data.image_id}`
            );
            router.push(`/create-ad/preview/${response.data.image_id}`);
          }, 1000);

          return true;
        }

        return false;
      } catch (error) {
        console.error(`Poll #${pollCountRef.current} error:`, error);
        return false;
      }
    };

    // Set up polling interval
    pollingIntervalRef.current = setInterval(checkTaskStatus, 5000);

    // Initial check
    checkTaskStatus();

    // Clean up on unmount
    return () => {
      console.log("Cleaning up polling interval");
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
        pollingIntervalRef.current = null;
      }
    };
  }, [taskId, router]);

  return (
    <div className="min-h-full bg-[#F9FAFB] py-6 pt-10 flex flex-col items-center">
      <div className="max-w-[1024px] w-full px-4 md:px-8">
        <BackButton className="mb-8" />
        <div className="w-full flex flex-col lg:flex-row gap-10 justify-between">
          <div className="w-full lg:max-w-[540px]">
            <h2 className="text-[28px] md:text-[32px] text-[#121316] leading-10 font-semibold">
              Generating Your Image Ad... {progress}%
            </h2>
            <p className="text-[#5F5F5F] font-medium leading-7 text-base md:text-[18px] pt-4 pb-6">
              Our AI is working behind the scenes to craft the perfect ad for
              you. Sit tight, your ad is almost ready!
            </p>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  {index + 1 < currentStep ? (
                    <div className="flex flex-col gap-2 items-center">
                      <CheckCircle className="text-[#458DE1]" size={20} />
                      {index + 1 !== steps.length && (
                        <div className="w-[1px] h-[22px] bg-[#A1A1A1]"></div>
                      )}
                    </div>
                  ) : index + 1 === currentStep ? (
                    <div className="flex flex-col gap-2 items-center">
                      <div className="w-5 h-5 border-2 border-[#458DE1] border-t-transparent border-solid rounded-full animate-spin"></div>
                      {index + 1 !== steps.length && (
                        <div className="w-[1px] h-[22px] bg-[#A1A1A1]"></div>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14C13.11 14 14 13.11 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10Z"
                          fill="#A1A1A1"
                        />
                      </svg>
                      {index + 1 !== steps.length && (
                        <div className="w-[1px] h-[22px] bg-[#A1A1A1]"></div>
                      )}
                    </div>
                  )}
                  <span
                    className={`font-medium leading-5 md:leading-7 text-base md:text-[18px] ${
                      index + 1 < currentStep
                        ? "text-[#121316]"
                        : index + 1 === currentStep
                        ? "text-[#458DE1]"
                        : "text-[#A1A1A1]"
                    }`}
                  >
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <Image
              className="rounded-lg w-full max-w-[395px] h-auto object-cover shadow-md"
              src={progressImage}
              height={495}
              width={395}
              alt="AI generating your ad"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerationProgress;
