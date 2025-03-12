import { Logo } from "@/components/icons/icon";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

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

  const headingStyle = `text-black text-2xl font-semibold leading-8`;
  const linkStyle = `text-[#5F5F5F] text-[18px] font-bold leading-7`;

  return (
    <footer className="py-8 mt-10 max-md:p-2">
      <div className="mx-auto pb-[90px] pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[fit-content(100%)_auto_auto_auto] justify-between w-full lg:gap-6 gap-11 md:gap-12 xl:gap-24">
          <div className="h-52 md:h-60 flex flex-col justify-between">
            <Link href="/" className="flex items-center">
              <Logo className="w-41 h-12" />
            </Link>
            <p className="text-[20px] md:text-[28px] font-semibold leading-7 md:leading-9">
              <span className="text-[#B800B8]">Smarter Ads, {""}</span>
              <span className="text-[#121316] ">Faster Results</span>
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex w-full gap-[21px] items-center">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="text-gray-900 hover:text-gray-500 p-2.5"
                    aria-label={social.label}
                  >
                    <div className="h-[18px] w-[18px]">{social.icon}</div>
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
            <ul className="flex flex-col gap-6 lg:text-center xl:text-left">
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
            <h3 className={headingStyle}>Features</h3>
            <ul className="flex flex-col gap-6 lg:text-center xl:text-left">
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
            <ul className="flex flex-col gap-6 lg:text-center xl:text-left">
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

        <div className="mt-8 md:mt-17">
          <p className="text-[#5F5F5F] text-[20px] font-normal leading-7">
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
