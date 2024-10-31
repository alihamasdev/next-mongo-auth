"use client";
import Form from "next/form";
import signUpAction from "./action";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Fragment, useActionState } from "react";

export default function Page() {
	const [state, action, pending] = useActionState(signUpAction, undefined);

	return (
		<Fragment>
			<title>Login | Next.js Authentication</title>
			<h1 className="text-center text-2xl font-extrabold md:text-3xl">Login</h1>
			<Form action={action} className="mt-6 flex w-full flex-col gap-y-6">
				<div className="relative">
					<Label htmlFor="email">Enter email address</Label>
					<Input name="email" type="email" id="email" disabled={pending} />
					{state?.errors?.email && <p className="error">{state.errors.email}</p>}
				</div>
				<div className="relative">
					<Label htmlFor="password">Enter password</Label>
					<Input name="password" type="password" id="password" disabled={pending} />
					{state?.errors?.password && <p className="error">{state.errors.password}</p>}
				</div>
				<Button className="mt-2" disabled={pending}>
					Login
				</Button>
			</Form>
		</Fragment>
	);
}
