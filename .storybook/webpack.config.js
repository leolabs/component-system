module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: "linaria/loader",
        options: {
          sourceMap: process.env.NODE_ENV !== "production",
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
  /*config.module.rules.push({
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
  });*/
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
