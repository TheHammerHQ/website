const { withPlugins } = require("next-compose-plugins");
const withYAML = require("next-yaml");

/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: false,
	poweredByHeader: false,
	trailingSlash: true,
	i18n: {
		locales: ["en", "tr"],
		defaultLocale: "en",
	},
	async redirects() {
		return [
			{
				source: "/github",
				destination: "https://github.com/TheHammerHQ",
				permanent: true,
			},
			{
				source: "/discord",
				destination: "https://discord.gg/pwxYGg5PZm",
				permanent: true,
			},
		];
	},
};

module.exports = withPlugins([withYAML], nextConfig);
