"use client";
import { Logo } from "@/components/icons/icon";
import { UserAvatar } from "@/domains/ads-gen/components/avatar";
import { useAuthStore } from "@/store/auth-store";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoPng from "../../../../public/logo.png";
// import { useState } from "react";
// import UpgradePlanModal from "./upgrade-plan-modal";

const Header: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const name = `${user?.first_name || ""} ${user?.last_name || ""}`;
  const pathname = usePathname();
  const predefinedPromptPages =
    pathname.startsWith("/preview-ad") || pathname.startsWith("/generate-ad");
  const isSpecialPage =
    pathname.startsWith("/dashboard") || predefinedPromptPages;
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isModalComplete, setIsModalComplete] = useState(false);

  return (
    <header
      className={`w-full border-b  border-[#F8E6F8] sticky top-0 z-40 ${
        isSpecialPage ? "bg-[#292929]" : "bg-white"
      } focus:outline-none focus:ring-0`}
    >
      <div
        className={`max-w-[1440px] m-auto  flex justify-between w-full px-6 py-4 lg:pl-20 lg:pr-9 `}
      >
        <div className="w-fit">
          <Link href="/">
            {isSpecialPage ? (
              <Image src={logoPng} alt="Logo" width={128} height={64} />
            ) : (
              <Logo className="w-32 md:w-auto" />
            )}
          </Link>
        </div>

        {!predefinedPromptPages && (
          <>
            {user ? (
              // <div
              //   className="flex sm:gap-10 gap-2"
              //   onClick={() => setIsModalOpen(true)}
              // >
              //   <div className="flex items-center gap-2 sm:gap-4 px-1 sm:px-4 sm:py-2 bg-white rounded-[8px]">
              //     <div className="flex items-center">
              //       <Image
              //         src="/star-fall2.svg"
              //         height={24}
              //         width={24}
              //         alt="Star fall"
              //       />
              //       <span className="pl-[2px] sm:pl-1.5 text-base font-semibold text-[#5F5F5F]">
              //         5 <span className="hidden sm:inline-block">credits</span>
              //       </span>
              //     </div>
              //     <Image
              //       src="/separate.svg"
              //       height={16}
              //       width={3}
              //       alt="Star fall"
              //     />
              //     <span className="font-semibold text-[#121316]">
              //       U<span className="hidden sm:inline-block">pgrade</span>
              //     </span>
              //   </div>
              <UserAvatar
                name={name}
                imageUrl={user.avatar_url}
                onSignOut={logout}
              />
            ) : (
              // </div>
              <Link
                href={"/signin"}
                className="bg-light-purple cursor-pointer text-white px-6 py-3 rounded-sm hover:bg-dark-purple transition-colors hidden md:flex justify-center items-center gap-2"
              >
                <p>Generate Your Ad</p> <ArrowRight />
              </Link>
            )}
            {/* <UpgradePlanModal
              isOpen={isModalOpen}
              isComplete={isModalComplete}
              onClose={setIsModalOpen}
              onComplete={setIsModalComplete}
            /> */}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
