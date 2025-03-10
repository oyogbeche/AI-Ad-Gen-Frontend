import { useRouter } from "next/navigation";
import { useState } from "react";

export const useGoogleAuth = () => {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleGoogleSignIn = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/callback/google`;
  };
  const handleAuthCallback = () => {
    // Extract the token and user details from the query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const userData = urlParams.get("user");
    if (token && userData) {
      localStorage.setItem("authToken", token);
      // Parse user details  and decode if it is in an encoded format from the backednd
      const user = JSON.parse(decodeURIComponent(userData));
      setUser(user);
      setIsLoggedIn(true);
      console.log("User details:", user);
      router.push("/");
    } else {
      console.error("Authentication failed");
      router.push("/");
      setIsLoggedIn(false);
    }
  };
  return {
    handleGoogleSignIn,
    handleAuthCallback,
    user,
    isLoggedIn,
  };
};
