/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useAuthStore } from "@/store/auth-store";

const API_BASE_URL = "https://staging.api.genz.ad/api/v1";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// Function to get Authorization and Content-Type headers
const getHeaders = (headers?: Record<string, string>) => {
  const token = useAuthStore.getState().token;

  return {
    "Content-Type": headers?.["Content-Type"] || "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...headers, 
  };
};

export const postRequest = async (
  endpoint: string,
  data: Record<string, any>,
  headers?: Record<string, string>
) => {
  try {
    const response = await axiosInstance.post(endpoint, data, {
      headers: getHeaders(headers),
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Something went wrong"
    );
  }
};

export const getRequest = async (
  url: string,
  headers?: Record<string, string>
) => {
  try {
    const response = await axiosInstance.get(url, {
      headers: getHeaders(headers),
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || `Request failed with status ${error.response?.status}`
    );
  }
};

export const patchRequest = async (
  endpoint: string,
  data: Record<string, any>,
  headers?: Record<string, string>
) => {
  try {
    const response = await axiosInstance.patch(endpoint, data, {
      headers: getHeaders(headers),
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Something went wrong"
    );
  }
};

export const deleteRequest = async (
  endpoint: string,
  headers?: Record<string, string>
) => {
  try {
    const response = await axiosInstance.delete(endpoint, {
      headers: getHeaders(headers),
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Something went wrong"
    );
  }
};
