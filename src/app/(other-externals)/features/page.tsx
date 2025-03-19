import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Features = () => {
  return (
    <div className="max-w-7xl w-full xl:mx-auto px-4 pt-8">
      {/* hero section */}
      <section className="text-center w-full h-auto flex flex-col justify-between py-8 px-4 md:py-12 md:px-8 lg:py-16 lg:px-12 max-w-7xl mx-auto ">
        <div className="text-[#b800b8] font-[400] text-[24px] leading-[32px] tracking-[0%] md:text-base lg:text-lg">
          Features & Benefits
        </div>
        <h1 className="text-[28px] leading-[48px] md:text-[40px] lg:text-[40px] font-bold text-[#16151E] mt-4">
          Time Saving AI-Powered Ad Creation for Maximum Impact
        </h1>
        <p className="text-[#16151E] font-[400] md:text-base lg:text-[18px] lg:leading-[28px] max-w-3xl mx-auto mt-4">
          Generate high-converting ads instantly with AI-powered automation and
          real-time optimization.
        </p>
        <button className="bg-[#b800b8]   text-white  text-[18px]  tracking-[0%] px-6 py-3 rounded-[6px] font-medium flex items-center mx-auto mt-6">
          Get Started Now <ArrowRight className="ml-2 w-6 h-6" />
        </button>
      </section>
      {/* AI-powered ad section */}
      <section className="py-12 md:py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-[40px] md:text-[40px] font-bold text-center leading-[48px] tracking-[0%] text-[#16151E] mb-4">
          AI-Powered Ad Creation
        </h2>
        <p className="text-[#5F5F5F] text-[24px] leading-[32px]  font-[500]  tracking-[0%]  text-center max-w-3xl mx-auto mb-12">
          Automatically generates engaging ad copy & visuals, adapting easily to
          your brand tone and audience needs. Effortless, effective, and
          tailored for impact.
        </p>
        <div className="flex justify-center">
          <div className=" overflow-hidden  max-w-4xl w-full">
            <Image
              src="/ai-powered-ad.svg"
              alt="AI-Powered Ad Creation Interface"
              width={960}
              height={686}
              className="w-full h-auto border border-[#E3E3E3] rounded-[20px]"
            />
          </div>
        </div>
      </section>
      {/* smart ad */}
      <section className="py-12 md:py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-[40px] md:text-[40px] font-bold text-center leading-[48px] tracking-[0%] text-[#16151E] mb-4">
          Smarter Adverts
        </h2>
        <p className="text-[#5F5F5F] font-[500] text-[24px] leading-[32px] tracking-[0%]  text-center max-w-3xl mx-auto mb-12">
          Genz.ad AI enables you to create image ads optimized for various
          platforms and audiences no design or marketing expertise required.
        </p>
        <div className="flex justify-center">
          <div className=" overflow-hidden  max-w-4xl w-full">
            <Image
              src="/smart-advert-ad.svg"
              alt="AI-Powered Ad Creation Interface"
              width={960}
              height={686}
              className="w-full h-auto border-[0.5px] border-[#E3E3E3] rounded-[20px]"
            />
          </div>
        </div>
      </section>
      {/* community ad */}
      <section className="py-12 md:py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-[40px] md:text-[40px] font-bold text-center leading-[48px] tracking-[0%] text-[#16151E] mb-4">
          Community Inspiration & Success Stories
        </h2>
        <p className="text-[#5F5F5F] font-[500] text-[24px] leading-[32px] tracking-[0%]  text-center max-w-3xl mx-auto mb-12">
          Discover how businesses are revolutionizing ad creation with AI. See
          their success stories and get inspired!
        </p>
        <div className="flex justify-center">
          <div className=" overflow-hidden  max-w-4xl w-full">
            <Image
              src="/community-ad.svg"
              alt="AI-Powered Ad Creation Interface"
              width={960}
              height={687}
              className="w-full h-auto border-[0.5px] border-[#E3E3E3] rounded-[20px]"
            />
          </div>
        </div>
      </section>

      {/* wasting time ad */}
      <section className="bg-[#F8EFFE] w-full rounded-[16px] px-6 py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-[40px] md:text-[40px] font-bold text-[#16151E] leading-tight">
              Stop Wasting Time on Ad Design, Let AI Do It in Minutes
            </h1>
            <p className="text-[#151412] leading-[28px] text-[20px] tracking-[0%] font-[400] mt-4">
              Generate high converting ads without starting from scratch. Our
              AI-powered tool handles the design work for you, so you can focus
              on growing your business.
            </p>
            <button className="mt-6 bg-[#B800B8] text-white px-6 py-3 rounded-[6px] text-[18px] leading-[28px] tracking-[0%] font-medium flex items-center gap-[10px] mx-auto md:mx-0">
              Get Started Now <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[300px] md:h-[427px] rounded-lg overflow-hidden">
              <Image
                src="/wasting-time-image.svg"
                alt="Woman working on a computer"
                layout="fill"
                objectFit="cover"
                className="rounded-[16px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
