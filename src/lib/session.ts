import { type ObjectId } from "mongoose";
import { SignJWT, jwtVerify } from "jose";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

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
