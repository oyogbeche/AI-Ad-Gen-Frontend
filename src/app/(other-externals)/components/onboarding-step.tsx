import type { ReactNode } from "react";

interface OnboardingStepProps {
  number: number;
  title: string;
  content: ReactNode;
  image: ReactNode;
  imagePosition: "left" | "right";
  numberColor?: string;
  backgroundColor?: string; // Optional background color for the text side
}

export default function OnboardingStep({
  number,
  title,
  content,
  image,
  imagePosition,
}: OnboardingStepProps) {
  return (
    <div className="w-full">
      {imagePosition === "left" ? (
        <section
          className="
        relative
        py-16
        bg-[#FFF4FF]
        overflow-hidden
        w-full
      "
        >
          <div
            className="
          absolute
          text-[10rem]
          font-extrabold
          text-pink-100
          top-20
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          pointer-events-none
          select-none
          hidden
          lg:block
        "
            aria-hidden="true"
          >
            {number}
          </div>

          <div
            className="
          container
          mx-auto
          px-4
          grid
          grid-cols-1
          md:grid-cols-2
          items-center
          gap-8
          relative
          w-full
        "
          >
            {/* Text Side */}
            <div className="pl-8">
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 leading-relaxed">
                {content}
              </ul>
            </div>

            {/* Image Side */}
            <div className="flex items-end justify-end overflow-hidden">
              {image}
            </div>
          </div>
        </section>
      ) : (
        <section
          className="
        relative
        py-16
        rounded-[20px] bg-gray-200
        overflow-hidden
        w-full
      "
        >
          <div
            className="
          absolute
          text-[#cfcfcf] text-[128px] font-manrope font-bold leading-[28px]
          top-20
          right-20
          pointer-events-none
          select-none
          hidden
          lg:block
        "
            aria-hidden="true"
          >
            {number}
          </div>

          <div
            className="
          container
          mx-auto
          px-4
          grid
          grid-cols-1
          md:grid-cols-2
          items-center
          justify-between
          gap-8
          relative
          w-full
        "
          >
            {/* Image Side */}
            <div className="flex items-center justify-start  overflow-hidden  bg-amber-500">
              {image}
            </div>

            {/* Text Side */}
            <div className="pl-8">
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 leading-relaxed">
                {content}
              </ul>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
