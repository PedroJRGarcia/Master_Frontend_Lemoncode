const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    context: path.resolve(__dirname, "./src"),
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
    },
    entry: { 
        app: "./index.tsx",
        vendorStyles: ["../node_modules/bootstrap/dist/css/bootstrap.css"],
    },
    output: {
        filename: "[name].[chunkhash].js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                type: "asset/resource",
            },
            {
                test: /\.html$/,
                loader: "html-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html",
            scriptLoading: "blocking",
        }),
    ],
};