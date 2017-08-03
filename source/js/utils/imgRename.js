// Looks for files with original prefix and suffix combinations in input directory
// and renames them to provided img name with corresponding suffix combinations.

const fs = require('fs');
const assert = require('assert');
const argv = require('minimist')(process.argv.slice(2));


const ogPrefix = "img";
const fileExt = ".jpg";
const inputDir = "C:/Users/Syneva/Development/onto-real-life/source/assets/img/blogs/javaTravel";
const suffixes = ["", "--sm", "--md", "--lg"];

// Check to make sure imgName is provided in argumes
assert.ok(!!argv["imgName"], "Please provide arg 'imgName' with value");
const newPrefix = argv["imgName"];

// Iterate through ogPrefix/suffix combinations and rename.
for (let suffix of suffixes) {
    console.log(`Renaming ${ogPrefix}${suffix}${fileExt} to ${newPrefix}${suffix}${fileExt}`);

    fs.rename(`${inputDir}\\${ogPrefix}${suffix}${fileExt}`, `${inputDir}\\${newPrefix}${suffix}${fileExt}`, function(err) {
        if (err) {
            console.error(`err renaming files: ${err}`);
        }
    });
}
