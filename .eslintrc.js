const isDev = process.env.NODE_ENV !== "production";

function registerWorkspaces() {
	const { readdirSync, statSync } = require("fs");
	const { resolve } = require("path");

	const submodules_path = "./front_core/@mce/";
	try {
		return readdirSync(submodules_path)
			.reduce((acc, name) => {
				const path = resolve(`${submodules_path}${name}`);
				const entryStat = statSync(path);
				if (entryStat.isDirectory()) acc.push(`@mce/${name}`);
				return acc;
			}, []);
	} catch {
		return [];
	}
}

module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: ["plugin:vue/vue3-essential", "@vue/airbnb"], // extends configurations
	ignorePatterns: ["/front_core/"], // avoid linting submodules
	settings: {
		// treat @mce folders as internal dependencies
		// to replace with "import/core-modules": ["@mce/*"], follow https://github.com/benmosher/eslint-plugin-import/issues/1281
		"import/core-modules": registerWorkspaces(),
	},
	parserOptions: {
		parser: "babel-eslint",
	},
	rules: {
		"linebreak-style": ["error", "unix"],
		indent: ["error", "tab"],

		"no-tabs": [
			"error",
			{
				allowIndentationTabs: true,
			},
		],

		"arrow-parens": ["error", "as-needed"],

		"max-len": [
			"error",
			{
				code: 100,
				tabWidth: 4,
				ignoreComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
				ignorePattern: "^\\s*(<\\S+ |/?>).*$",
			},
		],
		"import/no-unresolved": "off",

		"no-continue": "off",

		"no-fallthrough": ["error", {
			commentPattern: "next$",
		}],

		"no-plusplus": [
			"error",
			{
				allowForLoopAfterthoughts: true,
			},
		],

		quotes: [
			"error",
			"double",
			{
				avoidEscape: true,
				allowTemplateLiterals: true,
			},
		],

		camelcase: "off",

		"no-underscore-dangle": [
			"error",
			{
				allowAfterThis: false,
				allowAfterSuper: false,
				enforceInMethodNames: false,
			},
		],

		"no-console": isDev ? "off" : "error",

		"no-debugger": isDev ? "off" : "error",
	},
	overrides: [
		{
			files: [
				"*/*/*-test.js",
				"*/*/*.spec.js",
			],
			rules: {
				"no-unused-expressions": "off",
				"no-undef": "off",
				"no-console": "off",
				"no-debugger": "off",
			},
		},
	],
};