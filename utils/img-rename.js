/* eslint no-console: 0 prefer-arrow-callback: 0 */

// Looks for files with original prefix and suffix combinations in input directory
// and renames them to provided img name with corresponding suffix combinations.

const fs = require("fs");
const assert = require("assert");
const argv = require("minimist")(process.argv.slice(2));

const ogPrefix0 = "img";
const fileExt0 = ".jpg";
const inputDir0 =
  "C:/Users/Syneva/Development/onto-real-life/source/assets/img/blogs/taiwan";
const suffixes0 = ["", "--sm", "--md", "--lg"];
const newPrefix0 = argv.imgName;

const rename = function(ogPrefix, newPrefix, fileExt, inputDir, suffixes) {
  // Check to make sure imgName is provided in argumes
  assert.ok(!!argv.imgName, "Please provide arg 'imgName' with value");

  // Iterate through ogPrefix/suffix combinations and rename.
  for (const suffix of suffixes) { // es-lint-disable-line no-restricted-syntax
    console.info(
      `Renaming ${ogPrefix}${suffix}${fileExt} to ${newPrefix}${suffix}${fileExt}`
    );
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
};

rename(ogPrefix0, newPrefix0, fileExt0, inputDir0, suffixes0);

export default rename;
