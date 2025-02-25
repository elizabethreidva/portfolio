import * as sass from 'sass';
import clean from "eleventy-plugin-clean";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
	eleventyConfig.addTemplateFormats("scss");

	// Creates the extension for use
	eleventyConfig.addExtension("scss", {
		outputFileExtension: "css", // optional, default: "html"

		// `compile` is called once per .scss file in the input directory
		compile: async function (inputContent) {
			let result = sass.compileString(inputContent);

			// This is the render function, `data` is the full data cascade
			return async (data) => {
				return result.css;
			};
		},
	});

	// Add build clean up plugin
	eleventyConfig.addPlugin(clean);

	// HTML Base plugin for handling different deploy locations
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

	eleventyConfig.addFilter("makePath", 
		function(page) {
			return page.filePathStem.substring(0,page.filePathStem.lastIndexOf(page.fileSlug));
		}
	);	
};

export const config = {
	dir: {
		// data: "_data", // default is _data
		// includes: "_includes", // default is _includes
		input: "src", // default is .
		layouts: "_layouts", // default is dir.includes
		// output: "_site", // default is _site
	},
	// htmlTemplateEngine: "liquid", // default is liquid\
	// markdownTemplateEngine: "liquid", // default is liquid
	pathPrefix: "/portfolio/", // default is /
	// templateFormats: ""
};
