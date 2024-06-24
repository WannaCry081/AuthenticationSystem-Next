"use server";
import * as z from "zod";
import { redirect } from "next/navigation";
import { ResetPasswordSchema } from "@/schemas";
import { ResetPasswordService } from "@/services";

const VerifyAction = async (values: z.infer<typeof ResetPasswordSchema>) => {
  const validatedFields = ResetPasswordSchema.safeParse({
    email: values.email,
    resetCode: values.resetCode,
    newPassword: values.newPassword,
  });

  if (!validatedFields.success) {
    return {
      error: "Invalid Fields",
    };
  }

  const response = await ResetPasswordService(validatedFields.data);

  if (!response) {
    return {
      error: "Invalid Credentials",
    };
  }

  redirect("/login");
};

export default VerifyAction;
