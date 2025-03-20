import React from "react";
import Image from "next/image";

const SignInSection: React.FC = () => {
  return (
    <section className="w-full py-16 bg-[#F4F4F4]">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 relative">
          
          <div className="flex justify-center pl-8">
            <Image
              src="/howitworks2.svg"
              alt="Sign in options"
              width={600}
              height={450}
              priority
              className="object-contain"
            />
          </div>

          
          <div className="relative p-8">
           
            <span
              className="
                text-[128px]
                text-gray-200
                font-light
                absolute
                top-60
                right-8
                -translate-y-80
                z-0
                select-none
                pointer-events-none
              "
              aria-hidden="true"
            >
              2
            </span>

            
            <div className="relative z-10 max-w-md">
              <h1 className="text-5xl font-bold mb-10">Sign in or Sign up</h1>

              <ul className="space-y-6">
                <li className="flex items-center">
                  <div className="mr-3 w-2 h-2 rounded-full bg-black" />
                  <span className="text-lg">
                    Use your Google account for fast and secure access
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 w-2 h-2 rounded-full bg-black" />
                  <span className="text-lg">
                    No long forms – just a one-click login!
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInSection;
