"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const hancleClick = () => {
    router.push("/");
  };
  return (
    <main className="mt-[153px] mb-[169px] sm:min-w-[555px] p-10 flex flex-col border border-[#E8E9E9] rounded-2xl bg-white w-fit m-auto">
      <picture className="w-full flex justify-center">
        <Image
          src={"/confirm.svg"}
          alt="confirm icon"
          height={120}
          width={120}
        />
      </picture>
      <section>
        <hgroup>
          <h1 className="pb-4 font-bold text-[40px] max-w-[80%] text-center tracking-[-0.01em] m-auto">
            Password Reset Successful
          </h1>
          <p className="max-w-[475px] text-[#5F5F5F] text-center">
            You can now sign in using your new password.
          </p>
        </hgroup>
      </section>
      <Button
        className="h-12 bg-[#B800B8] rounded-[6px] hover:cursor-pointer hover:bg-[#b800b8d7] mt-10"
        onClick={hancleClick}
      >
        Back to Sign in
      </Button>
    </main>
  );
};
export default page;
