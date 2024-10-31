import { type Metadata } from "next";

export const metadata: Metadata = {
	title: "Auth | Next.js Authentication",
	description: "Next.js authentication app with mongoDB"
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<section className="w-full px-5 py-8 md:w-125 md:rounded-xl md:border md:border-zinc-800 md:px-16 md:pb-12">
			{children}
		</section>
	);
}
