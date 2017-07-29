# Simplistic Travel Blog

## ABOUT

### Code Base
The basic for this project's code base was initially taken from Stanko's React-redux-webpack2 boilerplate found at <https://github.com/Stanko/react-redux-webpack2-boilerplate>.

Because state management is not extensively needed in this project currently, I've deleted the Redux portion of the boilerplate.

The Static Site Generator Webpack Plugin is used for the production build, in order to output static html pages for each blog post. The dev build utilizes the html-webpack-plugin for html generation.  Because of differences between these two plugins, the template.ejs file has conditionally rendered inclusion of css and js assets.  See the note in the TODO section underneath, as this is not ideal.

Routing is acomplished with React-Router-4.

### Blog Posts
The tool used for the generation of blog post html content is Frola.
https://www.froala.com/wysiwyg-editor

### Git
#### Precommit
Prettier is executed and fixes are saved before each commit.

## TODO

### For Production
* GUI for automatic post generation
* Optimize Images
* Post sort functionaly
* Post Content Edit and save
* Photo Map
* Add Search functionality
* Social Media Sharing capabilities
* Add security for file editing
* Move legacy blog imgs
* Improve contact section edge cases & UX
* Add vendor.js optimizations
* Create shared Img component with responsive lazy loading for blog posts.
* Comprimise template renderings between prod & dev
* Include React Helmet configs for each blog post
* Figure out why assets aren't being required correctly in prod bundling
* Separate vendor from scripts & implement better caching practices
