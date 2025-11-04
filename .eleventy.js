
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("image_format", function(src, alt, format) {
    return `<img src="${src}" alt="${alt}" width="400">`;
  })
};