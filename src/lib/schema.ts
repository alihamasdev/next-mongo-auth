import { z } from "zod";

const loginSchema = z.object({
	email: z.string().email({ message: "Please enter valid email address" }).trim(),
	password: z.string().min(8, { message: "Password must contain atleast 8 characters" }).trim()
});

const signUpSchema = loginSchema.extend({
	name: z.string().min(1, { message: "Name is required" }).trim()
});

export { loginSchema, signUpSchema };
