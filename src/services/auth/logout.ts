import { axiosInstance } from "@/constants/axiosInstance";

interface LogoutServiceProps {
  refresh: string;
}

const LogoutService = async (data: LogoutServiceProps) => {
  try {
    const response = await axiosInstance.post("auth/blacklist/", data);
    return response;
  } catch (error) {
    throw error;
  }
};

export { LogoutService };
