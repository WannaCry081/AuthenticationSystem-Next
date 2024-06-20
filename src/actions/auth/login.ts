"use server";
import * as z from "zod";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { LoginSchema } from "@/schemas";
import { LoginService } from "@/services";

const Login = async (values: z.infer<typeof LoginSchema>) => {
  const cookieStore = cookies();
  const validatedFields = LoginSchema.safeParse({
    email: values.email,
    password: values.password,
  });

  if (!validatedFields.success) {
    return {
      error: "Invalid Fields.",
    };
  }

  const response = await LoginService(validatedFields.data);

  if (!response) {
    return {
      error: "Invalid Credentials",
    };
  }

  cookieStore.set("access", response.data.access);
  cookieStore.set("refresh", response.data.refresh);
  redirect("/");
};

export { Login };
