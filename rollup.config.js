import linaria from "linaria/rollup";
import css from "rollup-plugin-css-only";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.ts",
  output: {
    format: "esm",
    file: `dist/index.js`,
  },
  plugins: [typescript(), linaria(), css()],
};
