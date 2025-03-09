"use client";
// import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Google, Logo } from "@/components/icons/icon";

const Header: React.FC = () => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="w-full border-b border-[#F8E6F8] bg-white sticky top-0 z-40">
      <div className="max-w-[1440px] m-auto  flex justify-between w-full px-6 py-4  lg:pl-20 lg:pr-9">
        <div className="w-fit">
          <Link href="/">
            <Logo className="w-32 md:w-auto" />
          </Link>
        </div>

        <Link
          href="#"
          className="flex items-center gap-[10px] rounded-md border border-[#B7D3F3] px-3 py-2 bg-white md:px-4 md:py-3  hover:bg-[#F6F6F6]"
        >
          <Google />
          <span className="text-[#1F1F1F] font-roboto text-xs md:text-sm font-medium leading-normal text-nowrap">
            Sign Up with Google
          </span>
        </Link>

        {/*         <nav className="hidden md:flex space-x-6 text-gray-600">
          <Link href="/features" className="hover:text-purple-700">
            Features
          </Link>
          <Link href="/how-it-works" className="hover:text-purple-700">
            How it works
          </Link>
          <Link href="/pricing" className="hover:text-purple-700">
            Pricing
          </Link>
        </nav> */}

        {/*       <div className="hidden md:flex space-x-4 pr-4">
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
        </div> */}

        {/*       <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button> */}
      </div>

      {/*   {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t absolute z-10 w-screen">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link
              href="/features"
              className="text-gray-600 hover:text-purple-700"
            >
              Features
            </Link>
            <Link
              href="/how-it-works"
              className="text-gray-600 hover:text-purple-700"
            >
              How it works
            </Link>
            <Link
              href="/pricing"
              className="text-gray-600 hover:text-purple-700"
            >
              Pricing
            </Link>
            <Button variant="ghost" asChild>
              <Link href="/signin" className="text-[#520052]">
                Sign in
              </Link>
            </Button>
            <Button
              className="bg-dark-purple text-white px-4 py-2 rounded-md"
              asChild
            >
              <Link href="/signup">Create account</Link>
            </Button>
          </nav>
        </div>
      )} */}
    </header>
  );
};

export default Header;
