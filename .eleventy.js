import * as sass from 'sass';

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
};

export const config = {
	dir: {
		input: "src", // default is .
		// includes: "_includes", // default is _includes
		layouts: "_layouts", // default is data.includes
		// data: "_data", // default is _data
		// output: "_site", // default is _site
		// markdownTemplateEngine: "liquid", // default is liquid
		// htmlTemplateEngine: "liquid", // default is liquid
		pathPrefix: "/portfolio/", // default is /
	}
  };
