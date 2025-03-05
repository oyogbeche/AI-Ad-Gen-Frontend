import Image from "next/image";
import React from "react";
import caretRight from "@/components/icons/caret-right.svg"
import footerLogo from "@/components/images/footerLogo.svg";
import copyright from "@/components/images/copyright.svg";
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
const footer = () => {
  return (
    <section className="mx-[80px] my-[78px] gap-[96px] flex justify-evenly items-center bg-white">
      <div className="flex flex-col">
        <Image src={footerLogo} alt="footerlogo" />
        <p className="text-[28px] font-nunito">
          <span className="text-light-purple">Smarter Ads,</span> Faster Results
        </p>
        <Image src={copyright} alt="copyright" className="mt-[50px]" />
      </div>
      <div className="flex gap-[125px]">
      <div className="flex flex-col gap-5">
        <p className="font-nunito font-semibold text-[24px]">Company Info</p>
        <div className="flex flex-col gap-4">
        {companyInfoLinks.map((link) => (
          <Link href={link.href} key={link.name} className="text-[18px] font-manrope hover:text-light-purple">
            {link.name}
          </Link>
        ))}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p className="font-nunito font-semibold text-[24px]">Features</p>
        <div className="flex flex-col gap-4">
        {featureLinks.map((link) => (
          <Link href={link.href} key={link.name} className="text-[18px] flex items-center gap-5 font-manrope hover:text-light-purple">
            <Image src={caretRight} alt="caret-right"/>{link.name}
          </Link>
        ))}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p className="font-nunito font-semibold text-[24px]">Support & Resources</p>
        <div className="flex flex-col gap-4">
        {supportLinks.map((link) => (
          <Link href={link.href} key={link.name} className="text-[18px] font-manrope hover:text-light-purple">
            {link.name}
          </Link>
        ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default footer;
