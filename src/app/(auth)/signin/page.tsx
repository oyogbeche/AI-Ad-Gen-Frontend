"use client"

import { SignInForm } from "@/app/(auth)/signin/sign-in-form";
//import { useRouter } from "next/navigation";
//import { useEffect } from "react";

const Login = () => {



  //const router = useRouter();

/*   useEffect(() => {
    if (status === "authenticated") {
      // Redirect to the dashboard if the user is authenticated
      router.push("/dashboard");
    }
  }, [status, router]); */

/*   if (status === "loading") {
    return <div>Loading...</div>; // Optionally, add a loading state
  } */

  return (
   <div className="pt-[30px] px-3 bg-[#F9FAFB]">
        <SignInForm  />
        </div>
  );
};

export default Login;
