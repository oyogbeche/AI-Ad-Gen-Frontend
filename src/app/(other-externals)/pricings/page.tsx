"use client";
// import react from "react";
import Link from "next/link";
import ToggleSwitch from "../components/toggle-switch";
const Pricings = () => {
  return (
    <div className="w-full xl:mx-auto max-lg:px-4 pt-8 flex flex-col gap-8 items-center bg-[#F8E6F8]">
      <div>
        <h1 className="md:text-[40px] md:font-[700] text-center font-[600] text-[35px]">
          Pricing Plans
        </h1>
        <p className="md:font-[500] md:text-[18px] text-[#7D7D7D] font-[500] text-[12px]">Generate your ads for free and pay as you grow.</p>
      </div>
      <div className="pt-[30px] pb-[50px] hidden lg:inline">
        <p className="flex flex-row items-center justify-center font-[500] text-[16px] text-[#5F5F5F]">
          <span className="pr-[13px]">Bill Monthly</span>
          <svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="20" rx="10" fill="#D9D9D9" />
            <circle cx="10" cy="10" r="8" fill="white" />
          </svg>
          <span className="pl-[13px]">Bill Annually (10% off)</span>
        </p>
      </div>
      {/* toggler component */}
      <div>
      <div className="flex justify-center items-center lg:hidden pt-[15px] pb-[25px]">
      <ToggleSwitch />
    </div> 
      </div>

      {/* Card Components */}
      <div className="flex lg:flex-row flex-col gap-[16px] lg:gap-[24px] pb-[30px]">
        {/* card 1 */}
        <div className="bg-[#FCFCFC] rounded-[16px] w-[381px]">
          <div className="px-[36px] py-[39px] flex flex-col">
            <div>
              <div className="h-[76px]">
                <h3 className="font-[600] text-[28px] text-[#121316]">Starter</h3>
                <p className="font-[400] text-[14px] text-[#7D7D7D] w-[230px]">Get a few features to start your Genz.ad-ai journey.</p>
              </div>
              <div>
                <h1 className="font-[600] text-[36px] text-[#B800B8] mt-[17px] border-b-[1px] border-b-[#E3E3E3]">Free</h1>
              </div>
            </div>
            <div className="mt-[44px]">
              <span className="pr-[14px]">&#x2713;</span> 5 ads per month <br />
              <br /><span className="pr-[14px]">&#x2713;</span> Watermarked exports <br />
              <br /><span className="pr-[14px]">&#x2713;</span> Limited selection of templates <br />
              <br /><span className="pr-[14px]">&#x2713;</span> Standard resolution only (720p) <br />
            </div>

            <div className="pt-[53px]">
              <Link
                href="#"
                className="bg-light-purple cursor-pointer text-white px-6 py-3 rounded-sm hover:bg-dark-purple transition-colors flex items-center justify-center gap-2 w-fit mx-auto"
              >
                <p>Choose plan</p>
              </Link>
            </div>

          </div>
        </div>

        {/* card 2 */}
        <div className="bg-[#520052] rounded-[16px] w-[381px]">
          <div className="px-[36px] py-[39px] flex flex-col">
            <div>
              <div className="h-[76px]">
                <h3 className="font-[600] text-[28px] text-[#FFFFFF]">Basic</h3>
                <p className="font-[400] text-[14px] text-[#FFFFFF] w-[230px]">Get full usage of the generator</p>
              </div>
              <div>
                <h1 className="font-[600] text-[36px] text-[#FFFFFF] mt-[17px] border-b-[1px] border-b-[#E3E3E3]">$30<sub className="font-[400] text-[14px]">/mo   </sub></h1>
              </div>
            </div>
            <div className="mt-[44px] text-[#FFFFFF]">
              <span className="pr-[14px]">&#x2713;</span> Unlimited generated ads <br />
              <br /><span className="pr-[14px]">&#x2713;</span> No watermarked exports <br />
              <br /><span className="pr-[14px]">&#x2713;</span> Access to premuim templates <br />
              <br /><span className="pr-[14px]">&#x2713;</span> Exports in HD quality (1080p) <br />
            </div>

            <div className="pt-[53px]">
              <Link
                href="#"
                className="bg-[#FFFFFF] cursor-pointer text-[#520052] px-6 py-3 rounded-sm transition-colors flex items-center justify-center gap-2 w-fit mx-auto"
              >
                <p>Choose plan</p>
              </Link>
            </div>

          </div>
        </div>

        {/* card 3 */}
        <div className="bg-[#FCFCFC] rounded-[16px] w-[381px]">
          <div className="px-[36px] py-[39px] flex flex-col">
            <div>
              <div className="h-[76px]">
                <h3 className="font-[600] text-[28px] text-[#121316]">Teams</h3>
                <p className="font-[400] text-[14px] text-[#7D7D7D] w-[230px]">A full package for a 3-4 membered team.</p>
              </div>
              <div>
                <h1 className="font-[600] text-[36px] text-[#B800B8] mt-[17px] border-b-[1px] border-b-[#E3E3E3]">$50<sub className="font-[400] text-[14px]">/mo   </sub></h1>
              </div>
            </div>
            <div className="mt-[44px]">
              <span className="pr-[14px]">&#x2713;</span> Unlimited generated ads <br />
              <br /><span className="pr-[14px]">&#x2713;</span> Share with team members <br />
              <br /><span className="pr-[14px]">&#x2713;</span> Team brand kit integration <br />
              <br /><span className="pr-[14px]">&#x2713;</span> 4K resolution & custom export options <br />
            </div>

            <div className="pt-[53px]">
              <Link
                href="#"
                className="bg-light-purple cursor-pointer text-white px-6 py-3 rounded-sm hover:bg-dark-purple transition-colors flex items-center justify-center gap-2 w-fit mx-auto"
              >
                <p>Choose plan</p>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricings;
