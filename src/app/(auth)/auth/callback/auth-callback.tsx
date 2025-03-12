"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";

export default function AuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setToken = useAuthStore((state) => state.setToken);

  useEffect(() => {
    const token = searchParams.get("access_token");
    //const user = searchParams.get("user");

    if (token) {
      try {
       
        
        setToken(token);

        // Redirect to dashboard or home page
        router.push("/dashboard");
      } catch (error) {
        console.error("Error parsing user data:", error);
        router.push("/signin?error=invalid_data");
      }
    } else {
      router.push("/signin?error=missing_token");
    }
  }, [searchParams, router, setToken]);

  return <p>Authenticating...</p>;
}
