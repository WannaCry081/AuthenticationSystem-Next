import { axiosInstance } from "@/constants/axiosInstance";

interface ForgotPasswordServiceProps {
  email: string;
}

const ForgotPasswordService = async (data: ForgotPasswordServiceProps) => {
  try {
    const response = await axiosInstance.post("auth/reset-password/", data);
    return response;
  } catch (error) {
    throw error;
  }
};

export { ForgotPasswordService };
