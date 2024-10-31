import { cookies } from "next/headers";
import { decrypt } from "@/lib/session";
import { NextResponse, type NextRequest } from "next/server";

const publicRoutes = ["/login", "/signup"];
const protectedRoutes = ["/", "/profile"];

export async function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname;
	const isPublicRoute = publicRoutes.includes(path);
	const isProtectedRoute = protectedRoutes.includes(path);

	const cookiesStore = await cookies();
	const sessionCookie = cookiesStore.get("session")?.value;
	const session = await decrypt(sessionCookie);

	if (isPublicRoute && session?.userId) {
		return NextResponse.redirect(new URL("/", request.nextUrl));
	}

	if (isProtectedRoute && !session?.userId) {
		return NextResponse.redirect(new URL("/login", request.nextUrl));
	}

	return NextResponse.next();
}
