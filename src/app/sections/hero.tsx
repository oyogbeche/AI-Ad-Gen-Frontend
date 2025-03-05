import Arrowright  from "@/components/icons/arrow-right.svg";
import { Button } from "../../components/ui/button";
import Image from "next/image";
import drinksImg from "@/components/images/drinksImg.svg"
import bgImg from "@/components/images/hero-bg-img.png"
const HeroSection = () => {
  return (
    <section className="flex flex-col items-center gap-[77px] pt-[50px] sm:pt-[136px] bg-[#FAFAFA]">
      <Image
        className="object-cover w-full absolute top-[80px]"
        src={bgImg}
        alt="Hero Background"
      />
      <div className="flex flex-col items-center gap-10 z-10">
        <hgroup className="text-[#5F5F5F] max-w-[1084px]">
          <h1 className="sm:text-[64px] text-[24px] font-medium leading-6 sm:leading-[72px] text-center ">
            Generate High-converting, Smarter Adverts in minutes{" "}
            <span className="text-[#520052] font-bold">with AI</span>
          </h1>
          <p className="text-base sm:text-2xl font-medium leading-8 text-center pt-4">
            Create compelling, high-converting ads to maximize ROI
          </p>
        </hgroup>
        <button className="px-6 py-3 rounded-[6px] gap-[10px] flex justify-center items-center cursor-pointer bg-light-purple text-white lg:hover:bg-light-purple/60">
          <span className=" text-[18px] font-medium leading-7">
            Generate New Ad
          </span>
          <Image src={Arrowright} alt="arrow" />
        </button>
        <Image src={drinksImg} alt="drinks" className="w-screen mt-[150px]" />
      </div>
    </section>
  );
};
export default HeroSection;
