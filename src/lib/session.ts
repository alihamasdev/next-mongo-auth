import { cookies } from "next/headers";
import { type ObjectId } from "mongoose";
import { SignJWT, jwtVerify } from "jose";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

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

type SessionPayload = {
	userId: string | ObjectId;
};

export async function encrypt(payload: SessionPayload, expiresAt: number | string | Date) {
	return new SignJWT(payload)
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt(Date.now())
		.setExpirationTime(expiresAt)
		.sign(encodedKey);
}

export async function decrypt(token: string | undefined = "") {
	try {
		const verify = await jwtVerify(token, encodedKey, { algorithms: ["HS256"] });
		return verify.payload;
	} catch (error) {
		console.error("Failed to verify session");
	}
}
