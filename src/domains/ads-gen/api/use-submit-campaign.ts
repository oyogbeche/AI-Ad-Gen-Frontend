import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { postRequest } from "@/lib/api";
import { toast } from "sonner";

export const useSubmitCampaign = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: ["submitCampaign"],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: (formData: Record<string, any>) =>
      postRequest("/image/generate", formData),
    onSuccess: (data) => {
      if (data.status_code === 201 && data.data.success) {
        localStorage.setItem("campaignData", JSON.stringify(data.data));

        router.push(`/create-ad/preview/${data.data.image_id}`);
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
        // Show each validation error as a separate toast or combine them
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
};
