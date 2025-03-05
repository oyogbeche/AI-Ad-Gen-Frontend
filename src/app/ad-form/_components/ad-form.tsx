"use client";
import React from "react";

import {  useSearchParams } from "next/navigation";
import { ImageAdForm } from "./image-ad-form";
import { VideoAdForm } from "./video-ad-form";





export const AdFormPage = () => {
  const searchParams = useSearchParams();
  const adType = searchParams.get("type");

  if (adType === "image") {
    return <ImageAdForm />;
  } else if (adType === "video") {
    return <VideoAdForm />;
  }

  return <div>Invalid Ad Type</div>;
};

export default AdFormPage;
