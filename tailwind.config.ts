import { type Config } from "tailwindcss";
import { black, white, zinc } from "tailwindcss/colors";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		colors: {
			black,
			white,
			zinc
		},
		extend: {
			spacing: {
				12.5: "3.125rem" /* 50px */,
				25: "6.25rem" /* 100px */,
				50: "12.50rem" /* 200px */,
				75: "18.75rem" /* 300px */,
				100: "25rem" /* 400px */,
				125: "31.25rem" /* 500px */,
				150: "37.5rem" /* 600px */,
				"9/10": "90%"
			}
		}
	},
	plugins: []
};

export default config;
