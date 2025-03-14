// "use client";
// import {
//   adSizeOptions,
//   ageGroupOptions,
//   demographicsOptions,
//   languageOptions,
//   regionOptions,
// } from "@/domains/ads-gen/utils/step-one-form-options";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import Loader from "@/components/ui/loader";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { useMediaQuery } from "@/hooks/use-media-query";
// import { ImageAdSchema } from "@/schemas/ad-schema";
// import { zodResolver } from "@hookform/resolvers/zod";
// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";
// // import {  MouseEventHandler } from "react";
// import { useForm } from "react-hook-form";

// import { ImageAdFormData } from "@/domains/ads-gen/types";
// import BackButton from "@/domains/ads-gen/components/back-button";
// import { useSubmitCampaign } from "@/domains/ads-gen/api/use-submit-campaign";

// // import { X } from "lucide-react";
// // import Link from "next/link";

// const DesktopMultiSelect = dynamic(
//   () => import("@/components/ui/multi-select"),
//   {
//     ssr: false,
//   }
// );

// const MobileSelectBottomSheet = dynamic(
//   () => import("@/components/ui/mobile-select"),
//   {
//     ssr: false,
//   }
// );

// const MobileMultiSelectBottomSheet = dynamic(
//   () => import("@/components/ui/mobile-multi-select"),
//   {
//     ssr: false,
//   }
// );

// export const ImageAdForm = () => {
//   const isMobile = useMediaQuery("(max-width: 768px)");
//   const [isFormLoaded, setIsFormLoaded] = useState(false);
//   const [allRequiredFieldsFilled, setAllRequiredFieldsFilled] = useState(false);

//   const mutation = useSubmitCampaign();

//   const form = useForm<ImageAdFormData>({
//     resolver: zodResolver(ImageAdSchema),
//     mode: "onChange",
//     defaultValues: {
//       productName: "",
//       demographics: "",
//       region: "",
//       ageGroup: [],
//       adSize: "",
//       language: "",
//       adGoal: "",
//     },
//   });

//   useEffect(() => {
//     const savedData = localStorage.getItem("imageAdData");
//     if (savedData) {
//       try {
//         const parsedData = JSON.parse(savedData) as ImageAdFormData;
//         form.setValue("productName", parsedData.productName || "");
//         form.setValue("demographics", parsedData.demographics || "");
//         form.setValue("region", parsedData.region || "");
//         form.setValue("ageGroup", parsedData.ageGroup || []);
//         form.setValue("adSize", parsedData.adSize || "");
//         form.setValue("language", parsedData.language || "");
//         form.setValue("adGoal", parsedData.adGoal || "");
//         form.trigger();
//       } catch (error) {
//         console.error("Error parsing saved data:", error);
//       }
//     }
//     setIsFormLoaded(true);
//   }, [form]);

//   // Check if all required fields are filled
//   useEffect(() => {
//     const checkRequiredFields = () => {
//       const {
//         productName,
//         demographics,
//         region,
//         ageGroup,
//         adSize,
//         language,
//         adGoal,
//       } = form.getValues();

//       const requiredFieldsFilled =
//         !!productName &&
//         !!demographics &&
//         !!region &&
//         ageGroup.length > 0 &&
//         !!adSize &&
//         !!language &&
//         !!adGoal &&
//         adGoal.length >= 10;

//       setAllRequiredFieldsFilled(requiredFieldsFilled);
//     };

//     const subscription = form.watch(checkRequiredFields);
//     checkRequiredFields();
//     return () => subscription.unsubscribe();
//   }, [form]);

//   const formatPayload = (formData: ImageAdFormData) => ({
//     product_name: formData.productName,
//     ad_goal: formData.adGoal,
//     ad_size: formData.adSize,
//     target_region: formData.region,
//     demographic: formData.demographics,
//     target_age_groups: formData.ageGroup,
//     ad_language: formData.language,
//   });

//   const onSubmit = (data: ImageAdFormData) => {
//     try {
//       localStorage.setItem("imageAdData", JSON.stringify(data));
//       mutation.mutate(formatPayload(data));
//     } catch (error) {
//       console.error("Error saving to localStorage", error);
//     }
//   };

//   interface SelectOption {
//     label: string;
//     value: string;
//     display?: string;
//     aspectRatio?: string;
//   }

//   const getSelectLabel = (options: SelectOption[], value: string): string => {
//     if (!value) return "";
//     const option = options.find((opt) => opt.value === value);
//     return option ? option.label : "";
//   };

//   const getAdSizeLabel = (value: string): string => {
//     if (!value) return "Choose Ad Size";
//     const option = adSizeOptions.find((opt) => opt.value === value);
//     return option ? option.display : "Choose Ad Size";
//   };

//   if (!isFormLoaded) {
//     return (
//       <div className="min-h-full bg-[#F9FAFB] p-6 py-18 flex justify-center items-center">
//         <Loader />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-full bg-[#F9FAFB] px-4 lg:px-8 xl:px-12 lg:pt-12 pt-8 pb-5 flex flex-col justify-center items-center w-full">
//       <Card className="w-full max-w-[1344px] bg-[#fff] px-4 lg:px-8 xl:px-10 pt-6 pb-10  border-none shadow-none rounded-[12px]">
//         <CardContent className="p-0">
//           <div className="py-3 mb-4">
//             <BackButton />
//           </div>
//           <CardHeader className="mb-6 md:mb-10  px-0 ">
//             <CardTitle className="text-[28px] leading-[36px] text-[#121316] font-semibold">
//               Let&apos;s set up your Ad
//             </CardTitle>
//             <p className="text-[#667185] text-sm md:text-[18px] font-normal mt-1">
//               Fill in the details below, then AI generates your ad instantly.
//             </p>
//           </CardHeader>

//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border py-8 md:py-10 px-4 md:px-6 rounded-[8px] border-[#ECECEC]">
//                 <FormField
//                   control={form.control}
//                   name="productName"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-sm font-normal text-[#121316]">
//                         Product Name
//                       </FormLabel>
//                       <FormControl>
//                         <Input
//                           placeholder="Enter Ad Title"
//                           className="w-full border-[#E4E7EC] text-[#121316] text-sm font-normal leading-5 focus:ring-[#B800B8] focus:border-[#E9B0E9] h-11 md:h-[56px] outline-0"
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage className="text-red-500 text-xs mt-1" />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="demographics"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-sm font-normal text-[#121316]">
//                         Demographics
//                       </FormLabel>
//                       <FormControl>
//                         {isMobile ? (
//                           <MobileSelectBottomSheet
//                             options={demographicsOptions}
//                             selected={field.value}
//                             onChange={field.onChange}
//                             placeholder="Select demographics"
//                             title="Target Audience Demographics"
//                           />
//                         ) : (
//                           <Select
//                             onValueChange={field.onChange}
//                             value={field.value}
//                           >
//                             <SelectTrigger className="w-full border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] h-[56px]">
//                               <SelectValue placeholder="Select demographics">
//                                 {getSelectLabel(
//                                   demographicsOptions,
//                                   field.value
//                                 )}
//                               </SelectValue>
//                             </SelectTrigger>
//                             <SelectContent>
//                               {demographicsOptions.map((option) => (
//                                 <SelectItem
//                                   key={option.value}
//                                   value={option.value}
//                                   className="py-2 hover:bg-[#F6F6F6] text-[#121316]"
//                                 >
//                                   {option.label}
//                                 </SelectItem>
//                               ))}
//                             </SelectContent>
//                           </Select>
//                         )}
//                       </FormControl>
//                       <FormMessage className="text-red-500 text-xs mt-1" />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="region"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-sm font-normal text-[#121316]">
//                         Target Region
//                       </FormLabel>
//                       <FormControl>
//                         {isMobile ? (
//                           <MobileSelectBottomSheet
//                             options={regionOptions}
//                             selected={field.value}
//                             onChange={field.onChange}
//                             placeholder="Select Region"
//                             title="Target Audience Region"
//                           />
//                         ) : (
//                           <Select
//                             onValueChange={field.onChange}
//                             value={field.value}
//                           >
//                             <SelectTrigger className="w-full border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] h-[56px]">
//                               <SelectValue placeholder="Select Region">
//                                 {getSelectLabel(regionOptions, field.value)}
//                               </SelectValue>
//                             </SelectTrigger>
//                             <SelectContent>
//                               {regionOptions.map((option) => (
//                                 <SelectItem
//                                   key={option.value}
//                                   value={option.value}
//                                   className="py-2 hover:bg-[#F6F6F6] text-[#121316]"
//                                 >
//                                   {option.label}
//                                 </SelectItem>
//                               ))}
//                             </SelectContent>
//                           </Select>
//                         )}
//                       </FormControl>
//                       <FormMessage className="text-red-500 text-xs mt-1" />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="ageGroup"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-sm font-normal text-[#121316]">
//                         Target Age Group (2 max)
//                       </FormLabel>
//                       <FormControl>
//                         {isMobile ? (
//                           <MobileMultiSelectBottomSheet
//                             options={ageGroupOptions}
//                             selected={field.value || []}
//                             onChange={field.onChange}
//                             placeholder="Select Age Group"
//                             title="Target Age Group"
//                           />
//                         ) : (
//                           <DesktopMultiSelect
//                             options={ageGroupOptions}
//                             selected={field.value || []}
//                             onChange={field.onChange}
//                             placeholder="Select Age Group"
//                           />
//                         )}
//                       </FormControl>
//                       <FormMessage className="text-red-500 text-xs mt-1" />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="adSize"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-sm font-normal text-[#121316]">
//                         Ad Size
//                       </FormLabel>
//                       <FormControl>
//                         {isMobile ? (
//                           <MobileSelectBottomSheet
//                             options={adSizeOptions}
//                             selected={field.value}
//                             onChange={field.onChange}
//                             placeholder="Choose Ad Size"
//                             title="Ad Size"
//                           />
//                         ) : (
//                           <Select
//                             onValueChange={field.onChange}
//                             value={field.value}
//                           >
//                             <SelectTrigger className="w-full border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] flex justify-between items-center h-[56px]">
//                               <SelectValue placeholder="Choose Ad Size">
//                                 {getAdSizeLabel(field.value)}
//                               </SelectValue>
//                             </SelectTrigger>
//                             <SelectContent>
//                               {adSizeOptions.map((option) => (
//                                 <SelectItem
//                                   key={option.value}
//                                   value={option.value}
//                                   className="py-2 hover:bg-[#F6F6F6] text-[#121316]"
//                                 >
//                                   <div className="flex items-center space-x-2 py-1">
//                                     <div
//                                       className={`border border-[#121316] ${option.aspectRatio}`}
//                                     />
//                                     <span>{option.label}</span>
//                                   </div>
//                                 </SelectItem>
//                               ))}
//                             </SelectContent>
//                           </Select>
//                         )}
//                       </FormControl>
//                       <FormMessage className="text-red-500 text-xs mt-1" />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="language"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-sm font-normal text-[#121316]">
//                         Ad Language
//                       </FormLabel>
//                       <FormControl>
//                         {isMobile ? (
//                           <MobileSelectBottomSheet
//                             options={languageOptions}
//                             selected={field.value}
//                             onChange={field.onChange}
//                             placeholder="Select a Language"
//                             title="Ad Language"
//                           />
//                         ) : (
//                           <Select
//                             onValueChange={field.onChange}
//                             value={field.value}
//                           >
//                             <SelectTrigger className="w-full border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] h-[56px]">
//                               <SelectValue placeholder="Select a Language">
//                                 {getSelectLabel(languageOptions, field.value)}
//                               </SelectValue>
//                             </SelectTrigger>
//                             <SelectContent>
//                               {languageOptions.map((option) => (
//                                 <SelectItem
//                                   key={option.value}
//                                   value={option.value}
//                                   className="py-2 hover:bg-[#F6F6F6] text-[#121316]"
//                                 >
//                                   {option.label}
//                                 </SelectItem>
//                               ))}
//                             </SelectContent>
//                           </Select>
//                         )}
//                       </FormControl>
//                       <FormMessage className="text-red-500 text-xs mt-1" />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="adGoal"
//                   render={({ field }) => (
//                     <FormItem className="col-span-1 md:col-span-2">
//                       <FormLabel className="text-sm font-normal text-[#121316]">
//                         Ad Goal
//                       </FormLabel>
//                       <FormControl>
//                         <Textarea
//                           placeholder="Describe your Ad goal and message (min 10 characters)"
//                           className="w-full min-h-[100px] border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] text-sm leading-5 text-[#121316]"
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage className="text-red-500 text-xs mt-1" />
//                     </FormItem>
//                   )}
//                 />
//               </div>
//               <div className="flex justify-end">
//                 <Button
//                   type="submit"
//                   disabled={!allRequiredFieldsFilled}
//                   className={`px-6 py-3 h-12 text-base rounded-md transition-colors text-white shadow-none md:mt-[13px] w-full md:w-fit ${
//                     allRequiredFieldsFilled
//                       ? "bg-[#B800B8] hover:bg-[#960096] cursor-pointer"
//                       : "bg-[#EAC8F0] cursor-not-allowed"
//                   }`}
//                 >
//                   Generate Ad
//                 </Button>
//               </div>
//             </form>
//           </Form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default ImageAdForm;

"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { DesktopAdPreviewNavigation } from "@/domains/external/components/desktop-ad-preview-navigation";
import { useMediaQuery } from "@/hooks/use-media-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown, ImageIcon, Upload } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Dynamically import mobile components
const MobileSelectBottomSheet = dynamic(
  () => import("@/components/ui/mobile-select"),
  { ssr: false }
);

type AdStatus = "initial" | "ready" | "generating" | "completed";

const targetAudienceOptions = [
  { label: "GenZ", value: "genz" },
  { label: "Millennials", value: "millennials" },
  { label: "Gen X", value: "genx" },
  { label: "Baby Boomers", value: "boomers" },
  { label: "All Ages", value: "all" },
];

const adPlacementOptions = [
  { label: "Facebook", value: "facebook" },
  { label: "Instagram", value: "instagram" },
  { label: "Twitter", value: "twitter" },
  { label: "LinkedIn", value: "linkedin" },
  { label: "YouTube", value: "youtube" },
  { label: "TikTok", value: "tiktok" },
  { label: "Google Search", value: "google" },
];

// Form schema
const formSchema = z.object({
  adDescription: z
    .string()
    .min(10, "Description must be at least 10 characters"),
  adPlacement: z.string().min(1, "Please select a platform"),
  targetAudience: z.string().min(1, "Please select a target audience"),
  productImage: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function AdCustomizer() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [status, setStatus] = useState<AdStatus>("initial");
  const [progress, setProgress] = useState<number>(0);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      adDescription: "",
      adPlacement: "",
      targetAudience: "genz", // Default to GenZ
      productImage: "",
    },
    mode: "onChange",
  });

  const { formState } = form;
  const isValid = formState.isValid;

  useEffect(() => {
    // Load saved form data
    const savedData = localStorage.getItem("adCustomizerData");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        form.setValue("adDescription", parsedData.adDescription || "");
        form.setValue("adPlacement", parsedData.adPlacement || "");
        form.setValue("targetAudience", parsedData.targetAudience || "genz");

        if (parsedData.productImage) {
          form.setValue("productImage", parsedData.productImage);
        }
      } catch (error) {
        console.error("Error parsing saved data:", error);
      }
    }
  }, [form]);

  const onSubmit = (data: FormData) => {
    // Save form data
    localStorage.setItem("adCustomizerData", JSON.stringify(data));

    // Format payload for API
    const payload = {
      ad_description: data.adDescription,
      ad_placement: data.adPlacement,
      target_audience: data.targetAudience,
      product_image: data.productImage,
    };

    console.log("Generating ad with payload:", payload);

    // Start generation
    setStatus("generating");

    // Simulate generation progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setStatus("completed");
      }
    }, 300);
  };

  // const handleRegenerate = () => {
  //   setStatus("ready");
  //   setProgress(0);
  // };

  return (
    <div className="flex flex-col lg:flex-row  p-4 lg:p-0">
      {/* Form Section */}
      <div className="w-full lg:w-[440px] lg:min-w-[440px] scrollbar-hide p-4 md:py-6 md:px-10 flex flex-col gap-10 lg:max-w-[440px] lg:h-screen lg:overflow-y-auto bg-white order-2 lg:order-1">
        {/* Form Header */}
        <div className="lg:flex items-center justify-between hidden">
          <h1 className="text-xl font-medium">Customize your Ad</h1>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 py-1.5 text-sm border rounded-full hover:bg-gray-50">
              Image
              <ChevronDown className="w-4 h-4 ml-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Upload Image</DropdownMenuItem>
              <DropdownMenuItem>Browse Library</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="adDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal text-[#121316]">
                      Ad description
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type in your Ad description"
                        className="w-full min-h-[100px] border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] text-sm leading-5 text-[#121316]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs mt-1" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="targetAudience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal text-[#121316]">
                      Where will this ad appear?
                    </FormLabel>
                    <FormControl>
                      {isMobile ? (
                        <MobileSelectBottomSheet
                          options={targetAudienceOptions}
                          selected={field.value}
                          onChange={field.onChange}
                          placeholder="Select audience"
                          title="Target Audience"
                        />
                      ) : (
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          value={field.value}
                        >
                          <SelectTrigger className="w-full border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] flex justify-between items-center h-[56px]">
                            <SelectValue placeholder="Select audience">
                              {field.value
                                ? targetAudienceOptions.find(
                                    (opt) => opt.value === field.value
                                  )?.label
                                : "GenZ"}
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            {targetAudienceOptions.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                                className="py-2 hover:bg-[#F6F6F6] text-[#121316]"
                              >
                                <div className="flex items-center space-x-2 py-1">
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
                name="adPlacement"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal text-[#121316]">
                      Ad Placement options
                    </FormLabel>
                    <FormControl>
                      {isMobile ? (
                        <MobileSelectBottomSheet
                          options={adPlacementOptions}
                          selected={field.value}
                          onChange={field.onChange}
                          placeholder="Select Platform"
                          title="Ad Placement"
                        />
                      ) : (
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="w-full border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] h-[56px]">
                            <SelectValue placeholder="Select Platform">
                              {field.value
                                ? adPlacementOptions.find(
                                    (opt) => opt.value === field.value
                                  )?.label
                                : "Select Platform"}
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            {adPlacementOptions.map((option) => (
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
                name="productImage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal text-[#121316]">
                      Product content (optional)
                    </FormLabel>
                    <FormControl>
                      <div
                        className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center cursor-pointer hover:border-gray-300 transition-colors"
                        onClick={() =>
                          document.getElementById("product-image")?.click()
                        }
                      >
                        {field.value ? (
                          <div className="relative w-full h-32">
                            <Image
                              src={field.value || "/placeholder.svg"}
                              alt="Product"
                              fill
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <>
                            <Upload className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                            <p className="text-sm text-gray-500">
                              Upload product image
                            </p>
                          </>
                        )}
                        <input
                          type="file"
                          id="product-image"
                          className="hidden"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onload = (e) => {
                                const result = e.target?.result as string;
                                field.onChange(result);
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs mt-1" />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              disabled={!isValid}
              className={`w-full text-white ${
                isValid
                  ? "bg-[#B800B8] hover:bg-[#960096] cursor-pointer"
                  : "bg-[#EAC8F0] cursor-not-allowed"
              }`}
            >
              Generate Ad
            </Button>
          </form>
        </Form>
      </div>

      {/* Preview Section */}
      <div className="lg:flex-1 flex flex-col order-1 lg:order-2  pb-4 lg:p-0 gap-2">
        {/* Preview Header */}
        <div className="py-3 px-2 md:px-10 bg-white border-b border-[#ECF1F5] ">
          <DesktopAdPreviewNavigation type="desktop" />
        </div>

        {/* <div className="border-b border-[#ECF1F5] bg-white flex py-3 px-10 items-start gap-2.5">
          <button className="flex items-center gap-2 text-[#650065] font-nunito text-base font-semibold leading-6 py-3">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </button>

          <div className="flex space-x-2 p-4 ">
            <Button
              variant="outline"
              size="sm"
              className="bg-white border-gray-200 text-amber-500 hover:text-amber-600"
              onClick={handleRegenerate}
            >
              <Redo2 className="h-4 w-4 mr-2" />
              Regenerate
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white border-gray-200 text-blue-500 hover:text-blue-600"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Export as PNG</DropdownMenuItem>
                <DropdownMenuItem>Export as JPG</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div> */}

        {/* Preview Content */}
        <div className="flex-1 rounded-md  flex items-center justify-center xl:min-h-[50vh] lg:w-[90%] mx-auto w-full bg-[#F9FAFB]">
          <div className="flex flex-col items-center justify-center xl:p-16 text-gray-400 max-w-[700px] mx-auto w-full h-[324px] lg:h-[648px] bg-[#f2f2f2]">
            {(status === "initial" || status === "ready") && (
              <>
                <ImageIcon className="w-8 h-8 mb-2" />
                <p className="text-sm">Your ad will be generated here</p>
              </>
            )}

            {status === "generating" && (
              <div className="flex flex-col items-center justify-center">
                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-gray-700">
                  Generating Your Image Ad... {progress}%
                </p>
              </div>
            )}

            {status === "completed" && (
              <div className="relative max-w-[649px] h-[648px]">
                <Image
                  src="/preview.svg"
                  alt="Generated Ad"
                  fill
                  className="lg:object-cover aspect-square object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
