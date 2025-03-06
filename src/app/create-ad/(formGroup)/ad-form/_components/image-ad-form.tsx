"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  demographicsOptions,
  regionOptions,
  adSizeOptions,
  languageOptions,
  ageGroupOptions,
} from "@/app/constants/step-one-form-options";
import { ImageAdSchema } from "@/schemas/ad-schema";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
const DynamicMultiSelect = dynamic(
  () => import("@/components/ui/multi-select"),
  {
    ssr: false,
  }
);

type FormData = z.infer<typeof ImageAdSchema>;

export const ImageAdForm = () => {
  const router = useRouter();
  const form = useForm<FormData>({
    resolver: zodResolver(ImageAdSchema),
    mode: "onChange",
    defaultValues: {
      productName: "",
      demographics: "",
      region: "",
      ageGroup: [],
      adSize: "",
      language: "",
      adGoal: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Image Ad Data:", data);
    router.push("/preview");
  };

  return (

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="productName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Product Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Ad Title"
                          className="w-full border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs mt-1" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="demographics"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Demographics
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8]">
                            <SelectValue placeholder="Select demographics" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {demographicsOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-500 text-xs mt-1" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="region"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Target Region
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8]">
                            <SelectValue placeholder="Select Region" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {regionOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-500 text-xs mt-1" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ageGroup"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Target Age Group
                      </FormLabel>
                      <FormControl>
                        <DynamicMultiSelect
                          options={ageGroupOptions}
                          selected={field.value || []}
                          onChange={field.onChange}
                          placeholder="Select Age Group"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs mt-1" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="adSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Ad Size
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] flex justify-between items-center">
                            <SelectValue placeholder="Choose Ad Size">
                              {field.value
                                ? adSizeOptions.find(
                                    (opt) => opt.value === field.value
                                  )?.display
                                : "Choose Ad Size"}
                            </SelectValue>
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {adSizeOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              <div className="flex items-center space-x-2">
                                {/* Shape Indicator */}
                                <div
                                  className={`border border-gray-500 ${option.aspectRatio} bg-gray-200`}
                                />
                                <span>{option.label}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-500 text-xs mt-1" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="language"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Ad Language
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8]">
                            <SelectValue placeholder="Select a Language" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {languageOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-500 text-xs mt-1" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="adGoal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Ad Goal
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your Ad goal and message"
                        className="w-full min-h-[100px] border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs mt-1" />
                  </FormItem>
                )}
              />

              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={!form.formState.isValid}
                  className={`px-6 py-3 rounded-md transition-colors ${
                    form.formState.isValid
                      ? "bg-[#B800B8] text-white hover:bg-[#960096] cursor-pointer"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <Link href='/create-ad/preview'>Generate Ad</Link>
                </Button>
              </div>
            </form>
          </Form>
  );
};
