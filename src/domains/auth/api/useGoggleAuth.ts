"use client";

import { useState } from "react";
import { toast } from "sonner";
import { getRequest } from "@/lib/api";

export const useGoogleAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const data = await getRequest("/auth/google_login");

      if (data.redirectUrl) {
        window.location.href = data.redirectUrl;
      } else if (data.authUrl) {
        window.location.href = data.authUrl;
      } else {
        console.log("Authentication response:", data);

        if (data.token) {
          localStorage.setItem("authToken", data.token);

          window.location.href = "/dashboard";
          toast.success("Successfully signed in!");
        }
      }
    } catch (error) {
      console.error("Google login error:", error);
      toast.error("Failed to sign in with Google");
      setIsLoading(false);
    }
  };

  return {
    handleGoogleLogin,
    isLoading,
  };
};
