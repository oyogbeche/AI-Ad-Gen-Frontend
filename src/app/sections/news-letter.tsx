"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: { email: string }) => {
    console.log("Subscribed with:", data);
  };

  return (
    <div className="bg-black text-white py-25 px-4 text-center flex flex-col gap-8">
      {/* Heading */}
      <p className="text-white text-[28px] font-semibold leading-[36px] text-center px-10 max-w-3xl mx-auto">
        Subscribe to our newsletter for the latest trends, AI-powered advert
        strategies, and exclusive offers
      </p>

      {/* Form Container */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row items-center justify-center gap-6"
      >
        {/* Email Input */}
        <div className="relative w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className="w-full px-4 py-3 border rounded-lg text-white focus:outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#C23CC3] text-white font-semibold px-6 py-3 rounded-lg transition hover:bg-[#a72ca7]"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  );
}
