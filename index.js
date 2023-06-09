const addKeyboardNav = require("./add-keyboard-navigation");

module.exports = {
	configFunction: function (eleventyConfig, options = {}) {
		eleventyConfig.addTransform("add-keyboard-navigation", (input) =>
			addKeyboardNav(input)
		);
	},
};
