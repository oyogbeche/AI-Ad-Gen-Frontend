import Image from "next/image";
import React from "react";
import footerLogo from "@/components/images/footerLogo.svg";
import githubImg from "@/components/icons/github.svg";
import facebookImg from "@/components/icons/facebook.svg";
import instagramImg from "@/components/icons/instagram.svg";
import twitterImg from "@/components/icons/twitter.svg";
import Link from "next/link";

const companyInfoLinks = [
  { name: "About us", href: "/" },
  { name: "How it Works", href: "/" },
  { name: "FAQs", href: "/" },
  { name: "Pricing", href: "/" },
];
const featureLinks = [
  { name: "Image Ads", href: "/" },
  { name: "Video Ads", href: "/" },
  { name: "Community", href: "/" },
  { name: "Templates", href: "/" },
];
const supportLinks = [
  { name: "Blogs", href: "/" },
  { name: "Help Center", href: "/" },
  { name: "API Docs", href: "/" },
  { name: "Contact Us", href: "/" },
];
const socialLinks = [
  { name: "Facebook", img: facebookImg, href: "/" },
  { name: "Twitter", img: twitterImg, href: "/" },
  { name: "Instagram", img: instagramImg, href: "/" },
  { name: "Github", img: githubImg, href: "/" },
];
const Footer = () => {
  return (
    <section>
      <section className="gap-[1rem] flex flex-wrap justify-between sm:justify-around items-start p-4">
        <div className="flex flex-col">
          <Image src={footerLogo} className="w-[150px]" alt="footerlogo" />
          <p className="text-[18px] font-nunito">
            <span className="text-light-purple">Smarter Ads,</span> Faster
            Results
          </p>
          <div className="flex gap-2 mt-[12px] mb-[8px]">
            {socialLinks.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className="flex items-center gap-3 text-[16px] font-manrope hover:text-light-purple"
              >
                <Image width={24} height={24} src={link.img} alt={link.name} />
              </Link>
            ))}
          </div>  
          <p className="text-[14px]">Copyright. All rights reserved.</p>
        </div>
        <div className="flex gap-4 justify-between flex-wrap w-full max-w-[540px]">
          <div className="flex flex-col gap-4">
            <p className="font-nunito font-semibold text-[18px]">
              Company Info
            </p>
            <div className="flex flex-col gap-2">
              {companyInfoLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  className="text-[14px] font-manrope font-medium hover:text-light-purple"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-nunito font-semibold text-[18px]">Features</p>
            <div className="flex flex-col gap-2">
              {featureLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  className="text-[14px] font-medium flex items-center gap-5 font-manrope hover:text-light-purple"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-nunito font-semibold text-[18px]">
              Support & Resources
            </p>
            <div className="flex flex-col gap-2">
              {supportLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  className="text-[14px] font-medium font-manrope hover:text-light-purple"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="flex p-4 justify-center items-center">
        <p className="font-nunito lg:text-[16px] text-gray-500 text-justify w-full max-w-[960px] mx-auto">
          Adgen AI helps you generate video and image advertisements tailored
          Adgen AI helps you generate video and image adements
          tailored for different platforms, audiences and cultural contexts,
          without needing design or marketing expertise different platforms,{" "}
          audiences and cultural contexts, without needing design or marketing
          expertise
        </p>
      </div>
    </section>
  );
};

export default Footer;
