const SEO = {
	layoutTitle: "%s - Hammer Bot",
	title: "Home - Hammer Bot",
	publishDomain: "https://hammer.338.rocks",
	themeColor: "#0CE9ED",
	keywords: [
		"hammer",
		"bot",
		"discord",
		"multi",
		"multipurpose",
		"giveaway",
		"music",
		"moderation",
		"modular",
		"all-in-one",
		"all",
		"in",
		"one",
		"schedulers",
		"mod",
		"dc",
	],
	description: "Multipurpose, modular, easily configurable Discord bot.",
};

export const CONFIG = {
	EMAIL: "hammer@338.rocks",
	GA_TRACKING_ID: "G-14SS6XWKC1",
	DEV: process.env.NODE_ENV != "production",
	REVALIDATION: 60 * 5,
	SEO,
};
