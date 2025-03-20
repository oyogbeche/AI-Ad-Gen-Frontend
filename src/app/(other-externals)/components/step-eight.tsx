import React from "react";
import Image from "next/image";


const StepEight = () => {
  return (
       <section className="w-full py-8 bg-[#F4F4F4]">
         <div className="container mx-auto px-4">
           
           <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 relative">
             
             <div className="flex justify-center pl-8">
               <Image
                 src="/hiw8.svg"
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
                 8
               </span>
   
               
               <div className="relative z-10 max-w-md">
                 <h1 className="text-5xl font-bold mb-10">Share Your Ad</h1>
   
                 <ul className="space-y-3">
                   <li className="flex items-center">
                     <div className="mr-3 w-2 h-2 rounded-full bg-black" />
                     <span className="text-lg">
                     Post your ad directly to your selected platform.
                     </span>
                   </li>
                   <li className="flex items-center">
                     <div className="mr-3 w-2 h-2 rounded-full bg-black" />
                     <span className="text-lg">
                     Reach your audience and start getting results!
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

export default StepEight;
