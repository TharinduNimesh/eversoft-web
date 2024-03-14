import { z } from "zod";

export const RegisterValidation = z.object({
  name: z
    .string({
      invalid_type_error: "Name is required",
    })
    .min(3, "Name must be at least 3 characters long"),
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
