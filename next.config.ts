import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	devIndicators: {
		buildActivity: false,
		appIsrStatus: false
	},
	eslint: {
		ignoreDuringBuilds: true
	}
};

export default nextConfig;
