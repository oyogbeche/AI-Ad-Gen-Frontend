import { useState, useEffect } from "react";
import { Query, useMutation, useQuery } from "@tanstack/react-query";
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


interface TaskStatusResponse {
  status: string;
  status_code: number;
  message: string;
  data: {
    status: string;
    image_url?: string;
    image_id?: string
  };
}

export function useGenerateAdImage() {
  const [taskId, setTaskId] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<string | null>(null); 
  const [isLoading, setIsLoading] = useState<boolean>(false);

  
  const generateAd = useMutation({
    mutationFn: async (data: GenerateAdParams) => {
      setIsLoading(true);
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
  
      setTaskId(response?.data?.task_id); 
      setProgress(10); 
      setError(null);
   
    },
    onError: (error: Error) => {
      console.error("Error generating ad image:", error);
      setError("Failed to start image generation. Please try again.");
      setProgress(0);
      setIsLoading(false);
    },
  });

  // Query to fetch the generated ad data
  const adDataQuery = useQuery({
    queryKey: ["adTask", taskId],
    queryFn: async (): Promise<TaskStatusResponse>  => {
      if (!taskId) throw new Error("No task ID");
      const response = await getRequest(`/image/task/${taskId}`);
     
      if (response.data.status === "pending") {
        setProgress((prev) => Math.min(prev + 30, 90));
      } else if (response.data.status === "completed") {
        setProgress(100);
      }

      return response;
    },
    enabled: !!taskId,
    refetchInterval: (query: Query<TaskStatusResponse, Error>) => {
      const data = query.state.data;
      if (!data || (data.data.status === "pending")) {
        return 3000; 
      }
      return false;
    },
  });

  // Handle errors from the query
  useEffect(() => {
    if (adDataQuery.error) {
      setError("Failed to fetch image generation status. Please try again."); 
      setProgress(0); 
      setIsLoading(false);
    }
  }, [adDataQuery.error]);

  
  useEffect(() => {
    if (adDataQuery.data?.data?.image_url) {
      setProgress(100);
      setIsLoading(false);
    }
  }, [adDataQuery.data]);

  return {
    generateAd: generateAd.mutate,
    isGenerating: generateAd.isPending || (!!taskId && progress < 100),
    adData: adDataQuery.data,
    isFetchingAd: isLoading,
    progress, 
    error, 
    reset: () => {
      setTaskId(null);
      setProgress(0);
      setError(null);
    },
  };
}