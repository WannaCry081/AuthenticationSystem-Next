import { axiosInstance } from "@/constants/axiosInstance";

interface RegisterServiceProps {
  username: string;
  email: string;
  password: string;
  rePassword: string;
}

const RegisterService = async (data: RegisterServiceProps) => {
  try {
    const response = await axiosInstance.post("auth/register/", data);
    return response;
  } catch (error) {
    throw error;
  }
};

export { RegisterService };
