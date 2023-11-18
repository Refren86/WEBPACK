import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import type { Configuration as DevSeverConfiguration } from "webpack-dev-server";

type Mode = "development" | "production";

interface EnvVariables {
  mode: Mode;
  port: number;
}

export default (env: EnvVariables) => {
  const isDev = env.mode === "development";

  const config: webpack.Configuration = {
    mode: env.mode ?? "development", // "development" or "production"
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].js",
      clean: true, // will remove the build folder before creating a new one
    },
    module: {
      // loaders are executed in chain (last loader is executed first)
      rules: [
        // ts-loader knows how to work with jsx/tsx
        // !!! If I do not use typescript(ts-loader), I must use babel-loader instead with jsx !!!
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
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
      isDev && new webpack.ProgressPlugin(), // will show % of build progress (remove to speed up build)
    ].filter(Boolean),
    devtool: isDev && "inline-source-map", // will show the source code in the browser when debugging
    devServer: isDev
      ? {
          port: env.port ?? 3000,
          open: true,
        }
      : undefined,
  };

  return config;
};
