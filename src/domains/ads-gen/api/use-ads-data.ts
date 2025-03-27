import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axios-fetch";
import { useAdsContext } from "../context/AdsContext";

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
  const { userPage, communityPage, setUserPage, setCommunityPage } =
    useAdsContext();

  const PAGE_SIZE = 10;

  const fetchAds = async (url: string, page: number) => {
    const response = await getRequest(url, { page, page_size: PAGE_SIZE });
    return response.data.images as Ad[];
  };

  const publishedQuery = useQuery({
    queryKey: ["published-ads", communityPage],
    queryFn: () => fetchAds("/image/all/published", communityPage),
    placeholderData: (prevData) => prevData ?? [],
  });

  const userQuery = useQuery({
    queryKey: ["user-ads", userPage],
    queryFn: () => fetchAds("/image/", userPage),
    placeholderData: (prevData) => prevData ?? [],
  });

  return {
    publishedImages: publishedQuery.data || [],
    userImages: userQuery.data || [],
    isLoading: publishedQuery.isLoading || userQuery.isLoading,
    isError: publishedQuery.isError || userQuery.isError,
    // refetch: () => {
    //   publishedQuery.refetch();
    //   userQuery.refetch();
    // },
    nextUserPage: () => setUserPage((prev) => prev + 1),
    prevUserPage: () => setUserPage((prev) => Math.max(1, prev - 1)),
    nextCommunityPage: () => setCommunityPage((prev) => prev + 1),
    prevCommunityPage: () => setCommunityPage((prev) => Math.max(1, prev - 1)),
  };
};
