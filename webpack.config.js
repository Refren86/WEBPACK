const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  console.log("env", env);
  return {
    mode: env.mode ?? "development", // "development" or "production"
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].js",
      clean: true, // will remove the build folder before creating a new one
    },
    module: {
      // loaders are executed in chain from right to left
      rules: [
        {
          test: /\.tsx?$/, // ts and tsx files
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"], // to resolve imports without extensions
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"), // webpack will add the js files to this html file
      }),
      new webpack.ProgressPlugin(), // will show % of build progress (remove to speed up build)
    ],
  };
};
