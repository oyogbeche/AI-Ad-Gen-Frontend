"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import aboutUs from "@/lottie/about-us.json";
import aiCreative from "@/lottie/ai-power-creative.json";

const AboutUs = () => {
  return (
    <div className="w-full xl:mx-auto bg-[#F8E6F8] max-lg:px-4 flex flex-col items-center ">
      {/* Hero Section */}
      <motion.div
        className="relative z-10 max-w-[1037px] w-full px-4 mt-16 md:mt-[100px] text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <h2 className="text-[#B800B8] text-[32px] mb-2">About us</h2>
        <motion.h1
          className="text-3xl md:text-[64px] font-medium text-[#121316] tracking-tight mb-4 lg:max-w-5xl text-center lg:mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Transforming Advertising <br className="hidden xl:block" /> with AI
          Innovation
          {/* <span className="text-[#B800B8] ml-2 font-semibold">with AI</span> */}
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          At Genz.ad, we believe that every business deserves high-quality,
          engaging ads without the need for a design or marketing team.
          That&apos;s why we built an AI-powered ad generator that simplifies ad
          creation, making it fast, effortless, and accessible to everyone.
        </motion.p>

        <div className="flex justify-center mb-10">
          <Lottie animationData={aboutUs} className="max-w-[700px] h-auto" />
          {/* <Image
            src="/images/team-together.png"
            alt="Team working together"
            className="w-[1248px] h-auto"
            width={1248}
            height={700}
          /> */}
        </div>
      </motion.div>
      {/* <section className="px-6 md:px-12 lg:px-24 bg-[#F8E6F8] w-screen">
        <div className="mx-15 max-w-7xl py-16 flex flex-col gap-8 items-center justify-center">
          <div className="text-center mb-6 justify-center">
            <h2 className="text-[#B800B8] text-[32px] mb-2">About us</h2>
            <h1 className=" text-[28px] lg:text-[64px] md:text-4xl font-[400] text-gray-900 mb-6">
              Transforming Advertising <br /> with AI Innovation
            </h1>
            <h5 className="text-[#16151E] font-[400] text:-[18px] lg:text-[20px] self-center">
              At Genz.ad, we believe that every business deserves high-quality,
              engaging ads without the need for a design or marketing team.
              That&apos;s why we built an AI-powered ad generator that
              simplifies ad creation, making it fast, effortless, and accessible
              to everyone.
            </h5>
          </div>

        
          <div className="flex justify-center mb-10">
            <Image
              src="/images/team-together.png"
              alt="Team working together"
              className="w-[1248px] h-auto"
              width={1248}
              height={700}
            />
          </div>
        </div>
      </section> */}

      {/* Mission and Story Section */}
      <div className="bg-[#F9FAFB]">
        <section className="py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-[392px] lg:max-w-6xl mx-auto grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 gap-[40px] lg:gap-12 text-center lg:text-left">
            {/* Mission Column */}
            <div className="bg-white p-8 rounded-lg border">
              <h2 className="text-xl font-bold text-[#520052] mb-2">
                Our Mission
              </h2>
              <p className="text-gray-700 text-[18px] lg:text-[20px]">
                We&apos;re on a mission to democratize ad creation by providing
                product owners, startups, and businesses with an intuitive
                platform that generates customized, localized, and
                high-performing ads with ease.
              </p>
            </div>

            {/* Story Column */}
            <div className="bg-white p-8 rounded-lg border">
              <h2 className="text-xl font-bold text-[#520052] mb-2">
                Our Story
              </h2>
              <p className="text-gray-700 text-[18px] lg:text-[20px]">
                Born out of the need for simple, effective, and automated
                advertising, Genz.ad was founded by a team of passionate
                designers, marketers, and AI experts. We saw a gap: small
                businesses struggling with ad creation, wasting time and money
                on complex tools.
              </p>
            </div>
          </div>
        </section>

        {/* Features Overview Section */}
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
          <div className="max-w-[392px] lg:max-w-6xl mx-auto">
            <h2 className="text-[28px] lg:text-[40px] md:text-3xl font-[600] lg:font-[700] text-center mb-8">
              We make sure your ideas are brought to life
            </h2>
            <p className="text-center text-[#121316] mb-12 max-w-[1201px] font-[400] text-[20px] leading-[28px]">
              We ensure your ideas and creations reach the right audience. Our
              AI-powered platform simplifies ad generation, helping you craft
              localized, inclusive, and high-performing campaigns. From
              AI-driven suggestions to simple customization and multi-platform
              publishing, we make sure your message is delivered with impact.
            </p>

            {/* Feature Cards */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {/* <svg
                    width="61"
                    height="60"
                    viewBox="0 0 61 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.6176 18.9125L33.2776 19.2275L7.07763 45.4475C6.05217 46.5197 5.48739 47.9509 5.50427 49.4345C5.52116 50.918 6.11836 52.336 7.16795 53.3846C8.21755 54.4332 9.63606 55.0291 11.1196 55.0446C12.6032 55.0601 14.0339 54.494 15.1051 53.4675L41.3026 27.25C41.8248 26.7275 42.239 26.1073 42.5214 25.4247C42.8039 24.7422 42.9492 24.0107 42.9489 23.272C42.9487 22.5333 42.803 21.8019 42.5201 21.1195C42.2372 20.4371 41.8226 19.8172 41.3001 19.295L40.9076 18.93C39.8924 18.0621 38.6015 17.5837 37.2659 17.5805C35.9302 17.5773 34.637 18.0494 33.6176 18.9125ZM31.4976 26.315L34.2176 29.035L12.4526 50.8175C12.276 51.0047 12.0635 51.1546 11.8279 51.2583C11.5923 51.362 11.3383 51.4174 11.0809 51.4212C10.8235 51.425 10.568 51.3771 10.3294 51.2804C10.0908 51.1837 9.87407 51.0401 9.69196 50.8582C9.50985 50.6763 9.36609 50.4596 9.26917 50.2212C9.17225 49.9827 9.12414 49.7272 9.1277 49.4698C9.13126 49.2124 9.18641 48.9583 9.28988 48.7226C9.39336 48.4869 9.54306 48.2743 9.73013 48.0975L31.4976 26.315ZM42.2076 37.5C41.7545 37.5 41.3168 37.6641 40.9753 37.9619C40.6338 38.2597 40.4118 38.6711 40.3501 39.12L40.3326 39.375V41.25H38.4576C38.0045 41.25 37.5668 41.4141 37.2253 41.7119C36.8838 42.0097 36.6618 42.4211 36.6001 42.87L36.5826 43.125C36.5826 44.075 37.2876 44.86 38.2026 44.9825L38.4576 45H40.3326V46.875C40.3326 47.825 41.0376 48.61 41.9526 48.7325L42.2076 48.75C42.6607 48.75 43.0985 48.5859 43.44 48.2881C43.7814 47.9903 44.0035 47.5789 44.0651 47.13L44.0826 46.875V45H45.9576C46.4107 45 46.8485 44.8359 47.19 44.5381C47.5314 44.2403 47.7535 43.8289 47.8151 43.38L47.8326 43.125C47.8326 42.6719 47.6685 42.2341 47.3707 41.8927C47.0729 41.5512 46.6615 41.3291 46.2126 41.2675L45.9576 41.25H44.0826V39.375C44.0826 38.9219 43.9185 38.4841 43.6207 38.1427C43.3229 37.8012 42.9115 37.5791 42.4626 37.5175L42.2076 37.5ZM38.5801 21.88L38.6476 21.9475C38.8219 22.1216 38.9601 22.3284 39.0544 22.5559C39.1487 22.7835 39.1972 23.0274 39.1972 23.2737C39.1972 23.5201 39.1487 23.764 39.0544 23.9916C38.9601 24.2191 38.8219 24.4259 38.6476 24.6L36.8701 26.3825L34.1476 23.66L35.9726 21.835C36.3281 21.5026 36.7989 21.3215 37.2855 21.3299C37.7721 21.3383 38.2363 21.5356 38.5801 21.88ZM17.4626 12.5175L17.2076 12.5C16.7545 12.5 16.3168 12.6641 15.9753 12.9619C15.6338 13.2597 15.4118 13.6711 15.3501 14.12L15.3326 14.375V16.25H13.4576C13.0045 16.25 12.5668 16.4141 12.2253 16.7119C11.8838 17.0097 11.6618 17.4211 11.6001 17.87L11.5826 18.125C11.5826 19.075 12.2876 19.8575 13.2026 19.9825L13.4576 20H15.3326V21.875C15.3326 22.825 16.0376 23.6075 16.9526 23.7325L17.2076 23.75C17.6607 23.75 18.0985 23.5859 18.44 23.2881C18.7814 22.9903 19.0035 22.5789 19.0651 22.13L19.0826 21.875V20H20.9576C21.4107 20 21.8485 19.8359 22.19 19.5381C22.5314 19.2403 22.7535 18.8289 22.8151 18.38L22.8326 18.125C22.8326 17.6719 22.6685 17.2341 22.3707 16.8927C22.0729 16.5512 21.6615 16.3291 21.2126 16.2675L20.9576 16.25H19.0826V14.375C19.0826 13.9219 18.9185 13.4841 18.6207 13.1427C18.3229 12.8012 17.9115 12.5791 17.4626 12.5175ZM47.4626 7.5175L47.2076 7.5C46.7545 7.50002 46.3168 7.66411 45.9753 7.96192C45.6338 8.25973 45.4118 8.67112 45.3501 9.12L45.3326 9.375V11.25H43.4576C43.0045 11.25 42.5668 11.4141 42.2253 11.7119C41.8838 12.0097 41.6618 12.4211 41.6001 12.87L41.5826 13.125C41.5826 14.075 42.2876 14.8575 43.2026 14.9825L43.4576 15H45.3326V16.875C45.3326 17.825 46.0376 18.6075 46.9526 18.7325L47.2076 18.75C47.6607 18.75 48.0985 18.5859 48.44 18.2881C48.7814 17.9903 49.0035 17.5789 49.0651 17.13L49.0826 16.875V15H50.9576C51.4107 15 51.8485 14.8359 52.19 14.5381C52.5314 14.2403 52.7535 13.8289 52.8151 13.38L52.8326 13.125C52.8326 12.6719 52.6685 12.2341 52.3707 11.8927C52.0729 11.5512 51.6615 11.3291 51.2126 11.2675L50.9576 11.25H49.0826V9.375C49.0826 8.92191 48.9185 8.48414 48.6207 8.14267C48.3229 7.8012 47.9115 7.57912 47.4626 7.5175Z"
                      fill="#B800B8"
                    />
                  </svg> */}
                  <Lottie
                    animationData={aiCreative}
                    style={{ width: 30, height: 30 }}
                  />
                </div>
                <h3 className="text-[24px] font-[600] leading-[32px] mb-4">
                  AI Power Creative
                </h3>
                <p className="text-gray-600 text-[18px] font-[600] leading-[28px]">
                  Instantly generate texts, visuals, and layouts tailored to
                  your brand, saving time and boosting engagement.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.2694 51.25C12.0065 51.25 10.9375 50.8125 10.0625 49.9375C9.1875 49.0625 8.75 47.9935 8.75 46.7306V13.2694C8.75 12.0065 9.1875 10.9375 10.0625 10.0625C10.9375 9.1875 12.0065 8.75 13.2694 8.75H46.7306C47.9935 8.75 49.0625 9.1875 49.9375 10.0625C50.8125 10.9375 51.25 12.0065 51.25 13.2694V46.7306C51.25 47.9935 50.8125 49.0625 49.9375 49.9375C49.0625 50.8125 47.9935 51.25 46.7306 51.25H13.2694ZM13.2694 47.5H28.125V12.5H13.2694C13.0769 12.5 12.9006 12.5802 12.7406 12.7406C12.5802 12.9006 12.5 13.0769 12.5 13.2694V46.7306C12.5 46.9231 12.5802 47.0994 12.7406 47.2594C12.9006 47.4198 13.0769 47.5 13.2694 47.5ZM31.875 47.5H46.7306C46.9231 47.5 47.0994 47.4198 47.2594 47.2594C47.4198 47.0994 47.5 46.9231 47.5 46.7306V30H31.875V47.5ZM31.875 26.25H47.5V13.2694C47.5 13.0769 47.4198 12.9006 47.2594 12.7406C47.0994 12.5802 46.9231 12.5 46.7306 12.5H31.875V26.25Z"
                      fill="#B800B8"
                    />
                  </svg>
                </div>
                <h3 className="text-[24px] font-[600] leading-[32px] mb-4">
                  User Friendly Tools
                </h3>
                <p className="text-gray-600 text-[18px] font-[600] leading-[28px]">
                  Access hundreds of professional templates designed to connect
                  with your target audience.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    width="61"
                    height="60"
                    viewBox="0 0 61 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.166 10H10.666C9.33993 10 8.06816 10.5268 7.13048 11.4645C6.1928 12.4021 5.66602 13.6739 5.66602 15V50C5.66602 51.3261 6.1928 52.5979 7.13048 53.5355C8.06816 54.4732 9.33993 55 10.666 55H45.666C46.9921 55 48.2639 54.4732 49.2015 53.5355C50.1392 52.5979 50.666 51.3261 50.666 50V32.5"
                      stroke="#B800B8"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M46.916 6.24996C47.9106 5.25539 49.2595 4.69666 50.666 4.69666C52.0725 4.69666 53.4215 5.25539 54.416 6.24996C55.4106 7.24452 55.9693 8.59343 55.9693 9.99996C55.9693 11.4065 55.4106 12.7554 54.416 13.75L30.666 37.5L20.666 40L23.166 30L46.916 6.24996Z"
                      stroke="#B800B8"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-[24px] font-[600] leading-[32px] mb-4">
                  Localized & Inclusive Ads
                </h3>
                <p className="text-gray-600 text-[18px] font-[600] leading-[28px]">
                  Edit text, images, and layouts with a live preview for instant
                  updates, ensuring a smooth workflow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-[392px] lg:max-w-7xl py-16 px-6 md:px-[75px] lg:px-24 bg-[#520052] text-white mx-auto rounded-[16px]">
          <div className="mx-auto">
            <h2 className="text-[32px] lg:text-[40px] md:text-3xl font-[600] lg:font-[700] text-center mb-12">
              People Behind Genz.ad
            </h2>

            {/* Team Members */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="lg:w-[296px] h-[346px] overflow-hidden rounded-[8px] mx-auto mb-4">
                  <Image
                    src="/images/ebiye-ikiriko.png"
                    alt="Ebiye Kiriko"
                    className="w-full h-full object-cover"
                    width={192}
                    height={192}
                  />
                </div>
                <h3 className="text-xl font-semibold">Ebiye Kiriko</h3>
                <p className="text-purple-200">CEO</p>
              </div>

              {/* Team Member 2 */}
              <div className="text-center">
                <div className="lg:w-[296px] h-[346px] overflow-hidden rounded-[8px] mx-auto mb-4">
                  <Image
                    src="/images/iretiola-adekola.png"
                    alt="Iretola Adeola"
                    className="w-full h-full object-cover"
                    width={192}
                    height={192}
                  />
                </div>
                <h3 className="text-xl font-semibold">Iretola Adeola</h3>
                <p className="text-purple-200">CTO</p>
              </div>

              {/* Team Member 3 */}
              <div className="text-center">
                <div className="lg:w-[296px] h-[346px] overflow-hidden rounded-[8px] mx-auto mb-4">
                  <Image
                    src="/images/apeli-ziworitin.png"
                    alt="April Ziweriltin"
                    className="w-full h-full object-cover"
                    width={192}
                    height={192}
                  />
                </div>
                <h3 className="text-xl font-semibold">April Ziweriltin</h3>
                <p className="text-purple-200">Marketing Analyst</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase Section */}
        <section className="max-w-[392px] lg:max-w-7xl mx-auto py-16 lg:px-12">
          <div className="mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Product Image */}
            <div className="w-[392px] lg:w-[548px] lg:h-[411px]">
              <Image
                src="/images/turn-ideas.png"
                alt="Platform interface"
                className="rounded-lg shadow-md w-full"
                width={1248}
                height={700}
              />
            </div>

            {/* Right - Product Description */}
            <div>
              <h2 className="text-[28px] lg:text-[40px] font-[600] lg:font-[700] mb-6">
                Turn Ideas into Stunning Visuals Instantly
              </h2>
              <p className="text-gray-700 font-[400] text-[20px] mb-6">
                Our AI-powered platform helps you create visually compelling
                content in seconds—no design skills needed! Whether you&apos;re
                a creator, marketer, or entrepreneur, our intuitive tools let
                you bring your vision to life effortlessly.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-[392px] lg:max-w-7xl mx-auto py-16 md:px-12 lg:px-24 bg-[#F8E6F8] rounded-[16px] text-center lg:text-left">
          <div className="mx-auto grid lg:grid-cols-2 gap-12 items-center px-[20px]">
            {/* Left - CTA Text */}
            <div className="order-2 lg:order-1">
              <h2 className="text-[28px] lg:text-[40px] font-[600] lg:font-[700] leading-[36px] mb-6">
                We help small businesses grow faster & smarter
              </h2>
              <p className="text-gray-700 text-[20px] lg:text-[24px] font-[500] leading-[30px] mb-8">
                We empower small businesses to grow faster and smarter with
                AI-driven ad creation. Our platform simplifies marketing,
                enhances engagement, and helps businesses reach the right
                audience effortlessly.
              </p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={"/signup"}
                  className="cursor-pointer px-6 py-3 rounded-sm text-[#FFFFFF] transition-colors flex justify-center gap-2 border border-[#B800B8] bg-[#B800B8] hover:bg-[#B800B8] lg:w-fit"
                >
                  <p>
                    Get Started <span className="hidden lg:inline">Now</span>
                  </p>{" "}
                  <ArrowRight className="hidden lg:inline" />
                </Link>
              </motion.div>
            </div>

            {/* Right - Image */}
            <div className="order-1 lg:order-2">
              <Image
                src="/images/help-small.png"
                alt="User working with platform"
                className="rounded-lg shadow-md w-full"
                width={1248}
                height={700}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
