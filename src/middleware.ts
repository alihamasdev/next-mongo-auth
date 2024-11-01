import { getSessionUserId } from "./lib/auth";
import { NextResponse, type NextRequest } from "next/server";

const publicRoutes = ["/login", "/signup"];
const protectedRoutes = ["/", "/profile"];

export async function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname;
	const isPublicRoute = publicRoutes.includes(path);
	const isProtectedRoute = protectedRoutes.includes(path);

	const userId = await getSessionUserId();

	if (isPublicRoute && userId) {
		return NextResponse.redirect(new URL("/", request.nextUrl));
	}

	if (isProtectedRoute && !userId) {
		return NextResponse.redirect(new URL("/login", request.nextUrl));
	}

	return NextResponse.next();
}
