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
			<body style={geistSans.style}>{children}</body>
		</html>
	);
}
