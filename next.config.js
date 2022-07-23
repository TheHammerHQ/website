const { withPlugins } = require("next-compose-plugins");
const withYAML = require("next-yaml");

/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	poweredByHeader: false,
	trailingSlash: true,
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
	async redirects() {
		return [
			{
				source: "/github",
				destination: "https://github.com/TheHammerHQ",
				permanent: true,
			},
		];
	},
};

module.exports = withPlugins([withYAML], nextConfig);
