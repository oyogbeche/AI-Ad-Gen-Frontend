"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Check } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface UpgradePlanModalProps {
  isOpen: boolean;
  isComplete: boolean;
  onClose: (value: boolean) => void;
  onComplete: (value: boolean) => void;
}

const UpgradePlanModal: React.FC<UpgradePlanModalProps> = ({
  isOpen,
  onClose,
  isComplete,
  onComplete,
}) => {

  const router = useRouter()

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-white w-full sm:min-w-[676px] rounded-[8px] shadow-lg py-10 flex flex-col gap-2.5 md:gap-6 max-h-screen overflow-auto">
          <DialogHeader className="flex flex-row justify-between items-center px-6">
            <DialogTitle className="text-xl font-semibold">
              Upgrade your plan
            </DialogTitle>
            <DialogClose asChild>
              <button className="text-gray-600 hover:text-gray-800 hover:font-black cursor-pointer">
                ✕
              </button>
            </DialogClose>
          </DialogHeader>

          <div className="flex flex-col sm:flex-row">
            {["Premium plan", "Enterprise plan"].map((plan, index) => (
              <div
                key={index}
                className={`border-t ${
                  index === 0 && "md:border-r"
                } border-b border-[#ECECEC] py-4 md:pb-[57px] px-5 md:pl-6 sm:pr-[37px] flex flex-col gap-6`}
              >
                <div>
                  <h3 className="text-xl font-semibold">{plan}</h3>
                  <p className="text-[#5F5F5F] text-[18px]">
                    ${index === 0 ? "5" : "20"}/month
                  </p>
                </div>
                <div>
                  <div className="flex gap-2">
                    <Check className="h-4 w-auto" />
                    <p className="text-gray-500">
                      {index === 0
                        ? "50 credits/mo (= 30 ads)"
                        : "200 credits/mo (= 100 ads)"}
                    </p>
                  </div>

                  <p className="text-xs text-gray-400 pl-6">
                    Credit expires every 3 months
                  </p>
                </div>

                <div className="flex flex-col gap-3 md:gap-4">
                  <div
                    className={`cursor-pointer text-white px-6 py-3 rounded-sm w-fit hover:scale-105 transition-all duration-500 ${
                      index === 0
                        ? "bg-light-purple hover:bg-dark-purple"
                        : "bg-dark-purple hover:bg-light-purple"
                    }`}
                    onClick={index === 0 ? () => {router.push("https://buy.stripe.com/7sIdUP1JCdCAgOQaFm")} : () => {
                      router.push("https://buy.stripe.com/6oEbMH1JC0PO9mo6p7")
                    }}
                  >
                    <p>Upgrade</p>
                  </div>
                  <h4 className="font-semibold text-xl">Features</h4>
                  <ul className="text-sm text-[#121316] flex flex-col gap-2 md:gap-3">
                    {(index === 0
                      ? [
                          "Access to predefined prompts",
                          "50 image ad generation per month",
                          "Edit generated ad",
                          "Download 50 generated image ads",
                          "Publish an ad on our community",
                          "Access to explore our community",
                        ]
                      : [
                          "Access to predefined prompts",
                          "Unlimited image ad generation",
                          "Edit generated ad",
                          "Download generated image ads",
                          "Publish an ad on our community",
                          "Access to explore our community",
                        ]
                    ).map((feature, i) => (
                      <li key={i} className="flex gap-2">
                        <Check className="h-4 w-auto" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isComplete} onOpenChange={() => onComplete(false)}>
        <DialogContent className="bg-white w-full sm:w-[412px] rounded-[8px] shadow-lg p-10 flex flex-col gap-6 items-center text-center">
          <Image
            src="/success.svg"
            height={80}
            width={80}
            alt="Successful payment"
          />
          <DialogTitle className="text-[18px] font-semibold">
            Successful payment
          </DialogTitle>
          <p className="text-[#7D7D7D]">Your subscription has been upgraded!</p>
          <div
            className="hover:bg-[#304276] cursor-pointer text-white px-6 py-3 rounded-sm bg-[#1671D9] hover:scale-105 transition-all duration-500 w-full"
            onClick={() => onComplete(false)}
          >
            <p>Done</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UpgradePlanModal;
