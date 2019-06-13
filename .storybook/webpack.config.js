module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
      },
      {
        loader: "linaria/loader",
        options: {
          sourceMap: true,
          displayName: true,
        },
      },
    ],
  });

  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [
      {
        loader: require.resolve("@storybook/addon-storysource/loader"),
        options: { parser: "typescript" },
      },
    ],
    enforce: "pre",
  });

  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
