"use client";

import { useState } from "react";
import { toast } from "sonner";
import { getRequest } from "@/lib/api";

export const useGoogleAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await getRequest("/auth/google/initiate?return_json=true");

      if (response?.data?.auth_url) {
        console.log("Google login initiated:", response.data.auth_url);
       window.location.href = response.data.auth_url; 

      } else {
        console.error("Invalid response:", response);
        toast.error("Failed to initiate Google login.");
      }
    } catch (error) {
      console.error("Google login error:", error);
      toast.error("Failed to sign in with Google");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleGoogleLogin,
    isLoading,
  };
};
