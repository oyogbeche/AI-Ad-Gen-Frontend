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
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Import desktop components
const DesktopMultiSelect = dynamic(
  () => import("@/components/ui/multi-select"),
  {
    ssr: false,
  }
);

// Import mobile components with bottom sheet style
const MobileSelectBottomSheet = dynamic(
  () => import("@/components/ui/MobileSelect"),
  {
    ssr: false,
  }
);

const MobileMultiSelectBottomSheet = dynamic(
  () => import("@/components/ui/MobileMultiSelect"),
  {
    ssr: false,
  }
);

type FormData = z.infer<typeof ImageAdSchema>;

export const ImageAdForm = () => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 768px)");

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
    router.push("/create-ad/preview");
  };

  return (
    <div className="min-h-full bg-[#F9FAFB] p-6 py-18 flex justify-center items-center">
      <Card className="w-full max-w-[890px]">
        <CardContent className="p-6 sm:p-14">
          <BackButton className="mb-8" />

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
                      <FormLabel className="text-sm font-normal text-[#121316]">
                        Product Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Ad Title"
                          className="w-full border-[#E4E7EC] text-sm font-normal leading-5 focus:ring-[#B800B8] focus:border-[#E9B0E9] h-[56px] outline-0"
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
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="w-full border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] h-[56px]">
                              <SelectValue placeholder="Select demographics" />
                            </SelectTrigger>
                            <SelectContent>
                              {demographicsOptions.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                  className="py-2"
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
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="w-full border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] h-[56px]">
                              <SelectValue placeholder="Select Region" />
                            </SelectTrigger>
                            <SelectContent>
                              {regionOptions.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
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
                        Target Age Group
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
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="w-full border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] flex justify-between items-center h-[56px]">
                              <SelectValue placeholder="Choose Ad Size">
                                {field.value
                                  ? adSizeOptions.find(
                                      (opt) => opt.value === field.value
                                    )?.display
                                  : "Choose Ad Size"}
                              </SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                              {adSizeOptions.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
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
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="w-full border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] h-[56px]">
                              <SelectValue placeholder="Select a Language" />
                            </SelectTrigger>
                            <SelectContent>
                              {languageOptions.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
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
              </div>

              <FormField
                control={form.control}
                name="adGoal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal text-[#121316]">
                      Ad Goal
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your Ad goal and message"
                        className="w-full min-h-[100px] border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] h-[56px]"
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

export default ImageAdForm;
