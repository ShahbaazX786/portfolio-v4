import * as z from "zod";

export const customMessageSchema = z.object({
  name: z.string().min(2).max(200),
  email: z.string().email(),
  message: z.string().min(5).max(200),
});
