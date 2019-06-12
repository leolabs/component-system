module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: "linaria/loader",
        options: {
          sourceMap: true,
        },
      },
      {
        loader: require.resolve("awesome-typescript-loader"),
      },
      {
        loader: require.resolve("react-docgen-typescript-loader"),
      },
    ],
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
