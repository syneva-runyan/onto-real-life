const blogPosts = require("../source/data/posts/index.js");

const postPath = "/posts";

const generateBlogPostPaths = function(blogPosts, basePath) {
    const paths = [];
    Object.keys(blogPosts).forEach((post) => {
        paths.push(`${basePath}/${blogPosts[post].id}`)
    });
    return paths;
}

let routes = [];

routes = routes.concat(generateBlogPostPaths(blogPosts, postPath));

module.exports = {
    paths: routes
};
