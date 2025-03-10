import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { postRequest, getRequest } from "@/lib/api";
import { toast } from "sonner";
import { useState, useEffect } from "react";

export const useSubmitCampaign = () => {
  const router = useRouter();
  const [pollingInterval, setPollingInterval] = useState<NodeJS.Timeout | null>(
    null
  );
  const [isPolling, setIsPolling] = useState(false);

  // Clean up polling interval on unmount
  useEffect(() => {
    return () => {
      if (pollingInterval) {
        clearInterval(pollingInterval);
      }
    };
  }, [pollingInterval]);

  // Function to check task status
  const checkTaskStatus = async (id: string) => {
    try {
      const response = await getRequest(`/image/task/${id}`);

      console.log("Task status response:", response);

      if (response.status_code === 201 && response.data.success) {
        // Image generation completed successfully
        if (pollingInterval) {
          clearInterval(pollingInterval);
          setPollingInterval(null);
        }

        // Clear polling state
        setIsPolling(false);

        // Store campaign data and redirect
        localStorage.setItem("campaignData", JSON.stringify(response.data));
        toast.success("Image generated successfully!");
        router.push(`/create-ad/preview/${response.data.image_id}`);
        return true;
      } else if (
        response.status === "success" &&
        response.message === "Image generation has started"
      ) {
        // Still processing - this is an expected state, not an error
        console.log("Image still processing...");
        return false;
      }

      return false;
    } catch (error) {
      console.error("Error checking task status:", error);
      return false;
    }
  };

  // Create the base mutation
  const mutation = useMutation({
    mutationKey: ["submitCampaign"],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: (formData: Record<string, any>) =>
      postRequest("/image/generate", formData),
    onSuccess: async (data) => {
      if (data.status_code === 201 && data.data.task_id) {
        // Show toast that image generation has started
        toast.success("Image generation has started");

        // Get the task ID
        const id = data.data.task_id;

        try {
          // Set polling state to true to maintain loading state
          setIsPolling(true);

          // Set up polling every 5 seconds
          const interval = setInterval(async () => {
            try {
              const isComplete = await checkTaskStatus(id);
              if (isComplete && interval) {
                clearInterval(interval);
                setPollingInterval(null);
                setIsPolling(false);
              }
            } catch (pollError) {
              console.error("Error during polling:", pollError);
              // Don't fail the entire operation on polling errors
            }
          }, 5000);

          setPollingInterval(interval);

          // Initial check immediately
          await checkTaskStatus(id);
        } catch (error) {
          console.error("Error setting up task polling:", error);
          setIsPolling(false);
          // Don't treat this as a complete failure, as the initial request succeeded
        }
      } else {
        toast.error("Something went wrong. Please try again.");
        console.error("Submission failed:", data.message);
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      console.error("Submission failed:", error);

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
          error.message || "Failed to submit campaign. Please try again."
        );
      }
    },
  });

  // Create a custom isPending property that combines mutation state and polling state
  const isPending = mutation.isPending || isPolling;

  // Return the mutation object with our custom isPending property added
  return {
    ...mutation,
    isPending,
  };
};
