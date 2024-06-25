"use server";
import { GetProfileService } from "@/services";
import { User } from "@/types/user";

const GetProfileAction = async () => {
  const response: User = await GetProfileService();

  if (!response) {
    return {} as User;
  }

  return response;
};

export default GetProfileAction;
