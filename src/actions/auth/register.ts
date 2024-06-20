"use server";
import * as z from "zod";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { RegisterSchema } from "@/schemas";
import { RegisterService } from "@/services";

const Register = async (values: z.infer<typeof RegisterSchema>) => {
  const cookieStore = cookies();
  const validatedFields = RegisterSchema.safeParse({
    username: values.username,
    email: values.email,
    password: values.password,
    rePassword: values.rePassword,
  });

  if (!validatedFields.success) {
    return {
      error: "Invalid Fields",
    };
  }

  const response = await RegisterService(validatedFields.data);

  if (!response) {
    return {
      error: "Invalid Credentials",
    };
  }

  cookieStore.set("access", response.data.access);
  cookieStore.set("refresh", response.data.refresh);
  redirect("/");
};

export { Register };
