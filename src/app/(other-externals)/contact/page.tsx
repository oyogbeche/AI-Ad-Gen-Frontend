import React from "react";
import bgLine from "@/components/images/bg-line.png";
import contactAmico from "@/components/images/Contact us-amico.png";
import location from "@/components/images/location.png";
import telephone from "@/components/images/bi_telephone.png";
import mail from "@/components/images/ic_outline-email.png";

import Image from "next/image";

const page = () => {
  return (
    <section className="h-[calc(100vh-80px)] flex flex-col mx-25 mt-[66px] mb-[60px] ">
      <div className="flex justify-between items-center bg-white px-25 pb-[84px] pt-30 rounded-[20px]">
        <Image
          src={bgLine}
          alt="Background line"
          className="object-cover absolute -top-40 pl-[50px] h-[1247.170294491336] w-full -z-40"
        />
        <div>
          <div className="flex flex-col gap-[10px] pb-[28px]">
            <p className="font-[700] text-[40px]">Contact Us</p>
            <p className="font-[400] text-[18px]">
              We are here for you! How can we help?
            </p>
          </div>
          <form>
            <div className="flex flex-col gap-[6px] pb-[28px]">
              <label htmlFor="name" className="font-[500] text-[14px]">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="border-2 w-[422px] border-[#E3E3E3] py-2 px-4 text-[16px] rounded-[6px]"
              />
            </div>
            <div className="flex flex-col gap-[6px] pb-[28px]">
              <label htmlFor="email" className="font-[500] text-[14px]">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border-2 w-[422px] border-[#E3E3E3] py-2 px-4 text-[16px] rounded-[6px]"
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="message" className="font-[500] text-[14px]">
                Message
              </label>
              <textarea
                placeholder="Enter your message"
                className="h-[132px] w-[422px] border-2 border-[#E3E3E3] py-2 px-4 text-[16px] rounded-[6px]"
                style={{ resize: "none" }}
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-light-purple py-3 px-6  w-full text-white text-[18px] mt-[86px] rounded-[6px]"
              >
                Send Now
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col">
          <Image src={contactAmico} alt="contact-us" />
          <div className="flex flex-col justify-center gap-[20px] pl-20 mt-[28px]">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
