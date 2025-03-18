import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { postRequest, getRequest } from "@/lib/axios-fetch";

interface GenerateAdParams {
  ad_goal: string;
  ad_size: string;
  target_audience: string;
  productImage?: File | null;
}

interface AdTaskResponse {
  status: string;
  status_code: number;
  message: string;
  data: {
  task_id: string;
}
}

/* interface AdDataResponse {
  success: boolean;
  image_url: string;
  prompt_used: string;
  keywords: string[];
  target_audience: string;
  ad_description: string;
  is_published: boolean;
} */

export function useGenerateAdImage() {
  const [taskId, setTaskId] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0); // Progress state
  const [error, setError] = useState<string | null>(null); // Error state

  // Mutation to generate the image
  const generateAd = useMutation({
    mutationFn: async (data: GenerateAdParams) => {
      const formData = new FormData();
      formData.append("ad_goal", data.ad_goal);
      formData.append("ad_size", data.ad_size);
      formData.append("target_audience", data.target_audience);
      if (data.productImage) {
        formData.append("product_image", data.productImage);
      }
      return postRequest("/image/generate", formData, {
        "Content-Type": "multipart/form-data",
      });
    },
    onSuccess: (response: AdTaskResponse) => {
      console.log("Full Response:", response);
      setTaskId(response?.data?.task_id); // Set task ID for polling
      setProgress(10); // Initial progress after task creation
      setError(null);
      console.log("Task ID:", response.data.task_id);
    },
    onError: (error: Error) => {
      console.error("Error generating ad image:", error);
      setError("Failed to start image generation. Please try again."); // Set error message
      setProgress(0); // Reset progress
    },
  });

  // Query to fetch the generated ad data
  const adDataQuery = useQuery({
    queryKey: ["adTask", taskId],
    queryFn: async () => {
      if (!taskId) return null;
      const response = await getRequest(`/image/task/${taskId}`);
      // Simulate progress updates (replace with actual progress if available from the API)
      setProgress((prev) => Math.min(prev + 30, 90)); // Increment progress
      return response;
    },
    enabled: !!taskId,
    refetchInterval: (data) => (data ? false : 3000), // Poll every 3 seconds
  });

  // Handle errors from the query
  useEffect(() => {
    if (adDataQuery.error) {
      setError("Failed to fetch image generation status. Please try again."); 
      setProgress(0); 
    }
  }, [adDataQuery.error]);

  // Effect to handle completion
  useEffect(() => {
    if (adDataQuery.data?.data?.image_url) {
      setProgress(100); // Mark progress as complete
    }
  }, [adDataQuery.data]);

  return {
    generateAd: generateAd.mutate,
    isGenerating: generateAd.isPending,
    adData: adDataQuery.data,
    isFetchingAd: adDataQuery.isFetching,
    progress, // Expose progress state
    error, // Expose error state
    reset: () => {
      setTaskId(null);
      setProgress(0);
      setError(null);
    }, // Reset function
  };
}