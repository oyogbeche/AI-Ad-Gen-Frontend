"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ImageContextProps {
  imageUrl: string | null;
  setImageUrl: (url: string) => void;
}

const ImageContext = createContext<ImageContextProps | undefined>(undefined);

export const ImageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <ImageContext.Provider value={{ imageUrl, setImageUrl }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImageContext must be used within an ImageProvider");
  }
  return context;
};
