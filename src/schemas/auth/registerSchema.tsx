import * as z from "zod";


const registerSchema = z.object({
  username: z
    .string()
    .min(1, { 
      message: "Username must be at least 2 characters." })
    .max(40, { 
      message: "Username can be at most 40 characters." }),
  email: z
    .string()
    .email({ 
      message: "Email Address is required." })
    .max(100, { 
      message: "Email Address can be at most 100 characters." }),
  password: z
    .string()
    .min(1, { 
      message: "Password must be at least 8 characters." })
    .max(100, { 
      message: "Password can be at most 100 characters." }),
  rePassword: z
    .string()
    .min(1, {
      message : "Confirm Password is required."
    })
}).superRefine((data, ctx) => {
  if (data.rePassword !== data.password) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Passwords do not match.",
      path: ['rePassword'],
    });
  }
});;


export { registerSchema };