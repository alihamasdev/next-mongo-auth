"use client";
import Form from "next/form";
import loginAction from "./action";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Fragment, useActionState } from "react";

export default function Page() {
	const [state, action, pending] = useActionState(loginAction, undefined);

	return (
		<Fragment>
			<title>Sign Up | Next.js Authentication</title>
			<h1 className="text-center text-2xl font-extrabold md:text-3xl">Sign Up</h1>
			<Form action={action} className="mt-6 flex w-full flex-col gap-y-6">
				<div className="relative">
					<Label htmlFor="name">Enter name</Label>
					<Input name="name" type="text" id="name" disabled={pending} />
					{state?.errors?.name && <p className="error">{state.errors.name}</p>}
				</div>
				<div className="relative">
					<Label htmlFor="email">Enter email address</Label>
					<Input name="email" type="text" id="email" disabled={pending} />
					{state?.errors?.email && <p className="error">{state.errors.email}</p>}
				</div>
				<div className="relative">
					<Label htmlFor="password">Enter password</Label>
					<Input name="password" type="password" id="password" disabled={pending} />
					{state?.errors?.password && <p className="error">{state.errors.password}</p>}
				</div>
				<Button className="mt-2" disabled={pending}>
					Sign Up
				</Button>
			</Form>
		</Fragment>
	);
}
