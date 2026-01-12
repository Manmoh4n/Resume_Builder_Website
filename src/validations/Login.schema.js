import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required"),
    // .email("Invalid email address"),

  password: z
    .string()
    .min(8, "Password is required"),
});

export default LoginSchema;
