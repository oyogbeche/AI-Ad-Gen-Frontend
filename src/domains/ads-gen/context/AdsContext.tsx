"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface Ad {
  ad_description: string;
  author_info: { name: string; avatar: string };
  created_at: string;
  final_url: string;
  id: string;
  image_url: string;
  is_published: boolean;
  prompt: string;
  target_audience: string;
  updated_at: string;
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
