"use server";
import * as z from "zod";
import { redirect } from "next/navigation";
import { ResetPasswordSchema } from "@/schemas";
import { ResetPasswordService } from "@/services";

const ResetPasswordAction = async (
  values: z.infer<typeof ResetPasswordSchema>
) => {
  const validatedFields = ResetPasswordSchema.safeParse({
    email: values.email,
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

  redirect(
    `/reset-password/verify?email=${encodeURIComponent(
      validatedFields.data.email
    )}`
  );
};

export default ResetPasswordAction;
