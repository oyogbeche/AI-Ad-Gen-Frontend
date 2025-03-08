import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { postRequest } from "@/lib/api";

export const useSubmitCampaign = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: ["submitCampaign"],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: (formData: Record<string, any>) =>
      postRequest("/image/generate", formData),
    onSuccess: (data) => {
      // console.log("Response:", data);

      // if (data.status_code === 201 && data.data.success) {
      //   router.push(`/preview/${data.data.image_id}`);
      // }

      if (data.status_code === 201 && data.data.success) {
        localStorage.setItem("campaignData", JSON.stringify(data.data));

        router.push(`/create-ad/preview/${data.data.image_id}`);
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      console.error("Submission failed:", error.message);
    },
  });
};
