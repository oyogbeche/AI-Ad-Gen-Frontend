import Image from "next/image";
import createadImg from "@/components/images/createadsImg.svg";
import circle from "@/components/icons/circle.svg";

const notes = [
  {
    name: "Input Brand Details",
    description:
      "Define your brand name, product details, target audience, upload your brand assets",
  },
  {
    name: "Enter Audience Info",
    description: "Enter the details of your target audience",
  },
  {
    name: "Customize Ads",
    description: "Personalize details to match your brand’s style",
  },
  {
    name: "Generate Ads",
    description: "Receive your ad instantly as soon as you’re done!",
  },
];

const CreateAds = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-[80px] px-6 p-20">
      <div className="max-w-[400px] md:max-w-[500px] lg:max-w-[595px] h-auto">
        <Image
          src={createadImg}
          alt="createads"
          height={681}
          width={595}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col text-center lg:text-left">
        <p className="text-light-purple text-sm md:text-base">
          CREATE ADS YOURSELF EASILY
        </p>
        <p className="text-[28px] md:text-[36px] lg:text-[48px] font-bold leading-tight">
          How to Make Ads Using <br className="hidden md:block" /> Adgen-AI
        </p>

        <div className="mt-6 md:mt-10">
          {notes.map((note, index) => (
            <div
              key={index}
              className="flex flex-col-reverse  md:flex-row items-center md:items-start gap-4 md:gap-[30px] mb-6 md:mb-8"
            >
              <span className="text-rich-black flex justify-center items-center relative w-8 h-8 md:w-10 md:h-10">
                <Image
                  src={circle}
                  alt="circle"
                  className="absolute w-full h-full"
                />
                <p className="relative text-sm md:text-base font-bold">
                  {index + 1}
                </p>
              </span>
              <div className="flex flex-col items-center md:items-start">
                <p className="text-rich-black font-bold  text-[18px] md:text-[22px] lg:text-[24px]">
                  {note.name}
                </p>
                <p className="text-gray-500 max-w-md font-medium text-[14px] md:text-[16px] lg:text-[18px] text-center md:text-left">
                  {note.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreateAds;
