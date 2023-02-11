import axios from "axios";
import { parseCookies } from "nookies";
import { QueryClient } from "react-query";

const cookies = parseCookies();

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    // Authorization: cookies.ACCESS_TOKEN,
    ["Platform-Id"]: "7d4a4c38-dd84-4902-b744-0488b80a4c02",
  },
});

export const authRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_PASSWORD_URL,
  body: {
    platform_id: "7d4a4c38-dd84-4902-b744-0488b80a4c02",
  },
});

const errorHandler = (error) => {
  if (error && error.response) {
    
  }
  return Promise.reject(error.response);
};

request.interceptors.response.use((response) => response, errorHandler);


export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

