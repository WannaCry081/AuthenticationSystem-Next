"use server";
import * as z from "zod";
import { ForgotPasswordSchema } from "@/schemas";
import { ForgotPasswordService } from "@/services";

const ForgotPassword = async (values: z.infer<typeof ForgotPasswordSchema>) => {
  const validatedFields = ForgotPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid Fields",
    };
  }

  const response = await ForgotPasswordService(validatedFields.data);

  return {
    success: "Logged in successfully",
  };
};

export { ForgotPassword };
