import React from 'react';
import Image from 'next/image';

const SignInPage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Left side - Content (white background) */}
      <div className="flex flex-col p-8 justify-center bg-white">
        <div className="max-w-md mx-auto w-full">
          {/* SVG from public folder */}
          <div className="mb-8">
            <Image 
              src="/howitworks.svg"
              alt="Sign in options"
              width={400}
              height={300}
              priority
            />
          </div>

          <h1 className="text-4xl font-bold mb-8">Sign in or Sign up</h1>
          
          <ul className="mb-8 space-y-4">
            <li className="flex items-center">
              <div className="mr-2 w-2 h-2 rounded-full bg-black" />
              <span>Use your Google account for fast and secure access</span>
            </li>
            <li className="flex items-center">
              <div className="mr-2 w-2 h-2 rounded-full bg-black" />
              <span>No long forms - just a one-click login!</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right side - Big number "2" (light gray background) */}
      <div className="hidden md:flex bg-gray-100 items-center justify-center relative">
        <span className="text-[250px] text-gray-200 font-light absolute top-12 right-12">2</span>
      </div>

      {/* Bottom pink/light purple section visible in the image */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-pink-50"></div>
    </div>
  );
};

export default SignInPage;