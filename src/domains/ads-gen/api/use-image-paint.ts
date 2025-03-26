"use client";

import { getRequest, postRequest } from "@/lib/axios-fetch";
import { Query, useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

interface InpaintParams {
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
  status: string;
  status_code: number;
  message: string;
  data: {
    status: string;
    image_url?: string;
    success?: boolean;
    image_id?: string;
    prompt_used?: string;
  };
}

export function useInpaintImage() {
  const [taskId, setTaskId] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [completedData, setCompletedData] = useState<TaskStatusResponse | null>(
    null
  );

  const inpaintMutation = useMutation({
    mutationFn: async (data: InpaintParams) => {
      setIsLoading(true);
      return postRequest("/image/inpaint", data);
    },
    onSuccess: (response: InpaintTaskResponse) => {
      setTaskId(response?.data?.task_id);
      setProgress(10);
      setError(null);
      setCompletedData(null);
    },
    onError: (error: Error) => {
      console.error("Error inpainting image:", error);
      setError(error.message);
      setProgress(0);
      setIsLoading(false);
    },
  });

  // Query to fetch the inpainted image status
  const inpaintStatusQuery = useQuery({
    queryKey: ["inpaintTask", taskId],
    queryFn: async (): Promise<TaskStatusResponse> => {
      if (!taskId) throw new Error("No task ID");
      const response = await getRequest(`/image/task/${taskId}`);

      if (response.status_code === 200 && response.data.status === "pending") {
        setProgress((prev) => Math.min(prev + 30, 90));
      } else if (response.status_code === 201) {
        setCompletedData(response);
        setProgress(100);
      }
      // console.log("INpainting RESPONSE", response);
      return response;
    },
    enabled: !!taskId && !completedData,
    refetchInterval: (query: Query<TaskStatusResponse, Error>) => {
      const data = query.state.data;
      if (
        !data ||
        (data.status_code === 200 && data.data.status === "pending")
      ) {
        return 3000; // Poll every 3 seconds while pending
      }
      return false; // Stop polling when complete
    },
    select: (data) => ({
      ...data,
      data: {
        ...data.data,
        image_id: taskId,
      },
    }),
  });

  // Handle errors from the query
  useEffect(() => {
    if (inpaintStatusQuery.error) {
      setError("Failed to fetch inpainting status. Please try again.");
      setProgress(0);
      setIsLoading(false);
    }
  }, [inpaintStatusQuery.error]);

  useEffect(() => {
    if (inpaintStatusQuery.data?.data?.image_url) {
      setProgress(100);
      setIsLoading(false);
    }
  }, [inpaintStatusQuery.data]);

  console.log("InpaintData", completedData);
  console.log("isFetchingStatus", isLoading);
  console.log("isInpainting", inpaintMutation.isPending);
  console.log("inpaintingProgress", progress);
  console.log("inpaintImage", inpaintMutation.mutate);

  return {
    inpaintImage: inpaintMutation.mutate,
    isInpainting: inpaintMutation.isPending || (!!taskId && progress < 100),
    inpaintData: completedData,
    isFetchingStatus: isLoading,
    progress,
    error,
    reset: () => {
      setTaskId(null);
      setProgress(0);
      setError(null);
      setCompletedData(null);
    },
  };
}
