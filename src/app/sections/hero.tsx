import { Arrowright } from "../../components/icons/icon";
import { Button } from "../../components/ui/button";
const HeroSection = () => {
  return (
    <section className="flex flex-col items-center gap-[77px] pt-[50px] pb-[150px] sm:pt-[136px] bg-[#FAFAFA]">
      <div className="flex flex-col items-center gap-10">
        <hgroup className="text-[#5F5F5F] max-w-[1084px]">
          <h1 className="sm:text-[64px] text-[24px] font-medium leading-6 sm:leading-[72px] text-center ">
            Generate High-converting, Smarter Adverts in minutes{" "}
            <span className="text-[#520052] font-bold">with AI</span>
          </h1>
          <p className="text-base sm:text-2xl font-medium leading-8 text-center pt-4">
            Create compelling, high-converting ads to maximize ROI
          </p>
        </hgroup>
        <Button className="p-6 rounded-[6px] bg-[#520052] text-white">
          <span className=" text-[18px] ml-6 font-medium leading-7 pr-2.5">
            Generate New Ad
          </span>
          <Arrowright className="mr-6" />
        </Button>
      </div>
    </section>
  );
};
export default HeroSection;
