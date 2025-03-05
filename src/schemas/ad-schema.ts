import { z } from "zod";

export const ImageAdSchema = z.object({
  image: z
    .string()
    .min(3, { message: "image is required" }),
  adTitle: z
    .string()
    .min(3, { message: "Ad title must be at least 3 characters" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" }),
});



// // Step 1 Schema
// export const AdGoalsSchema = z.object({
//   productName: z.string().min(1, { message: "Product name is required" }),
//   demographics: z.enum(["general", "professionals", "students"], {
//     errorMap: () => ({ message: "Please select demographics" }),
//   }),
//   targetRegion: z.enum(["global", "north-america", "europe", "asia"], {
//     errorMap: () => ({ message: "Please select a target region" }),
//   }),
//   targetAgeGroup: z.enum(["18-24", "25-34", "35-44", "45+"], {
//     errorMap: () => ({ message: "Please select an age group" }),
//   }),
//   aspectRatioSize: z.enum(["1:1", "16:9", "9:16"], {
//     errorMap: () => ({ message: "Please select an aspect ratio" }),
//   }),
//   adLanguage: z.enum(["english", "spanish", "french", "mandarin"], {
//     errorMap: () => ({ message: "Please select a language" }),
//   }),
//   adGoal: z
//     .string()
//     .min(10, { message: "Ad goal must be at least 10 characters" }),
// });

// // Step 2 Schema for Image/Video Upload
// export const AdContentSchema = z.object({
//   adMedia: z
//     .instanceof(FileList)
//     .refine((files) => files.length > 0, { message: "Media file is required" }),
//   adTitle: z
//     .string()
//     .min(3, { message: "Ad title must be at least 3 characters" }),
//   description: z
//     .string()
//     .min(10, { message: "Description must be at least 10 characters" }),
// });

// // Combined schema for the entire form
// export const CompleteAdFormSchema = AdGoalsSchema.merge(AdContentSchema);
