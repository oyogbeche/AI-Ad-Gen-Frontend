"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

const Page = () => {
  const router = useRouter();
  const handleBack = () => {
    router.push("/");
  };
  const formSchema = z.object({
    email: z.string().email({
      message: "Email invalid",
    }),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });
  const isFormValid = form.formState.isValid;

  const handleSubmit = (data: { email: string }) => {
    router.push(
      `/recover/verification?email=${encodeURIComponent(data.email)}`
    );
  };

  return (
    <main className="mt-[153px] mb-[169px] p-10 flex flex-col gap-14 border border-[#E8E9E9] rounded-2xl bg-white w-fit m-auto">
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
            Recover your account
          </h1>
          <p className="max-w-[475px] text-[#5F5F5F]">
            Forgot your password? No worries, then let’s submit password reset.
            It will be send to your email.
          </p>
        </hgroup>
        <Form {...form}>
          <form
            className="flex flex-col gap-10"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return (
                  <FormItem className="flex flex-col gap-2">
                    <FormLabel className="text-[#121316] text-sm">
                      Email{" "}
                    </FormLabel>
                    <FormControl>
                      <div className="relative h-12">
                        <Input
                          {...field}
                          type="email"
                          placeholder="Enter your Email"
                          className="h-14"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
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
        Already have an account?{" "}
        <span className="font-bold text-[#458DE1]">
          <Link href="/signin">Sign In</Link>
        </span>
      </p>
    </main>
  );
};
export default Page;
