import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axios-fetch";

interface Ad {
  ad_description: string;
  author_info: { name: string; avatar: string };
  created_at: string;
  final_url: string;
  id: string;
  image_url: string;
  is_published: boolean;
  prompt: string;
  product_name: string;
  target_audience: string;
  updated_at: string;
}

export const useAdsData = () => {
  const fetchPublishedImages = async () => {
    const response = await getRequest("/image/all/published");
    return response.data.images as Ad[];
  };

  const fetchUserImages = async () => {
    const response = await getRequest("/image/");
    return response.data.images as Ad[];
  };

  const publishedQuery = useQuery({
    queryKey: ["published-ads"],
    queryFn: fetchPublishedImages,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  const userQuery = useQuery({
    queryKey: ["user-ads"],
    queryFn: fetchUserImages,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return {
    publishedImages: publishedQuery.data || [],
    userImages: userQuery.data || [],
    isLoading: publishedQuery.isLoading || userQuery.isLoading,
    isError: publishedQuery.isError || userQuery.isError,
    refetch: () => {
      publishedQuery.refetch();
      userQuery.refetch();
    },
  };
};
