import * as z from "zod";

const VerifySchema = z.object({
  email: z.string().email({
    message: "Email Address is required.",
  }),
  resetCode: z.string(),
  newPassword: z
    .string()
    .min(1, {
      message: "Password must be at least 8 characters.",
    })
    .max(100, {
      message: "Password can be at most 100 characters.",
    }),
});

export { VerifySchema };
