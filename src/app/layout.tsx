import Link from "next/link";
import type { Metadata } from "next";
import localFont from "next/font/local";

import "@/styles/globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900"
});

export const metadata: Metadata = {
	title: "Next.js Authentication",
	description: "Next.js authentication app with mongoDB"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="w-full bg-black text-white" style={geistSans.style}>
				<header className="fixed top-0 w-full border-b border-b-zinc-800 bg-zinc-950">
					<nav className="flex h-14 items-center justify-center gap-x-8 text-sm font-medium *:underline-offset-4 hover:*:underline">
						<Link href="/">Home</Link>
						<Link href="/profile">Profile</Link>
						<Link href="/login">Login</Link>
						<Link href="/signup">Sign Up</Link>
					</nav>
				</header>
				<main className="flex min-h-dvh w-full items-center justify-center">{children}</main>
			</body>
		</html>
	);
}
