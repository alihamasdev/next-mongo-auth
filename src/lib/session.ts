import { cookies } from "next/headers";
import { SignJWT, jwtVerify, type JWTPayload } from "jose";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function createSession(payload: JWTPayload, expiry?: Date) {
	const expiresAt = expiry || new Date(Date.now() + 120 * 24 * 60 * 60 * 1000);
	const session = await encrypt({ payload }, expiresAt);
	const cookiesStore = await cookies();
	cookiesStore.set("session", session, {
		secure: true,
		httpOnly: true,
		sameSite: "strict",
		expires: expiresAt
	});
	return session;
}

export async function encrypt(payload: JWTPayload, expiresAt: number | string | Date) {
	return new SignJWT(payload)
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt(Date.now())
		.setExpirationTime(expiresAt)
		.sign(encodedKey);
}

export async function decrypt(token: string | undefined = "") {
	try {
		const { payload } = await jwtVerify(token, encodedKey, { algorithms: ["HS256"] });
		return payload;
	} catch (error) {
		console.error("Failed to verify session");
	}
}
