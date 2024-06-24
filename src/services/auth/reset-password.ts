import { axiosInstance } from "@/constants/axiosInstance";

interface ResetPasswordServiceProps {
  email: string;
}

const ResetPasswordService = async (data: ResetPasswordServiceProps) => {
  try {
    const response = await axiosInstance.post("auth/reset-password/", data);
    return response;
  } catch (error) {
    throw error;
  }
};

export default ResetPasswordService;
