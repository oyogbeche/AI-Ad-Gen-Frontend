"use client";
import { Logo } from "@/components/icons/icon";
import { useAuthStore } from "@/store/auth-store";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const BlogHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useAuthStore((state) => state.user);
  const pathname = usePathname(); 

  const activeLinkStyle = `text-purple-700`; 
  const baseLinkStyle = `text-gray-600 hover:text-purple-700`; // Base style for links

  // Define nav links as an array for reusability
  const navLinks = [
    { href: "/features", label: "Features" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact-us", label: "Contact us" },
  ];

  return (
    <header className="w-full border-b border-[#F8E6F8] bg-white sticky top-0 z-40">
      <div className="max-w-[1440px] mx-auto flex justify-between w-full px-6 py-4 lg:pl-20 lg:pr-9">
        <div className="w-fit">
          <Link href="/">
            <Logo className="w-32 md:w-auto" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${baseLinkStyle} ${
                pathname === link.href ? activeLinkStyle : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <Link
          href={user ? "/dashboard" : "/signin"}
          className="bg-light-purple cursor-pointer text-white px-6 py-3 rounded-sm hover:bg-dark-purple transition-colors hidden md:flex justify-center items-center gap-2"
        >
          Sign in
        </Link>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t absolute z-50 w-full left-0">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${baseLinkStyle} ${
                  pathname === link.href ? activeLinkStyle : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={user ? "/dashboard" : "/signin"}
              className="bg-light-purple cursor-pointer text-white px-6 py-3 rounded-sm hover:bg-dark-purple transition-colors flex justify-center items-center gap-2"
            >
              <p>Generate Your Ad</p> <ArrowRight />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default BlogHeader;

{
  /* <Button
          onClick={handleGoogleLogin}
          className="flex items-center gap-[10px] rounded-md border border-[#B7D3F3] px-3 py-2 bg-white md:px-4 md:py-3  hover:bg-[#F6F6F6]"
        >
          <Google />
          <span className="text-[#1F1F1F] font-roboto text-xs md:text-sm font-medium leading-normal text-nowrap">
            {isLoading ? "Signing in..." : "Sign Up with Google"}
          </span>
          {isLoading && (
            <span className="ml-2 w-4 h-4 border-2 border-gray-300 border-t-[#1F1F1F] rounded-full animate-spin"></span>
          )}
        </Button> */
}

{
  /* <div className="hidden md:flex space-x-4 pr-4">
          <Button variant="ghost" asChild>
            <Link href="/signin" className="text-[#520052]">
              Sign in
            </Link>
          </Button>
          <Button
            className="bg-[#520052] text-white px-4 py-2 rounded-md"
            asChild
          >
            <Link href="/signup">Create account</Link>
          </Button>
        </div> */
}
