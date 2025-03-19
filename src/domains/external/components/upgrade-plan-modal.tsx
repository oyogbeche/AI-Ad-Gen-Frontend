// "use client";
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogHeader,
// } from "@/components/ui/dialog";
// import { DialogTitle } from "@radix-ui/react-dialog";
// import { Check } from "lucide-react";
// import Image from "next/image";
// import React from "react";

// interface UpgradePlanModalProps {
//   isOpen: boolean;
//   isComplete: boolean;
//   onClose: (value: boolean) => void;
//   onComplete: (value: boolean) => void;
// }

// const UpgradePlanModal: React.FC<UpgradePlanModalProps> = ({
//   isOpen,
//   onClose,
//   isComplete,
//   onComplete,
// }) => {
//   if (!isOpen) return null;
//   if (isOpen) {
//     return (
//       <Dialog open={isOpen} onOpenChange={onClose}>
//         <DialogContent className="bg-white min-w-[676px] rounded-[8px] shadow-lg relative  py-10 flex flex-col gap-6">
//           <DialogHeader className="flex justify-between items-center px-6">
//             <DialogTitle className="text-xl font-semibold">
//               Upgrade your plan
//             </DialogTitle>
//             <DialogClose asChild>
//               <button className="text-gray-600 hover:text-gray-800">✕</button>
//             </DialogClose>
//           </DialogHeader>

//           <div className="flex flex-col sm:flex-row">
//             {["Premium plan", "Enterprise plan"].map((plan, index) => (
//               <div className="border-t border-r border-b border-[#ECECEC] pt-4 pb-[57px] pl-6 pr-[37px] flex flex-col gap-6">
//                 <div>
//                   <h3 className="text-[20px] font-semibold">{plan}</h3>
//                   <p className="text-[#5F5F5F] text-[18px]">
//                     ${index === 0 ? "5" : "20"}/month
//                   </p>
//                 </div>
//                 <div>
//                   <div className="flex gap-2">
//                     <Check className="h-4 w-auto" />
//                     <p className=" text-gray-500">
//                       {index === 0
//                         ? "50 credits/mo (= 30 ads)"
//                         : "200 credits/mo (= 100 ads)"}
//                     </p>
//                   </div>

//                   <p className="text-xs text-gray-400 pl-6">
//                     Credit expires every 3 months
//                   </p>
//                 </div>

//                 <div className="flex flex-col gap-4">
//                   <div
//                     className={` cursor-pointer text-white px-6 py-3 rounded-sm  w-fit hover:scale-105 transition-all duration-500 ${
//                       index === 0
//                         ? "bg-light-purple hover:bg-dark-purple"
//                         : "bg-dark-purple hover:bg-light-purple"
//                     }`}
//                     onClick={() => {
//                       onComplete(true);
//                       onClose(false);
//                     }}
//                   >
//                     <p>Upgrade</p>
//                   </div>
//                   <h4 className=" font-semibold">Features</h4>
//                   <ul className="text-sm text-[#121316] flex flex-col gap-3">
//                     {[
//                       "Access to predefined prompts",
//                       "50 image ad generation per month",
//                       "Edit generated ad",
//                       "Download 50 generated image ads",
//                       "Publish an ad on our community",
//                       "Access to explore our community",
//                     ].map((feature, i) => (
//                       <li key={i} className="flex gap-2">
//                         <Check className="h-4 w-auto" /> {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}

//             {/* <div className="border-t border-r border-b border-[#ECECEC] pt-4 pb-[57px] pl-6 pr-[37px] flex flex-col gap-6">
//               <div>
//                 <h3 className="text-[20px] font-semibold">Enterprise plan</h3>
//                 <p className="text-[#5F5F5F] text-[18px]">$20/month</p>
//               </div>
//               <div>
//                 <div className="flex gap-2">
//                   <Check className="h-4 w-auto" />
//                   <p className=" text-gray-500">200 credits/mo (= 100 ads)</p>
//                 </div>

//                 <p className="text-xs text-gray-400 pl-6">
//                   Credit expires every 3 months
//                 </p>
//               </div>

//               <div className="flex flex-col gap-4">
//                 <div
//                   className="hover:bg-light-purple cursor-pointer text-white px-6 py-3 rounded-sm bg-dark-purple w-fit hover:scale-105 transition-all duration-500"
//                   onClick={() => {
//                     onComplete(true);
//                     onClose(false);
//                   }}
//                 >
//                   <p>Upgrade</p>
//                 </div>
//                 <h4 className=" font-semibold">Features</h4>
//                 <ul className="text-sm text-[#121316] flex flex-col gap-3">
//                   <li className="flex gap-2">
//                     <Check className="h-4 w-auto" /> Access to predefined
//                     prompts
//                   </li>
//                   <li className="flex gap-2">
//                     <Check className="h-4 w-auto" /> Unlimited image ad
//                     generation
//                   </li>
//                   <li className="flex gap-2">
//                     <Check className="h-4 w-auto" /> Edit generated ad
//                   </li>
//                   <li className="flex gap-2">
//                     <Check className="h-4 w-auto" /> Download generated image
//                     ads
//                   </li>
//                   <li className="flex gap-2">
//                     <Check className="h-4 w-auto" /> Publish an ad on our
//                     community
//                   </li>
//                   <li className="flex gap-2">
//                     <Check className="h-4 w-auto" /> Access to explore our
//                     community
//                   </li>
//                 </ul>
//               </div>
//             </div> */}
//           </div>
//         </DialogContent>
//       </Dialog>
//     );
//   }
//   if (isComplete) {
//     return (
//       <div className="fixed inset-0 flex items-center justify-center bg-[#2A2A2A80] bg-opacity-50 z-2">
//         <div className="bg-white min-w-[412px] rounded-[8px] shadow-lg relative  p-16 flex flex-col gap-6">
//           <div className="flex flex-col gap-2 items-center">
//             <Image
//               src="/success.svg"
//               height={80}
//               width={80}
//               alt="Successfull payment"
//             />
//             <h1 className="text-center text-[18px] font-semibold">
//               Successfull payment
//             </h1>
//             <p className="text-center text-[#7D7D7D]">
//               Your subscription has been upgraded!
//             </p>
//           </div>
//           <div
//             className="hover:bg-[#304276] cursor-pointer text-white px-6 py-3 rounded-sm bg-[#1671D9] hover:scale-105 transition-all duration-500 w-full"
//             onClick={() => onComplete(false)}
//           >
//             <p>Done</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// };

// export default UpgradePlanModal;
