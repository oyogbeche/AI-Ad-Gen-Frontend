"use client"

import { useAuthStore } from "@/store/auth-store"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { toast } from "sonner"

interface ImageGenerationResponse {
  status: string
  status_code: number
  message: string
  data: {
    success: boolean
    image_url: string
    image_id: string
    direct_image_url: string
    prompt_used: string
    target_audience: string
    ad_description: string
    is_published: boolean
    metadata: Record<string, unknown>
    task_id?: string
    error?: string
  }
}

interface TaskStatusResponse {
  status: string
  status_code: number
  message: string
  data: {
    task_id: string
    status: "pending" | "processing" | "completed" | "failed"
    progress: number
    result?: {
      image_url: string
      direct_image_url: string
    }
    error?: string
  }
}

interface GenerateImageParams {
  ad_goal: string
  ad_size: string
  target_audience: string
  image?: File | string
}

// Status type with error state added
type AdStatus = "initial" | "ready" | "generating" | "completed" | "error"

// API utility functions
const postRequestFormData = async (
  endpoint: string,
  data: Record<string, unknown>,
  headers?: Record<string, string>,
) => {
  const token = useAuthStore.getState().token
  const formData = new FormData()

  Object.keys(data).forEach((key) => {
    if (data[key] !== undefined) {
      formData.append(key, data[key] as string | Blob)
    }
  })

  const response = await fetch(`https://staging.api.genz.ad/api/v1${endpoint}`, {
    method: "POST",
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
      ...headers,
    },
    body: formData,
  })

  const responseData = await response.json()

  if (!response.ok) {
    throw new Error(responseData.message || "Something went wrong")
  }

  return responseData
}

const getRequest = async (endpoint: string) => {
  const token = useAuthStore.getState().token

  const response = await fetch(`https://staging.api.genz.ad/api/v1${endpoint}`, {
    method: "GET",
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
      "Content-Type": "application/json",
    },
  })

  const responseData = await response.json()

  if (!response.ok) {
    throw new Error(responseData.message || "Something went wrong")
  }

  return responseData
}

export const useGenerateImage = () => {
  const router = useRouter()
  const [status, setStatus] = useState<AdStatus>("initial")
  const [progress, setProgress] = useState(0)
  const [result, setResult] = useState<ImageGenerationResponse | null>(null)
  const [taskId, setTaskId] = useState<string | null>(null)
  const [taskStatus, setTaskStatus] = useState<string | null>(null)
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string>("/preview.png")

  const pollTimerRef = useRef<NodeJS.Timeout | null>(null)
  const lastProgressRef = useRef<number>(0)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Clear polling timer on component unmount
  useEffect(() => {
    return () => {
      if (pollTimerRef.current) clearInterval(pollTimerRef.current)
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
        progressIntervalRef.current = null
      }
    }
  }, [])

  // Update last progress
  useEffect(() => {
    lastProgressRef.current = progress
  }, [progress])

  // Start polling task status
  const startTaskPolling = (taskId: string) => {
    // Validate task ID before starting polling
    if (!taskId || taskId.trim() === "") {
      console.error("Invalid task ID provided:", taskId)
      setStatus("error")
      toast.error("Invalid task ID. Please try again.")
      return
    }

    setTaskId(taskId)
    console.log(`Starting to poll task status for task ID: ${taskId}`)

    // Store in localStorage for recovery
    try {
      localStorage.setItem(
        "currentTask",
        JSON.stringify({
          task_id: taskId,
          timestamp: new Date().toISOString(),
        }),
      )
    } catch (error) {
      console.warn("Failed to save task to localStorage:", error)
    }

    // Set the initial status and route to the generating page
    setStatus("generating")
    router.push(`/create-ad/generating/${taskId}`)

    // Poll every 2 seconds without any timeout limit
    pollTimerRef.current = setInterval(async () => {
      try {
        // Skip polling if task ID is invalid
        if (!taskId || taskId.trim() === "") {
          clearInterval(pollTimerRef.current!)
          setStatus("error")
          toast.error("Invalid task ID. Please try again.")
          return
        }

        const response = (await getRequest(`/image/task/${taskId}`)) as TaskStatusResponse

        // Check if the response indicates an error
        if (response.status === "error") {
          throw new Error(response.message || "Error checking task status")
        }

        const taskStatus = response.data.status

        setTaskStatus(taskStatus)
        console.log(`Task ${taskId} status: ${taskStatus}`, response.data)

        // Update progress if available
        if (response.data.progress !== undefined) {
          setProgress(response.data.progress)
        }

        // Handle different task statuses
        if (taskStatus === "completed" && response.data.result) {
          // Task completed successfully
          clearInterval(pollTimerRef.current!)

          // Clear progress simulation
          if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current)
            progressIntervalRef.current = null
          }

          setStatus("completed")
          setProgress(100)

          // Set the generated image URL
          if (response.data.result.direct_image_url) {
            setGeneratedImageUrl(response.data.result.direct_image_url)
          }

          // Update result with task result data
          if (result) {
            setResult({
              ...result,
              data: {
                ...result.data,
                direct_image_url: response.data.result.direct_image_url,
                image_url: response.data.result.image_url,
              },
            })
          } else {
            // If result is null, create a new result object with the image URLs
            setResult({
              status: "success",
              status_code: 200,
              message: "Image generated successfully",
              data: {
                success: true,
                image_url: response.data.result.image_url,
                direct_image_url: response.data.result.direct_image_url,
                image_id: "",
                prompt_used: "",
                target_audience: "",
                ad_description: "",
                is_published: false,
                metadata: {},
              },
            })
          }

          // Remove task from localStorage
          try {
            localStorage.removeItem("currentTask")
          } catch (error) {
            console.warn("Failed to remove task from localStorage:", error)
          }

          toast.success("Image generated successfully")
          router.push(`/create-ad/preview/${taskId}`)
        } else if (taskStatus === "failed") {
          // Task failed
          clearInterval(pollTimerRef.current!)

          // Clear progress simulation
          if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current)
            progressIntervalRef.current = null
          }

          setStatus("error")
          console.error("Task failed:", response.data.error)

          // Remove task from localStorage
          try {
            localStorage.removeItem("currentTask")
          } catch (error) {
            console.warn("Failed to remove task from localStorage:", error)
          }

          toast.error(response.data.error || "Image generation failed")
        }
      } catch (error) {
        console.error("Error polling task status:", error)
        // Don't stop polling on error - just log it and continue
      }
    }, 2000)
  }

  // Main mutation for image generation
  const mutation = useMutation({
    mutationKey: ["generateImage"],
    mutationFn: async (params: GenerateImageParams) => {
      console.log("API Parameters:", {
        ad_goal: params.ad_goal,
        ad_size: params.ad_size,
        target_audience: params.target_audience,
        image: params.image ? "Image provided" : "No image",
      })

      // Validate required fields
      if (!params.ad_goal || params.ad_goal.trim() === "") {
        throw new Error("Ad goal (description) is required")
      }

      if (!params.ad_size || params.ad_size.trim() === "") {
        throw new Error("Ad size is required")
      }

      // Start progress simulation for UI feedback
      startProgressSimulation()
      setStatus("generating")

      // Create the request payload
      const requestData: Record<string, unknown> = {
        ad_goal: params.ad_goal.trim(),
        ad_size: params.ad_size.trim(),
        target_audience: params.target_audience,
      }

      // Handle image if provided
      if (params.image) {
        if (typeof params.image === "string" && params.image.startsWith("data:")) {
          try {
            // Convert base64 to blob
            const response = await fetch(params.image)
            const blob = await response.blob()

            // Create a File object from the blob
            const file = new File([blob], "image.jpg", { type: "image/jpeg" })
            requestData.image = file
          } catch (error) {
            console.error("Error processing image:", error)
          }
        } else if (params.image instanceof File) {
          requestData.image = params.image
        }
      }

      // Make the API call
      console.log("Sending request data:", requestData)
      return postRequestFormData("/image/generate", requestData) as Promise<ImageGenerationResponse>
    },
    onSuccess: (data: ImageGenerationResponse) => {
      setResult(data)

      if (data.status_code === 200 || data.status_code === 201) {
        // Check if we have a task_id
        if (data.data.task_id && data.data.task_id.trim() !== "") {
          console.log(`Image generation task created with ID: ${data.data.task_id}`)
          // Start polling for task status
          startTaskPolling(data.data.task_id)
        } else if (data.data.direct_image_url) {
          // Immediate result available - clear any progress simulation
          if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current)
            progressIntervalRef.current = null
          }

          setStatus("completed")
          setProgress(100)
          setGeneratedImageUrl(data.data.direct_image_url)
          toast.success("Image generated successfully")
        } else {
          console.warn("No task_id or direct_image_url in the response", data)
          setStatus("error")
          toast.error("Invalid response from server")
        }
      } else {
        console.warn("Unexpected response status code:", data.status_code)
        setStatus("error")
        toast.warning("Image generation completed with warnings")
      }
    },
    onError: (error: unknown) => {
      // Reset progress on error
      setProgress(0)
      setStatus("error")

      // Enhanced error logging
      console.error("Image generation failed:", error)

      if (error instanceof Error) {
        console.error("Error message:", error.message)
      }

      toast.error(error instanceof Error ? error.message : "Failed to generate image. Please try again.")
    },
    onSettled: () => {
      // Clear any progress intervals when complete (success or error)
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
        progressIntervalRef.current = null
      }
    },
  })

  // Progress simulation for UI feedback
  const startProgressSimulation = () => {
    setProgress(0)
    lastProgressRef.current = 0

    // Clear any existing interval
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current)
    }

    // Create a new interval for progress simulation
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 5
        return newProgress >= 90 ? 90 : newProgress
      })
    }, 500)
  }

  // Cancel current task
  const cancelGeneration = () => {
    if (pollTimerRef.current) clearInterval(pollTimerRef.current)
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current)
      progressIntervalRef.current = null
    }

    setStatus("initial")
    setProgress(0)
    setTaskId(null)
    setTaskStatus(null)

    try {
      localStorage.removeItem("currentTask")
    } catch (error) {
      console.warn("Failed to remove task from localStorage:", error)
    }
  }

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
    generatedImageUrl,
  }
}