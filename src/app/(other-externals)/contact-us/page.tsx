import React from "react";
import bgLine from "@/components/images/bg-line.png";
import contactAmico from "@/components/images/Contact us-amico.png";
// import location from "@/components/images/location.png";
// import telephone from "@/components/images/bi_telephone.png";
// import mail from "@/components/images/ic_outline-email.png";

import Image from "next/image";

const page = () => {
  return (
    <section className=" flex flex-col mt-5 md:mt-[66px] mb-[32px] md:mb-[60px]">
      <div className="flex flex-col md:flex-row justify-between items-center bg-white mx-[29px] md:mx-25 px-5 md:px-25 pb-8 md:pb-[84px] pt-5 md:pt-30 rounded-[20px]">
        <Image
          src={bgLine}
          alt="Background line"
          className="object-cover absolute md:-top-40 md:pl-[50px] h-[500.8956019378069px] md:h-[1247.170294491336px] w-full -z-40"
        />
        <div>
          <div className="flex flex-col max-sm:items-center gap-[12px] md:gap-[10px] pb-[28px]">
            <p className="font-[600] md:font-[700] text-[18px] md:text-[40px] ">
              Contact Us
            </p>
            <p className="font-[400] text-[12px] md:text-[18px]">
              We are here for you! How can we help?
            </p>
          </div>
          <form className="max-sm:w-[342px] max-sm:px-5">
            <div className="flex flex-col gap-[6px] pb-[20px] md:pb-[28px]">
              <label htmlFor="name" className="font-[500] text-[14px]">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="border-2 md:w-[422px] border-[#E3E3E3] py-2 px-4 text-[16px] rounded-[6px]"
              />
            </div>
            <div className="flex flex-col gap-[6px] pb-[20px] md:pb-[28px]">
              <label htmlFor="email" className="font-[500] text-[14px]">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border-2 md:w-[422px] border-[#E3E3E3] py-2 px-4 text-[16px] rounded-[6px]"
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="message" className="font-[500] text-[14px]">
                Message
              </label>
              <textarea
                placeholder="Enter your message"
                className="h-[132px] md:w-[422px] border-2 border-[#E3E3E3] py-2 px-4 text-[16px] rounded-[6px]"
                style={{ resize: "none" }}
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-light-purple py-3 px-6  w-full text-white text-[18px] mt-5 md:mt-[86px] rounded-[6px]"
              >
                Send Now
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col items-center">
          <Image src={contactAmico} alt="contact-us" className="max-sm:mt-5" />
          {/* <div className="flex flex-col justify-center gap-[20px] md:pl-20 mt-[28px]">
            <div className="flex gap-[10px] items-center">
              <Image src={location} alt="location" />
              <p>545 Mavis Island, IL 99191</p>
            </div>
            <div className="flex gap-[10px] items-center">
              <Image src={telephone} alt="telephone" />
              <p>+2034 4040 3030</p>
            </div>
            <div className="flex gap-[10px] items-center">
              <Image src={mail} alt="mail" />
              <p>genzadshng12@gmail.com</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default page;
