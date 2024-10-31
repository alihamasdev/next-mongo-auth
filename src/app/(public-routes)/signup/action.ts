"use server";
import bcrypt from "bcryptjs";
import { dbConnect } from "@/db/connect";
import User from "@/db/models/user-model";
import { signUpSchema } from "@/lib/schema";
import { redirect } from "next/navigation";

await dbConnect();

export default async function action(prevState: any, formData: FormData) {
	const validation = signUpSchema.safeParse(Object.fromEntries(formData));
	if (!validation.success) return { errors: validation.error.flatten().fieldErrors };

	const { name, email, password } = validation.data;

	const alreadyUser = await User.findOne({ email });
	if (alreadyUser) return { errors: { email: ["User with same email already exists"] } };

	const salt = await bcrypt.genSalt(12);
	const hashedPassword = await bcrypt.hash(password, salt);

	const newUser = new User({
		name,
		email,
		password: hashedPassword
	});
	await newUser.save();
	redirect("/login");
}
