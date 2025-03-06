"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
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
import CustomMultiSelect from "@/components/ui/multi-select";
import {
  demographicsOptions,
  regionOptions,
  adSizeOptions,
  languageOptions,
  ageGroupOptions,
} from "@/app/constants/step-one-form-options";
import { ImageAdSchema } from "@/schemas/ad-schema";

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
  };

  const handleBack = () => {
    router.push("/ad-selector");
  };

  return (
    <div className="min-h-full bg-[#F9FAFB] p-6 py-18 flex justify-center items-center">
      <Card className="w-full max-w-[890px]">
        <CardContent className="p-14">
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={handleBack}
              className="flex items-center text-gray-600 hover:text-gray-800 cursor-pointer p-0"
            >
              <img src="/arrow-left.svg" alt="Back" className="w-5 h-5 mr-2" />
              <span>Back</span>
            </Button>
          </div>

          <CardHeader className="p-0 mb-6 text-center">
          <CardTitle className="text-2xl font-bold">
          Let&apos;s set up your Ad
          </CardTitle>
    <p className="text-gray-500 mt-2">
      Fill in the details below, then AI generates your ad instantly.
    </p>
        </CardHeader>

    <div className="mb-8">
 
   <div className="flex justify-around items-center">
    
    <div className="text-center">
      <p className="text-sm text-black font-medium">STEP 1</p>
      <p className="text-xs mt-1 text-gray-700">Set Ad goals</p>
    </div>
    
    <div className="text-center">
      <p className="text-sm text-gray-400 font-medium">STEP 2</p>
      <p className="text-xs mt-1 text-gray-400">Preview</p>
    </div>
  </div>

 
  <div className="relative w-full h-2 bg-white-200 rounded-full mt-4 mb-4">
    
  <div className="absolute left-0 h-2 bg-[#1467C5] rounded-l-full w-[48%]"></div>
   
    <div className="absolute right-0 h-2 bg-gray-300 rounded-r-full w-[48%]"></div>
  </div>
</div>

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
                        <CustomMultiSelect
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
                      ? "bg-[#B800B8] text-white hover:bg-[#960096]"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Generate Ad
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
