"use client";
import { useAuthStore } from "@/store/auth-store";
import Link from "next/link";

const Pricings = () => {
  const token = useAuthStore((state) => state.token);
  return (
    <div className="w-full xl:mx-auto max-lg:px-4 pt-8 flex flex-col gap-8 items-center bg-[#F8E6F8]">
      <div>
        <h1 className="md:text-[40px] md:font-[700] text-center font-[600] text-[35px]">
          Pricing Plans
        </h1>
        <p className="md:font-[500] md:text-[18px] text-[#7D7D7D] font-[500] text-[12px]">
          Generate your ads for free and pay as you grow.
        </p>
      </div>

      <div className="flex lg:flex-row flex-col gap-[16px] lg:gap-[24px] pb-[30px]">
        {/* card 1 */}
        <div className="bg-[#FCFCFC] rounded-[16px] w-[381px] min-h-[637px]">
          <div className="px-[36px] py-[39px] flex flex-col">
            <div>
              <div className="h-[76px]">
                <h3 className="font-[600] text-[28px] text-[#121316]">
                  Pay-Per-Ad Model
                </h3>
                <p className="font-[400] text-[14px] text-[#7D7D7D] w-[230px]">
                  (For non-subscribers)
                </p>
              </div>
              <div>
                <h1 className="font-[600] text-[36px] text-[#B800B8] mt-[17px] border-b-[1px] border-b-[#E3E3E3]">
                  $15<sub className="font-[400] text-[14px]">/150 Points </sub>
                </h1>
              </div>
            </div>

            <div className="pt-[16px]">
              <Link
                href="/signin"
                className="bg-light-purple cursor-pointer text-white px-6 py-[12px] rounded-sm hover:bg-dark-purple transition-colors flex items-center justify-center gap-2 mx-auto"
              >
                <p>Choose plan</p>
              </Link>
            </div>

            <ul className="mt-[24px] flex flex-col gap-[16px]">
              <li className="flex items-center">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 flex-shrink-0"
                >
                  <path
                    d="M20.5 6L9.5 17L4.5 12"
                    stroke="#121316"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                150 Ad Credits
              </li>
            </ul>
          </div>
        </div>

        {/* card 2 */}
        <div className="bg-[#520052] rounded-[16px] w-[381px]">
          <div className="px-[36px] py-[39px] flex flex-col">
            <div>
              <div className="h-[76px]">
                <h3 className="font-[600] text-[28px] text-[#FFFFFF]">Basic</h3>
                <p className="font-[400] text-[14px] text-[#FFFFFF]">
                  Get a few features to start your Genz.ad journey.
                </p>
              </div>
              <div>
                <h1 className="font-[600] text-[36px] text-[#FFFFFF] mt-[17px] border-b-[1px] border-b-[#E3E3E3]">
                  $10<sub className="font-[400] text-[14px]">/mo </sub>
                </h1>
              </div>
            </div>

            <div className="pt-[16px]">
              <Link
                href="/signin"
                className="bg-[#FFFFFF] cursor-pointer text-[#520052] px-6 py-[12px] rounded-sm transition-colors flex items-center justify-center gap-2 mx-auto"
              >
                <p>Choose plan</p>
              </Link>
            </div>

            <ul className="mt-[24px] flex flex-col gap-[16px] text-[#FFFFFF]">
              <li className="flex items-center">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 flex-shrink-0"
                >
                  <path
                    d="M20.5 6L9.5 17L4.5 12"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Access to predefined prompts
              </li>
              <li className="flex items-center">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 flex-shrink-0"
                >
                  <path
                    d="M20.5 6L9.5 17L4.5 12"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                50 ad credit
              </li>
              <li className="flex items-center">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 flex-shrink-0"
                >
                  <path
                    d="M20.5 6L9.5 17L4.5 12"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Advanced AI-powered image and text editing
              </li>
              <li className="flex items-center">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 flex-shrink-0"
                >
                  <path
                    d="M20.5 6L9.5 17L4.5 12"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Download the image ad generated
              </li>
              <li className="flex items-center">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 flex-shrink-0"
                >
                  <path
                    d="M20.5 6L9.5 17L4.5 12"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Access to explore our community
              </li>
              <li className="flex items-center">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 flex-shrink-0"
                >
                  <path
                    d="M20.5 6L9.5 17L4.5 12"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Ad text and image editing tools
              </li>
              <li className="flex items-center">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 flex-shrink-0"
                >
                  <path
                    d="M20.5 6L9.5 17L4.5 12"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Expires after 1 month
              </li>
            </ul>
          </div>
        </div>

        {/* card 3 */}
        <div className="bg-[#FCFCFC] rounded-[16px] w-[381px]">
          <div className="px-[36px] py-[39px] flex flex-col">
            <div>
              <div className="h-[76px]">
                <h3 className="font-[600] text-[28px] text-[#121316]">Pro</h3>
                <p className="font-[400] text-[14px] text-[#7D7D7D] w-[230px]">
                  Get full usage of the generator.
                </p>
              </div>
              <div>
                <h1 className="font-[600] text-[36px] text-[#B800B8] mt-[17px] border-b-[1px] border-b-[#E3E3E3]">
                  $21<sub className="font-[400] text-[14px]">/mo</sub>
                </h1>
              </div>
            </div>

            <div className="pt-[16px]">
              <Link
                href="/signin"
                className="bg-light-purple cursor-pointer text-white px-6 py-[12px] rounded-sm hover:bg-dark-purple transition-colors flex items-center justify-center gap-2 mx-auto"
              >
                <p>Choose plan</p>
              </Link>
            </div>

            <ul className="mt-[24px] flex flex-col gap-[16px]">
              <li className="flex items-center">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 flex-shrink-0"
                >
                  <path
                    d="M20.5 6L9.5 17L4.5 12"
                    stroke="#121316"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                All Basic features
              </li>
              <li className="flex items-center">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 flex-shrink-0"
                >
                  <path
                    d="M20.5 6L9.5 17L4.5 12"
                    stroke="#121316"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                150 ad credits
              </li>
              <li className="flex items-center">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 flex-shrink-0"
                >
                  <path
                    d="M20.5 6L9.5 17L4.5 12"
                    stroke="#121316"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Advanced AI-powered image and text editing (Inpainting)
              </li>
              <li className="flex items-center">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 flex-shrink-0"
                >
                  <path
                    d="M20.5 6L9.5 17L4.5 12"
                    stroke="#121316"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                High-resolution downloads (PNG/JPEG)
              </li>
              <li className="flex items-center">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 flex-shrink-0"
                >
                  <path
                    d="M20.5 6L9.5 17L4.5 12"
                    stroke="#121316"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Access to explore our community
              </li>
              <li className="flex items-center">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 flex-shrink-0"
                >
                  <path
                    d="M20.5 6L9.5 17L4.5 12"
                    stroke="#121316"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Expires after 3 months
              </li>
              <li className="flex items-center">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 flex-shrink-0"
                >
                  <path
                    d="M20.5 6L9.5 17L4.5 12"
                    stroke="#121316"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Rollover ad credits on resubscription.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="pb-[73px]">
        Just getting started?{" "}
        <a
          href={token ? "dashboard" : "/signin"}
          className="text-[#B800B8] underline"
        >
          Try our free plan
        </a>
      </p>
    </div>
  );
};

export default Pricings;
