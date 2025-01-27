import * as z from "zod";

const ResetPasswordSchema = z.object({
  email: z
    .string()
    .email({
      message: "Email Address is required.",
    })
    .max(100, {
      message: "Email Address must not exceed 100 characters.",
    }),
});

export { ResetPasswordSchema };
