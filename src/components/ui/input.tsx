import { twMerge } from "tailwind-merge";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { error?: string[] | string | undefined };

export function Input({ type, className, id, error, ...props }: InputProps) {
	return (
		<input
			id={id}
			type={type}
			className={twMerge(
				"flex h-9 w-full rounded-md border border-zinc-800 bg-black px-3 py-1 text-sm shadow-sm transition-colors duration-300 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:pointer-events-none",
				error && "border-red-500 focus-visible:ring-red-500",
				className
			)}
			{...props}
		/>
	);
}
