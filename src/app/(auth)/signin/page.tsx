"use client";

import { SignInForm } from "@/app/(auth)/signin/sign-in-form";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const LoginContent = () => {
  const searchParams = useSearchParams();
  const type = (searchParams.get("type") as "signin" | "signup") || "signin";
  return <SignInForm type={type} />;
};

const Login = () => {
  return (
    <div className="pt-[30px] px-auto bg-[#F9FAFB]">
      <Suspense fallback={<div>Loading...</div>}>
        <LoginContent />
      </Suspense>
    </div>
  );
};
export default Login;
