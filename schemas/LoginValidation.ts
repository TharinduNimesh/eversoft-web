import { z } from "zod";

export const LoginValidation = z.object({
  email: z
    .string({
      invalid_type_error: "Email is required",
    })
    .email("Please enter a valid email address"),
  password: z
    .string()
    .regex(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Please use a strong password"
    ),
});
