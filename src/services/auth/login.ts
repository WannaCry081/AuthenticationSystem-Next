import { axiosInstance } from "@/constants/axiosInstance";

interface LoginServiceProps {
  email: string;
  password: string;
}

const LoginService = async (data: LoginServiceProps) => {
  try {
    const response = await axiosInstance.post("auth/login/", data);
    return response;
  } catch (error) {
    throw error;
  }
};

export default LoginService;
