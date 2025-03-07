"use client";

// import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="w-full  border-b border-[#F8E6F8] bg-white sticky top-0 z-40">
      <div className="px-[180px] flex items-center justify-between py-4 h-full">
        <div>
          <Link href="/">
            <Image
              src="/genz-logo.svg"
              alt="Adgen AI Logo"
              width={150}
              height={40}
              priority
            />
          </Link>
        </div>

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
