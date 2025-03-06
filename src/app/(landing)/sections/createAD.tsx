import Image from "next/image";
import createAdSVG from "@/components/images/newcreate.svg";
import { CheckCircle } from "lucide-react";

const CreateAd: React.FC = () => {
  return (
    <section className="flex bg-white lex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-[80px] px-6 p-20">
      <div className="max-w-[600px] w-fit">
        <p className="text-[#EC802E] font-semibold uppercase">
          Smarter Ads, Higher Engagements
        </p>
        <h2 className="text-4xl lg:text-5xl mt-2">
          Create, Customize and Publish{" "}
          <span className="text-black-600">AI-Generated Ads</span> in Minutes
        </h2>
        <ul className="mt-6 space-y-4">
          <li className="flex items-center gap-2">
            <CheckCircle className="text-[#EC802E]" size={20} /> Create
            compelling ads without hiring a team
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="text-[#EC802E]" size={20} /> Generate
            region-specific ads effortlessly
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="text-[#EC802E]" size={20} /> Launch
            professional ads at affordable prices
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="text-[#EC802E]" size={20} /> Optimize your
            ads for sales and engagements
          </li>
        </ul>
      </div>

      <div className="flex-shrink-0 w-4/5 lg:w-[45%] bg-[#FFF0E5] px-5 pt-5 pb-1 rounded-md flex items-end">
        <Image
          src={createAdSVG}
          alt="Create AI-Generated Ads"
          width={500}
          height={300}
          className="w-auto h-auto mx-auto"
        />
      </div>
    </section>
  );
};

export default CreateAd;
