var fs = require("fs");

const ogPrefix = "img";
const fileExt = ".jpg";
const inputDir =
  "C:/Users/Syneva/Development/onto-real-life/source/assets/img/blogs/java";
const newPrefix = "introImg";

const suffixes = ["", "--sm", "--md", "--lg"];

for (let suffix of suffixes) {
  fs.rename(
    `${inputDir}\\${ogPrefix}${suffix}${fileExt}`,
    `${inputDir}\\${newPrefix}${suffix}${fileExt}`,
    function(err) {
      if (err) {
        console.error(`err renaming files: ${err}`);
      }
    },
  );
}
