import { axiosInstance } from "@/constants/axiosInstance";
import type { User } from "@/types/user";

const GetProfileService = async () : Promise<User> => {
  try {
    const response = await axiosInstance.get("users/me/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default GetProfileService;
