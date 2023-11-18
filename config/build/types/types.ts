export type BuildMode = "development" | "production";

export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
}

export interface BuildOptions {
  mode: BuildMode;
  port: number;
  paths: BuildPaths;
}