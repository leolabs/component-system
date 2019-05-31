module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader"),
      },
      {
        loader: require.resolve("react-docgen-typescript-loader"),
      },
    ],
  });
  config.module.rules.push({
    test: /\.s[ca]ss$/,
    use: ["style-loader", "css-loader?modules&camelCase", "sass-loader"],
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
