export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const postRequest = async (
  endpoint: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>,
  headers?: Record<string, string>
) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || "Something went wrong");
  }

  return responseData;
};

export const getRequest = async (
  url: string,
  headers?: Record<string, string>
) => {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });

  try {
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(
        responseData.message || `Request failed with status ${response.status}`
      );
    }

    return responseData;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error("Invalid JSON response");
    }
    throw error;
  }
};
