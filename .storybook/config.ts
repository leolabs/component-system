import { configure, addParameters, addDecorator } from "@storybook/react";
import { create } from "@storybook/theming";
import { withKnobs } from '@storybook/addon-knobs';

addParameters({
  options: {
    theme: create({
      base: "light",
      gridCellSize: 16,
    }),
  },
});

addDecorator(withKnobs)

// automatically import all files ending in *.stories.tsx
const req = require.context("../src", true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
