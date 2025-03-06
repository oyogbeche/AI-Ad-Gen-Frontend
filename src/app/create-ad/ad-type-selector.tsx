// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { useRouter, useSearchParams } from "next/navigation";
// import Link from "next/link";

// const AdSelectorPage = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [selectedAdType, setSelectedAdType] = useState<string | null>(
//     searchParams.get("type") || null
//   );

//   const handleAdTypeSelect = (type: string) => {
//     if (type === "image") {
//       setSelectedAdType(type);
//     }
//   };

//   const handleContinue = () => {
//     if (selectedAdType) {
//       console.log(`Selected ad type: ${selectedAdType}`);
//       router.push(`/create-ad/ad-form?type=${selectedAdType}`);
//     }
//   };

//   return (
    
//   );
// };

// export default AdSelectorPage;
