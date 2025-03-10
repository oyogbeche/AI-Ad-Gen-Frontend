import Image from "next/image";

const Version = () => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-10 md:gap-20">
      <div className="w-[123px]">
        <h2 className="text-[18px] md:text-[24px] font-semibold pb-3 md:pb-6">
          Version 1.0
        </h2>
        <p className="text-[14px] md:text-[16px] text-[#121316] pb-2.5 md:pb-4">
          Mar 16, 2024
        </p>
        <button className="text-[12px] flex items-center gap-1.5 px-2 py-1 bg-[#E7F5EC] rounded-[30px] text-[#0F973D] font-semibold">
          <span>Released</span>
          <Image src="/done.svg" alt="done" height={12} width={12} />
        </button>
      </div>
      <div>
        <hgroup>
          <h1 className="text-2xl font-medium md:font-semibold md:text-[32px] pb-2 ">
            Generate Image Ads
          </h1>
          <p className="text-[14px] md:text-[16px] text-[#121316]">
            Users can enter and generate image Ads based on{" "}
          </p>
        </hgroup>
        <ul className="text-[#5F5F5F] pt-6 list-disc pl-4">
          <li> Users can input key campaign details, including:</li>
          <div className="pl-5">
            <li> Ad goal (description of the ad's goal).</li>
            <li>
              Target audience attributes (e.g., region, language, demographics).
            </li>
            <li>
              Ad size selection (Instagram Post, Facebook Ad, LinkedIn Banner,
              Google Display Ads, etc.).
            </li>
          </div>
          <li>
            AI automatically generates an image ad campaign structure based on
            the user inputs.
          </li>
        </ul>
        <Image
          src="/img1.svg"
          alt="version 1.1"
          width={757}
          height={480}
          className="mt-10 w-full"
        />
      </div>
    </div>
  );
};
export default Version;
