import * as sass from 'sass';
import * as esbuild from 'esbuild';
import clean from "eleventy-plugin-clean";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
	// Add build clean up plugin
	eleventyConfig.addPlugin(clean);

	// HTML Base plugin for handling different deploy locations
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

	eleventyConfig.addFilter("makePath", 
		function(page) {
			return page.filePathStem.substring(0,page.filePathStem.lastIndexOf(page.fileSlug));
		}
	);	

	// Add scss support
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

	// Run esbuild before anything else (using bundle for js)
	eleventyConfig.on('eleventy.before', async () => {
		await esbuild.build({
			entryPoints: ['src/scripts/*.mjs'],
			outdir: 'src/scripts',
			minify: true,
			sourcemap: false,
		})
	})
	eleventyConfig.addPassthroughCopy("./src/**/*.js");	

	// Copy any .jpg file to `_site`, via Glob pattern
	// Keeps the same directory structure.
	eleventyConfig.addPassthroughCopy("./src/**/*.jpg");	
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
