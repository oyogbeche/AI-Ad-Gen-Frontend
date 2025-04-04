import { postRequest } from "@/lib/axios-fetch";
import { useMutation } from "@tanstack/react-query";

// interface AdGoalResponse {
//   status: string;
//   status_code: number;
//   message: string;
//   data: {
//     target_audience: string[];
//   };
// }

export function useAdGoal() {
  const mutation = useMutation({
    mutationFn: async (adGoal: string) => {
      const response = await postRequest("/image/target-audience", {
        ad_goal: adGoal,
      });
      return response;
    },
    onError: (error: Error) => {
      console.error("Error submitting ad goal:", error);
    },
  });

  return {
    submitAdGoal: mutation.mutate,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    targetAudience: mutation.data?.data?.target_audience || [],
    reset: mutation.reset,
  };
}
