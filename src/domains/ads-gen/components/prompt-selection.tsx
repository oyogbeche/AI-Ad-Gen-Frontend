"use client";

import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle } from "@/components/ui/card";
import BackButton from "@/domains/ads-gen/components/back-button";
import { useImageContext } from "@/domains/ads-gen/context/ImageContext";

const prompts = [
  {
    text: "Showcase ChicThreads' latest spring collection featuring trendy dresses, stylish tops, and versatile accessories. Emphasize the quality fabrics, unique designs, and affordable prices. Drive users to the website for an exclusive 25% discount on their first order.",
    images: [
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664920/image_fx__11_ghfqum.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664920/image_fx__12_bumsgr.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664890/image_fx__9_tg7coe.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664922/image_fx__8_hkymqf.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664922/image_fx__9_s3vrer.png",
    ],
    details: {
      text: "Showcase ChicThreads' latest spring collection featuring trendy dresses, stylish tops, and versatile accessories. Emphasize the quality fabrics, unique designs, and affordable prices. Drive users to the website for an exclusive 25% discount on their first order.",
      productName: "HNG Wigs",
      aspectRatio: "9:16",
      language: "English",
      resolution: "9:16 (736 x 1312)",
      targetAudience: "Teenagers, Young Adult",
      region: "Global",
      dateCreated: "Feb 26, 2025, 11:55 PM",
    },
  },
  {
    text: "Promote DreamHome Realty's exclusive listings of luxury homes and condos in sought-after neighborhoods. Highlight features such as spacious layouts, modern amenities, and proximity to city attractions. Encourage potential buyers to schedule a viewing and offer a free home-buying guide for interested clients.",
    images: [
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664914/image_fx__5_ht4xeq.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664918/image_fx__2_tpfxid.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664917/image_fx__3_ncm44a.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664914/image_fx__6_cw0jpo.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664919/image_fx__1_ej3rqq.png",
    ],
    details: {
      text: "Promote DreamHome Realty's exclusive listings of luxury homes and condos in sought-after neighborhoods. Highlight features such as spacious layouts, modern amenities, and proximity to city attractions. Encourage potential buyers to schedule a viewing and offer a free home-buying guide for interested clients.",
      productName: "HNG Wigs",
      aspectRatio: "9:16",
      language: "English",
      resolution: "9:16 (736 x 1312)",
      targetAudience: "Teenagers, Young Adult",
      region: "Global",
      dateCreated: "Feb 26, 2025, 11:55 PM",
    },
  },
  {
    text: "Promote a limited-time 40% discount on all ModernLiving furniture pieces, including sofas, chairs, and coffee tables. Emphasize the contemporary designs and high-quality materials that elevate any space. Urge customers to shop now while supplies last and visit the website to explore the collection. For inquiries, contact us at +234 7033-600-609.",
    images: [
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664913/image_fx__4_cvwd4a.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664912/image_fx__8_vc2vlr.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664913/image_fx__x7z9dp.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664912/image_fx__7_xg4b7k.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664911/image_fx__9_tdzssw.png",
    ],
    details: {
      text: "Promote a limited-time 40% discount on all ModernLiving furniture pieces, including sofas, chairs, and coffee tables. Emphasize the contemporary designs and high-quality materials that elevate any space. Urge customers to shop now while supplies last and visit the website to explore the collection. For inquiries, contact us at +234 7033-600-609.",
      productName: "HNG Wigs",
      aspectRatio: "9:16",
      language: "English",
      resolution: "9:16 (736 x 1312)",
      targetAudience: "Teenagers, Young Adult",
      region: "Global",
      dateCreated: "Feb 26, 2025, 11:55 PM",
    },
  },
  {
    text: "Promote Fanta's vibrant and refreshing fruit-flavored soft drinks. Highlight the variety of flavors available, including the classic Fanta Orange, and emphasize the use of 100% natural flavors. Encourage customers to indulge in a Fanta to quench their thirst and enjoy the fruity taste that brings joy to every moment. Urge them to grab a Fanta today and experience the fun!",
    images: [
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664904/image_fx__6_mvqrcw.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664904/image_fx__5_xjvtgy.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664905/image_fx__2_ulytwn.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664905/image_fx__3_cbxtf4.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664907/image_fx__1_sllfay.png",
    ],
    details: {
      text: "Promote Fanta's vibrant and refreshing fruit-flavored soft drinks. Highlight the variety of flavors available, including the classic Fanta Orange, and emphasize the use of 100% natural flavors. Encourage customers to indulge in a Fanta to quench their thirst and enjoy the fruity taste that brings joy to every moment. Urge them to grab a Fanta today and experience the fun!",
      productName: "HNG Wigs",
      aspectRatio: "9:16",
      language: "English",
      resolution: "9:16 (736 x 1312)",
      targetAudience: "Teenagers, Young Adult",
      region: "Global",
      dateCreated: "Feb 26, 2025, 11:55 PM",
    },
  },
  {
    text: "Create a high-converting ad campaign for a fashion brand's 48-hour flash sale. The campaign should highlight urgency, exclusive discounts, and showcase trending outfits. Ensure the ad copy appeals to fashion-conscious buyers and includes a strong CTA.",
    images: [
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664903/image_fx__gdcyvm.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664892/image_fx__7_mpw4zp.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664891/image_fx__8_oz9pag.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664890/image_fx__9_tg7coe.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664902/image_fx__4_flftmv.png",
    ],
    details: {
      text: "Create a high-converting ad campaign for a fashion brand's 48-hour flash sale. The campaign should highlight urgency, exclusive discounts, and showcase trending outfits. Ensure the ad copy appeals to fashion-conscious buyers and includes a strong CTA.",
      productName: "HNG Wigs",
      aspectRatio: "9:16",
      language: "English",
      resolution: "9:16 (736 x 1312)",
      targetAudience: "Teenagers, Young Adult",
      region: "Global",
      dateCreated: "Feb 26, 2025, 11:55 PM",
    },
  },
  {
    text: "Create a buzz-worthy marketing campaign for the grand opening of a new  restaurant specializing in gourmet burgers. The campaign should include a mix of social media teasers, influencer collaborations, and exclusive  opening-day discounts to attract foot traffic... Please i need five  different designs for this advert",
    images: [
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664878/image_fx__7_psbfxm.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664879/image_fx__2_wkjz6u.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664878/image_fx__4_c10fhy.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664879/image_fx__3_b1st5t.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664880/image_fx__kysgz8.png",
    ],
    details: {
      text: "Create a buzz-worthy marketing campaign for the grand opening of a new  restaurant specializing in gourmet burgers. The campaign should include a mix of social media teasers, influencer collaborations, and exclusive  opening-day discounts to attract foot traffic... Please i need five  different designs for this advert",
      productName: "HNG Wigs",
      aspectRatio: "9:16",
      language: "English",
      resolution: "9:16 (736 x 1312)",
      targetAudience: "Teenagers, Young Adult",
      region: "Global",
      dateCreated: "Feb 26, 2025, 11:55 PM",
    },
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
  const { setImageUrl, setPromptData } = useImageContext();

  const handleSelectPrompt = (index: number) => {
    onSelectPrompt(index);
    const selectedPrompt = prompts[index];
    const randomImage =
      selectedPrompt.images[
        Math.floor(Math.random() * selectedPrompt.images.length)
      ];
    setImageUrl(randomImage);
    setPromptData(JSON.stringify(selectedPrompt.details));
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
            className={`flex gap-2.5 items-end md:items-center border  py-3 px-6 rounded-[20px] text-base font-medium leading-5 text-[#5F5F5F] cursor-pointer text-balance ${
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
