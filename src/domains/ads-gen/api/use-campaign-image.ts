import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/api";

export const useCampaignImage = (imageId: string | null) => {
  return useQuery({
    queryKey: ["campaignImage", imageId],
    queryFn: async () => {
      if (!imageId) {
        throw new Error("Image ID is required");
      }
      const response = await getRequest(`/image/${imageId}`);
      return response.data;
    },
    enabled: !!imageId,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
