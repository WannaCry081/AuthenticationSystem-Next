import axios from "axios";
import { cookies } from "next/headers";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((request) => {
  const cookieStore = cookies();
  const access = cookieStore.get("access");

  if (access?.value) {
    request.headers.Authorization = `Bearer ${access.value}`;
  }

  return request;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.config && error.response) {
      if (error.response.status === 401) {
        // refresh token
      } else {
        // restart the request
      }

      if (error.response.status === 403) {
        // Handle error
      }
    }
  }
);

export { axiosInstance };
