"use server";
import * as z from "zod";
import { redirect } from "next/navigation";
import { VerifySchema } from "@/schemas";
import { VerifyService } from "@/services";

const VerifyAction = async (values: z.infer<typeof VerifySchema>) => {
  const validatedFields = VerifySchema.safeParse({
    email: values.email,
    resetCode: values.resetCode,
    newPassword: values.newPassword,
  });

  if (!validatedFields.success) {
    return {
      error: "Invalid Fields",
    };
  }

  const response = await VerifyService(validatedFields.data);

  if (!response) {
    return {
      error: "Invalid Credentials",
    };
  }

  redirect("/login");
};

export default VerifyAction;
