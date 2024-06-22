"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LogoutService } from "@/services";

const Logout = async () => {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get("refresh")?.value;

  if (!refreshToken) {
    redirect("/login");
  }

  const data = { refresh: refreshToken };

  await LogoutService(data);

  cookieStore.delete("access");
  cookieStore.delete("refresh");

  redirect("/");
};

export { Logout };
