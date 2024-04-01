module.exports = function(eleventyConfig) {
  eleventyConfig.setServerPassthroughCopyBehavior("copy");
  eleventyConfig.addPassthroughCopy("_src/assets/**/*");

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