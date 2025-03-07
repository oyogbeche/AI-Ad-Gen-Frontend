"use client";
import {
  adSizeOptions,
  ageGroupOptions,
  demographicsOptions,
  languageOptions,
  regionOptions,
} from "@/app/constants/step-one-form-options";
import BackButton from "@/components/back-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MultiSelect } from "@/components/ui/multi-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ImageAdSchema } from "@/schemas/ad-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ModifiedImageAdSchema = ImageAdSchema.refine(
  (data) => !data.ageGroup || data.ageGroup.length <= 2,
  {
    message: "You can select a maximum of 2 age groups",
    path: ["ageGroup"],
  }
);

type FormData = z.infer<typeof ModifiedImageAdSchema>;

export const ImageAdForm = () => {
  const router = useRouter();
  const [ageGroupError, setAgeGroupError] = useState("");

  const form = useForm<FormData>({
    resolver: zodResolver(ModifiedImageAdSchema),
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

  const handleAgeGroupChange = (values: string[]) => {
    if (values.length > 2) {
      setAgeGroupError("You can select a maximum of 2 age groups");
      form.setValue("ageGroup", values.slice(0, 2));
    } else {
      setAgeGroupError("");
      form.setValue("ageGroup", values);
    }
  };

  const onSubmit = (data: FormData) => {
    console.log("Image Ad Data:", data);
    router.push("/create-ad/preview");
  };

  return (
    <div className="min-h-full bg-[#F9FAFB] px-6 p-[36px] md:pt-10 pb-10 md:pb-18 flex justify-center items-center">
      <Card className="w-full max-w-[890px] shadow-none border-none">
        <CardContent className="px-4 md:px-6">
          <BackButton className="mb-8" />

          <CardHeader className="p-0 mb-6 text-left md:text-center">
            <CardTitle className="text-[28px] font-semibold leading-[36px]">
              Let&apos;s set up your Ad
            </CardTitle>
            <p className="text-gray-500 mt-1">
              Fill in the details below, then AI generates your ad instantly.
            </p>
          </CardHeader>

          <div className="flex items-center justify-between gap-2 mt-8 w-full mb-[47px]">
            <div className="relative flex flex-col justify-center items-center text-center w-1/2 pb-6">
              <p className="text-sm text-black font-medium">STEP 1</p>
              <p className="text-xs mt-1 text-gray-700">Set Ad goals</p>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1.5 bg-[#1467C5] rounded-full"></div>
            </div>
            <svg
              width="2"
              height="24"
              viewBox="0 0 2 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1"
                y1="4.37114e-08"
                x2="0.999999"
                y2="24"
                stroke="#CFCFCF"
                strokeWidth="2"
              />
            </svg>

            <div className="relative flex flex-col justify-center items-center text-center w-1/2 pb-6">
              <p className="text-sm text-gray-400 font-medium">STEP 2</p>
              <p className="text-xs mt-1 text-gray-400">Preview</p>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1.5 bg-[#E8F1FB] rounded-full"></div>
            </div>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 py-6 md:py-10 px-4 md:px-6 border border-[#ECECEC] rounded-[8px]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="productName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium leading-6 text-[#121316]">
                        Product Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Ad Title"
                          className="w-full border-gray-300 border-1 outline-none focus:ring-[#B800B8] focus:border-[#B800B8] py-[18px] px-4 text-sm"
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
                      <FormLabel className="text-sm font-medium leading-6 text-[#121316]">
                        Demographics
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] py-[18px] px-4 text-sm">
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
                      <FormLabel className="text-sm font-medium leading-6 text-[#121316]">
                        Target Region
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] py-[18px] px-4 text-sm">
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
                      <FormLabel className="text-sm font-medium leading-6 text-[#121316]">
                        Target Age Group (2 max)
                      </FormLabel>
                      <FormControl>
                        <MultiSelect
                          options={ageGroupOptions}
                          selected={field.value || []}
                          onChange={handleAgeGroupChange}
                          placeholder="Select Age Group"
                          emptyMessage="No age groups found."
                        />
                      </FormControl>
                      {ageGroupError && (
                        <p className="text-red-500 text-xs mt-1">
                          {ageGroupError}
                        </p>
                      )}
                      <FormMessage className="text-red-500 text-xs mt-1" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="adSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium leading-6 text-[#121316]">
                        Ad Size
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] flex justify-between items-center py-[18px] px-4 text-sm">
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
                      <FormLabel className="text-sm font-medium leading-6 text-[#121316]">
                        Ad Language
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] py-[18px] px-4 text-sm">
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
                    <FormLabel className="text-sm font-medium leading-6 text-[#121316]">
                      Ad Goal
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your Ad goal and message"
                        className="w-full min-h-[163px] md:min-h-[100px] border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] py-3 md:py-[18px] px-4 text-sm"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs mt-1" />
                  </FormItem>
                )}
              />
            </form>
          </Form>

          <div className="flex justify-end mt-6 md:mt-[47px]">
            <Button
              type="submit"
              disabled={!form.formState.isValid}
              className={`px-6 py-5 text-base leading-6 rounded-[6px] transition-colors max-md:w-full ${
                form.formState.isValid
                  ? "bg-[#B800B8] text-white hover:bg-[#960096] cursor-pointer"
                  : "bg-[#EAC8F0] text-white  cursor-not-allowed"
              }`}
            >
              Generate Ad
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
