"use server";
import bcrypt from "bcryptjs";
import { dbConnect } from "@/db/connect";
import { redirect } from "next/navigation";
import { loginSchema } from "@/lib/schema";
import { createSession } from "@/lib/session";
import User, { type UserSchema } from "@/db/models/user-model";

dbConnect();

export default async function action(prevState: any, formData: FormData) {
	const validation = loginSchema.safeParse(Object.fromEntries(formData));
	if (!validation.success) return { errors: validation.error.flatten().fieldErrors };

	const { email, password } = validation.data;

	const user: UserSchema | null = await User.findOne({ email });
	if (!user) return { errors: { email: ["User with email doesn't exists"] } };

	const validPassword = await bcrypt.compare(password, user.password);
	if (!validPassword) return { errors: { password: ["Please enter valid password"] } };

	await createSession(user._id);
	redirect("/profile");
}
