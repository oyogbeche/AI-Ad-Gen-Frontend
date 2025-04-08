"use client";
import React from "react";

import { useSearchParams } from "next/navigation";
import { VideoAdForm } from "./video-ad-form";

export const AdForm = () => {
  const searchParams = useSearchParams();
  const adType = searchParams.get("type");

  if (adType === "image") {
    return <></>;
  } else if (adType === "video") {
    return <VideoAdForm />;
  }

  return <div>Invalid Ad Type</div>;
};
