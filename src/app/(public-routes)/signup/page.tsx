import { Fragment } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Page() {
	return (
		<Fragment>
			<title>Sign Up | Next.js Authentication</title>
			<h1 className="text-center text-2xl font-extrabold md:text-3xl">Sign Up</h1>
			<form className="mt-6 flex w-full flex-col gap-y-6">
				<div className="relative">
					<Label htmlFor="name">Enter name</Label>
					<Input name="name" type="name" id="name" />
				</div>
				<div className="relative">
					<Label htmlFor="email">Enter email address</Label>
					<Input name="email" type="email" id="email" />
				</div>
				<div className="relative">
					<Label htmlFor="password">Enter password</Label>
					<Input name="password" type="password" id="password" />
				</div>
				<Button className="mt-2">Sign Up</Button>
			</form>
		</Fragment>
	);
}
