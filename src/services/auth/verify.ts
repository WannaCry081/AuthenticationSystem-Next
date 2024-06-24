import { axiosInstance } from "@/constants/axiosInstance";

interface VerifyServiceProps {
  email: string;
  resetCode: string;
  newPassword: string;
}

const VerifyService = async (data: VerifyServiceProps) => {
  try {
    const response = await axiosInstance.post(
      "auth/reset-password/verify/",
      data
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export default VerifyService;
