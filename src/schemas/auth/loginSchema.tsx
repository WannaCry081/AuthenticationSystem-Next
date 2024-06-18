import * as z from "zod";

const loginSchema = z.object({
  email : z
    .string()
    .email({
      message : "Email Address is required."
    })
    .max(100, {
      message : "Email Address must not exceed 100 characters." 
    }),
  password : z
    .string()
    .min(1, {
      message : "Password must be at least 8 characters."
    }).
    max(100, {
      message : "Password must not exceed 100 characters."
    })
});

export { loginSchema };