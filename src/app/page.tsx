import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Page() {
	return (
		<div className="flex flex-col items-center px-5">
			<h1 className="text-center text-3xl font-bold md:text-5xl md:font-extrabold">Home Page</h1>
			<p className="mt-6 text-center text-zinc-400">
				This is a protected route and can oly be accessible by login users
			</p>
			<Link href="/profile" className={buttonVariants({ variant: "outline", className: "mt-6" })}>
				Visit Profile
			</Link>
		</div>
	);
}
