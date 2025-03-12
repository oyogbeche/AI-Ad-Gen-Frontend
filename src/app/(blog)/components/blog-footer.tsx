import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/icons/icon";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

const BlogFooter = () => {
  const companyLinks = [
    { href: "/about", label: "About Us" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/faq", label: "FAQs" },
    { href: "/pricing", label: "Pricing" },
  ];

  const featuresLinks = [
    { href: "/image-ads", label: "Image Ads" },
    { href: "/video-ads", label: "Video Ads" },
    { href: "/community", label: "Community" },
    { href: "/templates", label: "Templates" },
  ];

  const supportLinks = [
    { href: "/blog", label: "Blogs" },
    { href: "/help", label: "Help Center" },
    { href: "/api", label: "API Docs" },
    { href: "/contact", label: "Contact Us" },
  ];

  const socialLinks = [
    { href: "#", icon: <Facebook color="#4A5568" />, label: "Facebook" },
    { href: "#", icon: <Twitter color="#4A5568" />, label: "Twitter" },
    { href: "#", icon: <Instagram color="#4A5568" />, label: "Instagram" },
    { href: "#", icon: <Github color="#4A5568" />, label: "Github" },
  ];

  const headingStyle = `text-black font-nunito text-2xl font-semibold leading-8`;
  const linkStyle = `text-gray-900 font-manrope text-lg font-bold leading-7`;

  return (
    <footer className="bg-[#F8F9FA] py-8 mt-10">
      <div className="mx-auto  pb-[90px] pt-16">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[fit-content(100%)_auto_auto_auto] justify-between w-full lg:gap-6 gap-12
 xl:gap-24"
        >
          {/* Left Section */}
          <div className=" flex flex-col justify-between">
            <Link href="/" className="flex items-center">
              <Logo className="w-41 h-12" />
            </Link>
            <p className="font-nunito text-3xl font-semibold leading-9 text-nowrap mt-4">
              <span className="text-[#B800B8]">Smarter Ads, {""}</span>
              <span className="text-[#121316] ">Faster Results</span>
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex w-full gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-900 hover:text-gray-500 p-2.5"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-gray-900 font-nunito text-xl font-normal leading-7">
                Copyright. All rights reserved.
              </p>
            </div>
          </div>

          {/* Column 1: Company Info */}
          <div className="flex flex-col gap-4">
            <h3 className={headingStyle}>Company Info</h3>
            <ul className="flex flex-col gap-4 lg:text-center xl:text-left">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className={linkStyle}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Features */}
          <div className="flex flex-col gap-4">
            <h3 className={headingStyle}>Features</h3>
            <ul className="flex flex-col gap-4 lg:text-center xl:text-left">
              {featuresLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className={linkStyle}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support & Resources */}
          <div className="flex flex-col gap-4">
            <h3 className={headingStyle}>Support & Resources</h3>
            <ul className="flex flex-col gap-4 lg:text-center xl:text-left">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className={linkStyle}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-17">
          <p className="text-gray-900 font-nunito text-xl font-normal leading-7">
            Genz.ad helps you generate video and image advertisements tailored
            Genz.ad helps you generate video and image adements tailored for
            different platforms, audiences and cultural contexts, without
            needing design or marketing expertise different platforms, audiences
            and cultural contexts, without needing design or marketing expertise
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
