import Image from "next/image";
import createadImg from "@/components/images/createadsImg.svg";
import circle from "@/components/icons/circle.svg"

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
    <section className="flex justify-center items-center gap-[129px] m-[80px]">
      <Image src={createadImg} alt="createads" height={681} width={595}/>
      <div className="flex flex-col">
        <p className="text-light-purple">CREATE ADS YOURSELF EASILY</p>
        <p className="text-[48px] ">How to Make Ads Using <br /> Adgen-AI</p>
        <div className="mt-10">
        {notes.map((name, index) => {
          return (
            
            <div key={index} className="flex items-center gap-[50px] ml-5">
              <span className="text-rich-black flex justify-center items-center mb-10">
                <Image src={circle} alt="circle" className="absolute" />
                <p className="relative">{index + 1}</p>
              </span>{" "}
              <div className="flex flex-col mb-10">
                {" "}
                <p className="text-rich-black font-bold text-[24px] ">{name.name}</p>
                <p className="text-gray-500 font-medium text-[18px]">{name.description}</p>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};

export default CreateAds;
