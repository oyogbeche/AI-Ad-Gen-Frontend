"use client";

import { getRequest, postRequest } from "@/lib/axios-fetch";
import { type Query, useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

interface InpaintImageParams {
  image_id: string;
  prompt: string;
}

interface InpaintTaskResponse {
  status: string;
  status_code: number;
  message: string;
  data: {
    task_id: string;
  };
}

interface TaskStatusResponse {
  success: boolean;
  image_url: string;
  error: string;
  metadata: Record<string, any>;
  image_id: string;
}

export function useInpaintImage() {
  const [taskId, setTaskId] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Mutation to start the inpainting process
  const inpaintMutation = useMutation({
    mutationFn: async (data: InpaintImageParams) => {
      setIsLoading(true);
      return postRequest("/image/inpaint", {
        image_id: data.image_id,
        prompt: data.prompt,
      });
    },
    onSuccess: (response: InpaintTaskResponse) => {
      setTaskId(response?.data?.task_id);
      setProgress(10);
      setError(null);
    },
    onError: (error: Error) => {
      console.error("Error starting inpainting:", error);
      setError("Failed to start inpainting. Please try again.");
      setProgress(0);
      setIsLoading(false);
    },
  });

  // Query to fetch the inpainting task status
  const inpaintStatusQuery = useQuery({
    queryKey: ["inpaintTask", taskId],
    queryFn: async (): Promise<TaskStatusResponse> => {
      if (!taskId) throw new Error("No task ID");
      const response = await getRequest(`/image/task/${taskId}`);

      // Handle the response based on success property
      if (!response.success) {
        throw new Error(response.error || "Unknown error occurred");
      }

      // Update progress based on whether we have an image URL
      if (!response.image_url) {
        setProgress((prev) => Math.min(prev + 30, 90));
      } else {
        setProgress(100);
      }

      return response;
    },
    enabled: !!taskId,
    refetchInterval: (query: Query<TaskStatusResponse, Error>) => {
      const data = query.state.data;
      if (!data || !data.image_url) {
        return 3000; // Poll every 3 seconds while pending
      }
      return false; // Stop polling when complete
    },
  });

  // Handle errors from the query
  useEffect(() => {
    if (inpaintStatusQuery.error) {
      setError(
        `Failed to fetch inpainting status: ${inpaintStatusQuery.error.message}`
      );
      setProgress(0);
      setIsLoading(false);
    }
  }, [inpaintStatusQuery.error]);

  // Update loading state when we get a result
  useEffect(() => {
    if (inpaintStatusQuery.data?.image_url) {
      setProgress(100);
      setIsLoading(false);
    }
  }, [inpaintStatusQuery.data]);

  // Format the result to match the expected interface
  const result = inpaintStatusQuery.data?.image_url
    ? {
        success: true,
        image_url: inpaintStatusQuery.data.image_url,
        image_id: inpaintStatusQuery.data.image_id,
        prompt_used: inpaintStatusQuery.data.metadata?.prompt_used,
      }
    : null;

  return {
    inpaintImage: inpaintMutation.mutate,
    isInpainting: inpaintMutation.isPending || (!!taskId && progress < 100),
    result,
    isLoading,
    progress,
    error,
    reset: () => {
      setTaskId(null);
      setProgress(0);
      setError(null);
    },
  };
}
