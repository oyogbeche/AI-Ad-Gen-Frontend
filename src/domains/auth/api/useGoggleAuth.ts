"use client";

import { useState } from "react";
import { toast } from "sonner";
import { getRequest } from "@/lib/api";

export const useGoogleAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

 const isDevelopment = process.env.NODE_ENV === "development";
 const isProduction = process.env.NODE_ENV === "production";

 const googleAuthEndpoint = isDevelopment
   ? "/auth/google/initiate?return_json=true&environment=staging"
   : isProduction
   ? "/auth/google/initiate?return_json=true&environment=prod"
   : "/auth/google/initiate?return_json=true&redirect_local=true";

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await getRequest(googleAuthEndpoint);

      if (response?.data?.auth_url) {
        console.log("Google login initiated:", response.data.auth_url);

        let authUrl = response.data.auth_url;
        if (authUrl.startsWith("/")) {
          authUrl = `https://staging.api.genz.ad${authUrl}`;
        }

        window.location.href = authUrl;
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
