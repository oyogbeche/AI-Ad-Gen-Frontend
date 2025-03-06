"use client"
import react, { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Nunito } from "next/font/google";
import { EyeOff, EyeIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";



const nunito = Nunito({
    variable: "--font-nunito",
    subsets: ["latin"],
  });

export default function SetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const isPasswordMatch = password && confirmPassword && password === confirmPassword;
  const isButtonDisabled = !password || !confirmPassword || !isPasswordMatch;
  const maskPassword = (value) => value.replace(/./g, "×");
  const [loading, setLoading] = useState(false);
  const router = useRouter();



  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (isButtonDisabled) return;

    setLoading(true);

    setTimeout(() => {
      router.push("/completed");
    }, 2000);
  };
  

  return (
    <div className={nunito.className}>
      <Card className="space-y-4 md:w-[555px]  flex-grow">
        <Link href="/verify-email">
        <p className="flex gap-2 pl-5 cursor-pointer">
          <ArrowLeft /> Back
        </p>
        </Link>

        <CardHeader className="space-y-3 mt-5">
          <h1 className="text-xl md:text-3xl font-bold">Set password</h1>
          <p className="text-xs md:text-sm text-gray-400">
            Create password for your account
          </p>
        </CardHeader>

        <CardContent>
          <form onClick={handleSubmit}>
          <div className="grid w-full items-center gap-4 mb-5">
              <div className="flex flex-col space-y-1.5 relative">
                <label htmlFor="password">Choose password</label>
                <div className="relative">
                  <input
                    type="text"
                    id="password"
                    placeholder="Create a password"
                    value={showPassword ? password : maskPassword(password)}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-4 border border-[#B800B8] rounded-md focus:outline-none focus:bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-4 focus:outline-none text-gray-400"
                  >
                    {showPassword ? <EyeIcon /> : <EyeOff /> }
                  </button>
                </div>
              </div>

              <div className="flex flex-col space-y-1.5 relative">
                <label htmlFor="confirm-password">Confirm password</label>
                <div className="relative">
                  <input
                    type="text"
                    id="confirm-password"
                    placeholder="Retype your password"
                    value={showConfirmPassword ? confirmPassword : maskPassword(confirmPassword)}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full p-4 border border-[#B800B8] rounded-md focus:outline-none focus:bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-4 focus:outline-none text-gray-400"
                  >
                    {showConfirmPassword ? <EyeIcon /> : <EyeOff /> }
                  </button>
                </div>
                {!isPasswordMatch && confirmPassword && (
                  <p className="text-red-500 mt-1">Password doesn't match</p>
                )}
              </div>
            </div>

            <Button
              type="submit"
              className={`w-full py-6 mt-3 font-light ${
                isButtonDisabled ? "bg-[#EAC8F0] cursor-not-allowed" : "bg-[#B800B8] cursor-pointer hover:bg-[#b800b8e7]"
              }`}
              disabled={isButtonDisabled}
            >
              {loading ? "Processing..." : "Proceed"}
            </Button>
          </form>
        </CardContent>
      </Card>


    </div>
  );
}
