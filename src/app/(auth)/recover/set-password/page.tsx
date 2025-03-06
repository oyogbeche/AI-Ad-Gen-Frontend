"use client";
import { Eye } from "@/components/icons/icon";
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
import { ArrowLeft, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const page = () => {
  const [isVisible, setIsVisible] = useState([false, false]);
  const router = useRouter();
  const handleBack = () => {
    router.push("/sign-in");
  };
  const formSchema = z
    .object({
      password: z.string().min(8, {
        message: "Password can't be less than 8 caracters",
      }),
      passwordConfirm: z.string(),
    })
    .refine((data) => data.password === data.passwordConfirm, {
      message: "Passwords doesn't match",
      path: ["passwordConfirm"],
    });

  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });
  const isFormValid = form.formState.isValid;

  const handleSubmit = (data: { password: string }) => {
    router.push(`/recover/recover-completed`);
  };
  const handleVisible = (num: number) => {
    const tab = [...isVisible];
    tab[num] = !tab[num];
    setIsVisible(tab);
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
            New password
          </h1>
          <p className="max-w-[475px] text-[#5F5F5F]">
            Create a new password for your account
          </p>
        </hgroup>
        <Form {...form}>
          <form
            className="flex flex-col gap-10"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => {
                return (
                  <FormItem className="flex flex-col gap-2">
                    <FormLabel className="text-[#121316] text-sm">
                      Choose a password{" "}
                    </FormLabel>
                    <FormControl>
                      <div className="relative h-12">
                        <Input
                          {...field}
                          type={isVisible[0] ? "text" : "password"}
                          placeholder="Enter your password"
                          className="h-14"
                        />
                        <picture onClick={() => handleVisible(0)}>
                          {!isVisible[0] ? (
                            <Eye className="size-5 absolute top-[18px] right-2" />
                          ) : (
                            <EyeOff className="size-5 absolute top-[18px] right-2" />
                          )}
                        </picture>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="passwordConfirm"
              render={({ field }) => {
                return (
                  <FormItem className="flex flex-col gap-2">
                    <FormLabel className="text-[#121316] text-sm">
                      Retype password{" "}
                    </FormLabel>
                    <FormControl>
                      <div className="relative h-12">
                        <Input
                          {...field}
                          type={isVisible[1] ? "text" : "password"}
                          placeholder="Enter your password"
                          className="h-14"
                        />
                        <picture onClick={() => handleVisible(1)}>
                          {isVisible[1] ? (
                            <EyeOff className="size-5 absolute top-[18px] right-2" />
                          ) : (
                            <Eye className="size-5 absolute top-[18px] right-2" />
                          )}
                        </picture>
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
              Proceed
            </Button>
          </form>
        </Form>
      </section>
    </main>
  );
};
export default page;
