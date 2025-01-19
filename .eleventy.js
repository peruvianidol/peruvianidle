const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.setServerPassthroughCopyBehavior("copy");
  eleventyConfig.addPassthroughCopy("_src/assets/**/*");

  eleventyConfig.addCollection("issues", function (collectionsApi) {
		return collectionsApi.getAll().sort(function (a, b) {
			return a.date - b.date;
		});
	});

  eleventyConfig.setServerOptions({
    showAllHosts: true,
    watch: ["_site/**/*.css"]
  });

  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: '_src',
      output: '_site'
    }
  };
};