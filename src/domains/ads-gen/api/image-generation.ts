"use client";

import { useAuthStore } from "@/store/auth-store";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

// Define response types
interface ImageGenerationResponse {
  status: string;
  status_code: number;
  message: string;
  data: {
    success: boolean;
    image_url: string;
    image_id: string;
    direct_image_url: string;
    prompt_used: string;
    target_audience: string;
    ad_description: string;
    is_published: boolean;
    metadata: Record<string, any>;
    task_id?: string;
    error?: string;
  };
}

interface TaskStatusResponse {
  status: string;
  status_code: number;
  message: string;
  data: {
    task_id: string;
    status: "pending" | "processing" | "completed" | "failed";
    progress: number;
    result?: {
      image_url: string;
      direct_image_url: string;
    };
    error?: string;
  };
}

interface GenerateImageParams {
  ad_goal: string;
  ad_size: string;
  target_audience: string;
  image?: File | string;
}

// Status type with error state added
type AdStatus = "initial" | "ready" | "generating" | "completed" | "error";

// API utility functions
const postRequestFormData = async (
  endpoint: string,
  data: Record<string, any>,
  headers?: Record<string, string>
) => {
  const token = useAuthStore.getState().token;
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    if (data[key] !== undefined) {
      formData.append(key, data[key]);
    }
  });

  const response = await fetch(
    `https://staging.api.genz.ad/api/v1${endpoint}`,
    {
      method: "POST",
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
        ...headers,
      },
      body: formData,
    }
  );

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || "Something went wrong");
  }

  return responseData;
};

const getRequest = async (endpoint: string) => {
  const token = useAuthStore.getState().token;

  const response = await fetch(
    `https://staging.api.genz.ad/api/v1${endpoint}`,
    {
      method: "GET",
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
        "Content-Type": "application/json",
      },
    }
  );

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || "Something went wrong");
  }

  return responseData;
};

export const useGenerateImage = () => {
  const router = useRouter();
  const [status, setStatus] = useState<AdStatus>("initial");
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<ImageGenerationResponse | null>(null);
  const [taskId, setTaskId] = useState<string | null>(null);
  const [taskStatus, setTaskStatus] = useState<string | null>(null);

  const pollTimerRef = useRef<NodeJS.Timeout | null>(null);
  const maxPollTimeRef = useRef<NodeJS.Timeout | null>(null);
  const progressStuckTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastProgressRef = useRef<number>(0);

  // Clear all timers on component unmount
  useEffect(() => {
    return () => {
      if (pollTimerRef.current) clearInterval(pollTimerRef.current);
      if (maxPollTimeRef.current) clearTimeout(maxPollTimeRef.current);
      if (progressStuckTimeoutRef.current)
        clearTimeout(progressStuckTimeoutRef.current);
      if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
      }
    };
  }, []);

  // Monitor for progress getting stuck at high percentage
  useEffect(() => {
    // Clear any existing timeout
    if (progressStuckTimeoutRef.current) {
      clearTimeout(progressStuckTimeoutRef.current);
      progressStuckTimeoutRef.current = null;
    }

    // If progress is high and hasn't changed much
    if (progress >= 90 && Math.abs(progress - lastProgressRef.current) < 1) {
      progressStuckTimeoutRef.current = setTimeout(() => {
        // If we're still generating and progress is still stuck
        if (status === "generating" && progress >= 90) {
          console.log("Progress stuck at high percentage, stopping task");

          // Clean up all timers
          if (pollTimerRef.current) clearInterval(pollTimerRef.current);
          if (maxPollTimeRef.current) clearTimeout(maxPollTimeRef.current);
          if (progressInterval) {
            clearInterval(progressInterval);
            progressInterval = null;
          }

          setStatus("error");
          toast.error("Image generation timed out");
        }
      }, 10000); // 10 seconds timeout
    }

    // Update last progress
    lastProgressRef.current = progress;
  }, [progress, status]);

  // Start polling task status
  const startTaskPolling = (taskId: string) => {
    setTaskId(taskId);
    console.log(`Starting to poll task status for task ID: ${taskId}`);

    // Store in localStorage for recovery
    try {
      localStorage.setItem(
        "currentTask",
        JSON.stringify({
          task_id: taskId,
          timestamp: new Date().toISOString(),
        })
      );
    } catch (error) {
      console.warn("Failed to save task to localStorage:", error);
    }

    // Set max polling time (30 seconds)
    maxPollTimeRef.current = setTimeout(() => {
      if (pollTimerRef.current) {
        clearInterval(pollTimerRef.current);
        pollTimerRef.current = null;
        console.log("Stopped polling after 30 seconds timeout");

        // Only show timeout message if we're still in generating state
        if (status === "generating") {
          setStatus("error");
          toast.warning(
            "Image generation is taking longer than expected. Please try again."
          );
        }
      }
    }, 30000);

    // Poll every 2 seconds
    pollTimerRef.current = setInterval(async () => {
      try {
        const response = (await getRequest(
          `/image/task/${taskId}`
        )) as TaskStatusResponse;
        const taskStatus = response.data.status;

        setTaskStatus(taskStatus);
        console.log(`Task ${taskId} status: ${taskStatus}`, response.data);

        // Update progress if available
        if (response.data.progress !== undefined) {
          setProgress(response.data.progress);
        }

        // Handle different task statuses
        if (taskStatus === "completed" && response.data.result) {
          // Task completed successfully
          clearInterval(pollTimerRef.current!);
          clearTimeout(maxPollTimeRef.current!);
          if (progressStuckTimeoutRef.current) {
            clearTimeout(progressStuckTimeoutRef.current);
            progressStuckTimeoutRef.current = null;
          }

          // Clear progress simulation
          if (progressInterval) {
            clearInterval(progressInterval);
            progressInterval = null;
          }

          setStatus("completed");
          setProgress(100);

          // Update result with task result data
          if (result) {
            setResult({
              ...result,
              data: {
                ...result.data,
                direct_image_url: response.data.result.direct_image_url,
                image_url: response.data.result.image_url,
              },
            });
          }

          // Remove task from localStorage
          try {
            localStorage.removeItem("currentTask");
          } catch (error) {
            console.warn("Failed to remove task from localStorage:", error);
          }

          toast.success("Image generated successfully");
        } else if (taskStatus === "failed") {
          // Task failed
          clearInterval(pollTimerRef.current!);
          clearTimeout(maxPollTimeRef.current!);
          if (progressStuckTimeoutRef.current) {
            clearTimeout(progressStuckTimeoutRef.current);
            progressStuckTimeoutRef.current = null;
          }

          // Clear progress simulation
          if (progressInterval) {
            clearInterval(progressInterval);
            progressInterval = null;
          }

          setStatus("error");
          console.error("Task failed:", response.data.error);

          // Remove task from localStorage
          try {
            localStorage.removeItem("currentTask");
          } catch (error) {
            console.warn("Failed to remove task from localStorage:", error);
          }

          toast.error(response.data.error || "Image generation failed");
        }
      } catch (error) {
        console.error("Error polling task status:", error);

        // Handle polling errors by stopping and showing error
        if (pollTimerRef.current) {
          clearInterval(pollTimerRef.current);
          pollTimerRef.current = null;
        }

        setStatus("error");
        toast.error("Error checking generation status");
      }
    }, 2000);
  };

  // Main mutation for image generation
  const mutation = useMutation({
    mutationKey: ["generateImage"],
    mutationFn: async (params: GenerateImageParams) => {
      console.log("API Parameters:", {
        ad_goal: params.ad_goal,
        ad_size: params.ad_size,
        target_audience: params.target_audience,
        image: params.image ? "Image provided" : "No image",
      });

      // Validate required fields
      if (!params.ad_goal || params.ad_goal.trim() === "") {
        throw new Error("Ad goal (description) is required");
      }

      if (!params.ad_size || params.ad_size.trim() === "") {
        throw new Error("Ad size is required");
      }

      // Start progress simulation for UI feedback
      startProgressSimulation();
      setStatus("generating");

      // Create the request payload
      const requestData: Record<string, any> = {
        ad_goal: params.ad_goal.trim(),
        ad_size: params.ad_size.trim(),
        target_audience: params.target_audience,
      };

      // Handle image if provided
      if (params.image) {
        if (
          typeof params.image === "string" &&
          params.image.startsWith("data:")
        ) {
          try {
            // Convert base64 to blob
            const response = await fetch(params.image);
            const blob = await response.blob();

            // Create a File object from the blob
            const file = new File([blob], "image.jpg", { type: "image/jpeg" });
            requestData.image = file;
          } catch (error) {
            console.error("Error processing image:", error);
          }
        } else if (params.image instanceof File) {
          requestData.image = params.image;
        }
      }

      // Make the API call
      console.log("Sending request data:", requestData);
      return postRequestFormData(
        "/image/generate",
        requestData
      ) as Promise<ImageGenerationResponse>;
    },
    onSuccess: (data) => {
      setResult(data);

      if (data.status_code === 200 || data.status_code === 201) {
        // Check if we have a task_id
        if (data.data.task_id) {
          console.log(
            `Image generation task created with ID: ${data.data.task_id}`
          );
          // Start polling for task status
          startTaskPolling(data.data.task_id);
        } else if (data.data.direct_image_url) {
          // Immediate result available - clear any progress simulation
          if (progressInterval) {
            clearInterval(progressInterval);
            progressInterval = null;
          }

          setStatus("completed");
          setProgress(100);
          toast.success("Image generated successfully");
        } else {
          console.warn("No task_id or direct_image_url in the response", data);
          setStatus("error");
          toast.error("Invalid response from server");
        }
      } else {
        console.warn("Unexpected response status code:", data.status_code);
        setStatus("error");
        toast.warning("Image generation completed with warnings");
      }
    },
    onError: (error: any) => {
      // Reset progress on error
      setProgress(0);
      setStatus("error");

      // Enhanced error logging
      console.error("Image generation failed:", error);

      if (error.response) {
        console.error("API Error Response:", error.response);
        console.error("API Error Status:", error.response.status);
        console.error("API Error Data:", error.response.data);
      }

      if (
        error.response?.data?.data?.errors &&
        error.response.data.data.errors.length > 0
      ) {
        // Show each validation error as a separate toast
        const errors = error.response.data.data.errors;
        errors.forEach((err: string) => {
          toast.error(err);
        });
      } else if (error.response?.data?.message) {
        // Show the general error message from the response
        toast.error(error.response.data.message);
      } else {
        // Fallback error message
        toast.error(
          error.message || "Failed to generate image. Please try again."
        );
      }
    },
    onSettled: () => {
      // Clear any progress intervals when complete (success or error)
      if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
      }
    },
  });

  // Progress simulation for UI feedback
  let progressInterval: NodeJS.Timeout | null = null;

  const startProgressSimulation = () => {
    setProgress(0);
    lastProgressRef.current = 0;

    // Clear any existing interval
    if (progressInterval) {
      clearInterval(progressInterval);
    }

    // Create a new interval for progress simulation
    progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 5;
        return newProgress >= 90 ? 90 : newProgress;
      });
    }, 500);
  };

  // Cancel current task
  const cancelGeneration = () => {
    if (pollTimerRef.current) clearInterval(pollTimerRef.current);
    if (maxPollTimeRef.current) clearTimeout(maxPollTimeRef.current);
    if (progressStuckTimeoutRef.current)
      clearTimeout(progressStuckTimeoutRef.current);
    if (progressInterval) {
      clearInterval(progressInterval);
      progressInterval = null;
    }

    setStatus("initial");
    setProgress(0);
    setTaskId(null);
    setTaskStatus(null);

    // Remove from localStorage
    try {
      localStorage.removeItem("currentTask");
    } catch (error) {
      console.warn("Failed to remove task from localStorage:", error);
    }
  };

  return {
    generateImage: mutation.mutate,
    isLoading: mutation.isPending || status === "generating",
    status,
    progress,
    error: mutation.error,
    result,
    taskId,
    taskStatus,
    cancelGeneration,
  };
};
