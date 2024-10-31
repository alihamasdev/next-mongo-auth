import { cookies } from "next/headers";
import { type ObjectId } from "mongoose";
import { decrypt, encrypt } from "./session";

export async function createSession(userId: string | ObjectId, expiry?: Date) {
	const expiresAt = expiry || new Date(Date.now() + 120 * 24 * 60 * 60 * 1000);
	const session = await encrypt({ userId }, expiresAt);
	const cookiesStore = await cookies();
	cookiesStore.set("session", session, {
		secure: true,
		httpOnly: true,
		sameSite: "strict",
		expires: expiresAt
	});
	return session;
}
