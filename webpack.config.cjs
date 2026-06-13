const path = require("path");

module.exports = {
    mode: "production",

    devtool: false,

    entry: "./src/content/index.js",

    output: {
        filename: "content.js",
        path: path.resolve(__dirname, "dist")
    }
};