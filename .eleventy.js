import * as sass from 'sass';
import clean from "eleventy-plugin-clean";

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

	eleventyConfig.addFilter("makePath", 
		function(page) {
			return page.filePathStem.substring(0,page.filePathStem.lastIndexOf(page.fileSlug));
		}
	);	
};

export const config = {
	dir: {
		input: "src", // default is .
		layouts: "_layouts", // default is data.includes
		pathPrefix: "/portfolio/", // default is /
	}
  };
