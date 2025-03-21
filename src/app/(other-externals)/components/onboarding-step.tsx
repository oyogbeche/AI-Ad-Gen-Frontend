import type { ReactNode } from "react";

interface OnboardingStepProps {
  number: number;
  title: string;
  content: ReactNode;
  image: ReactNode;
  imagePosition: "left" | "right";
  numberColor?: string;
  backgroundColor?: string;
}

export default function OnboardingStep({
  number,
  title,
  content,
  image,
  imagePosition,
  numberColor,
  backgroundColor,
}: OnboardingStepProps) {
  const isLeftImage = imagePosition === "left";

  // Default background colors based on image position
  const bgColor =
    backgroundColor ||
    (isLeftImage ? "#F2F2F2" : isLeftImage ? "#F2F2F2" : "#FDF2FD");
  const numColor = numberColor || (isLeftImage ? "#cfcfcf" : "#F6E1F6");

  // Conditional classes based on image position
  const sectionClasses = `
    relative
    rounded-[20px]
    overflow-hidden
    w-full
  `;

  const numberClasses = `
    absolute
    font-manrope font-semibold text-[64px] lg:text-[128px] leading-[28px]
    top-10 lg:top-20
    pointer-events-none
    select-none
    w-fit
    ${
      isLeftImage
        ? "right-10 lg:right-20"
        : "right-10 lg:left-[45%] lg:right-0 lg:-translate-x-1/2 lg:-translate-y-1/2"
    }
  `;

  const containerClasses = `
    container
    mx-auto
    grid
    grid-cols-1
    lg:grid-cols-2
    items-center
    gap-8
    relative
    w-full
  `;

  const textContainerClasses = `
    ${isLeftImage ? "order-1 lg:order-2 " : "pl-8"} 
    mt-${isLeftImage ? "20" : "32"}
  `;

  const imageContainerClasses = `
    flex 
    ${
      isLeftImage
        ? "items-center justify-start order-2 lg:order-1"
        : "items-end justify-end w-full"
    }
  `;

  return (
    <div className="w-full">
      <section className={sectionClasses} style={{ backgroundColor: bgColor }}>
        <div
          className={numberClasses}
          style={{ color: numColor }}
          aria-hidden="true"
        >
          {number}
        </div>

        <div className={containerClasses}>
          {/* Text Side */}
          <div className={textContainerClasses}>
            <h3 className="text-[#121316] font-nunito text-[18px] md:text-[40px] font-semibold md:font-bold leading-7 md:leading-[48px] mb-4">
              {title}
            </h3>
            <ul className="list-disc list-inside space-y-1  text-[#121316] font-nunito text-base md:text-[18px] font-normal leading-6 md:leading-[28px]">
              {content}
            </ul>
          </div>

          {/* Image Side */}
          <div className={imageContainerClasses}>{image}</div>
        </div>
      </section>
    </div>
  );
}
