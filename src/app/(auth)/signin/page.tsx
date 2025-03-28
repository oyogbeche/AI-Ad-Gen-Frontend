"use client";

import AuthForm from "@/app/(auth)/signin/sign-in-form";
import Loader from "@/components/ui/loader";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const LoginContent = () => {
  const searchParams = useSearchParams();
  const type = (searchParams.get("type") as "signin" | "signup") || "signin";
  return <AuthForm type={type} />;
};

const Login = () => {
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
export default Login;

