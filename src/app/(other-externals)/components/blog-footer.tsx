"use client"; // Required for usePathname in Next.js App Router

import {
  Logo,
  FooterFb,
  FooterX,
  FooterIg,
  FooterEmail,
} from "@/components/icons/icon";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

const BlogFooter = () => {
  const pathname = usePathname(); // Get the current route

  const companyLinks = [
    { href: "/about-us", label: "About Us" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/faq", label: "FAQs" },
  ];

  const audienceLinks = [
    { href: "/create-ads", label: "AI Creative" },
    { href: "/phase-two", label: "AI Marketing" },
    { href: "/create-video-ads", label: "AI Video Ads" },
  ];

  const featuresLinks = [
    { href: "/image-ads", label: "Image Ads" },
    { href: "/community", label: "Community" },
  ];

  const supportLinks = [
    { href: "/blogs", label: "Blogs" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  const socialLinks = [
    {
      href: "http://facebook.com/genz.ads",
      icon: <FooterFb className="hover:scale-125" />,
      label: "Facebook",
    },
    {
      href: "http://x.com/genz_ad",
      icon: <FooterX className="hover:scale-125" />,
      label: "Twitter",
    },
    {
      href: "http://instagram.com/genz.adgen",
      icon: <FooterIg className="hover:scale-125" />,
      label: "Instagram",
    },
    {
      href: "http://instagram.com/genz.adgen",
      icon: <FooterEmail className="hover:scale-125" />,
      label: "Email",
    },
  ];

  const headingStyle = `text-[#121316] text-nowrap text-[20px] font-semibold leading-8`;
  const linkStyle = `text-[#5F5F5F] hover:text-purple-700 text-nowrap text-base font-medium leading-7`;
  const activeLinkStyle = `text-purple-700`; // Define the active color

  return (
    <footer className="pb-8 px-7 sm:px-20">
      <div className="mx-auto pb-[90px] gap-10 flex flex-col md:flex-col w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 lg:grid-cols-3 xl:grid-cols-[fit-content(100%)_auto_auto_auto_auto] justify-between w-full gap-10  lg:gap-24">
          <div className="hidden md:flex flex-col justify-between">
            <div className="flex flex-col gap-2.5 md:gap-5">
              <Link href="/" className="flex items-center">
                <Logo className="w-41 h-12" />
              </Link>
              <p className="text-[18px] text-nowrap md:text-[24px] font-semibold">
                <span className="text-[#B800B8]">Smarter Ads, </span>
                <span className="text-[#121316] ">Faster Results</span>
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex w-full gap-[21px] items-center">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="text-gray-900 hover:text-gray-500 p-2.5"
                    aria-label={social.label}
                  >
                    <div className="h-[18px] w-[18px] hover:scale-110 transition-all">
                      {social.icon}
                    </div>
                  </Link>
                ))}
              </div>
              <p className="text-[#121316] font-nunito text-base font-medium leading-6">
                Copyright. All rights reserved.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className={headingStyle}>Company Info</h3>
            <ul className="flex flex-col gap-6 text-left">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className={linkStyle}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className={headingStyle}>Audience</h3>
            <ul className="flex flex-col gap-6 text-left">
              {audienceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={`${linkStyle} ${
                      pathname === link.href ? activeLinkStyle : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className={headingStyle}>Features</h3>
            <ul className="flex flex-col gap-6 text-left">
              {featuresLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className={linkStyle}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className={headingStyle}>Support & Resources</h3>
            <ul className="flex flex-col gap-6 text-left">
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
        <p className="text-[#5F5F5F] text-[20px] font-normal">
          genz.ad helps you generate image ads tailored for different platforms,
          audiences and cultural contexts, without needing design or marketing
          expertise.
        </p>
      </div>
    </footer>
  );
};

export default BlogFooter;
