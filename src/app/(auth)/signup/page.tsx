"use client";

import AuthForm from "@/app/(auth)/signin/sign-in-form";
import Loader from "@/components/ui/loader";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const LoginContent = () => {
  const searchParams = useSearchParams();
  const type = (searchParams.get("type") as "signin" | "signup") || "signup";
  return <AuthForm type={type} />;
};

const Signup = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }
    >
      <LoginContent />
    </Suspense>
  );
};
export default Signup;
