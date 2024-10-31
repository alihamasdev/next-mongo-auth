import { z } from "zod";

const loginSchema = z.object({
	email: z.string({ message: "Email is required" }).email({ message: "Please enter valid email address" }).trim(),
	password: z
		.string({ message: "Password is required" })
		.min(8, { message: "Password must contain atleast 8 characters" })
		.trim()
});

const signUpSchema = loginSchema.extend({
	name: z.string({ message: "Name is required" }).trim()
});

export { loginSchema, signUpSchema };
