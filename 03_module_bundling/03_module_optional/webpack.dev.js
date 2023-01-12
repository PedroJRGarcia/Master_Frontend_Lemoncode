const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const path = require("path");
const dotEnv = require("dotenv-webpack");

module.exports = merge(common, {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                exportLocalsConvention: "camelCase",
                                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                                localIdentContext: path.resolve(__dirname, "src"),
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
        ],
    },
    devServer: {
        port: 8080,
        devMiddleware: {
            stats: "errors-only",
        },
    },
    devtool: "eval-source-map",
    plugins: [
        new dotEnv({
            path: "./dev.env",
        }),
    ],
});