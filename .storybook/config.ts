import { configure, addParameters } from "@storybook/react";
import { create } from "@storybook/theming";

addParameters({
  options: {
    theme: create({
      base: "light",
      gridCellSize: 16,
    }),
  },
});

// automatically import all files ending in *.stories.tsx
const req = require.context("../src", true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
