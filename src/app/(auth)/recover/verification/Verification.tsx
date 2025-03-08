
"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

const Verification = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email");
  const handleBack = () => {
    router.push("/recover");
  };
  const formSchema = z
    .object({
      pin: z.string().min(6, { message: "OTP code must 6 letters" }),
    })
    .refine((data) => data.pin == "123456", {
      message: "Invalid OTP code, Please try again.",
      path: ["pin"],
    });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });
  const isFormValid = form.formState.isValid;

  const handleSubmit = () => {
    router.push("/recover/set-password");
  };

  return (
    <main className="mt-[153px] mb-[169px] sm:min-w-[555px] p-10 flex flex-col gap-14 border border-[#E8E9E9] rounded-2xl bg-white w-fit m-auto">
      <section>
        <button
          onClick={handleBack}
          className="flex items-center text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          <ArrowLeft className="mr-2" />
          <span>Back</span>
        </button>
      </section>
      <section>
        <hgroup className="pb-10">
          <h1 className="pb-4 font-bold text-[40px] tracking-[-0.01em]">
            Verify Your Email
          </h1>
          <p className="max-w-[475px] text-[#5F5F5F]">
            An OTP has been sent to your email {email}
          </p>
        </hgroup>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-10"
          >
            <FormField
              control={form.control}
              name="pin"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputOTP maxLength={6} {...field} className="w-full">
                      <InputOTPGroup className="flex gap-2 w-full">
                        <InputOTPSlot
                          index={0}
                          className={`flex-[1] h-[40px] md:h-[80px]  rounded-[8px] ${
                            isFormValid || "border-[#E9B0E9]"
                          }`}
                        />
                        <InputOTPSlot
                          index={1}
                          className={`flex-[1] h-[40px] md:h-[80px]  rounded-[8px] ${
                            isFormValid || "border-[#E9B0E9]"
                          }`}
                        />
                        <InputOTPSlot
                          index={2}
                          className={`flex-[1] h-[40px] md:h-[80px]  rounded-[8px] ${
                            isFormValid || "border-[#E9B0E9]"
                          }`}
                        />
                        <InputOTPSlot
                          index={3}
                          className={`flex-[1] h-[40px] md:h-[80px]  rounded-[8px] ${
                            isFormValid || "border-[#E9B0E9]"
                          }`}
                        />
                        <InputOTPSlot
                          index={4}
                          className={`flex-[1] h-[40px] md:h-[80px]  rounded-[8px] ${
                            isFormValid || "border-[#E9B0E9]"
                          }`}
                        />
                        <InputOTPSlot
                          index={5}
                          className={`flex-[1] h-[40px] md:h-[80px]  rounded-[8px] ${
                            isFormValid || "border-[#E9B0E9]"
                          }`}
                        />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="h-12 bg-[#B800B8] rounded-[6px] hover:cursor-pointer hover:bg-[#b800b8d7]"
              type="submit"
              disabled={!isFormValid}
            >
              Sign in
            </Button>
          </form>
        </Form>
      </section>
      <p>
        Didn’t get OTP?{" "}
        <span className="font-bold text-[#458DE1]">
          <Link href={"/recover"}>Resend</Link>
        </span>
      </p>
    </main>
  );
};
export default Verification;
