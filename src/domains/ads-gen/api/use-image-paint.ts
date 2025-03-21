"use client";

import { postRequest } from "@/lib/axios-fetch";
import { useState } from "react";

interface InpaintResponse {
  success: boolean;
  image_url: string;
  error?: string;
  metadata?: Record<string, unknown>;
  image_id: string;
}

interface InpaintImageParams {
  image_id: string;
  prompt: string;
}

export function useInpaintImage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<InpaintResponse | null>(null);

  const inpaintImage = async ({ image_id, prompt }: InpaintImageParams) => {
    if (!image_id || !prompt) {
      setError("Image ID and prompt are required");
      return null;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await postRequest("/image/inpaint", {
        image_id,
        prompt,
      });

      setResult(response);
      return response;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to inpaint image";
      setError(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    inpaintImage,
    isLoading,
    error,
    result,
    reset: () => {
      setError(null);
      setResult(null);
    },
  };
}
