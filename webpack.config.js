const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const fastGlob = require("fast-glob");

const modules = fastGlob.sync(["src/**/*.tsx", "!src/**/*.spec.tsx", "!src/**/*.stories.tsx"]);

const entry = modules.reduce((acc, cur) => {
  const name = path.basename(cur, ".tsx");
  acc[name] = `./${cur}`;
  return acc;
}, {});

module.exports = {
  mode: "production",
  entry,
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "awesome-typescript-loader",
        exclude: /(node_modules|\.storybook)/,
      },
      {
        test: /\.s[ca]ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader?modules&camelCase&localIdentName=[hash:base64:5]",
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new MiniCssExtractPlugin("[name].css"),
    new OptimizeCssAssetsPlugin(),
    new StyleLintPlugin(),
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
};
