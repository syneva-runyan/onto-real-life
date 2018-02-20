# Simplistic Travel Blog

## ABOUT

### Code Base
The basic for this project's code base was initially taken from Stanko's React-redux-webpack2 boilerplate found at <https://github.com/Stanko/react-redux-webpack2-boilerplate>.  The build has since been extensively edited.

Because state management is not extensively needed in this project currently, I've deleted the Redux portion of the boilerplate.

The Static Site Generator Webpack Plugin is used for the production build, in order to output static html pages for each blog post. The dev build utilizes the html-webpack-plugin for html generation.  Because of differences between these two plugins, the template.ejs file has conditionally rendered inclusion of css and js assets.  See the note in the TODO section underneath, as this is not ideal.

Routing is acomplished with React-Router-4.

### Blog Posts
The tool used for the generation of blog post html content is Frola. Currently a to-do item for development.
https://www.froala.com/wysiwyg-editor

### Geo Photo Gallery
The photo gallery is built with [webGL Earth](http://www.webglearth.org/).

During the build proccess, information from source/data/phones/index.js is read, reformatted, associated with images kept under src/assets/img/photos/[markerKey] and src/assets/img/blogs/[markerKey], and written to a new file to be consumed by the web application.

### Git
#### Precommit
Install the precommit locally with
`ln -s ../../utils/pre-commit.sh .git/hooks/pre-commit`

* Prettier is executed and fixes are saved before each commit.
* Lint is executed and commit will fail on errors.

## TODO
* GUI for automatic post generation and edits
* Optimize Images
* Post sort functionaly
* Photo Map
* Add security for file editing
* Move legacy blog imgs
* Improve contact section edge cases & UX
* Add vendor.js optimizations
* Comprimise template renderings between prod & dev
* Separate vendor from scripts & implement better caching practices
* PreCommit hook - ensure all webpack files are excluded from prettier execution
