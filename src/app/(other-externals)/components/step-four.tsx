import React from "react";
import Image from "next/image";

const CustomizeSection: React.FC = () => {
  return (
    <section className="w-full py-0 bg-[#F4F4F4]">
      <div className="container mx-auto px-4">
        {/* Two-column layout: image on the left, text on the right */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 relative">
          {/* Left Column - Large Image */}
          <div className="flex justify-center pl-8">
            <Image
              src="/hiw4.svg"
              alt="Sign in options"
              width={600}
              height={450}
              priority
              className="object-contain"
            />
          </div>

          {/* Right Column - Text with big "2" behind */}
          <div className="relative p-8">
            {/* Big "2" in the background, centered vertically */}
            <span
              className="
                text-[128px]
                text-gray-200
                font-light
                absolute
                top-80
                right-8
                -translate-y-80
                z-0
                select-none
                pointer-events-none
              "
              aria-hidden="true"
            >
              4
            </span>

            {/* Foreground content */}
            <div className="relative z-10 max-w-md">
              <h1 className="text-5xl font-bold mb-10">Customize Your Ad</h1>
              <ul className="space-y-4 list-disc list-inside text-lg">
  <li> Type a clear and simple description of your product or service</li>
  <li> A well-written description helps generate an effective ad</li>
  <li> Choose your platform - Facebook, Instagram, or other options</li>
  <li> Select your audience - Pick who should see your ad for better results</li>
  <li> Upload a product image (optional) - Add a visual to make your ad stand out</li>
</ul>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizeSection;
