"use server";
import * as z from "zod";
import { redirect } from "next/navigation";
import { ForgotPasswordSchema } from "@/schemas";
import { ForgotPasswordService } from "@/services";

const ForgotPassword = async (values: z.infer<typeof ForgotPasswordSchema>) => {
  const validatedFields = ForgotPasswordSchema.safeParse({
    email: values.email,
  });

  if (!validatedFields.success) {
    return {
      error: "Invalid Fields",
    };
  }

  const response = await ForgotPasswordService(validatedFields.data);

  if (!response) {
    return {
      error: "Invalid Credentials",
    };
  }

  redirect(
    `/forgot-password/reset-password?email=${encodeURIComponent(
      validatedFields.data.email
    )}`
  );
};

export { ForgotPassword };
