import webpack, { Configuration, DefinePlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

import { BuildOptions } from "./types/types";

export function buildPlugins({
  mode,
  paths,
  analyzer,
  platform,
}: BuildOptions): Configuration["plugins"] {
  const isDev = mode === "development";
  const isProd = mode === "production";

  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: paths.html, // webpack will add the js files to this html file
    }),
    // global variables: https://webpack.js.org/plugins/define-plugin/
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform), 
      __ENV__: JSON.stringify(mode), 
    }),
    new ForkTsCheckerWebpackPlugin() // will run type checking in a separate process
  ];

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin()); // will show % of build progress (remove to speed up build)
  }

  if (isProd) {
    // will create a separate css chunk file
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[id].[contenthash:8].css",
      })
    );
  }

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
}
