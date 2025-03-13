"use client";
import {
  adSizeOptions,
  ageGroupOptions,
  demographicsOptions,
  languageOptions,
  regionOptions,
} from "@/domains/ads-gen/utils/step-one-form-options";
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
import Loader from "@/components/ui/loader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ImageAdSchema } from "@/schemas/ad-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import { MouseEventHandler, useEffect, useState } from "react";
// import {  MouseEventHandler } from "react";
import { useForm } from "react-hook-form";
import { ImageAdFormData } from "../types";
import BackButton from "./back-button";
import { useSubmitCampaign } from "../api/use-submit-campaign";
import { X } from "lucide-react";
import Link from "next/link";

// import { X } from "lucide-react";
// import Link from "next/link";

const DesktopMultiSelect = dynamic(
  () => import("@/components/ui/multi-select"),
  {
    ssr: false,
  }
);

const MobileSelectBottomSheet = dynamic(
  () => import("@/components/ui/mobile-select"),
  {
    ssr: false,
  }
);

const MobileMultiSelectBottomSheet = dynamic(
  () => import("@/components/ui/mobile-multi-select"),
  {
    ssr: false,
  }
);

export const ImageAdForm = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const [allRequiredFieldsFilled, setAllRequiredFieldsFilled] = useState(false);

  const mutation = useSubmitCampaign();

  const form = useForm<ImageAdFormData>({
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

  useEffect(() => {
    const savedData = localStorage.getItem("imageAdData");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData) as ImageAdFormData;
        form.setValue("productName", parsedData.productName || "");
        form.setValue("demographics", parsedData.demographics || "");
        form.setValue("region", parsedData.region || "");
        form.setValue("ageGroup", parsedData.ageGroup || []);
        form.setValue("adSize", parsedData.adSize || "");
        form.setValue("language", parsedData.language || "");
        form.setValue("adGoal", parsedData.adGoal || "");
        form.trigger();
      } catch (error) {
        console.error("Error parsing saved data:", error);
      }
    }
    setIsFormLoaded(true);
  }, [form]);

  // Check if all required fields are filled
  useEffect(() => {
    const checkRequiredFields = () => {
      const {
        productName,
        demographics,
        region,
        ageGroup,
        adSize,
        language,
        adGoal,
      } = form.getValues();

      const requiredFieldsFilled =
        !!productName &&
        !!demographics &&
        !!region &&
        ageGroup.length > 0 &&
        !!adSize &&
        !!language &&
        !!adGoal &&
        adGoal.length >= 10;

      setAllRequiredFieldsFilled(requiredFieldsFilled);
    };

    const subscription = form.watch(checkRequiredFields);
    checkRequiredFields();
    return () => subscription.unsubscribe();
  }, [form]);

  const formatPayload = (formData: ImageAdFormData) => ({
    product_name: formData.productName,
    ad_goal: formData.adGoal,
    ad_size: formData.adSize,
    target_region: formData.region,
    demographic: formData.demographics,
    target_age_groups: formData.ageGroup,
    ad_language: formData.language,
  });

  const onSubmit = (data: ImageAdFormData) => {
    try {
      localStorage.setItem("imageAdData", JSON.stringify(data));
      mutation.mutate(formatPayload(data));
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  };

  interface SelectOption {
    label: string;
    value: string;
    display?: string;
    aspectRatio?: string;
  }

  const getSelectLabel = (options: SelectOption[], value: string): string => {
    if (!value) return "";
    const option = options.find((opt) => opt.value === value);
    return option ? option.label : "";
  };

  const getAdSizeLabel = (value: string): string => {
    if (!value) return "Choose Ad Size";
    const option = adSizeOptions.find((opt) => opt.value === value);
    return option ? option.display : "Choose Ad Size";
  };

  if (!isFormLoaded) {
    return (
      <div className="min-h-full bg-[#F9FAFB] p-6 py-18 flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-full bg-[#F9FAFB] py-6 pt-10 flex flex-col justify-center items-center">
      <Card className="w-full max-w-[890px] border-none shadow-none py-0">
        <CardContent className="px-4 md:px-8 py-6">
          <BackButton className="mb-8" />
          <CardHeader className="mb-6 md:mb-10 text-center px-0">
            <CardTitle className="text-[28px] leading-[36px] text-[#121316] font-semibold">
              Let&apos;s set up your Ad
            </CardTitle>
            <p className="text-[#667185] text-sm md:text-[18px] font-normal mt-1">
              Fill in the details below, then AI generates your ad instantly.
            </p>
          </CardHeader>
          <div className="max-w-[342px] w-full mx-auto flex flex-col gap-6 mb-6 md:mb-10">
            <div className="flex items-center justify-center gap-1 max-w-[295px] w-full mx-auto ">
              <div className="w-6 h-6 border-3 border-[#458DE1] rounded-full"></div>
              <div className="h-[3px] max-w-[180px] sm:max-w-[239px] w-full bg-[#458DE1] rounded-full"></div>
              <div className="w-6 h-6 border-3 border-[#CFCFCF] rounded-full"></div>
            </div>
            <div className="w-full flex items-center justify-between text-base font-bold">
              <p className="text-[#1671D9] leading-5">Enter Ad Details</p>
              <p className="text-[#A1A1A1] leading-6">Your Generated Ad</p>
            </div>
          </div>
          {mutation.isPending ? (
            <Loader fullscreen={false} message="Generating Ad Please wait..." />
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border py-8 md:py-10 px-4 md:px-6 rounded-[8px] border-[#ECECEC]">
                  <FormField
                    control={form.control}
                    name="productName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-normal text-[#121316]">
                          Product Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter Ad Title"
                            className="w-full border-[#E4E7EC] text-[#121316] text-sm font-normal leading-5 focus:ring-[#B800B8] focus:border-[#E9B0E9] h-11 md:h-[56px] outline-0"
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
                        <FormLabel className="text-sm font-normal text-[#121316]">
                          Demographics
                        </FormLabel>
                        <FormControl>
                          {isMobile ? (
                            <MobileSelectBottomSheet
                              options={demographicsOptions}
                              selected={field.value}
                              onChange={field.onChange}
                              placeholder="Select demographics"
                              title="Target Audience Demographics"
                            />
                          ) : (
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <SelectTrigger className="w-full border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] h-[56px]">
                                <SelectValue placeholder="Select demographics">
                                  {getSelectLabel(
                                    demographicsOptions,
                                    field.value
                                  )}
                                </SelectValue>
                              </SelectTrigger>
                              <SelectContent>
                                {demographicsOptions.map((option) => (
                                  <SelectItem
                                    key={option.value}
                                    value={option.value}
                                    className="py-2 hover:bg-[#F6F6F6] text-[#121316]"
                                  >
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="region"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-normal text-[#121316]">
                          Target Region
                        </FormLabel>
                        <FormControl>
                          {isMobile ? (
                            <MobileSelectBottomSheet
                              options={regionOptions}
                              selected={field.value}
                              onChange={field.onChange}
                              placeholder="Select Region"
                              title="Target Audience Region"
                            />
                          ) : (
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <SelectTrigger className="w-full border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] h-[56px]">
                                <SelectValue placeholder="Select Region">
                                  {getSelectLabel(regionOptions, field.value)}
                                </SelectValue>
                              </SelectTrigger>
                              <SelectContent>
                                {regionOptions.map((option) => (
                                  <SelectItem
                                    key={option.value}
                                    value={option.value}
                                    className="py-2 hover:bg-[#F6F6F6] text-[#121316]"
                                  >
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="ageGroup"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-normal text-[#121316]">
                          Target Age Group (2 max)
                        </FormLabel>
                        <FormControl>
                          {isMobile ? (
                            <MobileMultiSelectBottomSheet
                              options={ageGroupOptions}
                              selected={field.value || []}
                              onChange={field.onChange}
                              placeholder="Select Age Group"
                              title="Target Age Group"
                            />
                          ) : (
                            <DesktopMultiSelect
                              options={ageGroupOptions}
                              selected={field.value || []}
                              onChange={field.onChange}
                              placeholder="Select Age Group"
                            />
                          )}
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
                        <FormLabel className="text-sm font-normal text-[#121316]">
                          Ad Size
                        </FormLabel>
                        <FormControl>
                          {isMobile ? (
                            <MobileSelectBottomSheet
                              options={adSizeOptions}
                              selected={field.value}
                              onChange={field.onChange}
                              placeholder="Choose Ad Size"
                              title="Ad Size"
                            />
                          ) : (
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <SelectTrigger className="w-full border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] flex justify-between items-center h-[56px]">
                                <SelectValue placeholder="Choose Ad Size">
                                  {getAdSizeLabel(field.value)}
                                </SelectValue>
                              </SelectTrigger>
                              <SelectContent>
                                {adSizeOptions.map((option) => (
                                  <SelectItem
                                    key={option.value}
                                    value={option.value}
                                    className="py-2 hover:bg-[#F6F6F6] text-[#121316]"
                                  >
                                    <div className="flex items-center space-x-2 py-1">
                                      <div
                                        className={`border border-[#121316] ${option.aspectRatio}`}
                                      />
                                      <span>{option.label}</span>
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="language"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-normal text-[#121316]">
                          Ad Language
                        </FormLabel>
                        <FormControl>
                          {isMobile ? (
                            <MobileSelectBottomSheet
                              options={languageOptions}
                              selected={field.value}
                              onChange={field.onChange}
                              placeholder="Select a Language"
                              title="Ad Language"
                            />
                          ) : (
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <SelectTrigger className="w-full border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] h-[56px]">
                                <SelectValue placeholder="Select a Language">
                                  {getSelectLabel(languageOptions, field.value)}
                                </SelectValue>
                              </SelectTrigger>
                              <SelectContent>
                                {languageOptions.map((option) => (
                                  <SelectItem
                                    key={option.value}
                                    value={option.value}
                                    className="py-2 hover:bg-[#F6F6F6] text-[#121316]"
                                  >
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="adGoal"
                    render={({ field }) => (
                      <FormItem className="col-span-1 md:col-span-2">
                        <FormLabel className="text-sm font-normal text-[#121316]">
                          Ad Goal
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your Ad goal and message (min 10 characters)"
                            className="w-full min-h-[100px] border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] text-sm leading-5 text-[#121316]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    disabled={!allRequiredFieldsFilled}
                    className={`px-6 py-3 h-12 text-base rounded-md transition-colors text-white shadow-none md:mt-[13px] w-full md:w-fit ${
                      allRequiredFieldsFilled
                        ? "bg-[#B800B8] hover:bg-[#960096] cursor-pointer"
                        : "bg-[#EAC8F0] cursor-not-allowed"
                    }`}
                  >
                    Generate Ad
                  </Button>
                </div>
              </form>
            </Form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageAdForm;
