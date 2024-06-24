import { axiosInstance } from "@/constants/axiosInstance";

interface ResetPasswordServiceProps {
  email: string;
  resetCode: string;
  newPassword: string;
}

const ResetPasswordService = async (data: ResetPasswordServiceProps) => {
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

export { ResetPasswordService };
