"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface Ad {
  type: "image" | "video";
  src: string;
  title: string;
  authorInfo:
    | {
        name: string;
        avatar: string;
      }
    | string;
}
interface Ads {
  user: Ad[];
  community: Ad[];
}

interface AdsContextType {
  adData: Ads;
  setAdData: (ad: Ads) => void;
}

const AdsContext = createContext<AdsContextType | undefined>(undefined);

export const AdsProvider = ({ children }: { children: ReactNode }) => {
  const [adData, setAdData] = useState<Ads>({ user: [], community: [] });

  return (
    <AdsContext.Provider value={{ adData, setAdData }}>
      {children}
    </AdsContext.Provider>
  );
};

export const useAdsContext = (): AdsContextType => {
  const context = useContext(AdsContext);
  if (!context) {
    throw new Error("useAdsContext must be used within an AdsProvider");
  }
  return context;
};
