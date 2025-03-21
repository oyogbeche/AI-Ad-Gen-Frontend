import { Logo } from "@/components/icons/icon";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const BlogFooter = () => {
  const companyLinks = [
    { href: "/about-us", label: "About Us" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/faq", label: "FAQs" },
    { href: "/pricing", label: "Pricing" },
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
      icon: <Facebook color="#4A5568" />,
      label: "Facebook",
    },
    {
      href: "http://x.com/genz_ad",
      icon: <Twitter color="#4A5568" />,
      label: "Twitter",
    },
    {
      href: "http://instagram.com/genz.adgen",
      icon: <Instagram color="#4A5568" />,
      label: "Instagram",
    },
  ];

  const headingStyle = `text-black text-2xl font-semibold leading-8`;
  const linkStyle = `text-[#5F5F5F] text-[18px] font-bold leading-7`;

  return (
    <footer className="pb-8 md:p-2">
      <div className="mx-auto pb-[90px] flex flex-col-reverse md:flex-col">
        <p className="text-[#5F5F5F] text-[20px] font-normal mb-16">
          genz.ad helps you generate image ads tailored for different platforms,
          audiences and cultural contexts, without needing design or marketing
          expertise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[fit-content(100%)_auto_auto_auto] justify-between w-full lg:gap-6 gap-10 md:gap-12 xl:gap-24">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-2.5 md:gap-5">
              <Link href="/" className="flex items-center">
                <Logo className="w-41 h-12" />
              </Link>
              <p className="text-[20px] md:text-[28px] font-semibold">
                <span className="text-[#B800B8]">Smarter Ads, {""}</span>
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
      </div>
    </footer>
  );
};

export default BlogFooter;
