"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ImageAdSchema } from "@/schemas/ad-schema";

export const ImageAdForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(ImageAdSchema),
    mode: "onChange",
  });

  const onSubmit = (data: z.infer<typeof ImageAdSchema>) => {
    console.log("Image Ad Data:", data);
    router.push("/ad-preview");
  };

  const handleBack = () => {
    router.push("/ad-selector");
  };

  return (
    <div className="min-h-full bg-[#F9FAFB] p-6 py-18 flex justify-center items-center">
      <div className="w-[890px] bg-white border rounded-md p-14">
        <div className="mb-8">
          <button
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            <ChevronLeft className="mr-2" />
            <span>Back</span>
          </button>
        </div>

        <h2 className="text-2xl font-bold mb-6">Create Image Ad</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("image")}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.image
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-[#B800B8]"
              }`}
            />
            {errors.image && (
              <p className="text-red-500 text-xs mt-1">
                {errors.image.message as string}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ad Title
            </label>
            <input
              type="text"
              {...register("adTitle")}
              placeholder="Enter ad title"
              className={`w-full px-3 py-2 border rounded-md ${
                errors.adTitle
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-[#B800B8]"
              }`}
            />
            {errors.adTitle && (
              <p className="text-red-500 text-xs mt-1">
                {errors.adTitle.message as string}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              {...register("description")}
              placeholder="Enter ad description"
              className={`w-full px-3 py-2 border rounded-md h-24 ${
                errors.description
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-[#B800B8]"
              }`}
            />
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">
                {errors.description.message as string}
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!isValid}
              className={`px-6 py-3 rounded-md transition-colors ${
                isValid
                  ? "bg-[#B800B8] text-white hover:bg-[#960096]"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
