"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
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
import { ImageTextEditor } from "@/components/ui/image-editor";
import Loader from "@/components/ui/loader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useGenerateImage } from "@/domains/ads-gen/api/image-generation";
import { DesktopAdPreviewNavigation } from "@/domains/external/components/desktop-ad-preview-navigation";
import { useMediaQuery } from "@/hooks/use-media-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, ImageIcon, RefreshCw, Upload } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

// Dynamically import mobile components
const MobileSelectBottomSheet = dynamic(
  () => import("@/components/ui/mobile-select"),
  { ssr: false }
);

type AdStatus = "initial" | "ready" | "generating" | "completed" | "error";

const adPlacementOptions = [
  { label: "Instagram", value: "Instagram post (1:1)" },
  { label: "Facebook", value: "Facebook Ad (4:5)" },
  { label: "Twitter", value: "Landscape (1.91:1)" },
  { label: "LinkedIn", value: "LinkedIn Profile Banner (4:1)" },
  { label: "Company Page", value: "Company Page Banner (1.91:1)" },
  { label: "Google Ads Leaderboard", value: "Google Ads Leaderboard (8:1)" },
  { label: "Google Ads Skyscraper", value: "Google Ads Skyscraper (1:3.75)" },
];

const targetAudienceOptions = [
  { label: "Gen Z", value: "Gen Z" },
  { label: "Millennials", value: "Millennials" },
  { label: "Gen X", value: "Gen X" },
  { label: "Baby Boomers", value: "Baby Boomers" },
  { label: "All Ages", value: "All Ages" },
];

const formSchema = z.object({
  adDescription: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .nonempty("Ad description is required"),
  adSize: z
    .string()
    .min(1, "Please select a platform")
    .refine(
      (val) => adPlacementOptions.some((option) => option.value === val),
      {
        message: "Please select a valid platform",
      }
    ),
  targetAudience: z.string().min(1, "Please select a target audience"),
  productImage: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function AdCustomizer() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [status, setStatus] = useState<AdStatus>("initial");
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string>("");
  const [formLoaded, setFormLoaded] = useState(false);
  const [, setErrorMessage] = useState<string>("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastFormData = useRef<FormData | null>(null);

  // Use the generate image hook
  const {
    generateImage,
    isLoading,
    progress,
    error,
    cancelGeneration,
    generatedImageUrl: hookImageUrl,
  } = useGenerateImage();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      adDescription: "",
      adSize: "",
      targetAudience: "Gen Z",
      productImage: "",
    },
    mode: "onChange",
  });

  const { formState } = form;
  const isValid = formState.isValid;

  // Set a timeout to show error if progress reaches 90% but doesn't complete
  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // If we're generating and progress is high, set a timeout
    if (status === "generating" && progress >= 90) {
      timeoutRef.current = setTimeout(() => {
        setStatus("error");
        setErrorMessage("Generation timed out. Please try again.");
        cancelGeneration();
        toast.error("Image generation timed out");
      }, 10000); // 10 seconds timeout
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [progress, status, cancelGeneration]);

  // Load saved form data on component mount
  useEffect(() => {
    try {
      const savedData = localStorage.getItem("adCustomizerData");
      if (savedData) {
        try {
          const parsedData = JSON.parse(savedData);

          // Set form values and ensure they're properly updated
          form.reset({
            adDescription: parsedData.adDescription || "",
            adSize: parsedData.adSize || "",
            targetAudience: parsedData.targetAudience || "Gen Z",
            productImage: parsedData.productImage || "",
          });

          // Trigger validation after setting values
          form.trigger();
        } catch (error) {
          console.error("Error parsing saved data:", error);
        }
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }

    // Mark form as loaded to prevent default value overrides
    setFormLoaded(true);
  }, [form]);

  // Then add this useEffect to update the local state when the hook's URL changes
  useEffect(() => {
    if (hookImageUrl) {
      setGeneratedImageUrl(hookImageUrl);
    }
  }, [hookImageUrl]);

  // Handle error state
  useEffect(() => {
    if (error) {
      // Ensure we cancel any ongoing generation
      cancelGeneration();

      // Set error status
      setStatus("error");

      // Set error message
      const errorMessage =
        error instanceof Error ? error.message : "Failed to generate image";
      setErrorMessage(errorMessage);

      // Show toast notification
      toast.error(errorMessage);

      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }
  }, [error, cancelGeneration]);

  // Add a new useEffect to handle overall timeout for the generating state
  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // If we're in generating state, set a timeout
    if (status === "generating") {
      timeoutRef.current = setTimeout(() => {
        // If we're still generating after 5 seconds
        if (status === "generating") {
          setStatus("error");
          setErrorMessage("Generation timed out. Please try again.");
          cancelGeneration();
          toast.error("Image generation timed out");
        }
      }, 5000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [status, cancelGeneration]);

  type SelectOption = {
    label: string;
    value: string;
    display?: string;
    aspectRatio?: string;
  };

  // Get the value label helper function
  const getOptionLabel = (options: SelectOption[], value: string): string => {
    if (!value) return "";
    const option = options.find((opt) => opt.value === value);
    return option ? option.label : "";
  };

  const onSubmit = async (data: FormData) => {
    // Store the form data for retry functionality
    lastFormData.current = data;

    // Save form data
    try {
      // Create a copy of the data without the large image if present
      const storageData = {
        ...data,
        // Either store a small thumbnail or nothing for the image
        productImage: data.productImage
          ? data.productImage.length > 50000
            ? null
            : data.productImage
          : null,
      };

      localStorage.setItem("adCustomizerData", JSON.stringify(storageData));
    } catch (error) {
      console.warn("Failed to save form data to localStorage:", error);
      // Continue with form submission even if storage fails
    }

    // Additional validation check before submission
    if (!data.adDescription || data.adDescription.trim().length === 0) {
      form.setError("adDescription", {
        type: "manual",
        message: "Ad description is required",
      });
      toast.error("Ad description is required");
      return;
    }

    if (!data.adSize || data.adSize.trim().length === 0) {
      form.setError("adSize", {
        type: "manual",
        message: "Please select a platform",
      });
      toast.error("Please select a platform");
      return;
    }

    // Reset error state
    setErrorMessage("");
    // Start generation
    setStatus("generating");

    try {
      // Simple debugging - Clean values only
      console.log("Image generation payload:", {
        ad_goal: data.adDescription.trim(),
        ad_size: data.adSize.trim(),
        target_audience: data.targetAudience,
        image: data.productImage ? "Image provided" : "No image provided",
      });

      // Call the generate image function with clean payload
      generateImage({
        ad_goal: data.adDescription.trim(),
        ad_size: data.adSize.trim(),
        target_audience: data.targetAudience,
        image: data.productImage || undefined,
      });
    } catch (error) {
      console.error("Error generating image:", error);
      toast.error("Failed to generate image");
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    }
  };

  // Handle retry - restart the whole process
  const handleRetry = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Reset state
    setStatus("initial");
    setErrorMessage("");

    // If we have the last form data, resubmit it
    if (lastFormData.current) {
      onSubmit(lastFormData.current);
    }
  };

  if (!formLoaded) {
    return (
      <div className="p-8 text-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row p-4 lg:p-0">
      {/* Form Section */}
      <div className="w-full lg:w-[440px] lg:min-w-[440px] scrollbar-hide p-4 md:py-6 md:px-10 flex flex-col gap-10 lg:max-w-[440px] bg-white order-2 lg:order-1 z-20 border-r border-[#ECF1F5]">
        {/* Form Header */}
        <div className="lg:flex items-center justify-between hidden">
          <h1 className="text-2xl font-medium leading-8 text-[#2A2A2A]">
            Customize your Ad
          </h1>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 py-1.5 text-sm border border-[#63A0E6] bg-[#FBFCFE] rounded-full hover:bg-gray-50">
              Image
            </DropdownMenuTrigger>
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
                    <FormLabel className="text-base leading-6 font-normal text-[#121316]">
                      Ad description
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type in your Ad description"
                        className="w-full min-h-[100px] p-4 border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] text-base leading-6 text-[#121316]"
                        {...field}
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
                    <FormLabel className="text-base leading-6 font-normal text-[#121316]">
                      Where will this ad appear?
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
                          <SelectTrigger className="w-full border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] h-11 md:h-[56px]">
                            <SelectValue placeholder="Select Platform">
                              {getOptionLabel(adPlacementOptions, field.value)}
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            {adPlacementOptions.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                                className="py-3 hover:bg-[#F6F6F6] text-[#121316]"
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
                name="targetAudience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base leading-6 font-normal text-[#121316]">
                      Target Audience
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
                          value={field.value}
                        >
                          <SelectTrigger className="w-full border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] flex justify-between items-center h-11 md:h-[56px]">
                            <SelectValue placeholder="Select audience">
                              {getOptionLabel(
                                targetAudienceOptions,
                                field.value
                              )}
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            {targetAudienceOptions.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                                className="py-2 hover:bg-[#F6F6F6] leading-6"
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
                    <FormLabel className="text-base leading-6 font-normal text-[#121316]">
                      Product content (optional)
                    </FormLabel>
                    <FormControl>
                      <div
                        className={`border-2 border-gray-200 rounded-lg text-center cursor-pointer hover:border-gray-300 transition-colors ${
                          field.value ? "py-0" : "py-14 border-dashed "
                        } bg-[#FCFCFC]`}
                        onClick={() =>
                          document.getElementById("product-image")?.click()
                        }
                      >
                        {field.value ? (
                          <div className="relative w-full h-[170px]">
                            <Image
                              src={field.value || "/placeholder.svg"}
                              alt="Product"
                              fill
                              className="object-cover rounded-lg"
                            />
                          </div>
                        ) : (
                          <>
                            <Upload className="mx-auto mb-3" />
                            <p className="text-base leading-6 font-light text-[#5F5F5F]">
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
              disabled={!isValid || isLoading}
              className={`w-full text-white px-6 py-5 rounded-sm hover:bg-dark-purple transition-colors flex items-center justify-center gap-2 text-base leading-6 font-normal ${
                isValid && !isLoading
                  ? "bg-[#B800B8] hover:bg-[#960096] cursor-pointer"
                  : "bg-[#EAC8F0] cursor-not-allowed"
              }`}
            >
              {isLoading ? "Generating" : "Generate Ad"}
              <ArrowRight size={20} className="text-white" />
            </Button>
          </form>
        </Form>
      </div>

      {/* Preview Section */}
      <div className="lg:flex-1 flex flex-col order-1 lg:order-2 pb-4 lg:p-0 gap-2">
        {/* Preview Header */}
        <div className="py-3 px-2 md:px-10 bg-white border-b border-[#ECF1F5] ">
          <DesktopAdPreviewNavigation type="image-form" status={status} />
        </div>

        {/* Preview Content */}
        <div className="flex-1 rounded-md flex items-center justify-center xl:min-h-[50vh] mx-auto w-full bg-[#F9FAFB]">
          <div className="w-full mx-auto flex items-center justify-center md:h-screen rounded-sm">
            {(status === "initial" || status === "ready") && (
              <div className="flex flex-col">
                <ImageIcon className="size-10 mb-4 text-[#A1A1A1] mx-auto" />
                <p className="text-2xl leading-8 font-light text-[#A1A1A1] text-center">
                  Your ad will be generated here
                </p>
              </div>
            )}

            {status === "generating" && (
              <div className="max-w-[609px] w-full mx-auto flex items-center justify-center h-[70vh] rounded-sm">
                <div className="flex flex-col gap-6 items-center justify-center rounded-md">
                  <div className="relative w-12 h-12">
                    <div className="absolute inset-0 border-6 border-gray-300 rounded-full"></div>
                    <div className="absolute inset-0 border-6 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <h2 className="text-2xl text-[#121316] text-center leading-8 font-semibold max-md:max-w-[338px]">
                    Generating Your Image Ad... {Math.round(progress)}%
                  </h2>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="max-w-[609px] w-full mx-auto flex items-center justify-center h-[70vh] rounded-sm">
                <div className="flex flex-col gap-6 items-center justify-center text-center">
                  <h2 className="text-2xl text-[#121316] text-center leading-8 font-semibold max-md:max-w-[338px]">
                    Failed to Generate Image
                  </h2>
                  <Button
                    onClick={handleRetry}
                    className="bg-[#B800B8] hover:bg-[#960096] w-fit mx-auto text-white px-6 py-5 rounded-sm transition-colors flex items-center justify-center gap-2 text-base leading-6 font-normal"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Try Again
                  </Button>
                </div>
              </div>
            )}

            {status === "completed" && (
              <div className="w-full h-full">
                {generatedImageUrl ? (
                  <ImageTextEditor
                    imageSrc={generatedImageUrl}
                    initialTexts={[
                      {
                        id: "1",
                        content: "Edit this text",
                        x: 50,
                        y: 50,
                        fontSize: 24,
                        color: "#ffffff",
                        fontFamily: "Arial",
                      },
                    ]}
                  />
                ) : (
                  <ImageTextEditor
                    imageSrc="/preview.png"
                    initialTexts={[
                      {
                        id: "1",
                        content: "Edit this text",
                        x: 50,
                        y: 50,
                        fontSize: 24,
                        color: "#ffffff",
                        fontFamily: "Arial",
                      },
                    ]}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
