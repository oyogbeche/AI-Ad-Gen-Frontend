"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { OptionType } from "@/components/ui/multi-select";
import useMediaQuery from "@/hooks/use-media-query";
// Dynamically import both components to avoid SSR issues
const DynamicDesktopMultiSelect = dynamic(
  () => import("@/components/ui/multi-select"),
  {
    ssr: false,
  }
);

const DynamicMobileMultiSelect = dynamic(
  () => import("@/components/ui/MobileMultiSelect"),
  {
    ssr: false,
  }
);

type ResponsiveMultiSelectProps = {
  options: OptionType[];
  selected: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  title?: string;
  emptyMessage?: string;
  className?: string;
  disabled?: boolean;
};

const ResponsiveMultiSelect = (props: ResponsiveMultiSelectProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    return <DynamicMobileMultiSelect {...props} />;
  }

  return <DynamicDesktopMultiSelect {...props} />;
};

export default ResponsiveMultiSelect;
