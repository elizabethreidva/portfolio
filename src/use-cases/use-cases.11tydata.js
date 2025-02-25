export default {
	layout: "default.njk",
	tags: "use-case",
	pageType: "use-case",
	permalink: `/{{ page | makePath }}{{ pageTitle | slugify }}/`
};
