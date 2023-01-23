const path = require("path");
module.exports = {
	stories: [
		"../stories/**/*.stories.mdx",
		"../stories/**/*.stories.@(js|jsx|ts|tsx)",
		"../app/components/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-a11y",
	],
	framework: "@storybook/react",
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\,css&/,
			use: [
				{
					loader: "postcss-loader",
					options: {
						ident: "postcss",
						plugins: [require("tailwindcss"), require("autoprefixer")],
					},
				},
			],
			include: path.resolve(__dirname, "../"),
		});
		config.module.rules.push({
			test: /\.mjs$/,
			include: /node_modules/,
			type: "javascript/auto",
		});

		return config;
	},
};
