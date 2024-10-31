import { dbConnect } from "@/db/connect";
import { notFound } from "next/navigation";
import { getSessionUserId } from "@/lib/auth";
import User, { type UserSchema } from "@/db/models/user-model";

dbConnect();

export default async function Page() {
	const userId = await getSessionUserId();
	const user: UserSchema | null = await User.findById(userId);

	if (!user) return notFound();

	return (
		<section className="space-y-5">
			<div>
				<p>Name: {user.name}</p>
				<p>Email: {user.email}</p>
			</div>
		</section>
	);
}
