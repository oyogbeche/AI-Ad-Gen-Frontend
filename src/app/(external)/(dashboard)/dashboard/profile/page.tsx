"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { LayoutGrid } from "lucide-react";
import { useAuthStore } from "@/store/auth-store";
import { useEffect, useState } from "react";
import { getRequest } from "@/lib/axios-fetch";
import BackButton from "@/domains/ads-gen/components/back-button";

interface UserCountState {
  ads: number;
  publishedAds: number;
}

const Profile = () => {
  const user = useAuthStore((state) => state.user);

  const [userCount, setUserCount] = useState<UserCountState>({
    ads: 0,
    publishedAds: 0,
  });

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const [userResponse, publishedResponse] = await Promise.all([
          getRequest("/image/"),
          getRequest("image/user/published-count"),
        ]);

        if (
          userResponse.status === "success" &&
          publishedResponse.status === "success"
        ) {
          setUserCount({
            ads: userResponse.data.total_count,
            publishedAds: publishedResponse.data.published_count,
          });
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  // Format date to match design
  const formatJoinDate = (dateString: string | undefined) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;
  };

  return (
    <div className="h-full p-0 md:p-12 flex flex-col overflow-hidden">
      <div className="p-2 md:p-4 flex flex-col">
        <BackButton
          label="Back to Dashboard"
          fallbackUrl="/dashboard"
          className="my-5"
        />
        <Card className="w-full flex-1 shadow-sm border-gray-200">
          <CardHeader className="mb-4 md:mb-8">
            <h1 className="text-3xl font-bold">Account</h1>
            <p className="text-gray-500">View your profile info</p>
          </CardHeader>
          <CardContent className="mx-2 md:mx-8 p-4 md:p-6 border border-1 border-[#ECECEC] rounded-md">
            <div className="max-w-3xl">
              {/* Mobile-optimized profile header */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 bg-[#B800B8] text-white text-xl">
                    <AvatarFallback className="bg-[#B800B8] text-white text-xl">
                      {(user?.first_name?.[0] ?? "") +
                        (user?.last_name?.[0] ?? "")}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <h2 className="text-xl font-semibold">
                      {user?.first_name} {user?.last_name}
                    </h2>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                      <LayoutGrid className="h-4 w-4" />
                      <span>Joined: {formatJoinDate(user?.created_at)}</span>
                    </div>
                  </div>
                </div>

                {/* Profile details in mobile layout */}
                <div className="space-y-6 pt-4">
                  <div className="space-y-1">
                    <Label htmlFor="email" className="text-md font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      value={user?.email}
                      readOnly
                      className="bg-[#F5F7FB] text-[#A1A1A1] text-sm cursor-not-allowed"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label
                      htmlFor="accountType"
                      className="text-md font-medium"
                    >
                      Account type
                    </Label>
                    <div className="bg-[#F5F7FB] rounded-md border border-gray-200 px-3 py-2 text-[#A1A1A1] text-sm cursor-not-allowed">
                      {user?.is_subscribed ? "Subscribed" : "Free plan"}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="adsCreated" className="text-md font-medium">
                      Ads Created
                    </Label>
                    <div className="px-1 py-1 text-[#121316] text-sm font-medium">
                      {userCount?.ads.toString().padStart(2, "0") || "02"}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label
                      htmlFor="publishedAds"
                      className="text-md font-medium"
                    >
                      Published Ads
                    </Label>
                    <div className="px-1 py-1 text-[#121316] text-sm font-medium">
                      {userCount?.publishedAds?.toString().padStart(2, "0") ||
                        "02"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
