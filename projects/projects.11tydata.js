export default {
	layout: "default.njk",
	tags: "project",
	pageType: "project",
	permalink: `/{{ page | makePath }}{{ pageTitle | slugify }}/`
};
