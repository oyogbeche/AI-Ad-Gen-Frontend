"use client";
import { Logo } from "@/components/icons/icon";
import { UserAvatar } from "@/domains/ads-gen/components/avatar";
import { useAuthStore } from "@/store/auth-store";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import iconLogo from "../../../../public/icon-logo.svg";
import logoPng from "../../../../public/logo.png";
import UpgradePlanModal from "./upgrade-plan-modal";

const Header: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const name = `${user?.first_name || ""} ${user?.last_name || ""}`;
  const pathname = usePathname();
  const predefinedPromptPages =
    pathname.startsWith("/preview-ad") || pathname.startsWith("/generate-ad");
  const isSpecialPage =
    pathname.startsWith("/dashboard") || predefinedPromptPages;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalComplete, setIsModalComplete] = useState(false);

  const handleLogout = () => {
    setIsModalOpen(false);
    setIsModalComplete(false);
    logout();
  };

  return (
    <header
      className={`w-full border-b border-[#F8E6F8] sticky top-0 z-40 ${
        isSpecialPage ? "bg-[#292929]" : "bg-white"
      } focus:outline-none focus:ring-0`}
    >
      <div
        className={`max-w-[1440px] m-auto flex justify-between w-full px-6 py-4 lg:pl-20 lg:pr-9`}
      >
        <div className="w-fit">
          <Link href="/">
            {isSpecialPage ? (
              <>
                <Image
                  src={logoPng}
                  alt="Logo"
                  width={128}
                  height={64}
                  className="hidden sm:inline-block"
                />
                <Image
                  src={iconLogo}
                  alt="Logo"
                  width={35}
                  height={40}
                  className="inline-block sm:hidden"
                />
              </>
            ) : (
              <>
                <Logo className="w-32 md:w-auto hidden sm:inline-block" />
                <Image
                  src={iconLogo}
                  alt="Logo"
                  width={35}
                  height={40}
                  className="inline-block sm:hidden"
                />
              </>
            )}
          </Link>
        </div>
        {!isSpecialPage && (
          <nav className="hidden md:flex items-center space-x-6 text-gray-600">
            <Link href="/features" className="hover:text-purple-700">
              Features
            </Link>
            <Link href="/how-it-works" className="hover:text-purple-700">
              How it works
            </Link>
            <Link href="/pricing" className="hover:text-purple-700">
              Pricing
            </Link>
            <Link href="/contact-us" className="hover:text-purple-700">
              Contact us
            </Link>
          </nav>
        )}

        {!predefinedPromptPages && (
          <>
            {user ? (
              <div className="flex sm:gap-10 gap-2">
                {isSpecialPage && (
                  <div
                    className="flex items-center gap-2 sm:gap-4 px-2 sm:px-4 py-1 sm:py-2 bg-white rounded-[8px] cursor-pointer max-sm:mr-2 max-sm:h-fit my-auto"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <div className="flex items-center">
                      {user.email === "ewehvictor7@gmail.com" ||
                      user.email === "mark@hotels.ng" ? (
                        <StarIcon fill="orange" className="text-[#ffd500]" />
                      ) : (
                        <Image
                          src="/star-fall2.svg"
                          height={24}
                          width={24}
                          alt="Star fall"
                        />
                      )}
                      {user.email === "ewehvictor7@gmail.com" ||
                      user.email === "mark@hotels.ng" ? (
                        <span className="pl-[2px] sm:pl-1.5 text-base font-semibold text-[#5F5F5F]">
                          500{" "}
                          <span className="hidden sm:inline-block">
                            credits
                          </span>
                        </span>
                      ) : (
                        <span className="pl-[2px] sm:pl-1.5 text-base font-semibold text-[#5F5F5F]">
                          5{" "}
                          <span className="hidden sm:inline-block">
                            credits
                          </span>
                        </span>
                      )}
                    </div>
                    <div className="hidden sm:flex items-center gap-4 ">
                      <Image
                        src="/separate.svg"
                        height={16}
                        width={3}
                        alt="Separator"
                      />
                      {user.email === "ewehvictor7@gmail.com" ||
                      user.email === "mark@hotels.ng" ? (
                        <span className="font-semibold text-[#121316]">
                          P
                          <span className="hidden sm:inline-block">remium</span>
                        </span>
                      ) : (
                        <span className="font-semibold text-[#121316]">
                          U
                          <span className="hidden sm:inline-block">pgrade</span>
                        </span>
                      )}
                    </div>
                  </div>
                )}
                <UserAvatar
                  name={name}
                  imageUrl={user.avatar_url}
                  onSignOut={handleLogout}
                />
              </div>
            ) : (
              <div className="flex gap-3">
                <Link
                  href={"/signin?type=signin"}
                  className="cursor-pointer px-2 sm:px-6 py-1 sm:py-3 rounded-sm text-[#520052] transition-colors justify-center items-center gap-2 border border-[#B800B8] hover:bg-[#cf54cf21] w-fit mx-auto flex"
                >
                  Sign in
                </Link>
                <Link
                  href={"/signin?type=signup"}
                  className="cursor-pointer px-2 sm:px-6 py-1 sm:py-3 rounded-sm bg-light-purple text-white hover:bg-dark-purple transition-colors justify-center items-center gap-2 border w-fit mx-auto flex"
                >
                  Sign up
                </Link>
              </div>
            )}

            {user && (
              <UpgradePlanModal
                isOpen={isModalOpen}
                isComplete={isModalComplete}
                onClose={setIsModalOpen}
                onComplete={setIsModalComplete}
              />
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
