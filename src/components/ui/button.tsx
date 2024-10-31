import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:ring-zinc-300",
	{
		variants: {
			variant: {
				ghost: " hover:bg-zinc-800 hover:text-zinc-50",
				link: " underline-offset-4 hover:underline text-zinc-50",
				default: "shadow bg-zinc-50 text-zinc-900 hover:bg-zinc-50/90",
				destructive: "shadow-sm bg-red-900 text-zinc-50 hover:bg-red-900/90",
				secondary: "shadow-sm bg-zinc-800 text-zinc-50 hover:bg-zinc-800/80",
				outline: "border shadow-sm border-zinc-800 bg-zinc-950 hover:bg-zinc-800 hover:text-zinc-50"
			},
			size: {
				icon: "size-9",
				sm: "h-8 rounded-md px-3 text-xs",
				default: "h-9 px-4 py-2",
				lg: "h-10 rounded-md px-8"
			}
		},
		defaultVariants: {
			variant: "default",
			size: "default"
		}
	}
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

export function Button({ variant, size, children, className, ...props }: ButtonProps) {
	return (
		<button className={twMerge(buttonVariants({ variant, size, className }))} {...props}>
			{children}
		</button>
	);
}
