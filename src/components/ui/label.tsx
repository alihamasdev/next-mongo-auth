import { twMerge } from "tailwind-merge";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ htmlFor, className, children }: LabelProps) {
	return (
		<label htmlFor={htmlFor} className={twMerge("mb-1.5 block text-sm font-semibold", className)}>
			{children}
		</label>
	);
}
