import { z } from "zod";

export const EmailVerification = z.object({
  password: z
    .string({
      invalid_type_error: "Password is required",
    })
    .min(8, "Please provide a valid password"),
});
