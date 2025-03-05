import Image from "next/image";
import React from "react";
import footerLogo from "@/components/images/footerLogo.svg";
import githubImg from "@/components/icons/github.svg"
import facebookImg from "@/components/icons/facebook.svg"
import instagramImg from "@/components/icons/instagram.svg"
import twitterImg from "@/components/icons/twitter.svg"
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
    <section className="my-[78px] bg-white">
        <section className="gap-[96px] flex flex-col lg:flex-row justify-center items-center">
      <div className="flex flex-col">
        <Image src={footerLogo} alt="footerlogo" />
        <p className="text-[28px] font-nunito">
          <span className="text-light-purple">Smarter Ads,</span> Faster Results
        </p>
        <div className="flex gap-9 mt-[50px] mb-[30px]">
            {socialLinks.map((link) => (
              <Link href={link.href} key={link.name} className="flex items-center gap-3 text-[18px] font-manrope hover:text-light-purple">
                <Image width={24} height={24} src={link.img} alt={link.name} />
              </Link>
            ))}
  
        </div>
        <p>Copyright. All rights reserved.</p>
      </div>
      <div className="flex gap-10 lg:gap-[125px] flex-col lg:flex-row">
      <div className="flex flex-col gap-5">
        <p className="font-nunito font-semibold text-[24px]">Company Info</p>
        <div className="flex flex-col gap-4">
        {companyInfoLinks.map((link) => (
          <Link href={link.href} key={link.name} className="text-[18px] font-manrope font-medium hover:text-light-purple">
            {link.name}
          </Link>
        ))}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p className="font-nunito font-semibold text-[24px]">Features</p>
        <div className="flex flex-col gap-4">
        {featureLinks.map((link) => (
          <Link href={link.href} key={link.name} className="text-[18px] font-medium flex items-center gap-5 font-manrope hover:text-light-purple">
            {link.name}
          </Link>
        ))}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p className="font-nunito font-semibold text-[24px]">Support & Resources</p>
        <div className="flex flex-col gap-4">
        {supportLinks.map((link) => (
          <Link href={link.href} key={link.name} className="text-[18px] font-medium font-manrope hover:text-light-purple">
            {link.name}
          </Link>
        ))}
        </div>
      </div>
      </div>
      </section>
      <div className="lg:mx-[180px] mx-[40px] mt-[68px] flex justify-center items-center">
        <p className="font-nunito lg:text-[20px] text-gray-500">Adgen AI helps you generate video and image advertisements tailored Adgen AI helps you generate video and image adements <br />
        tailored for different platforms, audiences and cultural contexts, without needing design or marketing expertise different platforms, <br />
         audiences and cultural contexts, without needing design or marketing expertise</p>
      </div>
    </section>
  );
};

export default Footer;
